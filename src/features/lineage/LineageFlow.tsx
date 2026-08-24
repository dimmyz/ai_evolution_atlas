import {
  Background,
  Position,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
  useStore,
  type Edge,
  type Node,
} from '@xyflow/react';
import { useMemo, type CSSProperties, type ReactNode } from 'react';
import type { EntityType, RelationType } from '../../data/types';
import { AtlasEdge } from './AtlasEdge';
import { AtlasNode } from './AtlasNode';
import type { GraphCanvasProps } from './GraphCanvas';
import '@xyflow/react/dist/style.css';

type AtlasNodeData = {
  label: string;
  entityType: EntityType;
  isCenter: boolean;
  mark: string;
};

type AtlasEdgeData = {
  type: RelationType;
  label: string;
  confidence: 'high' | 'medium' | 'low';
  descent: boolean;
};

const nodeTypes = { atlas: AtlasNode };
const edgeTypes = { atlas: AtlasEdge };
const NODE_WIDTH = 196;
const NODE_HEIGHT = 64;

const canvasStyle: CSSProperties = {
  background: 'transparent',
};

function ZoomTools() {
  const { zoomIn, zoomOut, fitView } = useReactFlow();
  return (
    <div className="lineage-zoom" role="group" aria-label="Map controls">
      <button type="button" onClick={() => void zoomIn()}>
        Zoom in
      </button>
      <button type="button" onClick={() => void zoomOut()}>
        Zoom out
      </button>
      <button type="button" onClick={() => void fitView({ padding: 0.2 })}>
        Fit
      </button>
    </div>
  );
}

export function lineageCanvasReady(
  expectedEdgeCount: number,
  edges: ReadonlyArray<{ source: string; target: string }>,
  nodeLookup: { get: (id: string) => { measured?: { width?: number; height?: number } } | undefined },
): boolean {
  if (expectedEdgeCount === 0) {
    return true;
  }
  if (edges.length === 0) {
    return false;
  }
  return edges.some((edge) => {
    const source = nodeLookup.get(edge.source);
    const target = nodeLookup.get(edge.target);
    return Boolean(source?.measured?.width && target?.measured?.width);
  });
}

function CanvasFrame({ expectedEdgeCount, children }: { expectedEdgeCount: number; children: ReactNode }) {
  const ready = useStore((state) => lineageCanvasReady(expectedEdgeCount, state.edges, state.nodeLookup));
  return (
    <div className="lineage-canvas" data-testid={ready ? 'lineage-canvas' : 'lineage-canvas-pending'}>
      {children}
    </div>
  );
}

function FlowInner({ graph, onSelect }: GraphCanvasProps) {
  const nodes = useMemo<Node<AtlasNodeData>[]>(
    () =>
      graph.nodes.map((node) => ({
        id: node.id,
        type: 'atlas',
        position: { x: node.x, y: node.y },
        data: {
          label: node.label,
          entityType: node.entityType,
          isCenter: node.isCenter,
          mark: node.mark,
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        draggable: false,
        width: NODE_WIDTH,
        height: NODE_HEIGHT,
        style: { width: NODE_WIDTH, height: NODE_HEIGHT },
      })),
    [graph.nodes],
  );

  const edges = useMemo<Edge<AtlasEdgeData>[]>(
    () =>
      graph.edges.map((edge) => ({
        id: edge.id,
        type: 'atlas',
        source: edge.from,
        target: edge.to,
        data: {
          type: edge.type,
          label: edge.label,
          confidence: edge.confidence,
          descent: edge.descent,
        },
      })),
    [graph.edges],
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      nodesDraggable={false}
      nodesConnectable={false}
      elementsSelectable
      panOnDrag
      zoomOnScroll
      fitView
      fitViewOptions={{ padding: 0.24 }}
      minZoom={0.6}
      maxZoom={1.6}
      proOptions={{ hideAttribution: true }}
      style={canvasStyle}
      onNodeClick={(_event, node) => onSelect?.({ kind: 'entity', id: node.id })}
    >
      <Background gap={28} size={1} color="rgba(243, 238, 228, 0.06)" />
      <ZoomTools />
    </ReactFlow>
  );
}

export function LineageFlow(props: GraphCanvasProps) {
  return (
    <ReactFlowProvider>
      <CanvasFrame expectedEdgeCount={props.graph.edges.length}>
        <FlowInner {...props} />
      </CanvasFrame>
    </ReactFlowProvider>
  );
}
