import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { milestone } from '../../../data/__tests__/fixtures';
import { Timeline } from '../Timeline';

const here = dirname(fileURLToPath(import.meta.url));
const css = readFileSync(resolve(here, '../timeline.css'), 'utf8');
const timelineSource = readFileSync(resolve(here, '../Timeline.tsx'), 'utf8');

function ruleBody(selector: string): string {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = css.match(new RegExp(`${escaped}\\s*\\{([^}]+)\\}`));
  return match?.[1] ?? '';
}

describe('timeline milestone hover', () => {
  it('gives milestone buttons a visible non-color-only hover treatment', () => {
    const hover = ruleBody('.atlas-timeline-year button:hover');
    expect(hover.length).toBeGreaterThan(0);
    expect(hover).toMatch(/box-shadow|transform|text-decoration|border-left|outline/);
    expect(hover).not.toMatch(/display\s*:\s*none|visibility\s*:\s*hidden|opacity\s*:\s*0\b/);
  });

  it('keeps selected and focus-visible treatments when hover is present', () => {
    const selected = ruleBody('.atlas-timeline-year button.is-selected');
    const selectedHover = ruleBody('.atlas-timeline-year button.is-selected:hover');
    const focusVisible = ruleBody('.atlas-timeline-year button:focus-visible');

    expect(selected).toMatch(/border/);
    expect(selectedHover).toMatch(/border|box-shadow|transform/);
    expect(focusVisible).toMatch(/outline/);
    expect(timelineSource).toMatch(/onPointerEnter|onMouseEnter/);
  });

  it('renders selected milestone buttons that remain hover targets', () => {
    const html = renderToStaticMarkup(
      createElement(Timeline, {
        milestones: [
          { ...milestone, id: 'ms-year', date: '2017', date_precision: 'year', title: 'Transformer paper' },
        ],
        selected: { kind: 'milestone', id: 'ms-year' },
      }),
    );

    expect(html).toMatch(/<button[^>]*class="is-selected"[^>]*>/);
    expect(html).toMatch(/<button[^>]*type="button"/);
  });
});
