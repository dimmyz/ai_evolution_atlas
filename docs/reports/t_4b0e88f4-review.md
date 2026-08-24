# Review — t_4b0e88f4 (AIH-12)

- verdict: `rework_required`
- reviewer: reviewer
- review_round: 1 (artifact-led, followed by independent execution)
- project_id: ai-evolution-atlas
- workspace: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- git_root: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- HEAD observed: `f5d61c02e5c9e7cf08f347be6d82ffadd400ee90`
- `.hermes.md` marker: `AI Evolution Atlas`

## Scope inspected

Read the original task body, the AIH-11 critic report, the AIH-12 scope record, the canonical product/information-architecture/visual/acceptance contracts, and the integrated composition and feature paths listed in the handoff. No implementation files were modified by this review.

The candidate does successfully compose the bundled atlas, discovery panel, timeline, lineage view, and detail surface through `src/app/App.tsx`. The discovery label, clear action, empty-results recovery, detail source strip, source section ordering, relation source titles/links, related-item buttons, timeline mark buttons, and React Flow graph wiring are present in the artifact.

## Independent verification

Commands run in the declared workspace:

- `npm.cmd test` — passed: 28 test files, 103 tests; workspace guard passed.
- `npm.cmd run typecheck` — passed.
- `npm.cmd run build` — passed with Vite 8.2.2; 398 modules transformed.
- `npm.cmd run validate:data` — passed: 36 sources, 36 entities, 36 milestones, 16 relations.
- `npm.cmd run test:e2e` — passed: 3 Chromium tests, including `integrated-slice.spec.ts`.
- A separate Playwright runtime exercise selected the first milestone, searched/selects GPT-4, opened lineage, selected an entity, exercised the empty-result and clear-filter paths, and observed no page errors. The source strip and source links were present in the current runtime.

## Blocking findings

### 1. Graph arrowheads are not actually rendered

`src/features/lineage/AtlasEdge.tsx:47` passes `MarkerType.ArrowClosed` directly as `markerEnd`. In the current browser DOM, the edge path has `marker-end="arrowclosed"`, while the document contains zero SVG `<marker>` definitions. The focused runtime screenshot therefore shows dotted relation strokes ending at the target node with no visible direction cue. This fails the AIH-11 must-fix “encode graph direction on the graph itself” and the product contract's requirement that relation direction be inspectable.

Required correction: render a real, visible arrowhead (for example, define an SVG marker and pass a valid `url(#...)` marker reference, or use a verified React Flow marker implementation). Add/extend a test or browser assertion that confirms the marker is present and visible in the rendered graph, not merely that the source contains an arrow-related constant.

Independent runtime evidence:

```text
{"marker":{"markerEnd":"arrowclosed","markerDefinitions":0},"detail":"Transformer paper","graphHeading":"Transformer"}
```

### 2. The initial lineage entity choice does not update the shared detail selection

`src/features/lineage/LineageView.tsx:160-166` routes the first user-visible “Choose an entity to inspect” buttons to `onEntityFocus` only. `src/app/App.tsx:126-129` handles that callback by dispatching only `setEntityFocus`; it does not update `state.selected`. As a result, after selecting the `Transformer technology` choice, the graph heading is `Transformer` but the shared reading surface still shows `Transformer paper`. The user-visible lineage choice and the detail surface disagree, despite the card's shared controller requirement and the product contract's one-selected-entity rule.

Required correction: make the initial lineage entity-choice path update the same selected target/detail model as graph-node and inspectable-list selection (or provide an explicit, documented distinction between graph focus and selected detail). Add an integrated E2E assertion that choosing the initial lineage entity updates the detail heading and preserves the same selection when switching views.

Independent runtime evidence:

```text
{"detail":"Transformer paper","graphHeading":"Transformer"}
```

### 3. Entity selections have no timeline representation

`src/features/timeline/Timeline.tsx:26-28` considers a timeline item selected only when `selected.kind === 'milestone'`. Entity selections from lineage or related-detail navigation therefore leave every timeline mark/list item unselected when the user returns to Timeline, even though the shared state contains a selected entity. This is a cross-view coherence gap against `spec/ai-atlas/02-product-contract.md` and `03-information-architecture.md`, which require one selected entity to drive timeline highlight, detail, and lineage neighborhood.

Required correction: define and implement the intended timeline representation for an entity selection (for example, highlight its associated milestones, or clearly reset/translate the selection with an accessible announcement), and cover the behavior in an integrated browser test. Do not silently leave the timeline with no selected representation while the detail/lineage surfaces show an entity.

## Deferred/non-blocking ownership notes

- The absent `evidence/mobile-390x844.png` and integrated screenshot-pack recapture belong to downstream AIH-14 in the supplied scope record; they were not used as the reason for this same-card rework request.
- The 16 published relations versus the 40–70 target is explicitly recorded as a factual/data/Strateg decision in `docs/reports/aih12-scope.md`; this review does not ask the integrator to invent unsupported edges.
- The automated gates are green, but they do not cover the three behavioral/visual defects above; passing source-level tests is not sufficient for approval.

## Required verdict transition

`rework_required`: correct the rendered marker semantics, make the initial lineage selection update shared detail state, and provide a coherent timeline representation for entity selection. Re-run the full gates and integrated browser coverage before requesting review again.
