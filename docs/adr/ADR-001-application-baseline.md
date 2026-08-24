# ADR-001 — Application baseline

**Status:** accepted
**Date:** 2026-08-24

## Context

Sprint 1 is a static, content-rich interactive browser product. It needs inspectable local data, a reliable browser test surface, and deliberately designed visualization rather than a generic graph application.

## Decision

Use the following baseline:

- React + TypeScript + Vite for the client application.
- Versioned local static content authored under `data/`, validated in Node/TypeScript before build and test.
- A local CSS design-token and component styling system; core UI and data must not depend on a runtime third-party CDN.
- Playwright Chromium from the first scaffold for smoke, interaction, accessibility-oriented keyboard checks, and screenshot capture.
- D3 utilities only for the timeline's temporal scale, ticks, and date formatting; React owns DOM rendering and interaction state.
- React Flow for the deliberately bounded lineage neighborhood; custom nodes, edges, layout, controls, and semantics are required. Cytoscape is not installed for Sprint 1.

## Rationale

The baseline remains aligned with the seed recommendation while making its two visualization choices explicit. React Flow supplies pan, zoom, selection, and a React-native custom-rendering seam appropriate for a curated directed subgraph. Cytoscape's broader network-analysis and layout capability is unnecessary for the focused graph required here and would add integration/styling surface.

D3 time utilities solve temporal positioning and sensible calendar ticks without making a second rendering system responsible for timeline interaction. This preserves a single React selection/filter state and makes component-level tests straightforward.

## Consequences

- The product is buildable and testable without a backend.
- The graph must be editorially composed and visually restyled; library defaults are explicitly unacceptable.
- Graph scope is a selected entity's bounded, evidence-backed neighborhood, not a rendering of all relations.
- Data validation is a first-class local test seam and must reject invalid or unsupported publishable records.
- The scaffold card owns dependency installation, Vite/TypeScript/Playwright configuration, and workspace verification; this decision does not implement them.

## Alternatives considered

### Cytoscape.js for lineage

Rejected for Sprint 1. It is capable, but its network-oriented API and layout breadth exceed the focused lineage requirement and increase React integration work. Reconsider only if a future scope requires dense network analysis or layouts unavailable through the chosen bounded-graph approach.

### Full D3 rendering for timeline

Rejected. It would split rendering/event ownership between imperative D3 DOM manipulation and React. D3 utilities retain the useful temporal math while React retains application state, DOM, and test seams.

### Server-backed/CMS content

Rejected for Sprint 1 because static, versioned content is required and no backend is in scope.
