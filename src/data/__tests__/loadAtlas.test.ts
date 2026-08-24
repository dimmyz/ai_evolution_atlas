import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { loadCanonicalAtlas } from '../loadAtlas';

describe('loadCanonicalAtlas', () => {
  it('returns an empty document when authored yaml is absent', () => {
    const root = mkdtempSync(join(tmpdir(), 'atlas-data-empty-'));
    mkdirSync(join(root, 'data', 'seed'), { recursive: true });
    writeFileSync(join(root, 'data', 'seed', 'notes.md'), '# seed only\n');
    expect(loadCanonicalAtlas(root)).toEqual({
      sources: [],
      entities: [],
      milestones: [],
      relations: [],
    });
  });

  it('merges the canonical layout into one document', () => {
    const root = mkdtempSync(join(tmpdir(), 'atlas-data-full-'));
    mkdirSync(join(root, 'data', 'sources'), { recursive: true });
    mkdirSync(join(root, 'data', 'entities'), { recursive: true });
    writeFileSync(
      join(root, 'data', 'sources', 'sources.yaml'),
      'sources:\n  - id: src-a\n    title: Paper\n    publisher: Lab\n    url: https://example.org/a\n    source_class: primary\n',
    );
    writeFileSync(
      join(root, 'data', 'entities', 'models.yaml'),
      'entities:\n  - id: model-a\n    entity_type: model\n    name: Model A\n',
    );
    writeFileSync(
      join(root, 'data', 'milestones.yaml'),
      'milestones:\n  - id: ms-a\n    title: Event\n    date: "2017"\n    date_precision: year\n    category: paper\n    summary: Summary\n    source_ids: [src-a]\n    status: verified\n',
    );
    writeFileSync(
      join(root, 'data', 'relations.yaml'),
      'relations: []\n',
    );

    const doc = loadCanonicalAtlas(root);
    expect(doc.sources).toHaveLength(1);
    expect(doc.entities[0]?.id).toBe('model-a');
    expect(doc.milestones[0]?.id).toBe('ms-a');
    expect(doc.relations).toEqual([]);
  });
});
