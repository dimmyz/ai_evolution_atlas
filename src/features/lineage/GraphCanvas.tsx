import { useEffect, useState, type ReactElement } from 'react';
import type { LineageGraph } from './graphModel';
import type { SelectedTarget } from './resolveFocus';

export type GraphCanvasProps = {
  graph: LineageGraph;
  onSelect?: (target: SelectedTarget) => void;
};

type FlowComponent = (props: GraphCanvasProps) => ReactElement;

export function GraphCanvas(props: GraphCanvasProps) {
  const [Flow, setFlow] = useState<FlowComponent | null>(null);

  useEffect(() => {
    let active = true;
    void import('./LineageFlow').then((mod) => {
      if (active) {
        setFlow(() => mod.LineageFlow);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  if (!Flow) {
    return <div className="lineage-canvas-placeholder" data-testid="lineage-canvas-pending" aria-hidden="true" />;
  }

  return <Flow {...props} />;
}
