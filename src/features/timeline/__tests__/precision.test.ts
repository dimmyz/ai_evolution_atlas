import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { formatDateLabel, parsePrecisionDate } from '../precision';

const here = dirname(fileURLToPath(import.meta.url));

describe('timeline date precision', () => {
  it('formats labels with D3 date-format utilities', () => {
    const source = readFileSync(resolve(here, '../precision.ts'), 'utf8');
    expect(source).toMatch(/from ['"]d3-time-format['"]/);
    expect(source).toMatch(/utcFormat/);
  });

  it('treats a year-only date as a year span, not 1 January', () => {
    const parsed = parsePrecisionDate('2017', 'year');

    expect(parsed.precision).toBe('year');
    expect(parsed.label).toBe('2017');
    expect(parsed.start.toISOString()).toBe('2017-01-01T00:00:00.000Z');
    expect(parsed.end.toISOString()).toBe('2018-01-01T00:00:00.000Z');
    expect(formatDateLabel(parsed)).toBe('2017');
    expect(formatDateLabel(parsed)).not.toMatch(/jan/i);
    expect(formatDateLabel(parsed)).not.toMatch(/january|01\s|1\s+jan/i);
  });

  it('treats a month-precision date as a month span', () => {
    const parsed = parsePrecisionDate('2024-09', 'month');

    expect(parsed.precision).toBe('month');
    expect(parsed.start.toISOString()).toBe('2024-09-01T00:00:00.000Z');
    expect(parsed.end.toISOString()).toBe('2024-10-01T00:00:00.000Z');
    expect(formatDateLabel(parsed)).toBe('Sep 2024');
  });

  it('keeps a day-precision date as an exact day', () => {
    const parsed = parsePrecisionDate('2018-11-02', 'day');

    expect(parsed.precision).toBe('day');
    expect(parsed.start.toISOString()).toBe('2018-11-02T00:00:00.000Z');
    expect(parsed.end.toISOString()).toBe('2018-11-03T00:00:00.000Z');
    expect(formatDateLabel(parsed)).toBe('2 Nov 2018');
  });
});
