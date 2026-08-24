import { describe, expect, it } from 'vitest';
import { createAtlasRepository } from '../../data/atlasRepository';
import { validAtlas } from '../../data/__tests__/fixtures';
import { normalizeAtlas } from '../../data/normalizeAtlas';
import { selectDetailModel } from '../selectDetail';

describe('selectDetailModel', () => {
  const atlas = normalizeAtlas(validAtlas());
  const repo = createAtlasRepository(atlas);

  it('maps a milestone onto the shared reading surface with citations', () => {
    const detail = selectDetailModel({ kind: 'milestone', id: 'ms-attention-is-all-you-need' }, atlas, repo);
    expect(detail?.title).toBe('Transformer architecture published');
    expect(detail?.sources?.[0]?.title).toBe('Attention Is All You Need');
    expect(detail?.related?.some((item) => item.id === 'model-transformer' && item.targetKind === 'entity')).toBe(
      true,
    );
  });

  it('maps an entity onto the same detail model using only supported fields', () => {
    const detail = selectDetailModel({ kind: 'entity', id: 'model-transformer' }, atlas, repo);
    expect(detail?.title).toBe('Transformer');
    expect(detail?.tags).toContain('model');
    expect(detail?.sources?.[0]?.url).toContain('attention-is-all-you-need');
    expect(detail?.related?.some((item) => item.id === 'org-google-brain' && item.targetKind === 'entity')).toBe(true);
  });

  it('returns null for an unknown target instead of inventing a record', () => {
    expect(selectDetailModel({ kind: 'milestone', id: 'ms-missing' }, atlas, repo)).toBeNull();
    expect(selectDetailModel({ kind: 'entity', id: 'model-missing' }, atlas, repo)).toBeNull();
  });
});
