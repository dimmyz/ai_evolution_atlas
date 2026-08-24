import { describe, expect, it } from 'vitest';
import { lineageCanvasReady } from '../LineageFlow';

describe('lineageCanvasReady', () => {
  it('is ready when the neighborhood has no edges', () => {
    expect(lineageCanvasReady(0, [], new Map())).toBe(true);
  });

  it('stays pending until store edges exist and a related pair is measured', () => {
    const nodes = new Map([
      ['a', { measured: undefined }],
      ['b', { measured: { width: 196, height: 64 } }],
    ]);
    expect(lineageCanvasReady(1, [], nodes)).toBe(false);
    expect(lineageCanvasReady(1, [{ source: 'a', target: 'b' }], nodes)).toBe(false);

    nodes.set('a', { measured: { width: 196, height: 64 } });
    expect(lineageCanvasReady(1, [{ source: 'a', target: 'b' }], nodes)).toBe(true);
  });
});
