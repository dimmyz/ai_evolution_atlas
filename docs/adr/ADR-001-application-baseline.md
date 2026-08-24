# ADR-001 — Application baseline (seed)

**Status:** proposed; Architect must confirm or supersede before implementation.

## Context

Sprint 1 is a static, content-rich interactive browser product. We want excellent inspectability/testability without a backend.

## Seed decision

Use:
- React + TypeScript + Vite;
- static versioned data validated at build/test time;
- Playwright Chromium for E2E/screenshot harness;
- CSS/design-token system without dependence on a remote runtime CDN.

## Visualization decision left to Architect

Timeline: D3/time-scale style approach is favored.

Lineage graph: Architect compares a small React Flow and/or Cytoscape spike and chooses one. Do not ship both unless there is a real requirement.

## Consequences

Pros:
- familiar browser stack;
- good testing surface;
- easy static build;
- features can be isolated by directory.

Cons:
- visual quality still requires deliberate design, not library defaults;
- data/graph semantics require custom validation.
