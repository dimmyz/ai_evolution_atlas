import { useMemo, useState } from 'react';
import type { PublishedAtlas } from '../../data/types';
import { citationsForRecord } from './citations';
import {
  DISCOVERY_ERAS,
  EMPTY_DISCOVERY_FILTERS,
  applyDiscoveryFilters,
  reduceDiscoveryFilters,
  type DiscoveryFilterAction,
  type DiscoveryFilters,
} from './filters';
import { buildSearchIndex } from './searchIndex';
import { reconcileSelection, toSelectedTarget, type SelectedTarget } from './selection';
import './discovery.css';

const RESULT_GROUPS = [
  {
    kind: 'milestone' as const,
    heading: 'Milestones',
    note: 'Dated events on the timeline. Selecting one opens what happened and its sources.',
  },
  {
    kind: 'entity' as const,
    heading: 'Models, labs and technologies',
    note: 'Named things the milestones refer to. Selecting one opens its lineage neighbourhood.',
  },
];

export type DiscoveryPanelProps = {
  atlas: PublishedAtlas;
  filters?: DiscoveryFilters;
  selected?: SelectedTarget;
  onFiltersChange?: (filters: DiscoveryFilters) => void;
  onSelect?: (target: SelectedTarget) => void;
};

export function DiscoveryPanel({
  atlas,
  filters: filtersProp,
  selected,
  onFiltersChange,
  onSelect,
}: DiscoveryPanelProps) {
  const [localFilters, setLocalFilters] = useState<DiscoveryFilters>(EMPTY_DISCOVERY_FILTERS);
  const filters = filtersProp ?? localFilters;
  const index = useMemo(() => buildSearchIndex(atlas), [atlas]);
  const results = useMemo(() => applyDiscoveryFilters(index, filters), [index, filters]);
  const reconciliation = reconcileSelection(selected, results);
  const selectedRecord = results.find(
    (record) => record.id === selected?.id && record.kind === selected.kind,
  );
  const citations = selectedRecord
    ? citationsForRecord(selectedRecord, atlas.sourcesById)
    : [];

  const types = unique(index.map((record) => record.category));
  const organizations = Object.values(atlas.entitiesById)
    .filter((entity) => entity.entity_type === 'organization')
    .sort((left, right) => left.name.localeCompare(right.name));

  function commit(action: DiscoveryFilterAction) {
    const next = reduceDiscoveryFilters(filters, action);
    if (filtersProp === undefined) {
      setLocalFilters(next);
    }
    onFiltersChange?.(next);
  }

  return (
    <section className="discovery-panel" data-testid="discovery-panel" aria-labelledby="discovery-heading">
      <p className="discovery-kicker">Find</p>
      <h2 id="discovery-heading">Search the atlas</h2>
      <p className="discovery-lede">
        Filter by title, type, lab, or editorial era. Eras are navigation, not scientific
        periods.
      </p>
      <div className="discovery-controls">
        <label htmlFor="discovery-query">Search titles, summaries, and names</label>
        <input
          id="discovery-query"
          type="search"
          value={filters.query}
          autoComplete="off"
          onChange={(event) => {
            commit({ type: 'setQuery', query: event.target.value });
          }}
        />
        <fieldset>
          <legend>Type</legend>
          {types.map((typeId) => (
            <button
              key={typeId}
              type="button"
              aria-pressed={filters.types.includes(typeId)}
              onClick={() => {
                commit({ type: 'toggleType', typeId });
              }}
            >
              {typeId}
            </button>
          ))}
        </fieldset>
        <fieldset>
          <legend>Organization</legend>
          {organizations.map((org) => (
            <button
              key={org.id}
              type="button"
              aria-pressed={filters.organizationIds.includes(org.id)}
              onClick={() => {
                commit({ type: 'toggleOrganization', organizationId: org.id });
              }}
            >
              {org.name}
            </button>
          ))}
        </fieldset>
        <fieldset>
          <legend>Editorial era</legend>
          {DISCOVERY_ERAS.map((era) => (
            <button
              key={era.id}
              type="button"
              aria-pressed={filters.eraOrYears === era.id}
              onClick={() => {
                commit({
                  type: 'setEraOrYears',
                  eraOrYears: filters.eraOrYears === era.id ? undefined : era.id,
                });
              }}
            >
              {era.label}
            </button>
          ))}
        </fieldset>
        {filters.query || filters.types.length > 0 || filters.organizationIds.length > 0 || filters.eraOrYears ? (
          <button
            type="button"
            className="discovery-clear"
            onClick={() => {
              commit({ type: 'clear' });
            }}
          >
            Clear filters
          </button>
        ) : null}
      </div>
      <p className="discovery-status" aria-live="polite">
        {reconciliation.announcement ??
          (results.length === 0 ? 'No matching records' : `${results.length} matching records`)}
      </p>
      {results.length === 0 ? (
        <p className="discovery-empty">No matching records. Clear filters to return to the full atlas.</p>
      ) : (
        RESULT_GROUPS.map((group) => {
          const groupResults = results.filter((record) => record.kind === group.kind);
          if (groupResults.length === 0) {
            return null;
          }
          return (
            <section
              key={group.kind}
              className="discovery-result-group"
              aria-labelledby={`discovery-group-${group.kind}`}
            >
              <h3 id={`discovery-group-${group.kind}`} className="discovery-group-heading">
                {group.heading}
                <span className="discovery-group-count">{groupResults.length}</span>
              </h3>
              <p className="discovery-group-note">{group.note}</p>
              <ul className="discovery-results">
                {groupResults.map((record) => {
                  const isSelected = selected?.id === record.id && selected.kind === record.kind;
                  return (
                    <li key={`${record.kind}:${record.id}`} data-category={record.category}>
                      <button
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => {
                          onSelect?.(toSelectedTarget(record));
                        }}
                      >
                        {record.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })
      )}
      {citations.length > 0 ? (
        <section className="discovery-citations" aria-label="Sources for selected item">
          <h3>Sources</h3>
          <ol>
            {citations.map((citation) => (
              <li key={citation.id}>
                <a href={citation.url} rel="noopener noreferrer">
                  {citation.label}
                </a>
              </li>
            ))}
          </ol>
        </section>
      ) : null}
    </section>
  );
}

function unique(values: string[]): string[] {
  return [...new Set(values)].sort();
}
