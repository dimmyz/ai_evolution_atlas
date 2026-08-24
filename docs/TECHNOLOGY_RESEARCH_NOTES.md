# Technology research notes — visualization options

Architect must make the final bounded choice in ADR. These are researched starting options.

## Timeline

**D3 time scales** are a strong fit for temporal axes and date-to-position mapping. D3 supports temporal scales and sensible calendar ticks.

Reference: `https://d3js.org/d3-scale/time`

## Lineage graph option A — React Flow

Strengths:
- React-native node/edge UI;
- custom nodes and edges;
- built-in pan/zoom/selection;
- good fit for a curated directed lineage map;
- easy to style editorial cards as nodes.

Risk:
- default appearance can look like a workflow editor unless heavily customized;
- layout strategy still needs a decision.

Reference: `https://reactflow.dev/`

## Lineage graph option B — Cytoscape.js

Strengths:
- mature graph/network visualization and analysis;
- interactive pan/zoom/selection;
- many layouts;
- suited to network semantics.

Risk:
- React integration/styling may require more glue;
- easy to create a dense “hairball”.

Reference: `https://js.cytoscape.org/`

## Seed recommendation

Baseline application stack:
- Vite;
- React;
- TypeScript;
- local static content;
- Playwright Chromium from first scaffold.

Suggested first architecture experiment:
- D3 for timeline scale/axis;
- React Flow **or** Cytoscape for a deliberately small lineage neighborhood.

Architect should decide after a tiny spike/ADR; do not install both graph libraries into production just because both were researched.
