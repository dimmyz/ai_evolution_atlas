import { describe, expect, it } from 'vitest';
import { loadCanonicalAtlas } from '../../../data/loadAtlas';
import { normalizeAtlas } from '../../../data/normalizeAtlas';
import { buildSearchIndex } from '../searchIndex';
import { discoveryAtlas, msCandidate } from './fixtures';

describe('buildSearchIndex', () => {
  it('indexes every verified milestone and every published entity', () => {
    const index = buildSearchIndex(discoveryAtlas());
    const ids = index.map((record) => record.id).sort();
    expect(ids).toEqual([
      'ms-gpt4',
      'ms-transformer',
      'org-google',
      'org-openai',
      'tech-transformer',
    ]);
  });

  it('does not index unpublished candidate milestones', () => {
    const atlas = discoveryAtlas();
    atlas.milestonesById[msCandidate.id] = msCandidate;
    const ids = buildSearchIndex(atlas).map((record) => record.id);
    expect(ids).not.toContain('ms-rumor');
  });

  it('indexes every verified milestone and entity from the published atlas', () => {
    const atlas = normalizeAtlas(loadCanonicalAtlas());
    const ids = new Set(buildSearchIndex(atlas).map((record) => record.id));
    expect(atlas.publishedMilestones.length).toBeGreaterThanOrEqual(30);
    for (const milestone of atlas.publishedMilestones) {
      expect(ids.has(milestone.id)).toBe(true);
    }
    for (const entityId of Object.keys(atlas.entitiesById)) {
      expect(ids.has(entityId)).toBe(true);
    }
  });
});
