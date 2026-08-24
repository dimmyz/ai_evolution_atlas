import { describe, expect, it } from 'vitest';
import { milestone } from '../../../data/__tests__/fixtures';
import { loadCanonicalAtlas } from '../../../data/loadAtlas';
import { normalizeAtlas } from '../../../data/normalizeAtlas';
import type { MilestoneRecord } from '../../../data/types';
import { layoutTimeline } from '../layout';

function item(overrides: Partial<MilestoneRecord>): MilestoneRecord {
  return { ...milestone, ...overrides };
}

describe('timeline layout', () => {
  it('places later milestones further along the axis', () => {
    const items = layoutTimeline(
      [
        item({ id: 'early', date: '2017', date_precision: 'year', title: 'Early' }),
        item({ id: 'late', date: '2025-01-20', date_precision: 'day', title: 'Late' }),
      ],
      { width: 1000 },
    );

    const early = items.find((entry) => entry.id === 'early');
    const late = items.find((entry) => entry.id === 'late');
    expect(early?.x).toBeLessThan(late?.x ?? 0);
    expect(early?.kind).toBe('span');
    expect(late?.kind).toBe('point');
    expect(early?.dateLabel).toBe('2017');
    expect(late?.dateLabel).toBe('20 Jan 2025');
  });

  it('stacks same-year items into lanes instead of overlapping labels', () => {
    const items = layoutTimeline(
      [
        item({ id: 'a', date: '2020', date_precision: 'year', title: 'GPT-3 paper' }),
        item({ id: 'b', date: '2020', date_precision: 'year', title: 'RAG paper' }),
      ],
      { width: 400, minLabelPx: 180 },
    );

    expect(items).toHaveLength(2);
    expect(new Set(items.map((entry) => entry.lane)).size).toBe(2);
    expect(items.every((entry) => entry.clustered)).toBe(false);
  });

  it('clusters overflow items when a year exceeds the lane budget', () => {
    const crowded = Array.from({ length: 6 }, (_, index) =>
      item({
        id: `ms-${index}`,
        date: '2022-04-0' + String(index + 1),
        date_precision: 'day',
        title: `Crowded ${index}`,
      }),
    );

    const items = layoutTimeline(crowded, { width: 400, minLabelPx: 160, maxLanes: 3 });
    const cluster = items.find((entry) => entry.kind === 'cluster');

    expect(cluster).toBeDefined();
    expect(cluster?.memberIds).toHaveLength(3);
    expect(items.filter((entry) => entry.kind !== 'cluster')).toHaveLength(3);
  });

  it('assigns editorial era ids without treating them as scientific periods', () => {
    const items = layoutTimeline(
      [
        item({ id: 'foundations', date: '2017', date_precision: 'year', title: 'Transformer' }),
        item({ id: 'agents', date: '2025-01-20', date_precision: 'day', title: 'R1' }),
      ],
      { width: 800 },
    );

    expect(items.find((entry) => entry.id === 'foundations')?.eraId).toBe('transformer-foundations');
    expect(items.find((entry) => entry.id === 'agents')?.eraId).toBe('reasoning-agents');
  });

  it('covers every published canonical milestone', () => {
    const atlas = normalizeAtlas(loadCanonicalAtlas());
    const items = layoutTimeline(atlas.publishedMilestones, { width: 1000 });
    const ids = new Set(
      items.flatMap((entry) => (entry.kind === 'cluster' ? (entry.memberIds ?? []) : [entry.id])),
    );

    expect(atlas.publishedMilestones.length).toBeGreaterThanOrEqual(30);
    expect(ids.size).toBe(atlas.publishedMilestones.length);
  });
});
