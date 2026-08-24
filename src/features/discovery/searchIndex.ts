import type { EntityRecord, MilestoneRecord, PublishedAtlas } from '../../data/types';

export type SearchRecordKind = 'milestone' | 'entity';

export type SearchRecord = {
  kind: SearchRecordKind;
  id: string;
  title: string;
  category: string;
  year?: number;
  organizationIds: string[];
  sourceIds: string[];
  haystack: string;
};

function milestoneYear(date: string): number | undefined {
  const match = date.match(/^(\d{4})/);
  return match ? Number(match[1]) : undefined;
}

function milestoneRecord(milestone: MilestoneRecord): SearchRecord {
  return {
    kind: 'milestone',
    id: milestone.id,
    title: milestone.title,
    category: milestone.category,
    year: milestoneYear(milestone.date),
    organizationIds: (milestone.entity_ids ?? []).filter((id) => id.startsWith('org-')),
    sourceIds: milestone.source_ids,
    haystack: [
      milestone.title,
      milestone.summary,
      milestone.why_it_matters ?? '',
      milestone.category,
    ]
      .join(' ')
      .toLowerCase(),
  };
}

function entityRecord(entity: EntityRecord): SearchRecord {
  return {
    kind: 'entity',
    id: entity.id,
    title: entity.name,
    category: entity.entity_type,
    organizationIds: entity.entity_type === 'organization' ? [entity.id] : [],
    sourceIds: entity.source_ids ?? [],
    haystack: `${entity.name} ${entity.entity_type}`.toLowerCase(),
  };
}

export function buildSearchIndex(atlas: PublishedAtlas): SearchRecord[] {
  const milestones = atlas.publishedMilestones.map(milestoneRecord);
  const entities = Object.values(atlas.entitiesById).map(entityRecord);
  return [...milestones, ...entities];
}
