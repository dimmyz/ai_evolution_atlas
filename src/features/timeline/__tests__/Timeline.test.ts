import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { milestone, validAtlas } from '../../../data/__tests__/fixtures';
import { normalizeAtlas } from '../../../data/normalizeAtlas';
import { AtlasShell } from '../../../shell/AtlasShell';
import { toDetailModel } from '../detailModel';
import { Timeline } from '../Timeline';
import { TimelineDetail } from '../TimelineDetail';
import type { MilestoneRecord } from '../../../data/types';

function item(overrides: Partial<MilestoneRecord>): MilestoneRecord {
  return { ...milestone, ...overrides };
}

describe('Timeline', () => {
  it('renders keyboard-operable milestone controls with honest date labels', () => {
    const html = renderToStaticMarkup(
      createElement(Timeline, {
        milestones: [
          item({ id: 'ms-year', date: '2017', date_precision: 'year', title: 'Transformer paper' }),
          item({
            id: 'ms-day',
            date: '2018-11-02',
            date_precision: 'day',
            title: 'BERT open-source release',
          }),
        ],
        selected: { kind: 'milestone', id: 'ms-year' },
      }),
    );

    expect(html).toContain('data-testid="atlas-timeline"');
    expect(html).toMatch(/<button[^>]*type="button"[^>]*>/);
    expect(html).toContain('Transformer paper');
    expect(html).toContain('BERT open-source release');
    expect(html).toContain('2017');
    expect(html).toContain('2 Nov 2018');
    expect(html).not.toMatch(/1 Jan 2017|January 1, 2017/i);
    expect(html).toMatch(/aria-pressed="true"/);
    expect(html).toMatch(/aria-pressed="false"/);
    expect(html).toMatch(/atlas-timeline-span is-selected|atlas-timeline-point is-selected/);
    expect(html).toMatch(/aria-label="Transformer paper"/);
  });

  it('highlights associated milestones when the shared selection is an entity', () => {
    const html = renderToStaticMarkup(
      createElement(Timeline, {
        milestones: [
          item({
            id: 'ms-year',
            date: '2017',
            date_precision: 'year',
            title: 'Transformer paper',
            entity_ids: ['tech-transformer', 'org-google'],
          }),
          item({
            id: 'ms-day',
            date: '2018-11-02',
            date_precision: 'day',
            title: 'BERT open-source release',
            entity_ids: ['org-google'],
          }),
        ],
        selected: { kind: 'entity', id: 'tech-transformer' },
      }),
    );

    expect(html).toMatch(/data-testid="timeline-entity-highlight"/);
    expect(html).toMatch(/linked to the selected entity/i);
    expect(html).toContain('aria-label="Transformer paper" aria-pressed="true"');
    expect(html).toContain('aria-label="BERT open-source release" aria-pressed="false"');
    expect(html).toMatch(/atlas-timeline-span is-selected/);
    expect(html).toMatch(/class="is-selected"[^>]*>[\s\S]*Transformer paper/);
  });

  it('opens a useful detail reading surface with associated citations', () => {
    const atlas = normalizeAtlas(validAtlas());
    const html = renderToStaticMarkup(
      createElement(TimelineDetail, {
        atlas,
        milestone: atlas.publishedMilestones[0],
      }),
    );

    expect(html).toContain('Transformer architecture published');
    expect(html).toContain('Why it matters');
    expect(html).toContain('Attention Is All You Need');
    expect(html).toContain('https://papers.nips.cc/paper/7181-attention-is-all-you-need');
    expect(html).toContain('Google Brain');
  });

  it('fills the shell timeline and detail slots without rewriting the composition root', () => {
    const atlas = normalizeAtlas(validAtlas());
    const selected = atlas.publishedMilestones[0]!;
    const html = renderToStaticMarkup(
      createElement(AtlasShell, {
        timeline: createElement(Timeline, {
          milestones: atlas.publishedMilestones,
          selected: { kind: 'milestone', id: selected.id },
        }),
        detail: toDetailModel(selected, atlas),
      }),
    );

    expect(html).toContain('data-testid="atlas-root"');
    expect(html).toContain('data-testid="atlas-timeline"');
    expect(html).toContain(selected.title);
    expect(html).toContain('Attention Is All You Need');
    expect(html).not.toContain('data-testid="timeline-empty"');
  });
});
