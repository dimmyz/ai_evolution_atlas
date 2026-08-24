import { describe, expect, it } from 'vitest';
import { createInitialAtlasState } from '../atlasState';
import { parseAtlasSearch, serializeAtlasSearch } from '../urlState';

describe('urlState', () => {
  it('round-trips view, selection, and filters', () => {
    const encoded = serializeAtlasSearch({
      selected: { kind: 'entity', id: 'tech-transformer' },
      filters: { query: 'palm', types: ['paper'], organizationIds: ['org-google'], eraOrYears: '2022' },
      activeView: 'lineage',
      entityFocusId: 'tech-transformer',
    });
    expect(parseAtlasSearch(encoded)).toEqual({
      selected: { kind: 'entity', id: 'tech-transformer' },
      filters: { query: 'palm', types: ['paper'], organizationIds: ['org-google'], eraOrYears: '2022' },
      activeView: 'lineage',
      entityFocusId: 'tech-transformer',
    });
  });

  it('treats invalid IDs and views as absent instead of throwing', () => {
    expect(parseAtlasSearch('?view=dashboard&sel=mystery:not-an-id&q=ok')).toEqual({
      filters: { query: 'ok', types: [], organizationIds: [] },
      activeView: 'timeline',
    });
  });

  it('serializes an empty state to a safe search string', () => {
    expect(parseAtlasSearch(serializeAtlasSearch(createInitialAtlasState()))).toEqual({
      filters: { query: '', types: [], organizationIds: [] },
      activeView: 'timeline',
    });
  });
});
