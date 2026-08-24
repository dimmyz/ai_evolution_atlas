import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Position, ReactFlowProvider } from '@xyflow/react';
import { describe, expect, it } from 'vitest';
import { AtlasEdge } from '../AtlasEdge';

describe('AtlasEdge', () => {
  it('renders a real SVG marker definition and a url(#) marker-end', () => {
    const html = renderToStaticMarkup(
      createElement(
        ReactFlowProvider,
        null,
        createElement(AtlasEdge, {
          id: 'rel-t5-transformer',
          sourceX: 12,
          sourceY: 20,
          targetX: 180,
          targetY: 20,
          sourcePosition: Position.Right,
          targetPosition: Position.Left,
          data: {
            type: 'uses_architecture',
            label: 'uses architecture',
            confidence: 'high',
            descent: false,
          },
        }),
      ),
    );

    expect(html).toMatch(/<marker\b/i);
    expect(html).toMatch(/marker-end="url\(#/);
    expect(html).not.toMatch(/marker-end="arrowclosed"/);
  });
});
