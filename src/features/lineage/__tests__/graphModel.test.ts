import { describe, expect, it } from 'vitest';
import type { EntityRecord, Neighborhood, RelationRecord } from '../../../data/types';
import { buildLineageGraph } from '../graphModel';

function entity(id: string, entity_type: EntityRecord['entity_type'], name = id): EntityRecord {
  return { id, entity_type, name };
}

function edge(
  from: string,
  to: string,
  type: RelationRecord['type'],
  extras: Partial<RelationRecord> = {},
): RelationRecord {
  return {
    from,
    to,
    type,
    confidence: extras.confidence ?? 'high',
    evidence_source_ids: extras.evidence_source_ids ?? ['src-a'],
    rationale: extras.rationale,
    status: extras.status ?? 'verified',
  };
}

describe('buildLineageGraph', () => {
  it('preserves node class and inspectable relation metadata instead of collapsing edges into descent', () => {
    const neighborhood: Neighborhood = {
      centerId: 'model-dall-e-2',
      nodes: [
        entity('model-dall-e-2', 'model', 'DALL·E 2'),
        entity('model-clip', 'model', 'CLIP'),
        entity('model-codex', 'model', 'Codex'),
        entity('model-gpt-3', 'model', 'GPT-3'),
      ],
      edges: [
        edge('model-dall-e-2', 'model-clip', 'uses_architecture', {
          rationale: 'Decoder is conditioned on a CLIP image embedding.',
        }),
        edge('model-codex', 'model-gpt-3', 'same_family_as', {
          rationale: 'Codex is identified as a GPT language model.',
        }),
      ],
    };

    const graph = buildLineageGraph(neighborhood);

    expect(graph.nodes.find((node) => node.id === 'model-dall-e-2')).toMatchObject({
      entityType: 'model',
      label: 'DALL·E 2',
      isCenter: true,
      mark: 'glyph-model',
    });
    expect(new Set(graph.nodes.map((node) => node.mark)).size).toBeGreaterThanOrEqual(1);

    const architecture = graph.edges.find((item) => item.type === 'uses_architecture');
    const family = graph.edges.find((item) => item.type === 'same_family_as');
    expect(architecture).toMatchObject({
      inspectable: true,
      descent: false,
      confidence: 'high',
      evidenceSourceIds: ['src-a'],
      label: 'uses architecture',
    });
    expect(family).toMatchObject({
      inspectable: true,
      descent: false,
      label: 'same family as',
    });
    expect(graph.edges.every((item) => item.descent === (item.type === 'successor_of'))).toBe(true);
  });

  it('only marks successor_of as descent and keeps influence inspectable', () => {
    const neighborhood: Neighborhood = {
      centerId: 'model-gpt-2',
      nodes: [entity('model-gpt-2', 'model', 'GPT-2'), entity('model-gpt', 'model', 'GPT')],
      edges: [edge('model-gpt-2', 'model-gpt', 'successor_of')],
    };

    const graph = buildLineageGraph(neighborhood);
    expect(graph.edges[0]).toMatchObject({
      type: 'successor_of',
      descent: true,
      inspectable: true,
      label: 'successor of',
    });
  });
});
