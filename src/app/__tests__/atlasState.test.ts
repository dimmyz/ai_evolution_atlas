import { describe, expect, it } from 'vitest';
import { EMPTY_DISCOVERY_FILTERS } from '../../features/discovery/filters';
import { createInitialAtlasState, reduceAtlasState } from '../atlasState';

describe('reduceAtlasState', () => {
  it('starts on the timeline with empty filters and no selection', () => {
    expect(createInitialAtlasState()).toEqual({
      filters: EMPTY_DISCOVERY_FILTERS,
      activeView: 'timeline',
    });
  });

  it('keeps one selected target when timeline, discovery, or lineage dispatch', () => {
    let state = reduceAtlasState(createInitialAtlasState(), {
      type: 'select',
      target: { kind: 'milestone', id: 'ms-attention-is-all-you-need' },
    });
    expect(state.selected).toEqual({ kind: 'milestone', id: 'ms-attention-is-all-you-need' });

    state = reduceAtlasState(state, {
      type: 'select',
      target: { kind: 'entity', id: 'tech-transformer' },
    });
    expect(state.selected).toEqual({ kind: 'entity', id: 'tech-transformer' });
    expect(state.entityFocusId).toBe('tech-transformer');
  });

  it('preserves selection when the reader switches views', () => {
    const selected = reduceAtlasState(createInitialAtlasState(), {
      type: 'select',
      target: { kind: 'milestone', id: 'ms-gpt-3-paper' },
    });
    const next = reduceAtlasState(selected, { type: 'setView', view: 'lineage' });
    expect(next.activeView).toBe('lineage');
    expect(next.selected).toEqual({ kind: 'milestone', id: 'ms-gpt-3-paper' });
  });

  it('clears a selection that no longer matches the filtered set and announces it', () => {
    const selected = reduceAtlasState(createInitialAtlasState(), {
      type: 'select',
      target: { kind: 'milestone', id: 'ms-gpt-4-report' },
    });
    const next = reduceAtlasState(selected, {
      type: 'setFilters',
      filters: { query: 'transformer', types: [], organizationIds: [] },
      stillVisible: false,
    });
    expect(next.selected).toBeUndefined();
    expect(next.announcement).toMatch(/no longer matches/i);
  });

  it('keeps a still-visible selection after filters change', () => {
    const selected = reduceAtlasState(createInitialAtlasState(), {
      type: 'select',
      target: { kind: 'milestone', id: 'ms-attention-is-all-you-need' },
    });
    const next = reduceAtlasState(selected, {
      type: 'setFilters',
      filters: { query: 'transformer', types: [], organizationIds: [] },
      stillVisible: true,
    });
    expect(next.selected).toEqual({ kind: 'milestone', id: 'ms-attention-is-all-you-need' });
    expect(next.announcement).toBeUndefined();
  });

  it('records an explicit entity focus without inventing one from chronology', () => {
    const selected = reduceAtlasState(createInitialAtlasState(), {
      type: 'select',
      target: { kind: 'milestone', id: 'ms-t5-paper' },
    });
    expect(selected.entityFocusId).toBeUndefined();
    const focused = reduceAtlasState(selected, { type: 'setEntityFocus', entityId: 'tech-transformer' });
    expect(focused.selected).toEqual({ kind: 'milestone', id: 'ms-t5-paper' });
    expect(focused.entityFocusId).toBe('tech-transformer');
  });
});
