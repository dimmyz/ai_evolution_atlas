import type { AtlasRepository, PublishedAtlas } from '../data/types';
import { toDetailModel } from '../features/timeline/detailModel';
import type { DetailModel, DetailRelated, DetailSource } from '../shell/types';
import type { SelectedTarget } from './atlasActions';

function sourcesFor(ids: string[] | undefined, atlas: PublishedAtlas): DetailSource[] | undefined {
  const sources = (ids ?? [])
    .map((id) => atlas.sourcesById[id])
    .filter((source): source is NonNullable<typeof source> => Boolean(source))
    .map((source) => ({ id: source.id, title: source.title, url: source.url }));
  return sources.length > 0 ? sources : undefined;
}

export function selectDetailModel(
  selected: SelectedTarget | undefined,
  atlas: PublishedAtlas,
  repo: AtlasRepository,
): DetailModel | null {
  if (!selected) {
    return null;
  }

  if (selected.kind === 'milestone') {
    const milestone = atlas.milestonesById[selected.id];
    return milestone ? toDetailModel(milestone, atlas) : null;
  }

  const entity = atlas.entitiesById[selected.id];
  if (!entity) {
    return null;
  }

  const neighborhood = repo.neighborhood(entity.id);
  const relatedEntities: DetailRelated[] = neighborhood.nodes
    .filter((node) => node.id !== entity.id)
    .map((node) => ({
      id: node.id,
      label: node.name,
      kind: node.entity_type,
      targetKind: 'entity',
    }));
  const relatedMilestones: DetailRelated[] = atlas.publishedMilestones
    .filter((milestone) => (milestone.entity_ids ?? []).includes(entity.id))
    .map((milestone) => ({
      id: milestone.id,
      label: milestone.title,
      kind: 'milestone',
      targetKind: 'milestone',
    }));
  const organization =
    entity.entity_type === 'organization'
      ? entity.name
      : neighborhood.nodes.find((node) => node.entity_type === 'organization')?.name;

  return {
    title: entity.name,
    organization,
    tags: [entity.entity_type],
    related: relatedEntities.length + relatedMilestones.length > 0 ? [...relatedEntities, ...relatedMilestones] : undefined,
    sources: sourcesFor(entity.source_ids, atlas),
  };
}
