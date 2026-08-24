import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { DiscoveryPanel } from '../DiscoveryPanel';
import { discoveryAtlas } from './fixtures';

function render(props: Partial<Parameters<typeof DiscoveryPanel>[0]> = {}) {
  return renderToStaticMarkup(
    createElement(DiscoveryPanel, { atlas: discoveryAtlas(), ...props }),
  );
}

describe('DiscoveryPanel', () => {
  it('exposes keyboard-reachable search, type, organization, and era controls', () => {
    const html = render();
    expect(html).toContain('data-testid="discovery-panel"');
    expect(html).toMatch(/<label[^>]*for="discovery-query"/);
    expect(html).toMatch(/Search titles, summaries, and names/);
    expect(html).toMatch(/<input[^>]*id="discovery-query"[^>]*type="search"/);
    expect(html).toMatch(/<button[^>]*type="button"[^>]*>paper<\/button>/);
    expect(html).toMatch(/<button[^>]*type="button"[^>]*>OpenAI<\/button>/);
    expect(html).toMatch(/<button[^>]*type="button"[^>]*>Transformer foundations<\/button>/);
    expect(html).toMatch(/editorial/i);
  });

  it('lists title matches as selectable results', () => {
    const html = render({
      filters: { query: 'transformer', types: [], organizationIds: [] },
    });
    expect(html).toContain('Transformer paper');
    expect(html).toContain('Transformer');
    expect(html).not.toContain('GPT-4 technical report');
    expect(html).toMatch(/<button[^>]*type="button"[^>]*>Transformer paper<\/button>/);
  });

  it('shows citations for the selected verified item, not a global bibliography', () => {
    const html = render({
      selected: { kind: 'milestone', id: 'ms-gpt4' },
    });
    expect(html).toContain('GPT-4 Technical Report. OpenAI, 2023.');
    expect(html).toContain('https://arxiv.org/abs/2303.08774');
    expect(html).not.toContain('Attention Is All You Need. NeurIPS, 2017.');
    expect(html).toMatch(/<a[^>]*href="https:\/\/arxiv.org\/abs\/2303.08774"/);
  });

  it('announces when the current selection is no longer in the filtered set', () => {
    const html = render({
      filters: { query: '', types: ['paper'], organizationIds: [] },
      selected: { kind: 'milestone', id: 'ms-gpt4' },
    });
    expect(html).toMatch(/aria-live="polite"/);
    expect(html).toMatch(/no longer matches/i);
  });

  it('offers a clear action and an empty-results recovery message', () => {
    const html = render({
      filters: { query: 'zzzz-no-match', types: ['paper'], organizationIds: [] },
    });
    expect(html).toMatch(/No matching records/);
    expect(html).toMatch(/<button[^>]*type="button"[^>]*>Clear filters<\/button>/);
  });
});
