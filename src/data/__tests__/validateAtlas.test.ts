import { describe, expect, it } from 'vitest';
import { validateAtlas } from '../validateAtlas';
import { milestone, model, relation, validAtlas } from './fixtures';

describe('validateAtlas', () => {
  it('accepts a consistent fixture', () => {
    const result = validateAtlas(validAtlas());
    expect(result.ok).toBe(true);
    expect(result.issues).toEqual([]);
  });

  it('rejects duplicate IDs', () => {
    const result = validateAtlas(
      validAtlas({
        entities: [model, { ...model, name: 'Copy' }],
      }),
    );
    expect(result.ok).toBe(false);
    expect(result.issues.some((issue) => issue.code === 'duplicate_id')).toBe(true);
  });

  it('rejects relation endpoints that do not exist', () => {
    const result = validateAtlas(
      validAtlas({
        relations: [{ ...relation, to: 'org-missing' }],
      }),
    );
    expect(result.ok).toBe(false);
    expect(result.issues.some((issue) => issue.code === 'dangling_endpoint')).toBe(true);
  });

  it('rejects dangling milestone entity references', () => {
    const result = validateAtlas(
      validAtlas({
        milestones: [{ ...milestone, entity_ids: ['model-missing'] }],
      }),
    );
    expect(result.ok).toBe(false);
    expect(result.issues.some((issue) => issue.code === 'dangling_reference')).toBe(true);
  });

  it('rejects verified milestones without sources', () => {
    const result = validateAtlas(
      validAtlas({
        milestones: [{ ...milestone, source_ids: [] }],
      }),
    );
    expect(result.ok).toBe(false);
    expect(result.issues.some((issue) => issue.code === 'verified_without_sources')).toBe(true);
  });

  it('rejects verified strong relations without evidence', () => {
    const result = validateAtlas(
      validAtlas({
        relations: [{ ...relation, evidence_source_ids: [] }],
      }),
    );
    expect(result.ok).toBe(false);
    expect(result.issues.some((issue) => issue.code === 'strong_relation_without_evidence')).toBe(
      true,
    );
  });

  it('rejects invalid date precision', () => {
    const result = validateAtlas(
      validAtlas({
        milestones: [{ ...milestone, date: '2017', date_precision: 'day' }],
      }),
    );
    expect(result.ok).toBe(false);
    expect(result.issues.some((issue) => issue.code === 'invalid_date_precision')).toBe(true);
  });

  it('rejects unknown relation types', () => {
    const result = validateAtlas(
      validAtlas({
        relations: [{ ...relation, type: 'invented_by' as never }],
      }),
    );
    expect(result.ok).toBe(false);
    expect(result.issues.some((issue) => issue.code === 'unknown_relation_type')).toBe(true);
  });
});
