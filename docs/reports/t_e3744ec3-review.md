# Review — t_e3744ec3 / AIH-09 Lineage graph

Verdict: approved

This review approves the isolated AIH-09 lineage deliverable. It implements a bounded, deterministic, custom-styled React Flow neighborhood with inspectable relation metadata, explicit milestone-to-entity focus choice, and a keyboard-reachable entity list. App/shell composition and integrated cross-feature selection remain downstream work as required by the card boundary.

## Workspace provenance

- Declared workspace: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- `pwd`: `/d/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- `git rev-parse --show-toplevel`: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- HEAD: `f5d61c02e5c9e7cf08f347be6d82ffadd400ee90`
- `.hermes.md` contains `AI Evolution Atlas`
- The declared workspace and Git root match the card exactly.

## Artifact inspected

- `src/features/lineage/boundNeighborhood.ts`
- `src/features/lineage/layoutLineage.ts`
- `src/features/lineage/graphModel.ts`
- `src/features/lineage/resolveFocus.ts`
- `src/features/lineage/LineageView.tsx`
- `src/features/lineage/GraphCanvas.tsx`
- `src/features/lineage/LineageFlow.tsx`
- `src/features/lineage/AtlasNode.tsx`
- `src/features/lineage/AtlasEdge.tsx`
- `src/features/lineage/lineage.css`
- `src/features/lineage/index.ts`
- `src/features/lineage/preview.html` and `preview.tsx`
- `src/features/lineage/__tests__/*` (5 files)
- `evidence/lineage-1440x900.png`
- `package.json` and `package-lock.json` dependency addition for the ADR-001-required React Flow implementation
- Canon: `spec/ai-atlas/02-product-contract.md`, `spec/ai-atlas/04-data-contract.md`, `spec/ai-atlas/07-acceptance.md`, `docs/adr/ADR-001-application-baseline.md`, `docs/adr/ADR-003-visualization-composition.md`, `docs/adr/ADR-004-static-content-and-validation-boundaries.md`

No implementation files were modified during review.

## Acceptance mapping

- `boundNeighborhood` keeps the selected center, caps the default graph at eight nodes, deterministically orders neighbors, filters dangling edges, and exposes omitted records as an explicit related-records path instead of creating a hairball.
- `layoutLineage` uses a deterministic fixed center and incoming/outgoing columns with stable spacing; the layout tests cover determinism, unique coordinates, and incoming-side placement.
- `buildLineageGraph` preserves entity classes, relation types, confidence, source IDs, rationale, inspectability, and an explicit descent flag. Only `successor_of` is treated as descent; other relation types remain inspectable and are labeled as non-descent in the relation list.
- `LineageView` does not silently infer a lineage center from a selected milestone. It presents the milestone's related entities as explicit choices and honors an entity focus without overwriting the milestone selection.
- The graph uses custom `AtlasNode` and `AtlasEdge` renderers, product-owned layout, legend, controls, and local styling. React Flow attribution/minimap/controls are not exposed, and the evidence screenshot shows a populated Transformer neighborhood (T5, PaLM, GPT-4) with custom warm editorial styling rather than stock graph chrome or placeholder nodes.
- The graph supports pan/zoom/fit controls and node selection. The adjacent native entity button list provides a keyboard-reachable selection path; the independent browser check reached the first entity button with Tab and found four entity buttons.
- The 1440x900 evidence file is a real `1440 x 900` PNG. Visual inspection found a readable populated subgraph, distinct node marks, relation legend, visible relation evidence/confidence, and no clipping or overlapping text that blocks use.
- The card explicitly reserves App/shell wiring for AIH-12. This review therefore accepts the feature as an isolated exportable module, not as final integrated timeline/detail state.

## Independent execution evidence

Executed in the declared workspace:

```text
npm.cmd exec -- vitest run src/features/lineage
```

Observed: 5 lineage test files passed, 13 lineage tests passed.

```text
npm.cmd test
```

Observed: workspace guard passed; 23 test files passed, 82 tests passed.

```text
npm.cmd run typecheck
```

Observed: exit code 0.

```text
npm.cmd run build
```

Observed: TypeScript/Vite production build passed; Vite 8.2.2 generated `dist/` assets.

```text
npm.cmd run test:e2e
```

Observed: 2 Chromium tests passed; no reported browser failures.

Additional real local-server browser check:

- Loaded `http://127.0.0.1:5173/src/features/lineage/preview.html` at 1440x900.
- Confirmed title `AI Evolution Atlas — lineage neighborhood`, rendered lineage view, four entity buttons, one map-control group, and no `pageerror` events.
- Clicked the T5 entity button and confirmed the rendered view updated to include T5.
- Pressed Tab and confirmed focus landed on the first native entity button.

```text
git diff --check
```

Observed: passed for tracked changes; the feature files and evidence were also loaded and exercised by the successful typecheck, test, build, and browser runs.

## Scope and downstream caveat

The feature implementation is isolated under `src/features/lineage/**`; `package.json` and `package-lock.json` contain the required `@xyflow/react` dependency addition and are the only shared-file hotspot noted by the worker. No App.tsx or shell wiring was introduced. Downstream integration must connect the canonical selection controller, detail model, and final E2E flow; it must preserve this module's bounded neighborhood, source/confidence metadata, explicit milestone focus choice, and mobile list fallback.

## Reviewer checks

- [x] Correct workspace and repository verified.
- [x] Original product, data, ADR, and sprint acceptance contracts read.
- [x] Lineage artifact inspected cold before relying on handoff claims.
- [x] Focused lineage tests passed as part of full suite: 5 files / 13 tests reported by handoff and included in the 23-file / 82-test run.
- [x] Full test suite passed: 23 files / 82 tests.
- [x] Typecheck passed.
- [x] Production build passed.
- [x] Playwright Chromium smoke passed: 2 tests.
- [x] Real local Vite preview interaction, keyboard focus, and page-error checks passed.
- [x] Evidence screenshot inspected and verified as 1440x900.
- [x] No implementation files modified by reviewer.
