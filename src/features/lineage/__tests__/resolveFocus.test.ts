import { describe, expect, it } from 'vitest';
import type { EntityRecord, MilestoneRecord } from '../../../data/types';
import { resolveLineageFocus } from '../resolveFocus';

const transformer: EntityRecord = { id: 'model-transformer', entity_type: 'model', name: 'Transformer' };
const google: EntityRecord = { id: 'org-google-brain', entity_type: 'organization', name: 'Google Brain' };

const milestone: MilestoneRecord = {
  id: 'ms-attention-is-all-you-need',
  title: 'Transformer architecture published',
  date: '2017-06-12',
  date_precision: 'day',
  category: 'paper',
  summary: 'The Transformer paper introduced attention-only sequence models.',
  entity_ids: ['model-transformer', 'org-google-brain'],
  source_ids: ['src-attention'],
  status: 'verified',
};

describe('resolveLineageFocus', () => {
  it('uses an entity selection as the lineage center', () => {
    const focus = resolveLineageFocus({
      selected: { kind: 'entity', id: 'model-transformer' },
      getEntity: (id) => (id === transformer.id ? transformer : undefined),
      getMilestone: () => undefined,
    });

    expect(focus).toEqual({
      centerId: 'model-transformer',
      center: transformer,
      candidates: [],
      needsChoice: false,
    });
  });

  it('does not invent a lineage center from a milestone; it only offers related entities', () => {
    const focus = resolveLineageFocus({
      selected: { kind: 'milestone', id: milestone.id },
      getEntity: (id) => (id === transformer.id ? transformer : id === google.id ? google : undefined),
      getMilestone: (id) => (id === milestone.id ? milestone : undefined),
    });

    expect(focus.centerId).toBeUndefined();
    expect(focus.center).toBeUndefined();
    expect(focus.needsChoice).toBe(true);
    expect(focus.candidates.map((item) => item.id)).toEqual(['model-transformer', 'org-google-brain']);
  });

  it('honors an explicit entity focus without overwriting the milestone selection', () => {
    const focus = resolveLineageFocus({
      selected: { kind: 'milestone', id: milestone.id },
      entityFocusId: 'model-transformer',
      getEntity: (id) => (id === transformer.id ? transformer : id === google.id ? google : undefined),
      getMilestone: (id) => (id === milestone.id ? milestone : undefined),
    });

    expect(focus.centerId).toBe('model-transformer');
    expect(focus.center).toEqual(transformer);
    expect(focus.needsChoice).toBe(false);
    expect(focus.candidates.map((item) => item.id)).toEqual(['model-transformer', 'org-google-brain']);
  });
});
