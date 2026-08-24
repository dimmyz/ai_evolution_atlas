import type { EntityType, Neighborhood, RelationType } from '../../data/types';
import { layoutLineage } from './layoutLineage';

export const NODE_MARKS: Record<EntityType, string> = {
  model: 'glyph-model',
  paper: 'glyph-paper',
  technology: 'glyph-tech',
  organization: 'glyph-org',
  person: 'glyph-person',
};

export const RELATION_LABELS: Record<RelationType, string> = {
  released_by: 'released by',
  authored_by: 'authored by',
  successor_of: 'successor of',
  same_family_as: 'same family as',
  uses_architecture: 'uses architecture',
  introduced_concept: 'introduced concept',
  influenced_by: 'influenced by',
  integrated_into: 'integrated into',
  enabled_by: 'enabled by',
  contemporary_with: 'contemporary with',
};

export type LineageGraphNode = {
  id: string;
  label: string;
  entityType: EntityType;
  isCenter: boolean;
  mark: string;
  x: number;
  y: number;
};

export type LineageGraphEdge = {
  id: string;
  from: string;
  to: string;
  type: RelationType;
  label: string;
  confidence: 'high' | 'medium' | 'low';
  evidenceSourceIds: string[];
  rationale?: string;
  inspectable: true;
  descent: boolean;
};

export type LineageGraph = {
  nodes: LineageGraphNode[];
  edges: LineageGraphEdge[];
};

export function buildLineageGraph(neighborhood: Neighborhood): LineageGraph {
  const positions = new Map(layoutLineage(neighborhood).map((placed) => [placed.id, placed]));

  const nodes: LineageGraphNode[] = neighborhood.nodes.map((entity) => {
    const position = positions.get(entity.id) ?? { x: 0, y: 0 };
    return {
      id: entity.id,
      label: entity.name,
      entityType: entity.entity_type,
      isCenter: entity.id === neighborhood.centerId,
      mark: NODE_MARKS[entity.entity_type],
      x: position.x,
      y: position.y,
    };
  });

  const edges: LineageGraphEdge[] = neighborhood.edges.map((relation, index) => ({
    id: `${relation.from}:${relation.type}:${relation.to}:${index}`,
    from: relation.from,
    to: relation.to,
    type: relation.type,
    label: RELATION_LABELS[relation.type],
    confidence: relation.confidence,
    evidenceSourceIds: relation.evidence_source_ids,
    rationale: relation.rationale,
    inspectable: true,
    descent: relation.type === 'successor_of',
  }));

  return { nodes, edges };
}
