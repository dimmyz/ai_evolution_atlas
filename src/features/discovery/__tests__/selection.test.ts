import { describe, expect, it } from 'vitest';
import { applyDiscoveryFilters } from '../filters';
import { reconcileSelection } from '../selection';
import { buildSearchIndex } from '../searchIndex';
import { discoveryAtlas } from './fixtures';

const index = buildSearchIndex(discoveryAtlas());

describe('reconcileSelection', () => {
  it('keeps a selected milestone that still matches the filter', () => {
    const visible = applyDiscoveryFilters(index, {
      query: 'transformer',
      types: [],
      organizationIds: [],
    });
    const result = reconcileSelection({ kind: 'milestone', id: 'ms-transformer' }, visible);
    expect(result.selected).toEqual({ kind: 'milestone', id: 'ms-transformer' });
    expect(result.announcement).toBeUndefined();
  });

  it('clears an invalid selection and announces the change', () => {
    const visible = applyDiscoveryFilters(index, {
      query: '',
      types: ['paper'],
      organizationIds: [],
    });
    const result = reconcileSelection({ kind: 'milestone', id: 'ms-gpt4' }, visible);
    expect(result.selected).toBeUndefined();
    expect(result.announcement).toMatch(/no longer matches/i);
  });
});
