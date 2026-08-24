import type { AtlasDocument, PublishedAtlas } from './types';
import { validateAtlas } from './validateAtlas';

function byId<T extends { id: string }>(items: T[]): Record<string, T> {
  return Object.fromEntries(items.map((item) => [item.id, item]));
}

function chronologyKey(date: string): string {
  return date;
}

export function normalizeAtlas(doc: AtlasDocument): PublishedAtlas {
  const validation = validateAtlas(doc);
  if (!validation.ok) {
    const summary = validation.issues.map((issue) => issue.code).join(', ');
    throw new Error(`Cannot normalize invalid atlas: ${summary}`);
  }

  const publishedMilestones = [...doc.milestones]
    .filter((item) => item.status === 'verified')
    .sort((left, right) => chronologyKey(left.date).localeCompare(chronologyKey(right.date)));

  const publishedRelations = doc.relations.filter((item) => item.status === 'verified');

  return {
    sourcesById: byId(doc.sources),
    entitiesById: byId(doc.entities),
    milestonesById: byId(publishedMilestones),
    publishedMilestones,
    publishedRelations,
  };
}
