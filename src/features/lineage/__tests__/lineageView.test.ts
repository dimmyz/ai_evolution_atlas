import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it, vi } from 'vitest';
import type { EntityRecord, MilestoneRecord, Neighborhood, RelationRecord } from '../../../data/types';
import { chooseInspectedEntity, LineageView } from '../LineageView';

const transformer: EntityRecord = { id: 'model-transformer', entity_type: 'model', name: 'Transformer' };
const google: EntityRecord = { id: 'org-google', entity_type: 'organization', name: 'Google Research' };
const t5: EntityRecord = { id: 'model-t5', entity_type: 'model', name: 'T5' };
const palm: EntityRecord = { id: 'model-palm', entity_type: 'model', name: 'PaLM' };
const extra: EntityRecord = { id: 'model-gpt-4', entity_type: 'model', name: 'GPT-4' };
const architecture: EntityRecord = {
  id: 'tech-transformer',
  entity_type: 'technology',
  name: 'Transformer architecture',
};

const milestone: MilestoneRecord = {
  id: 'ms-t5',
  title: 'T5 published',
  date: '2019-10-23',
  date_precision: 'day',
  category: 'paper',
  summary: 'A unified text-to-text Transformer.',
  entity_ids: ['model-t5', 'org-google'],
  source_ids: ['src-a03'],
  status: 'verified',
};

const entities: Record<string, EntityRecord> = {
  [transformer.id]: transformer,
  [google.id]: google,
  [t5.id]: t5,
  [palm.id]: palm,
  [extra.id]: extra,
  [architecture.id]: architecture,
};

function rel(
  from: string,
  to: string,
  type: RelationRecord['type'],
): RelationRecord {
  return {
    from,
    to,
    type,
    confidence: 'high',
    evidence_source_ids: ['src-a03'],
    rationale: `${from} ${type} ${to}`,
    status: 'verified',
  };
}

const techNeighborhood: Neighborhood = {
  centerId: 'tech-transformer',
  nodes: [
    { id: 'tech-transformer', entity_type: 'technology', name: 'Transformer architecture' },
    t5,
    palm,
    extra,
    google,
  ],
  edges: [
    rel('model-t5', 'tech-transformer', 'uses_architecture'),
    rel('model-palm', 'tech-transformer', 'uses_architecture'),
    rel('model-gpt-4', 'tech-transformer', 'uses_architecture'),
    rel('model-t5', 'org-google', 'authored_by'),
  ],
};

function render(props: Partial<Parameters<typeof LineageView>[0]> = {}) {
  return renderToStaticMarkup(
    createElement(LineageView, {
      getEntity: (id) => entities[id],
      getMilestone: (id) => (id === milestone.id ? milestone : undefined),
      neighborhoodFor: (id) => (id === 'tech-transformer' ? techNeighborhood : { centerId: id, nodes: [], edges: [] }),
      ...props,
    }),
  );
}

describe('LineageView', () => {
  it('asks the reader to choose an entity before drawing a milestone neighborhood', () => {
    const html = render({ selected: { kind: 'milestone', id: milestone.id } });
    expect(html).toMatch(/choose an entity/i);
    expect(html).toContain('T5');
    expect(html).toContain('Google Research');
    expect(html).not.toContain('uses architecture');
  });

  it('renders a focused neighborhood with inspectable relations, a legend, and a keyboard list', () => {
    const html = render({
      selected: { kind: 'entity', id: 'tech-transformer' },
      getSource: (id) =>
        id === 'src-a03'
          ? {
              id: 'src-a03',
              title: 'Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer',
              publisher: 'Google Research',
              url: 'https://arxiv.org/abs/1910.10683',
              source_class: 'primary',
            }
          : undefined,
    });
    expect(html).toContain('data-testid="lineage-view"');
    expect(html).toMatch(/uses architecture/);
    expect(html).toMatch(/high/);
    expect(html).toContain('Exploring the Limits of Transfer Learning');
    expect(html).toContain('https://arxiv.org/abs/1910.10683');
    expect(html).not.toContain('src-a03');
    expect(html).toMatch(/model/);
    expect(html).toMatch(/technology/);
    expect(html).toMatch(/organization/);
    expect(html).toContain('T5');
    expect(html).toContain('PaLM');
    expect(html).not.toMatch(/react-flow__attribution|react-flow__minimap|react-flow__controls|cytoscape/i);
    expect(html).not.toMatch(/powered by/i);
    expect(html).toMatch(/<marker\b[^>]*id="atlas-arrow"/i);
    expect(html).toMatch(/marker-end="url\(#atlas-arrow\)"/);
  });

  it('lists overflow neighbors instead of drawing a hairball', () => {
    const html = render({
      selected: { kind: 'entity', id: 'tech-transformer' },
      maxNodes: 3,
    });
    expect(html).toMatch(/more related/i);
    expect(html).toContain('T5');
  });

  it('dispatches entity selection from the inspectable list', () => {
    const onSelect = vi.fn();
    const view = createElement(LineageView, {
      selected: { kind: 'entity', id: 'tech-transformer' },
      getEntity: (id) => entities[id],
      getMilestone: () => undefined,
      neighborhoodFor: () => techNeighborhood,
      onSelect,
    });
    const html = renderToStaticMarkup(view);
    expect(html).toMatch(/data-entity-id="model-t5"/);
    expect(html).toMatch(/<button[^>]*data-entity-id="model-t5"/);
  });

  it('routes the initial entity choice through the shared selected target', () => {
    const onSelect = vi.fn();
    const onEntityFocus = vi.fn();
    chooseInspectedEntity('tech-transformer', onSelect, onEntityFocus);
    expect(onSelect).toHaveBeenCalledWith({ kind: 'entity', id: 'tech-transformer' });
    expect(onEntityFocus).not.toHaveBeenCalled();

    const html = render({ selected: { kind: 'milestone', id: milestone.id } });
    expect(html).toMatch(/data-entity-id="model-t5"/);
    expect(html).toMatch(/data-entity-id="org-google"/);
  });
});
