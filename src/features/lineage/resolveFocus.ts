import type { EntityRecord, MilestoneRecord } from '../../data/types';

export type SelectedTarget =
  | { kind: 'entity'; id: string }
  | { kind: 'milestone'; id: string };

export type LineageFocus = {
  centerId?: string;
  center?: EntityRecord;
  candidates: EntityRecord[];
  needsChoice: boolean;
};

export type ResolveLineageFocusArgs = {
  selected?: SelectedTarget;
  entityFocusId?: string;
  getEntity: (id: string) => EntityRecord | undefined;
  getMilestone: (id: string) => MilestoneRecord | undefined;
};

export function resolveLineageFocus({
  selected,
  entityFocusId,
  getEntity,
  getMilestone,
}: ResolveLineageFocusArgs): LineageFocus {
  if (!selected) {
    return { candidates: [], needsChoice: false };
  }

  if (selected.kind === 'entity') {
    const center = getEntity(selected.id);
    return {
      centerId: center?.id,
      center,
      candidates: [],
      needsChoice: false,
    };
  }

  const milestone = getMilestone(selected.id);
  const candidates = (milestone?.entity_ids ?? [])
    .map((id) => getEntity(id))
    .filter((entity): entity is EntityRecord => Boolean(entity));

  const chosen = entityFocusId ? candidates.find((entity) => entity.id === entityFocusId) : undefined;

  return {
    centerId: chosen?.id,
    center: chosen,
    candidates,
    needsChoice: !chosen && candidates.length > 0,
  };
}
