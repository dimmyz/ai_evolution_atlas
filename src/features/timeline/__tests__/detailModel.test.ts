import { describe, expect, it } from 'vitest';
import { createAtlasRepository } from '../../../data/atlasRepository';
import { milestone, validAtlas } from '../../../data/__tests__/fixtures';
import { normalizeAtlas } from '../../../data/normalizeAtlas';
import { toDetailModel } from '../detailModel';

describe('timeline detail model', () => {
  it('maps a publishable milestone to supported detail fields and item citations', () => {
    const atlas = normalizeAtlas(validAtlas());
    const repo = createAtlasRepository(atlas);
    const record = repo.getMilestone(milestone.id);
    expect(record).toBeDefined();

    const detail = toDetailModel(record!, atlas);

    expect(detail.title).toBe('Transformer architecture published');
    expect(detail.dateLabel).toBe('12 Jun 2017');
    expect(detail.organization).toBe('Google Brain');
    expect(detail.summary).toMatch(/attention-only/);
    expect(detail.whyItMatters).toMatch(/architectural starting point/);
    expect(detail.tags).toEqual(['paper']);
    expect(detail.related).toEqual([
      { id: 'model-transformer', label: 'Transformer', kind: 'model', targetKind: 'entity' },
    ]);
    expect(detail.sources).toEqual([
      {
        id: 'src-attention',
        title: 'Attention Is All You Need',
        url: 'https://papers.nips.cc/paper/7181-attention-is-all-you-need',
      },
    ]);
  });

  it('omits empty decorative metadata', () => {
    const atlas = normalizeAtlas(
      validAtlas({
        milestones: [
          {
            ...milestone,
            why_it_matters: undefined,
            entity_ids: [],
          },
        ],
      }),
    );

    const detail = toDetailModel(atlas.publishedMilestones[0]!, atlas);

    expect(detail.whyItMatters).toBeUndefined();
    expect(detail.organization).toBeUndefined();
    expect(detail.related).toBeUndefined();
  });
});
