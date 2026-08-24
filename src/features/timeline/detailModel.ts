import type { DetailModel } from '../../shell/types';
import type { MilestoneRecord, PublishedAtlas } from '../../data/types';
import { parsePrecisionDate } from './precision';

export function toDetailModel(milestone: MilestoneRecord, atlas: PublishedAtlas): DetailModel {
  const parsed = parsePrecisionDate(milestone.date, milestone.date_precision);
  const relatedEntities = (milestone.entity_ids ?? [])
    .map((id) => atlas.entitiesById[id])
    .filter((entity): entity is NonNullable<typeof entity> => Boolean(entity));

  const organization = relatedEntities.find((entity) => entity.entity_type === 'organization');
  const related = relatedEntities.filter((entity) => entity.id !== organization?.id);
  const sources = milestone.source_ids
    .map((id) => atlas.sourcesById[id])
    .filter((source): source is NonNullable<typeof source> => Boolean(source))
    .map((source) => ({ id: source.id, title: source.title, url: source.url }));

  return {
    title: milestone.title,
    dateLabel: parsed.label,
    organization: organization?.name,
    summary: milestone.summary,
    whyItMatters: milestone.why_it_matters,
    tags: milestone.category ? [milestone.category] : undefined,
    related:
      related.length > 0
        ? related.map((entity) => ({
            id: entity.id,
            label: entity.name,
            kind: entity.entity_type,
            targetKind: 'entity' as const,
          }))
        : undefined,
    sources: sources.length > 0 ? sources : undefined,
  };
}
