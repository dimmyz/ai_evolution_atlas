import { useEffect, useMemo, useReducer, type ReactNode } from 'react';
import { createAtlasRepository } from '../data/atlasRepository';
import type { PublishedAtlas } from '../data/types';
import { DiscoveryPanel } from '../features/discovery/DiscoveryPanel';
import {
  applyDiscoveryFilters,
  type DiscoveryFilters,
} from '../features/discovery/filters';
import { buildSearchIndex } from '../features/discovery/searchIndex';
import { LineageView } from '../features/lineage/LineageView';
import { Timeline } from '../features/timeline/Timeline';
import { AtlasShell } from '../shell/AtlasShell';
import type { SelectedTarget } from './atlasActions';
import {
  createInitialAtlasState,
  reduceAtlasState,
  type AtlasState,
} from './atlasState';
import { loadBundledPublishedAtlas } from './loadBundledAtlas';
import { selectDetailModel } from './selectDetail';
import { parseAtlasSearch, serializeAtlasSearch } from './urlState';

export type AppProps = {
  atlas?: PublishedAtlas;
  initialState?: Partial<AtlasState>;
};

function isStillVisible(selected: SelectedTarget | undefined, filters: DiscoveryFilters, atlas: PublishedAtlas): boolean {
  if (!selected) {
    return true;
  }
  return applyDiscoveryFilters(buildSearchIndex(atlas), filters).some(
    (record) => record.id === selected.id && record.kind === selected.kind,
  );
}

export function App({ atlas: atlasProp, initialState }: AppProps = {}) {
  const atlas = atlasProp ?? loadBundledPublishedAtlas();
  const repo = useMemo(() => createAtlasRepository(atlas), [atlas]);
  const [state, dispatch] = useReducer(reduceAtlasState, undefined, () => {
    const fromUrl = typeof window !== 'undefined' ? parseAtlasSearch(window.location.search) : {};
    return createInitialAtlasState({ ...fromUrl, ...initialState });
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const next = serializeAtlasSearch(state);
    const current = window.location.search;
    if (current !== next) {
      window.history.replaceState(null, '', `${window.location.pathname}${next}`);
    }
  }, [state]);
  const searchIndex = useMemo(() => buildSearchIndex(atlas), [atlas]);
  const visibleRecords = useMemo(
    () => applyDiscoveryFilters(searchIndex, state.filters),
    [searchIndex, state.filters],
  );
  const visibleMilestoneIds = useMemo(
    () => new Set(visibleRecords.filter((record) => record.kind === 'milestone').map((record) => record.id)),
    [visibleRecords],
  );
  const milestones = atlas.publishedMilestones.filter((milestone) => visibleMilestoneIds.has(milestone.id));
  const detail = selectDetailModel(state.selected, atlas, repo);

  function select(target: SelectedTarget) {
    dispatch({ type: 'select', target });
  }

  function startExploring() {
    const first = atlas.publishedMilestones[0];
    if (first) {
      dispatch({ type: 'select', target: { kind: 'milestone', id: first.id } });
    }
  }

  const announcement: ReactNode = state.announcement ? (
    <p className="atlas-announcement" aria-live="polite">
      {state.announcement}
    </p>
  ) : null;

  return (
    <AtlasShell
      activeView={state.activeView}
      onViewChange={(view) => {
        dispatch({ type: 'setView', view });
      }}
      onRelatedSelect={select}
      onStartExploring={state.selected ? undefined : startExploring}
      detail={detail}
      discovery={
        <>
          {announcement}
          <DiscoveryPanel
            atlas={atlas}
            filters={state.filters}
            selected={state.selected}
            onFiltersChange={(filters) => {
              dispatch({
                type: 'setFilters',
                filters,
                stillVisible: isStillVisible(state.selected, filters, atlas),
              });
            }}
            onSelect={select}
          />
        </>
      }
      timeline={
        <Timeline
          milestones={milestones}
          selected={state.selected}
          onSelect={select}
        />
      }
      lineage={
        <LineageView
          selected={state.selected}
          entityFocusId={state.entityFocusId}
          getEntity={(id) => repo.getEntity(id)}
          getMilestone={(id) => repo.getMilestone(id)}
          neighborhoodFor={(id) => repo.neighborhood(id)}
          getSource={(id) => atlas.sourcesById[id]}
          onSelect={select}
          onEntityFocus={(entityId) => {
            dispatch({ type: 'select', target: { kind: 'entity', id: entityId } });
          }}
        />
      }
    />
  );
}
