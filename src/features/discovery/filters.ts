import type { SearchRecord } from './searchIndex';

export type DiscoveryFilters = {
  query: string;
  types: string[];
  organizationIds: string[];
  eraOrYears?: string;
};

export type DiscoveryFilterAction =
  | { type: 'setQuery'; query: string }
  | { type: 'toggleType'; typeId: string }
  | { type: 'toggleOrganization'; organizationId: string }
  | { type: 'setEraOrYears'; eraOrYears?: string }
  | { type: 'clear' };

export const EMPTY_DISCOVERY_FILTERS: DiscoveryFilters = {
  query: '',
  types: [],
  organizationIds: [],
};

export const DISCOVERY_ERAS = [
  { id: 'transformer-foundations', label: 'Transformer foundations', startYear: 2017, endYear: 2018 },
  { id: 'scaling-instruction', label: 'Scaling + instruction', startYear: 2019, endYear: 2022 },
  { id: 'open-multimodal', label: 'Open models + multimodality', startYear: 2023, endYear: 2024 },
  { id: 'reasoning-agents', label: 'Reasoning + agents', startYear: 2025, endYear: 2026 },
] as const;

function toggle(list: string[], value: string): string[] {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}

export function reduceDiscoveryFilters(
  state: DiscoveryFilters,
  action: DiscoveryFilterAction,
): DiscoveryFilters {
  switch (action.type) {
    case 'setQuery':
      return { ...state, query: action.query };
    case 'toggleType':
      return { ...state, types: toggle(state.types, action.typeId) };
    case 'toggleOrganization':
      return { ...state, organizationIds: toggle(state.organizationIds, action.organizationId) };
    case 'setEraOrYears':
      return { ...state, eraOrYears: action.eraOrYears };
    case 'clear':
      return { ...EMPTY_DISCOVERY_FILTERS };
  }
}

function yearWindow(eraOrYears?: string): { start: number; end: number } | undefined {
  if (!eraOrYears) {
    return undefined;
  }
  const era = DISCOVERY_ERAS.find((item) => item.id === eraOrYears);
  if (era) {
    return { start: era.startYear, end: era.endYear };
  }
  const range = eraOrYears.match(/^(\d{4})\s*-\s*(\d{4})$/);
  if (range) {
    return { start: Number(range[1]), end: Number(range[2]) };
  }
  const year = eraOrYears.match(/^(\d{4})$/);
  if (year) {
    const value = Number(year[1]);
    return { start: value, end: value };
  }
  return undefined;
}

function matchesYear(record: SearchRecord, window: { start: number; end: number }): boolean {
  if (record.year === undefined) {
    return false;
  }
  return record.year >= window.start && record.year <= window.end;
}

export function applyDiscoveryFilters(
  records: SearchRecord[],
  filters: DiscoveryFilters,
): SearchRecord[] {
  const query = filters.query.trim().toLowerCase();
  const window = yearWindow(filters.eraOrYears);

  return records.filter((record) => {
    if (query && !record.haystack.includes(query) && !record.title.toLowerCase().includes(query)) {
      return false;
    }
    if (filters.types.length > 0 && !filters.types.includes(record.category)) {
      return false;
    }
    if (
      filters.organizationIds.length > 0 &&
      !filters.organizationIds.some((id) => record.organizationIds.includes(id) || record.id === id)
    ) {
      return false;
    }
    if (window && !matchesYear(record, window)) {
      return false;
    }
    return true;
  });
}
