import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
import type { EntityType } from '../../data/types';

export type AtlasNodeData = {
  label: string;
  entityType: EntityType;
  isCenter: boolean;
  mark: string;
};

export function AtlasNode({ data }: NodeProps<Node<AtlasNodeData>>) {
  return (
    <article
      className={`lineage-rf-node lineage-rf-node-${data.entityType}${data.isCenter ? ' is-center' : ''}`}
    >
      <Handle type="target" position={Position.Left} className="lineage-handle" isConnectable={false} />
      <span className={`lineage-mark lineage-mark-${data.entityType}`} aria-hidden="true" />
      <span className="lineage-rf-copy">
        <strong>{data.label}</strong>
        <em>{data.entityType}</em>
      </span>
      <Handle type="source" position={Position.Right} className="lineage-handle" isConnectable={false} />
    </article>
  );
}
