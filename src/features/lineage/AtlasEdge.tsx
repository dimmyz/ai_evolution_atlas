import { BaseEdge, EdgeLabelRenderer, getSmoothStepPath, type Edge, type EdgeProps } from '@xyflow/react';
import type { RelationType } from '../../data/types';
import { ATLAS_ARROW_MARKER_ID } from './LineageArrowMarker';

export type AtlasEdgeData = {
  type: RelationType;
  label: string;
  confidence: 'high' | 'medium' | 'low';
  descent: boolean;
};

const DASH: Partial<Record<RelationType, string>> = {
  same_family_as: '7 6',
  uses_architecture: '2 7',
  contemporary_with: '1 8',
  influenced_by: '10 5 2 5',
};

export function AtlasEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
}: EdgeProps<Edge<AtlasEdgeData>>) {
  const [path, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    borderRadius: 16,
  });
  const kind = data?.type ?? 'contemporary_with';
  const descent = data?.descent === true;
  const markerId = `${ATLAS_ARROW_MARKER_ID}-${id}`;

  return (
    <>
      <defs>
        <marker
          id={markerId}
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
      <BaseEdge
        id={id}
        path={path}
        className={`lineage-rf-edge lineage-rf-edge-${kind}`}
        markerEnd={`url(#${markerId})`}
        style={{
          strokeDasharray: DASH[kind],
          strokeWidth: descent ? 2.4 : 1.6,
        }}
      />
      <EdgeLabelRenderer>
        <span
          className="lineage-edge-label"
          style={{
            transform: `translate(-50%, -120%) translate(${labelX}px, ${labelY}px)`,
          }}
        >
          {data?.label}
        </span>
      </EdgeLabelRenderer>
    </>
  );
}
