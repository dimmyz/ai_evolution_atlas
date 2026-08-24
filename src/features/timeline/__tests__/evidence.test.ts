import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { loadCanonicalAtlas } from '../../../data/loadAtlas';
import { normalizeAtlas } from '../../../data/normalizeAtlas';
import { AtlasShell } from '../../../shell/AtlasShell';
import { toDetailModel } from '../detailModel';
import { Timeline } from '../Timeline';

describe('timeline visual evidence', () => {
  it('writes a selected-state shell composition for screenshot capture', () => {
    const atlas = normalizeAtlas(loadCanonicalAtlas());
    const selected =
      atlas.publishedMilestones.find((item) => item.id === 'ms-gpt-4-report') ??
      atlas.publishedMilestones[0]!;
    const nearby = atlas.publishedMilestones.filter((item) =>
      ['ms-attention-is-all-you-need', 'ms-bert-release', 'ms-gpt-4-report', 'ms-claude-4-announcement'].includes(
        item.id,
      ),
    );

    const body = renderToStaticMarkup(
      createElement(AtlasShell, {
        timeline: createElement(Timeline, {
          milestones: nearby,
          selected: { kind: 'milestone', id: selected.id },
        }),
        detail: toDetailModel(selected, atlas),
      }),
    );

    const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=1440" />
    <title>AI Evolution Atlas — timeline selected</title>
    <link rel="stylesheet" href="../src/styles/tokens.css" />
    <link rel="stylesheet" href="../src/shell/shell.css" />
    <link rel="stylesheet" href="../src/features/timeline/timeline.css" />
  </head>
  <body>${body}</body>
</html>
`;

    const out = resolve(process.cwd(), 'evidence/timeline-selected-1440x900.html');
    writeFileSync(out, html);
    expect(body).toContain('data-testid="atlas-timeline"');
    expect(body).toContain(selected.title);
    expect(body).toContain('Sources');
  });
});
