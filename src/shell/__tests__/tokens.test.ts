import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { contrastRatio } from '../contrast';
import { EDITORIAL_ERAS, tokens } from '../tokens';

const here = dirname(fileURLToPath(import.meta.url));
const cssPath = join(here, '../../../src/styles/tokens.css');

describe('editorial tokens', () => {
  it('defines a dark warm reading palette with required roles', () => {
    expect(tokens.color.ink).toMatch(/^#[0-9a-f]{6}$/i);
    expect(tokens.color.inkRaised).toMatch(/^#[0-9a-f]{6}$/i);
    expect(tokens.color.paper).toMatch(/^#[0-9a-f]{6}$/i);
    expect(tokens.color.paperMuted).toMatch(/^#[0-9a-f]{6}$/i);
    expect(tokens.color.rule).toMatch(/^#[0-9a-f]{6}$/i);
    expect(tokens.color.accent).toMatch(/^#[0-9a-f]{6}$/i);
    expect(tokens.color.focus).toMatch(/^#[0-9a-f]{6}$/i);
  });

  it('keeps body, muted, and accent text readable on ink', () => {
    expect(contrastRatio(tokens.color.paper, tokens.color.ink)).toBeGreaterThanOrEqual(7);
    expect(contrastRatio(tokens.color.paperMuted, tokens.color.ink)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(tokens.color.accent, tokens.color.ink)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(tokens.color.focus, tokens.color.ink)).toBeGreaterThanOrEqual(3);
  });

  it('uses a warm accent rather than neon cyan or indigo', () => {
    const { h, s } = tokens.accentHue;
    expect(h).toBeGreaterThanOrEqual(15);
    expect(h).toBeLessThanOrEqual(45);
    expect(s).toBeLessThan(0.72);
  });

  it('names the four editorial era bands from scope', () => {
    expect(EDITORIAL_ERAS.map((era) => era.id)).toEqual([
      'transformer-foundations',
      'scaling-instruction',
      'open-multimodal',
      'reasoning-agents',
    ]);
    for (const era of EDITORIAL_ERAS) {
      expect(era.label.length).toBeGreaterThan(8);
      expect(era.period).toMatch(/\d{4}/);
      expect(contrastRatio(era.mark, tokens.color.ink)).toBeGreaterThanOrEqual(3);
    }
  });

  it('mirrors token values into local CSS custom properties', () => {
    const css = readFileSync(cssPath, 'utf8');
    expect(css).toContain(`--atlas-ink: ${tokens.color.ink}`);
    expect(css).toContain(`--atlas-paper: ${tokens.color.paper}`);
    expect(css).toContain(`--atlas-accent: ${tokens.color.accent}`);
    expect(css).toContain(`--atlas-focus: ${tokens.color.focus}`);
    expect(css).not.toMatch(/fonts\.googleapis|cdn\.|unpkg|jsdelivr/i);
  });
});
