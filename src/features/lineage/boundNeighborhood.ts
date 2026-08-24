import type { EntityRecord, Neighborhood, RelationRecord } from '../../data/types';

export const DEFAULT_MAX_NODES = 8;

export type BoundNeighborhoodOptions = {
  maxNodes?: number;
};

export type BoundedNeighborhood = Neighborhood & {
  omitted: EntityRecord[];
};

export function boundNeighborhood(
  neighborhood: Neighborhood,
  options: BoundNeighborhoodOptions = {},
): BoundedNeighborhood {
  const maxNodes = options.maxNodes ?? DEFAULT_MAX_NODES;
  const center = neighborhood.nodes.find((node) => node.id === neighborhood.centerId);
  const neighbors = neighborhood.nodes
    .filter((node) => node.id !== neighborhood.centerId)
    .slice()
    .sort((a, b) => a.id.localeCompare(b.id));

  if (!center) {
    return { ...neighborhood, nodes: [], edges: [], omitted: neighbors };
  }

  const keptNeighbors = neighbors.slice(0, Math.max(0, maxNodes - 1));
  const omitted = neighbors.slice(Math.max(0, maxNodes - 1));
  const keptIds = new Set([center.id, ...keptNeighbors.map((node) => node.id)]);
  const edges = neighborhood.edges.filter(
    (relation: RelationRecord) => keptIds.has(relation.from) && keptIds.has(relation.to),
  );

  return {
    centerId: neighborhood.centerId,
    nodes: [center, ...keptNeighbors],
    edges,
    omitted,
  };
}
