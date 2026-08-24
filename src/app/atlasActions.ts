import type { DiscoveryFilters } from '../features/discovery/filters';

export type SelectedTarget =
  | { kind: 'entity'; id: string }
  | { kind: 'milestone'; id: string };

export type AtlasView = 'timeline' | 'lineage';

export type AtlasAction =
  | { type: 'select'; target: SelectedTarget }
  | { type: 'setView'; view: AtlasView }
  | {
      type: 'setFilters';
      filters: DiscoveryFilters;
      stillVisible: boolean;
    }
  | { type: 'setEntityFocus'; entityId: string }
  | { type: 'clearSelection' };
