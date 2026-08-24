# Architecture — Sprint 1 module map

**Status:** implementation handoff
**Date:** 2026-08-24

## Scope and decisions

This document implements the architecture decisions in:

- `docs/adr/ADR-001-application-baseline.md`
- `docs/adr/ADR-003-visualization-composition.md`
- `docs/adr/ADR-004-static-content-and-validation-boundaries.md`

The release is a static React/TypeScript application with local, versioned content. It has no authentication, CMS, runtime backend, automatic ingestion, or core CDN dependency. It is an editorial explainer, not a graph sandbox, model leaderboard, or exhaustive database.

## Runtime boundaries

```text
canonical data files
  -> data validation + normalization (pure)
  -> atlas repository/selectors (pure)
  -> application selection/filter controller
  -> timeline | lineage | discovery | detail panel
  -> local source links only on explicit user activation
```

The direction is intentional: feature modules may query the repository and dispatch application state events, but they must not mutate canonical data, infer relationships, or create their own selected-item state.

## Proposed file and module ownership

Paths below are the implementation contract for downstream cards. The scaffold may create supporting configuration files, but should not move feature ownership.

| Area | Primary files/directories | Owner | Responsibility | Test seam |
|---|---|---|---|---|
| Toolchain and test harness | `package.json`, `vite.config.ts`, `tsconfig.json`, `playwright.config.ts`, `scripts/verify-workspace.*`, `docs/BROWSER_SMOKE.md` | AIH-06 Scaffold | Local build, workspace fail-closed check, Playwright installation/configuration, browser smoke setup | `npm.cmd run verify:workspace`; build/typecheck; single boot smoke |
| Canonical content | `data/sources/sources.yaml`, `data/entities/*.yaml`, `data/milestones.yaml`, `data/relations.yaml`, `data/schema/atlas.schema.json` | AIH-05 Dataset | Reviewable source/entity/milestone/relation records; no UI code | Validator fixtures; schema and cross-reference tests |
| Validation + normalization | `src/data/validateAtlas.ts`, `src/data/normalizeAtlas.ts`, `src/data/atlasRepository.ts`, `src/data/types.ts`, `src/data/__tests__/**` | AIH-06 Scaffold creates infrastructure; AIH-05 supplies records; AIH-12 may only wire composition | Parse/validate canonical data; create publishable projection and pure queries | Unit tests with valid and invalid fixture sets; deterministic selector tests |
| App state and URL adapter | `src/app/atlasState.ts`, `src/app/atlasActions.ts`, `src/app/urlState.ts`, `src/app/__tests__/**` | AIH-12 Integration | One selection/filter state, optional query-state round trip, state-to-view model adapters | Reducer/controller tests; URL parse/serialize tests |
| Shared presentation | `src/components/**`, `src/styles/**`, `src/app/App.tsx` | AIH-07 Editorial shell, then AIH-12 root integration | Tokens, layout, focus treatments, shared detail shell; no feature-specific data rules | Component rendering, keyboard/focus assertions, screenshot baseline |
| Timeline feature | `src/features/timeline/**` | AIH-08 Timeline | D3 temporal utilities, precision-aware positions, eras, readable labels/clusters, selection dispatch | Pure date/position/layout tests; component keyboard-selection tests; selected timeline screenshot |
| Lineage feature | `src/features/lineage/**` | AIH-09 Lineage | React Flow bounded neighborhood, custom node/edge rendering, deterministic layout, graph selection dispatch | Pure neighborhood/layout tests; relation visual/inspectability tests; graph selection E2E/screenshot |
| Discovery feature | `src/features/discovery/**` | AIH-10 Discovery | Text, type, organization, era/year filters; result selection dispatch | Pure filter/search tests; filter/search E2E |
| Cross-feature acceptance | `tests/e2e/**`, `evidence/**` | AIH-13 Factual and AIH-14 Browser/visual | Product flow, browser error checks, data facts, screenshots | Playwright smoke and screenshot artifacts |

No parallel feature card should modify `src/app/App.tsx`, the global controller, or another feature directory. AIH-12 is the sole owner of final shared composition wiring after the isolated feature cards and critique.

## Data and view-model contract

### Canonical identity

All IDs are stable slugs. Canonical records use the entity classes and relationship vocabulary in `spec/ai-atlas/03-information-architecture.md`. Milestones reference entity and source IDs; relations retain `from`, `to`, type, confidence, evidence source IDs, rationale when present, and publish status.

### Publication projection

`normalizeAtlas` produces a `PublishedAtlas` only after validation succeeds. It includes:

- `entitiesById`, `milestonesById`, and `sourcesById`;
- chronology ordered without fabricating exact dates;
- `publishedMilestones` with only eligible citation IDs;
- `publishedRelations` with valid endpoints, allowed relation type, evidence, confidence, and status;
- selectors for filters, item detail, and relationship neighborhoods.

A milestone selection remains a milestone target. If its related entities permit lineage exploration, the UI offers an explicit entity focus choice; it must not silently invent a primary lineage target from chronology.

### Validation responsibility

The validator must fail on every invariant in `spec/ai-atlas/04-data-contract.md`, including duplicate IDs, dangling endpoints/references, invalid precision, unknown relation types, publishable milestones without source support, and strong directional relations without evidence. It must be callable as a script and from unit tests. The production UI must not provide a fallback that renders invalid data.

## Interaction-state contract

The app controller owns a single state shape equivalent to:

```ts
type SelectedTarget =
  | { kind: 'entity'; id: string }
  | { kind: 'milestone'; id: string };

type AtlasState = {
  selected?: SelectedTarget;
  filters: { query: string; types: string[]; organizationIds: string[]; eraOrYears?: string };
  activeView: 'timeline' | 'lineage';
};
```

This is a contract, not an instruction to introduce a global state library. React context plus reducer is sufficient unless implementation evidence identifies a real need. Selection events carry stable IDs only. Detail content is a selector result, never duplicated state.

Required behavior:

1. Timeline, graph, search, and related-item activation update the same controller with one discriminated target.
2. Filters are derived once through repository selectors and affect each view predictably.
3. A valid selected item remains visible after filtering where possible; an invalid selection is cleared with an announced, understandable state change.
4. URL serialization is a SHOULD. If added, it must parse invalid IDs safely and never become a second source of truth.

## Visualization contracts

### Timeline

- D3 supplies `scaleTime`/calendar ticks/date formatting only; React owns rendering and events.
- Date precision is displayed honestly: no synthetic January 1 values presented as exact history.
- Era bands are editorial labels.
- Dense periods use tested condensation/clustering or label strategies; overlap is not an accepted default.
- Each interactive milestone has a keyboard-operable control/semantic equivalent and exposes selected/focus state.

### Lineage

- React Flow renders only a curated, evidence-backed local neighborhood.
- Custom node treatments distinguish node class without relying only on color.
- Custom edge treatments distinguish relation type or make it inspectable; confidence/evidence is available in detail/edge inspection.
- Layout is deterministic from the same data and options for screenshot stability.
- Library branding, workflow handles, minimap, and default controls are not retained unless intentionally restyled and justified by interaction needs.
- Mobile can simplify graph interaction into a focused related-items/list representation while retaining selection and citations.

## Accessibility and source boundaries

- Native buttons/links are preferred for selectable timeline cards, filter controls, search results, and source links.
- Focus is visible against the editorial dark surface; selection is not color-only.
- Graph canvas interaction has an equivalent inspectable relationship/list path for keyboard and mobile readers.
- Sources appear in the selected item detail surface and remain associated with the supported item/claim. External links are never opened automatically.

## Required test layers

| Layer | Focus | Responsible cards |
|---|---|---|
| Pure unit | validator errors, normalization, chronology precision, filters, bounded neighborhoods, deterministic layout | AIH-05 through AIH-10 within owned modules |
| Component | timeline keyboard activation, selected state, citation rendering, graph node/edge inspection | AIH-07 through AIH-10 |
| Browser smoke | home loads; select timeline item; use filter/search; open/select lineage node; visible source link; no fatal page/console errors | AIH-06 harness then AIH-14 |
| Screenshot | home, selected timeline, lineage, mobile at the visual-contract viewports | AIH-14 |
| Factual | sampled milestones/relations against canonical sources plus validator output | AIH-13 |

## Delivery sequence

1. AIH-06 creates the baseline scaffolding, scripts, and test harness defined by ADR-001.
2. AIH-05 consolidates canonical data and executes validation against it.
3. AIH-07 builds the shared editorial shell and accessible detail reading surface.
4. AIH-08, AIH-09, and AIH-10 work only inside their assigned feature directories and consume selectors/contracts above.
5. AIH-11 critiques the integrated experience; AIH-12 alone integrates features and applies accepted rework without changing factual content.
6. AIH-13 and AIH-14 independently record factual and browser/visual evidence.

## Architecture acceptance checklist

- [x] Baseline stack is explicit and static-first.
- [x] One lineage visualization library is selected; the alternative is not installed by default.
- [x] Timeline temporal utility and rendering ownership are separated.
- [x] Data validation, normalization, UI, and feature boundaries have named files and owners.
- [x] Timeline, graph, discovery, and detail use one selected-item contract.
- [x] Test seams exist for data, state, feature behavior, browser flow, and visual evidence.
- [x] Shared-file ownership reserves final root integration for a single card.
