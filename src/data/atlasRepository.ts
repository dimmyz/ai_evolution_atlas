import type {
  AtlasRepository,
  EntityRecord,
  MilestoneFilters,
  MilestoneRecord,
  Neighborhood,
  PublishedAtlas,
} from './types';

function matchesQuery(milestone: MilestoneRecord, query: string): boolean {
  const haystack = `${milestone.title} ${milestone.summary} ${milestone.why_it_matters ?? ''}`.toLowerCase();
  return haystack.includes(query.toLowerCase());
}

export function createAtlasRepository(atlas: PublishedAtlas): AtlasRepository {
  return {
    getEntity(id: string): EntityRecord | undefined {
      return atlas.entitiesById[id];
    },
    getMilestone(id: string): MilestoneRecord | undefined {
      return atlas.milestonesById[id];
    },
    listMilestones(): MilestoneRecord[] {
      return atlas.publishedMilestones;
    },
    filterMilestones(filters: MilestoneFilters): MilestoneRecord[] {
      return atlas.publishedMilestones.filter((milestone) => {
        if (filters.query && !matchesQuery(milestone, filters.query)) {
          return false;
        }
        if (filters.types && filters.types.length > 0 && !filters.types.includes(milestone.category)) {
          return false;
        }
        if (filters.organizationIds && filters.organizationIds.length > 0) {
          const related = new Set(milestone.entity_ids ?? []);
          if (!filters.organizationIds.some((id) => related.has(id))) {
            return false;
          }
        }
        return true;
      });
    },
    neighborhood(entityId: string): Neighborhood {
      const edges = atlas.publishedRelations.filter(
        (relation) => relation.from === entityId || relation.to === entityId,
      );
      const nodeIds = new Set<string>([entityId]);
      for (const edge of edges) {
        nodeIds.add(edge.from);
        nodeIds.add(edge.to);
      }
      const nodes = [...nodeIds]
        .map((id) => atlas.entitiesById[id])
        .filter((node): node is EntityRecord => Boolean(node));
      return { centerId: entityId, nodes, edges };
    },
  };
}
