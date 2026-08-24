import { describe, expect, it } from 'vitest';
import { createAtlasRepository } from '../atlasRepository';
import { normalizeAtlas } from '../normalizeAtlas';
import { validAtlas } from './fixtures';

describe('atlasRepository', () => {
  const repo = createAtlasRepository(normalizeAtlas(validAtlas()));

  it('looks up entities and milestones by id', () => {
    expect(repo.getEntity('model-transformer')?.name).toBe('Transformer');
    expect(repo.getMilestone('ms-attention-is-all-you-need')?.title).toMatch(/Transformer/);
  });

  it('filters published milestones by query text', () => {
    expect(repo.filterMilestones({ query: 'transformer' }).map((item) => item.id)).toEqual([
      'ms-attention-is-all-you-need',
    ]);
    expect(repo.filterMilestones({ query: 'does-not-exist' })).toEqual([]);
  });

  it('returns a bounded neighborhood for a selected entity', () => {
    const neighborhood = repo.neighborhood('model-transformer');
    expect(neighborhood.centerId).toBe('model-transformer');
    expect(neighborhood.nodes.map((node) => node.id).sort()).toEqual([
      'model-transformer',
      'org-google-brain',
    ]);
    expect(neighborhood.edges).toHaveLength(1);
  });
});
