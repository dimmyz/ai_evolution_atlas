import { describe, expect, it } from 'vitest';
import type { EntityRecord, Neighborhood, RelationRecord } from '../../../data/types';
import { layoutLineage } from '../layoutLineage';

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

const neighborhood: Neighborhood = {
  centerId: 'model-t5',
  nodes: [
    entity('model-t5'),
    entity('tech-transformer', 'technology'),
    entity('org-google', 'organization'),
  ],
  edges: [
    edge('model-t5', 'tech-transformer', 'uses_architecture'),
    edge('model-t5', 'org-google', 'authored_by'),
  ],
};

describe('layoutLineage', () => {
  it('places the focus entity at a fixed origin and neighbors at unique deterministic coordinates', () => {
    const first = layoutLineage(neighborhood);
    const second = layoutLineage(neighborhood);
    const byId = Object.fromEntries(first.map((placed) => [placed.id, placed]));

    expect(first.map((placed) => ({ id: placed.id, x: placed.x, y: placed.y }))).toEqual(
      second.map((placed) => ({ id: placed.id, x: placed.x, y: placed.y })),
    );
    expect(byId['model-t5']).toMatchObject({ x: 420, y: 200 });
    expect(new Set(first.map((placed) => `${placed.x},${placed.y}`)).size).toBe(first.length);
    expect(byId['org-google']?.x).toBeGreaterThan(byId['model-t5']?.x ?? 0);
    expect(byId['tech-transformer']?.x).toBeGreaterThan(byId['model-t5']?.x ?? 0);
  });

  it('keeps incoming neighbors on the left of the focus when the focus is the relation target', () => {
    const incoming: Neighborhood = {
      centerId: 'tech-transformer',
      nodes: [entity('tech-transformer', 'technology'), entity('model-t5'), entity('model-palm')],
      edges: [
        edge('model-t5', 'tech-transformer', 'uses_architecture'),
        edge('model-palm', 'tech-transformer', 'uses_architecture'),
      ],
    };

    const placed = Object.fromEntries(layoutLineage(incoming).map((node) => [node.id, node]));
    expect(placed['model-t5']?.x).toBeLessThan(placed['tech-transformer']?.x ?? 0);
    expect(placed['model-palm']?.x).toBeLessThan(placed['tech-transformer']?.x ?? 0);
    expect(placed['model-palm']?.y).not.toBe(placed['model-t5']?.y);
  });
});
