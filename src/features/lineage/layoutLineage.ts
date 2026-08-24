import type { Neighborhood } from '../../data/types';

export const LAYOUT_ORIGIN = { x: 420, y: 200 } as const;
const COLUMN_GAP = 340;
const ROW_GAP = 128;

export type PlacedNode = {
  id: string;
  x: number;
  y: number;
};

function neighborSide(centerId: string, from: string, to: string): 'left' | 'right' {
  if (to === centerId && from !== centerId) {
    return 'left';
  }
  return 'right';
}

export function layoutLineage(neighborhood: Neighborhood): PlacedNode[] {
  const incoming: string[] = [];
  const outgoing: string[] = [];
  const seen = new Set<string>([neighborhood.centerId]);

  const edges = neighborhood.edges.slice().sort((a, b) => {
    const aKey = `${a.from}->${a.to}:${a.type}`;
    const bKey = `${b.from}->${b.to}:${b.type}`;
    return aKey.localeCompare(bKey);
  });

  for (const edge of edges) {
    const other = edge.from === neighborhood.centerId ? edge.to : edge.from;
    if (seen.has(other)) {
      continue;
    }
    if (!neighborhood.nodes.some((node) => node.id === other)) {
      continue;
    }
    seen.add(other);
    if (neighborSide(neighborhood.centerId, edge.from, edge.to) === 'left') {
      incoming.push(other);
    } else {
      outgoing.push(other);
    }
  }

  for (const node of neighborhood.nodes) {
    if (!seen.has(node.id)) {
      outgoing.push(node.id);
      seen.add(node.id);
    }
  }

  incoming.sort((a, b) => a.localeCompare(b));
  outgoing.sort((a, b) => a.localeCompare(b));

  const placed: PlacedNode[] = [{ id: neighborhood.centerId, x: LAYOUT_ORIGIN.x, y: LAYOUT_ORIGIN.y }];

  function placeColumn(ids: string[], x: number) {
    const startY = LAYOUT_ORIGIN.y - ((ids.length - 1) * ROW_GAP) / 2;
    ids.forEach((id, index) => {
      placed.push({ id, x, y: startY + index * ROW_GAP });
    });
  }

  placeColumn(incoming, LAYOUT_ORIGIN.x - COLUMN_GAP);
  placeColumn(outgoing, LAYOUT_ORIGIN.x + COLUMN_GAP);

  return placed;
}
