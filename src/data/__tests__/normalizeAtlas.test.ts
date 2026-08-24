import { describe, expect, it } from 'vitest';
import { normalizeAtlas } from '../normalizeAtlas';
import { milestone, validAtlas } from './fixtures';

describe('normalizeAtlas', () => {
  it('indexes verified records and orders chronology without inventing dates', () => {
    const later = {
      ...milestone,
      id: 'ms-later',
      date: '2018',
      date_precision: 'year' as const,
      title: 'Later milestone',
    };
    const published = normalizeAtlas(
      validAtlas({
        milestones: [later, milestone],
      }),
    );

    expect(published.sourcesById['src-attention']?.title).toContain('Attention');
    expect(published.entitiesById['model-transformer']?.name).toBe('Transformer');
    expect(published.publishedMilestones.map((item) => item.id)).toEqual([
      'ms-attention-is-all-you-need',
      'ms-later',
    ]);
    expect(published.publishedMilestones[1]?.date).toBe('2018');
  });

  it('excludes non-verified milestones and relations from the publishable projection', () => {
    const published = normalizeAtlas(
      validAtlas({
        milestones: [
          milestone,
          { ...milestone, id: 'ms-draft', status: 'candidate', title: 'Draft' },
        ],
        relations: [],
      }),
    );

    expect(published.milestonesById['ms-draft']).toBeUndefined();
    expect(published.publishedMilestones).toHaveLength(1);
    expect(published.publishedRelations).toHaveLength(0);
  });

  it('refuses to normalize an invalid atlas', () => {
    expect(() =>
      normalizeAtlas(
        validAtlas({
          milestones: [{ ...milestone, source_ids: [] }],
        }),
      ),
    ).toThrow(/invalid/i);
  });
});
