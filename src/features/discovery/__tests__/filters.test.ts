import { describe, expect, it } from 'vitest';
import { applyDiscoveryFilters, reduceDiscoveryFilters } from '../filters';
import { buildSearchIndex } from '../searchIndex';
import { discoveryAtlas } from './fixtures';

const index = buildSearchIndex(discoveryAtlas());

describe('applyDiscoveryFilters', () => {
  it('finds milestones and entities by title text', () => {
    const hits = applyDiscoveryFilters(index, {
      query: 'transformer',
      types: [],
      organizationIds: [],
    });
    expect(hits.map((item) => item.id).sort()).toEqual(['ms-transformer', 'tech-transformer']);
  });

  it('filters by category/type', () => {
    const hits = applyDiscoveryFilters(index, {
      query: '',
      types: ['paper'],
      organizationIds: [],
    });
    expect(hits.map((item) => item.id)).toEqual(['ms-transformer']);
  });

  it('filters by organization/lab', () => {
    const hits = applyDiscoveryFilters(index, {
      query: '',
      types: [],
      organizationIds: ['org-openai'],
    });
    expect(hits.map((item) => item.id).sort()).toEqual(['ms-gpt4', 'org-openai']);
  });

  it('filters by editorial era', () => {
    const hits = applyDiscoveryFilters(index, {
      query: '',
      types: [],
      organizationIds: [],
      eraOrYears: 'transformer-foundations',
    });
    expect(hits.map((item) => item.id)).toEqual(['ms-transformer']);
  });

  it('filters by a single year', () => {
    const hits = applyDiscoveryFilters(index, {
      query: '',
      types: [],
      organizationIds: [],
      eraOrYears: '2023',
    });
    expect(hits.map((item) => item.id)).toEqual(['ms-gpt4']);
  });

  it('filters by an inclusive year range', () => {
    const hits = applyDiscoveryFilters(index, {
      query: '',
      types: [],
      organizationIds: [],
      eraOrYears: '2017-2020',
    });
    expect(hits.map((item) => item.id)).toEqual(['ms-transformer']);
  });
});

describe('reduceDiscoveryFilters', () => {
  it('toggles type and organization filters without losing query', () => {
    let state = reduceDiscoveryFilters(
      { query: 'gpt', types: [], organizationIds: [] },
      { type: 'toggleType', typeId: 'paper' },
    );
    state = reduceDiscoveryFilters(state, { type: 'toggleOrganization', organizationId: 'org-openai' });
    expect(state).toEqual({
      query: 'gpt',
      types: ['paper'],
      organizationIds: ['org-openai'],
    });
    state = reduceDiscoveryFilters(state, { type: 'toggleType', typeId: 'paper' });
    expect(state.types).toEqual([]);
  });

  it('clears all filters', () => {
    const cleared = reduceDiscoveryFilters(
      {
        query: 'gpt',
        types: ['paper'],
        organizationIds: ['org-openai'],
        eraOrYears: '2023',
      },
      { type: 'clear' },
    );
    expect(cleared).toEqual({ query: '', types: [], organizationIds: [] });
  });
});
