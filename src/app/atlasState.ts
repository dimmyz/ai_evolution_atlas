import { EMPTY_DISCOVERY_FILTERS, type DiscoveryFilters } from '../features/discovery/filters';
import type { AtlasAction, AtlasView, SelectedTarget } from './atlasActions';

export type { AtlasAction, AtlasView, SelectedTarget };

export type AtlasState = {
  selected?: SelectedTarget;
  filters: DiscoveryFilters;
  activeView: AtlasView;
  entityFocusId?: string;
  announcement?: string;
};

export function createInitialAtlasState(overrides: Partial<AtlasState> = {}): AtlasState {
  return {
    filters: EMPTY_DISCOVERY_FILTERS,
    activeView: 'timeline',
    ...overrides,
  };
}

export function reduceAtlasState(state: AtlasState, action: AtlasAction): AtlasState {
  switch (action.type) {
    case 'select': {
      const next: AtlasState = {
        ...state,
        selected: action.target,
        announcement: undefined,
      };
      if (action.target.kind === 'entity') {
        next.entityFocusId = action.target.id;
      }
      return next;
    }
    case 'setView':
      return { ...state, activeView: action.view };
    case 'setFilters': {
      if (action.stillVisible) {
        return { ...state, filters: action.filters, announcement: undefined };
      }
      return {
        ...state,
        filters: action.filters,
        selected: undefined,
        announcement: 'The previous selection no longer matches the current filters.',
      };
    }
    case 'setEntityFocus':
      return { ...state, entityFocusId: action.entityId };
    case 'clearSelection':
      return { ...state, selected: undefined, entityFocusId: undefined, announcement: undefined };
  }
}
