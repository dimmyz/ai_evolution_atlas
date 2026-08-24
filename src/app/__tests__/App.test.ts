import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { validAtlas } from '../../data/__tests__/fixtures';
import { normalizeAtlas } from '../../data/normalizeAtlas';
import { App } from '../App';

describe('App composition', () => {
  const atlas = normalizeAtlas(validAtlas());

  it('wires discovery, timeline, and the shared detail surface into the live root', () => {
    const html = renderToStaticMarkup(createElement(App, { atlas }));
    expect(html).toContain('data-testid="atlas-root"');
    expect(html).toContain('data-testid="discovery-panel"');
    expect(html).toContain('data-testid="atlas-timeline"');
    expect(html).toContain('Transformer architecture published');
    expect(html).not.toContain('data-testid="timeline-empty"');
    expect(html).toMatch(/Start exploring|Read the first milestone/i);
  });

  it('opens the same reading surface for a selected milestone, with sources visible', () => {
    const html = renderToStaticMarkup(
      createElement(App, {
        atlas,
        initialState: { selected: { kind: 'milestone', id: 'ms-attention-is-all-you-need' } },
      }),
    );
    expect(html).toContain('Why it matters');
    expect(html).toContain('Attention Is All You Need');
    expect(html).toMatch(/<a[^>]*href="https:\/\/papers.nips.cc/);
    expect(html).toMatch(/data-testid="atlas-sources"/);
  });

  it('keeps lineage inspectable when the shared selection is an entity', () => {
    const html = renderToStaticMarkup(
      createElement(App, {
        atlas,
        initialState: {
          activeView: 'lineage',
          selected: { kind: 'entity', id: 'model-transformer' },
        },
      }),
    );
    expect(html).toContain('data-testid="lineage-view"');
    expect(html).toContain('Transformer');
    expect(html).toContain('Google Brain');
  });
});
