import type { DiscoveryFilters } from '../features/discovery/filters';
import type { AtlasView, SelectedTarget } from './atlasActions';
import type { AtlasState } from './atlasState';

const VIEWS = new Set<AtlasView>(['timeline', 'lineage']);

function parseSelected(raw: string | null): SelectedTarget | undefined {
  if (!raw) {
    return undefined;
  }
  const [kind, ...rest] = raw.split(':');
  const id = rest.join(':').trim();
  if (!id) {
    return undefined;
  }
  if (kind === 'entity' || kind === 'milestone') {
    return { kind, id };
  }
  return undefined;
}

function parseList(raw: string | null): string[] {
  if (!raw) {
    return [];
  }
  return raw
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

export function parseAtlasSearch(search: string): Partial<AtlasState> {
  const params = new URLSearchParams(search.startsWith('?') ? search.slice(1) : search);
  const viewRaw = params.get('view');
  const activeView = viewRaw && VIEWS.has(viewRaw as AtlasView) ? (viewRaw as AtlasView) : 'timeline';
  const filters: DiscoveryFilters = {
    query: params.get('q') ?? '',
    types: parseList(params.get('types')),
    organizationIds: parseList(params.get('orgs')),
  };
  const era = params.get('era');
  if (era) {
    filters.eraOrYears = era;
  }
  const selected = parseSelected(params.get('sel'));
  const entityFocusId = params.get('focus')?.trim() || undefined;
  return {
    filters,
    activeView,
    ...(selected ? { selected } : {}),
    ...(entityFocusId ? { entityFocusId } : {}),
  };
}

export function serializeAtlasSearch(state: AtlasState): string {
  const params = new URLSearchParams();
  if (state.activeView !== 'timeline') {
    params.set('view', state.activeView);
  }
  if (state.selected) {
    params.set('sel', `${state.selected.kind}:${state.selected.id}`);
  }
  if (state.filters.query) {
    params.set('q', state.filters.query);
  }
  if (state.filters.types.length > 0) {
    params.set('types', state.filters.types.join(','));
  }
  if (state.filters.organizationIds.length > 0) {
    params.set('orgs', state.filters.organizationIds.join(','));
  }
  if (state.filters.eraOrYears) {
    params.set('era', state.filters.eraOrYears);
  }
  if (state.entityFocusId) {
    params.set('focus', state.entityFocusId);
  }
  const encoded = params.toString();
  return encoded ? `?${encoded}` : '';
}
