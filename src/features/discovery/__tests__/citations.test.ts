import { describe, expect, it } from 'vitest';
import { citationsForRecord, formatCitation } from '../citations';
import { srcAttention, srcGpt4 } from './fixtures';

describe('formatCitation', () => {
  it('formats a source with title, publisher, and year', () => {
    const citation = formatCitation(srcAttention);
    expect(citation.id).toBe('src-attention');
    expect(citation.url).toBe(srcAttention.url);
    expect(citation.title).toBe(srcAttention.title);
    expect(citation.label).toBe('Attention Is All You Need. NeurIPS, 2017.');
  });

  it('omits a missing year rather than inventing one', () => {
    const citation = formatCitation({
      ...srcGpt4,
      published_at: null,
    });
    expect(citation.label).toBe('GPT-4 Technical Report. OpenAI.');
  });
});

describe('citationsForRecord', () => {
  it('returns item-associated sources in source_ids order', () => {
    const citations = citationsForRecord(
      { sourceIds: ['src-gpt4', 'src-attention'] },
      {
        'src-attention': srcAttention,
        'src-gpt4': srcGpt4,
      },
    );
    expect(citations.map((item) => item.id)).toEqual(['src-gpt4', 'src-attention']);
  });

  it('skips dangling source ids instead of inventing citations', () => {
    const citations = citationsForRecord({ sourceIds: ['src-missing', 'src-attention'] }, {
      'src-attention': srcAttention,
    });
    expect(citations).toHaveLength(1);
    expect(citations[0]?.id).toBe('src-attention');
  });
});
