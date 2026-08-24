import type { EntityRecord, MilestoneRecord, Neighborhood, SourceRecord } from '../../data/types';
import { boundNeighborhood, DEFAULT_MAX_NODES } from './boundNeighborhood';
import { buildLineageGraph, RELATION_LABELS, type LineageGraph, type LineageGraphEdge, type LineageGraphNode } from './graphModel';
import { GraphCanvas } from './GraphCanvas';
import { LineageArrowMarker } from './LineageArrowMarker';
import { resolveLineageFocus, type SelectedTarget } from './resolveFocus';
import './lineage.css';

export type { SelectedTarget };

export function chooseInspectedEntity(
  entityId: string,
  onSelect?: (target: SelectedTarget) => void,
  onEntityFocus?: (entityId: string) => void,
): void {
  if (onSelect) {
    onSelect({ kind: 'entity', id: entityId });
    return;
  }
  onEntityFocus?.(entityId);
}

export type LineageViewProps = {
  selected?: SelectedTarget;
  entityFocusId?: string;
  getEntity: (id: string) => EntityRecord | undefined;
  getMilestone: (id: string) => MilestoneRecord | undefined;
  neighborhoodFor: (entityId: string) => Neighborhood;
  getSource?: (id: string) => SourceRecord | undefined;
  onSelect?: (target: SelectedTarget) => void;
  onEntityFocus?: (entityId: string) => void;
  /**
   * Entities that actually take part in at least one published relation,
   * most-connected first. Used to give the unselected lineage stage a real
   * entry point instead of a dead end.
   */
  entryPoints?: EntityRecord[];
  maxNodes?: number;
};

function Legend({ graph }: { graph: LineageGraph }) {
  const nodeKinds = [...new Set(graph.nodes.map((node) => node.entityType))];
  const relationKinds = [...new Set(graph.edges.map((edge) => edge.type))];
  return (
    <div className="lineage-legend" data-testid="lineage-legend">
      <p className="lineage-kicker">How to read this map</p>
      <ul className="lineage-legend-nodes">
        {nodeKinds.map((kind) => (
          <li key={kind}>
            <span className={`lineage-mark lineage-mark-${kind}`} aria-hidden="true" />
            <span>{kind}</span>
          </li>
        ))}
      </ul>
      <ul className="lineage-legend-edges">
        {relationKinds.map((kind) => (
          <li key={kind}>
            <span className={`lineage-stroke lineage-stroke-${kind}`} aria-hidden="true" />
            <span>{RELATION_LABELS[kind]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RelationList({
  edges,
  nodes,
  getSource,
}: {
  edges: LineageGraphEdge[];
  nodes: LineageGraphNode[];
  getSource?: (id: string) => SourceRecord | undefined;
}) {
  const labels = new Map(nodes.map((node) => [node.id, node.label]));
  return (
    <section className="lineage-relations" aria-label="Inspectable relations">
      <p className="lineage-kicker">Sourced relations</p>
      <ul>
        {edges.map((edge) => {
          const citations = edge.evidenceSourceIds
            .map((id) => getSource?.(id))
            .filter((source): source is SourceRecord => Boolean(source));
          return (
            <li key={edge.id} data-relation-type={edge.type} data-descent={edge.descent ? 'true' : 'false'}>
              <p className="lineage-relation-line">
                <span>{labels.get(edge.from) ?? edge.from}</span>
                <span className="lineage-relation-type">{edge.label}</span>
                <span>{labels.get(edge.to) ?? edge.to}</span>
              </p>
              <p className="lineage-relation-meta">
                {edge.confidence} confidence
                {edge.descent ? '' : ' · not a descent claim'}
              </p>
              {citations.length > 0 ? (
                <p className="lineage-relation-evidence">
                  {citations.map((source, index) => (
                    <span key={source.id}>
                      {index > 0 ? ' · ' : ''}
                      <a href={source.url} rel="noopener noreferrer">
                        {source.title}
                      </a>
                    </span>
                  ))}
                </p>
              ) : null}
              {edge.rationale ? <p className="lineage-rationale">{edge.rationale}</p> : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function NodeList({
  nodes,
  onSelect,
}: {
  nodes: LineageGraphNode[];
  onSelect?: (target: SelectedTarget) => void;
}) {
  return (
    <section className="lineage-nodes" aria-label="Neighborhood entities">
      <p className="lineage-kicker">Entities in view</p>
      <ul>
        {nodes.map((node) => (
          <li key={node.id}>
            <button
              type="button"
              data-entity-id={node.id}
              aria-current={node.isCenter ? 'true' : undefined}
              onClick={() => onSelect?.({ kind: 'entity', id: node.id })}
            >
              <span className={`lineage-mark lineage-mark-${node.entityType}`} aria-hidden="true" />
              <span className="lineage-node-copy">
                <span className="lineage-node-name">{node.label}</span>
                <span className="lineage-node-kind">{node.entityType}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function LineageView({
  selected,
  entityFocusId,
  getEntity,
  getMilestone,
  neighborhoodFor,
  getSource,
  onSelect,
  onEntityFocus,
  entryPoints = [],
  maxNodes = DEFAULT_MAX_NODES,
}: LineageViewProps) {
  const focus = resolveLineageFocus({
    selected,
    entityFocusId,
    getEntity,
    getMilestone,
  });

  if (focus.needsChoice) {
    return (
      <div className="lineage-view" data-testid="lineage-view">
        <p className="lineage-kicker">Relationships</p>
        <h2>Choose an entity to inspect</h2>
        <p>
          A milestone stays a milestone. Lineage only opens when you pick a related
          entity — chronology is not treated as influence.
        </p>
        <ul className="lineage-focus-choices">
          {focus.candidates.map((entity) => (
            <li key={entity.id}>
              <button
                type="button"
                data-entity-id={entity.id}
                onClick={() => chooseInspectedEntity(entity.id, onSelect, onEntityFocus)}
              >
                <span className={`lineage-mark lineage-mark-${entity.entity_type}`} aria-hidden="true" />
                <span>
                  {entity.name}
                  <small>{entity.entity_type}</small>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (!focus.centerId || !focus.center) {
    return (
      <div className="lineage-view lineage-view-empty" data-testid="lineage-view">
        <p className="lineage-kicker">Relationships</p>
        <h2>A sourced neighborhood, not a hairball</h2>
        <p>
          Select an entity to see verified relations — successor, architecture,
          authorship — with confidence and evidence attached.
        </p>
        {entryPoints.length > 0 ? (
          <section className="lineage-entry" aria-label="Entities with published relations">
            <p className="lineage-kicker">Start from a connected entity</p>
            <p className="lineage-entry-note">
              These are the entities that currently have at least one verified
              relation. Coverage is deliberately narrow: the atlas publishes only
              source-backed edges.
            </p>
            <ul className="lineage-focus-choices">
              {entryPoints.map((entity) => (
                <li key={entity.id}>
                  <button
                    type="button"
                    data-entity-id={entity.id}
                    onClick={() => chooseInspectedEntity(entity.id, onSelect, onEntityFocus)}
                  >
                    <span
                      className={`lineage-mark lineage-mark-${entity.entity_type}`}
                      aria-hidden="true"
                    />
                    <span>
                      {entity.name}
                      <small>{entity.entity_type}</small>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    );
  }

  const bounded = boundNeighborhood(neighborhoodFor(focus.centerId), { maxNodes });
  const graph = buildLineageGraph(bounded);

  return (
    <div className="lineage-view" data-testid="lineage-view">
      <header className="lineage-heading">
        <p className="lineage-kicker">Neighborhood</p>
        <h2>{focus.center.name}</h2>
        <p>
          Only published, evidence-backed relations appear here. Dashed and dotted
          strokes are not descent.
        </p>
      </header>
      <Legend graph={graph} />
      <LineageArrowMarker graph={graph} />
      <GraphCanvas graph={graph} onSelect={onSelect} />
      <div className="lineage-inspect">
        <NodeList nodes={graph.nodes} onSelect={onSelect} />
        <RelationList edges={graph.edges} nodes={graph.nodes} getSource={getSource} />
      </div>
      {bounded.omitted.length > 0 ? (
        <section className="lineage-overflow" aria-label="More related records">
          <p className="lineage-kicker">More related records</p>
          <p>Kept off the canvas so the neighborhood stays readable.</p>
          <ul>
            {bounded.omitted.map((entity) => (
              <li key={entity.id}>
                <button type="button" data-entity-id={entity.id} onClick={() => onSelect?.({ kind: 'entity', id: entity.id })}>
                  {entity.name}
                </button>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
