import type { LineageGraph } from './graphModel';

export const ATLAS_ARROW_MARKER_ID = 'atlas-arrow';
export const ATLAS_ARROW_MARKER_END = `url(#${ATLAS_ARROW_MARKER_ID})`;

const NODE_WIDTH = 168;
const NODE_HEIGHT = 56;

export function lineageEdgePath(
  from: { x: number; y: number },
  to: { x: number; y: number },
): string {
  const x1 = from.x + NODE_WIDTH;
  const y1 = from.y + NODE_HEIGHT / 2;
  const x2 = to.x;
  const y2 = to.y + NODE_HEIGHT / 2;
  return `M ${x1} ${y1} L ${x2} ${y2}`;
}

export function LineageArrowMarker({ graph }: { graph: LineageGraph }) {
  const nodes = new Map(graph.nodes.map((node) => [node.id, node]));
  return (
    <svg className="lineage-arrow-defs" data-testid="lineage-arrow-defs" aria-hidden="true" focusable="false">
      <defs>
        <marker
          id={ATLAS_ARROW_MARKER_ID}
          viewBox="0 0 10 10"
          markerWidth="8"
          markerHeight="8"
          refX="8"
          refY="5"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--atlas-paper, #f3eee4)" />
        </marker>
      </defs>
      {graph.edges.map((edge) => {
        const from = nodes.get(edge.from);
        const to = nodes.get(edge.to);
        if (!from || !to) {
          return null;
        }
        return (
          <path
            key={edge.id}
            className={`lineage-graph-edge lineage-rf-edge lineage-rf-edge-${edge.type}`}
            d={lineageEdgePath(from, to)}
            fill="none"
            markerEnd={ATLAS_ARROW_MARKER_END}
          />
        );
      })}
    </svg>
  );
}
