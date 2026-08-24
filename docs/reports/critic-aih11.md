# Visual Critic Report

- reviewer/critic: critic
- model: gpt-5.6-luna (critic profile)
- build/head: `f5d61c02e5c9e7cf08f347be6d82ffadd400ee90`
- workspace: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- screenshots reviewed:
  - `evidence/home-1440x900.png`
  - `evidence/timeline-selected-1440x900.png`
  - `evidence/lineage-1440x900.png`
- mobile screenshot: `evidence/mobile-390x844.png` is absent

## Scope and evidence boundary

The workspace and Git root match the card. `.hermes.md` contains the `AI Evolution Atlas` marker. I reviewed the canonical product, information-architecture, visual/UX, and acceptance contracts; the shell and three isolated feature modules; the canonical dataset; and the supplied desktop evidence.

This is an adversarial checkpoint, not product approval. The current `src/app/App.tsx` renders only `<AtlasShell />`; the timeline, discovery, lineage, and detail surfaces are not yet composed into the live root. That is an expected ownership boundary for AIH-12, but it means the current evidence is not evidence of the final integrated experience.

Independent checks run in this workspace:

- `npm.cmd test`: 24 files / 87 tests passed
- `npm.cmd run typecheck`: passed
- `npm.cmd run build`: passed with Vite 8.2.2
- `npm.cmd run validate:data`: passed (`sources=36 entities=36 milestones=36 relations=16`)
- `npm.cmd run test:e2e`: 2 Chromium tests passed
- Playwright runtime check at `390x844`: root had no horizontal overflow and no page errors; it still showed the empty shell. The lineage preview hid the canvas at mobile width and exposed four entity buttons with no horizontal overflow or page errors.

Green engineering checks do not close the visual/content gaps below.

## Scores 1–5

| Dimension | Score | Finding |
|---|---:|---|
| First-impression clarity | 3 | The title, purpose, and 2017–2026 boundary are clear, but the home screenshot is an empty orientation shell: there is no milestone to start with and no explicit primary “Start exploring” action beyond the view toggle. |
| Hierarchy | 4 | Masthead, editorial-era rail, stage, and reading surface have a strong editorial hierarchy. The right detail surface is visually subordinate in the selected state, which is appropriate. |
| Typography/readability | 4 | Serif display type and warm-muted body type read well at 1440×900. Small uppercase labels and raw technical metadata become harder to scan in the graph inspection area. |
| Spacing/density | 3 | The shell has generous rhythm, but the graph canvas is mostly empty and the selected timeline spends substantial vertical area on a short fixture list. The eventual full dataset will make the untested discovery/filter density a separate risk. |
| Timeline comprehension | 2 | The selected list is readable, but the axis marks are passive decorative `<i>` elements with no labels or selected treatment. A user cannot confidently map a selected event in the list to a point on the axis. The home screenshot has no actual timeline. |
| Graph comprehension | 2 | The bounded graph is legible but has no visible arrowheads, so relation direction is not encoded on the canvas. Repeated `USES ARCHITECTURE` labels and long empty runs make the canvas feel like a graph demo rather than an editorial explanation. The lower relation list is doing essential semantic work that the graph itself does not do. |
| Cross-view coherence | 1 | The live root does not compose the feature modules, and no shared selection/filter controller is present in `App.tsx`. Cross-view continuity, entity-to-detail behavior, and filter effects across views are therefore unproven. |
| Interaction affordance | 2 | Native buttons and pressed/focus states are good in isolation. However, timeline axis marks are not interactive, graph canvas nodes are not themselves keyboard controls, and the detail panel's related entries are plain text rather than navigable controls. |
| Citation visibility | 2 | The selected timeline screenshot cuts off before `Sources`; source presence is only below the 900px crop. Graph relation evidence is rendered as opaque IDs such as `src-a10`, not human-readable, clickable source titles. |
| Mobile fallback | 2 | The lineage CSS has a sensible list fallback and the root has no horizontal overflow at 390×844, but the required `evidence/mobile-390x844.png` is missing and the integrated timeline/discovery/mobile flow is not exercised. |
| Accessibility cues/focus | 3 | Skip link, native controls, `aria-pressed`, fieldset legends, live result status, and visible focus outlines are solid. The graph canvas is not a keyboard-semantic node surface; the adjacent list is the real accessible path and must remain clearly discoverable in the integrated layout. |
| Distinctiveness | 3 | The warm, restrained editorial treatment is materially better than neon-on-black AI cliché. The large empty React Flow canvas, zoom controls, repeated edge labels, and raw IDs still expose a developer-demo character in the lineage view. |

Any score of 2 or lower is a blocking visual-contract finding until resolved or explicitly escalated.

## Must-fix

1. **Integrate and exercise the actual product slice.** AIH-12 must compose the canonical atlas, timeline, discovery, lineage, and detail surface in the live root and own one selection/filter/view controller. A timeline selection must update the detail surface; a graph/discovery selection must update the same detail model; and switching views must preserve context. Current evidence only proves isolated feature rendering and the empty shell (`src/app/App.tsx:1-5`). Add integrated E2E coverage for timeline selection, search/filter, lineage open/select, detail continuity, and source-link presence.

2. **Make the timeline axis explain the list.** The axis marks in `Timeline.tsx:73-85` are non-interactive and have no selected state. At minimum, selected events need a visibly related/highlighted axis mark, and the marks need a semantic or clearly inspectable relationship to the event buttons. Do not leave the chart as an unlabeled strip above a separate chronological list.

3. **Encode graph direction on the graph itself.** `AtlasEdge.tsx` supplies stroke styling and labels but no arrow marker. The screenshot therefore cannot tell which node is the source and which is the target; the relation list is the only place where order is unambiguous. Add a restrained direction cue (arrowhead or equivalent) and retain the explicit “not a descent claim” language for non-descent edges.

4. **Replace raw relation source IDs with actionable citations.** `LineageView.tsx:66-69` exposes `src-a10`, `src-a03`, and similar internal IDs as plain text. Resolve those IDs to source titles/publishers and render links associated with each relation or an explicit relation-evidence disclosure. A reader should not need the data file to understand or open the evidence.

5. **Keep citations visible in the selected reading experience.** In `evidence/timeline-selected-1440x900.png`, the detail pane reaches `RELATED` at the bottom of the crop and does not show `Sources`. Rebalance the detail surface, provide a clear scroll affordance, or otherwise make source availability obvious at the required viewport. “Present below the crop” is not sufficient for the citation-visibility rubric.

6. **Make related detail items navigable.** `DetailSurface.tsx:48-59` renders related records as spans inside list items. The product contract requires moving between related nodes without losing context. Use an explicit activation path that dispatches the shared selected target and preserves the current view/detail relationship.

7. **Close the actual content/lineage gap or record a scope decision.** The validated dataset has 36 milestones and 20 model entities, but only 16 relations, covering 5 relation types (`successor_of`, `same_family_as`, `uses_architecture`, `authored_by`, `released_by`) and none of the published `influenced_by`, `enabled_by`, `integrated_into`, or `introduced_concept` types. The visual graph consequently demonstrates a few architecture/ownership links rather than how AI evolution proceeded. This is below the 40–70 relationship target and weakens the core promise to follow meaningful lineage. Research/data owners should add only source-backed relations, or Strateg must explicitly narrow the claim and record why.

8. **Clarify discovery behavior and provide recovery.** The control label `Search titles` understates the actual search index, which includes title, summary, editorial rationale, category, and entity names (`searchIndex.ts:21-50`). Rename it to match behavior. Add a visible clear/reset action (the reducer already has `clear`) and a deliberate empty-results message; otherwise a reader can get stranded in a dense set of toggles with no obvious recovery.

9. **Produce the required mobile evidence pack.** Create and inspect `evidence/mobile-390x844.png` from the integrated root, not only the isolated lineage preview. Confirm that the stacked era rail, search/filter controls, timeline list, detail reading surface, and lineage list are usable in the same flow. The current runtime check proves only no overflow plus the isolated lineage list fallback.

## Residual risk

- The selected timeline screenshot uses a four-item fixture while the canonical atlas has 36 milestones, including nine in 2022 and eight in 2024. Full-data label density, list scrolling, and filter-result comprehension remain unproven.
- The graph screenshot centers Transformer and shows only three model-to-technology edges. It does not test mixed relation types, organization/person/paper node shapes, overflow neighbors, or a graph with enough semantic variety to validate the legend.
- Discovery exposes all organizations as toggle buttons. With 13 organizations plus five milestone categories and four eras, the integrated desktop and mobile control surface may become a long, low-priority wall of pills. No integrated visual evidence exists yet.
- The mobile lineage fallback hides the graph canvas at `max-width:720px`. This is defensible, but the integrated UI must make the list fallback read as the primary mobile representation rather than as a missing/broken map.
- Entity detail is not demonstrated. `TimelineDetail` maps milestones to `DetailModel`, while lineage selection emits entities; the integration must supply a supported entity detail model rather than leave the reading surface stale or empty after graph selection.
- External source URLs are not part of the local runtime, so link reachability and source-page rendering remain factual/browser follow-up work for AIH-13/14.
- The visual report cannot certify the final human gate. Human acceptance is still required after integration and the screenshot pack is complete.

## High-value improvements

- Give the home orientation state one obvious first action and a small preview of the relationship between time and lineage, without turning the hero into a dashboard.
- Use a compact legend or microcopy near the timeline to explain that colored era bands are editorial navigation and the lower list is the keyboard-readable event index.
- In the graph, reserve the canvas for relationships and move repeated edge labels to hover/focus or a selected-edge detail region; keep the lower inspectable list as the authoritative reading path.
- Show source title plus publisher, with a short “why this source” or relation rationale where useful. Keep internal IDs available only as secondary provenance metadata.
- Add visible selected/focus treatment to the graph node and corresponding list item after an entity click, so the two representations reinforce each other.

## Things not to change

- Preserve the warm near-dark editorial palette, serif display hierarchy, and restrained accent colors. This is a strong departure from generic neon AI styling.
- Preserve the explicit language that editorial eras are navigation, not scientific periods.
- Preserve precision-aware dates; the timeline correctly avoids fabricating January 1 for year-only records.
- Preserve the bounded neighborhood and overflow/list fallback rather than expanding to a hairball.
- Preserve the inspectable relation metadata and confidence/rationale fields, but make the evidence human-readable and actionable.
- Preserve native buttons, visible focus treatment, skip link, and the non-color-only node-shape vocabulary.

## Verdict

- `rework_required`

The isolated work has a promising visual foundation and several careful accessibility/data-boundary decisions, but the current candidate is not ready for integration acceptance. Cross-view composition, source usability, timeline-to-axis comprehension, graph direction semantics, mobile evidence, and the thin relation/content story must be addressed or explicitly escalated before the final visual gate.
