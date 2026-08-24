import { describe, expect, it } from 'vitest';
import type { EntityRecord, Neighborhood, RelationRecord } from '../../../data/types';
import { boundNeighborhood } from '../boundNeighborhood';

function entity(id: string, entity_type: EntityRecord['entity_type'] = 'model'): EntityRecord {
  return { id, entity_type, name: id };
}

function edge(from: string, to: string, type: RelationRecord['type'] = 'released_by'): RelationRecord {
  return {
    from,
    to,
    type,
    confidence: 'high',
    evidence_source_ids: ['src-a'],
    status: 'verified',
  };
}

function crowdedNeighborhood(): Neighborhood {
  const neighbors = ['model-b', 'model-c', 'model-d', 'model-e', 'org-x'];
  return {
    centerId: 'model-a',
    nodes: [entity('model-a'), ...neighbors.map((id) => entity(id, id.startsWith('org') ? 'organization' : 'model'))],
    edges: neighbors.map((id) => edge('model-a', id)),
  };
}

describe('boundNeighborhood', () => {
  it('keeps a small neighborhood intact and reports no overflow', () => {
    const neighborhood: Neighborhood = {
      centerId: 'model-a',
      nodes: [entity('model-a'), entity('org-x', 'organization')],
      edges: [edge('model-a', 'org-x')],
    };

    const bounded = boundNeighborhood(neighborhood, { maxNodes: 8 });

    expect(bounded.centerId).toBe('model-a');
    expect(bounded.nodes.map((node) => node.id)).toEqual(['model-a', 'org-x']);
    expect(bounded.edges).toHaveLength(1);
    expect(bounded.omitted).toEqual([]);
  });

  it('caps node count, always keeps the center, and lists omitted neighbors deterministically', () => {
    const first = boundNeighborhood(crowdedNeighborhood(), { maxNodes: 4 });
    const second = boundNeighborhood(crowdedNeighborhood(), { maxNodes: 4 });

    expect(first.nodes).toHaveLength(4);
    expect(first.nodes[0]?.id).toBe('model-a');
    expect(first.nodes.map((node) => node.id)).toEqual(second.nodes.map((node) => node.id));
    expect(first.omitted.map((node) => node.id)).toEqual(['model-e', 'org-x']);
    expect(first.edges.every((rel) => first.nodes.some((node) => node.id === rel.from) && first.nodes.some((node) => node.id === rel.to))).toBe(true);
    expect(first.omitted.every((node) => node.id !== 'model-a')).toBe(true);
  });
});
