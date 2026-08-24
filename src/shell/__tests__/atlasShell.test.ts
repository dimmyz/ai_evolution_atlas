import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { AtlasShell } from '../AtlasShell';
import type { DetailModel } from '../types';

function render(props: Parameters<typeof AtlasShell>[0] = {}) {
  return renderToStaticMarkup(createElement(AtlasShell, props));
}

describe('AtlasShell', () => {
  it('orients the reader with title, purpose, and 2017–2026 scope', () => {
    const html = render();
    expect(html).toContain('data-testid="atlas-root"');
    expect(html).toMatch(/<h1[^>]*>AI Evolution Atlas<\/h1>/);
    expect(html).toMatch(/source-grounded/i);
    expect(html).toContain('2017');
    expect(html).toContain('2026');
    expect(html).toMatch(/time/i);
    expect(html).toMatch(/lineage/i);
  });

  it('exposes keyboard-reachable view switching and a skip link', () => {
    const html = render();
    expect(html).toMatch(/href="#atlas-stage"/);
    expect(html).toMatch(/<button[^>]*type="button"[^>]*>Timeline<\/button>/);
    expect(html).toMatch(/<button[^>]*type="button"[^>]*>Lineage<\/button>/);
    expect(html).toMatch(/aria-pressed="true"/);
  });

  it('labels era bands as editorial navigation, not scientific periods', () => {
    const html = render();
    expect(html).toMatch(/editorial/i);
    expect(html).toContain('Transformer foundations');
    expect(html).toContain('Reasoning + agents');
  });

  it('keeps the detail surface calm and omits empty decorative metadata', () => {
    const sparse: DetailModel = { title: 'Attention Is All You Need' };
    const html = render({ detail: sparse });
    expect(html).toContain('Attention Is All You Need');
    expect(html).not.toMatch(/Why it matters\s*<\/h3>\s*<p>\s*<\/p>/);
    expect(html).not.toContain('undefined');
    expect(html).not.toContain('Sources (0)');
  });

  it('renders supported detail fields and associated citations', () => {
    const detail: DetailModel = {
      title: 'GPT-4',
      dateLabel: '2023',
      organization: 'OpenAI',
      summary: 'A multimodal model family described in a technical report.',
      whyItMatters: 'It is a widely cited public reference point for later systems.',
      tags: ['model'],
      related: [{ id: 'transformer', label: 'Transformer', kind: 'technology' }],
      sources: [
        {
          id: 'src-gpt4',
          title: 'GPT-4 Technical Report',
          url: 'https://arxiv.org/abs/2303.08774',
        },
      ],
    };
    const html = render({ detail });
    expect(html).toContain('GPT-4');
    expect(html).toContain('2023');
    expect(html).toContain('OpenAI');
    expect(html).toContain('Why it matters');
    expect(html).toContain('Transformer');
    expect(html).toContain('GPT-4 Technical Report');
    expect(html).toContain('https://arxiv.org/abs/2303.08774');
  });

  it('hosts isolated feature slots without inventing feature UI', () => {
    const html = render({
      discovery: createElement('div', { 'data-testid': 'discovery-slot' }, 'find'),
      timeline: createElement('div', { 'data-testid': 'timeline-slot' }, 'years'),
    });
    expect(html).toContain('data-testid="discovery-slot"');
    expect(html).toContain('data-testid="timeline-slot"');
    expect(html).not.toMatch(/React Flow|cytoscape|component library/i);
  });
});
