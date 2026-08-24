import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { createTimeScale } from '../timeScale';
import { parsePrecisionDate } from '../precision';

const here = dirname(fileURLToPath(import.meta.url));

describe('timeline time scale', () => {
  it('delegates mapping, calendar ticks, and invert to D3 temporal utilities', () => {
    const source = readFileSync(resolve(here, '../timeScale.ts'), 'utf8');
    expect(source).toMatch(/from ['"]d3-scale['"]/);
    expect(source).toMatch(/scaleUtc/);
    expect(source).toMatch(/from ['"]d3-time['"]/);
    expect(source).toMatch(/utcYear/);
    expect(source).not.toMatch(/getUTCFullYear\(\);\s*const lastExclusive/);
  });

  it('maps the 2017–2026 window onto a pixel range without collapsing year spans to day 1', () => {
    const scale = createTimeScale(
      [new Date(Date.UTC(2017, 0, 1)), new Date(Date.UTC(2027, 0, 1))],
      [0, 1000],
    );

    const year = parsePrecisionDate('2017', 'year');
    const day = parsePrecisionDate('2017-06-12', 'day');

    expect(scale(year.start)).toBe(0);
    expect(scale(year.end)).toBeGreaterThan(scale(year.start));
    expect(scale(day.start)).toBeGreaterThan(scale(year.start));
    expect(scale(day.start)).toBeLessThan(scale(year.end));
    expect(scale.ticks(10).map((tick) => tick.getUTCFullYear())).toEqual([
      2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026,
    ]);
  });
});
