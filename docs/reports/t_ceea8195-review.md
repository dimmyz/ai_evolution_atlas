# Review — t_ceea8195 / AIH-08

Verdict: approved
Review round: 2 (execution lens)

## Workspace provenance

- Declared workspace: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- `pwd`: `/d/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- `git rev-parse --show-toplevel`: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- HEAD: `f5d61c02e5c9e7cf08f347be6d82ffadd400ee90`
- `.hermes.md` contains `AI Evolution Atlas`

## Independent verification

Executed in the declared workspace after the round-1 corrections:

```text
npm.cmd exec -- vitest run src/features/timeline
npm.cmd test
npm.cmd run typecheck
npm.cmd run build
npm.cmd run test:e2e
npm.cmd ls --depth=0 d3-scale d3-time d3-time-format @types/d3-scale @types/d3-time @types/d3-time-format
node --input-type=module -e "...Playwright inspection of evidence/timeline-selected-1440x900.html..."
git diff --check -- .hermes.md docs src package.json package-lock.json evidence scripts tests tsconfig.json vite.config.ts playwright.config.ts index.html
```

Observed results:

- focused timeline: 7 files / 20 tests passed
- workspace verification: passed (`project_id: ai-evolution-atlas`)
- full Vitest: 24 files / 87 tests passed
- TypeScript typecheck: passed
- Vite production build: passed (Vite 8.2.2)
- Playwright smoke: 2 Chromium tests passed
- installed D3 packages resolve: `d3-scale@4.0.2`, `d3-time@3.1.0`, `d3-time-format@4.1.0`, plus matching type packages
- Playwright evidence inspection found 4 timeline milestone buttons, selected `aria-pressed="true"`, and a visible selected-button hover transition: border-left `3px` -> `5px`, transform `none` -> `translateX(3px)`, and non-empty inset box shadow. Focus inspection reported a `2px` solid focus outline with `3px` offset.
- `git diff --check` passed; only the repository's existing LF/CRLF warning was emitted.

## Contract audit

- `src/features/timeline/**` remains the feature implementation boundary and consumes typed milestone/normalized atlas data; it does not parse YAML or own the application composition root.
- Timeline controls are native `type="button"` elements with `aria-pressed`; selection dispatches `{ kind: 'milestone', id }`.
- Round-1 hover defect is corrected: `timeline.css` has visible non-color-only `:hover` and selected-hover treatments, `:focus-visible` remains explicit, and `Timeline.tsx` has pointer enter/leave behavior. `hover.test.ts` covers the CSS/source contract and selected markup.
- Round-1 temporal-utility defect is corrected: `timeScale.ts` uses D3 `scaleUtc` and `utcYear`, while `precision.ts` and `Timeline.tsx` use D3 `utcFormat`; the runtime time-scale tests pass.
- Date precision remains honest: year records are represented as spans/labels rather than fabricated exact-day labels; month/day labels are covered by tests.
- Timeline layout covers every published canonical milestone, assigns same-year lanes, and clusters overflow; focused layout tests pass.
- `toDetailModel` and `TimelineDetail` map supported fields and attach item-level source links; component and evidence tests pass and the evidence HTML contains the selected detail surface and Sources section.
- The selected evidence screenshot was inspected at 1440x900. It shows the editorial shell, chronology axis, selected GPT-4 milestone, selected border, and detail content. The Sources section is below the visible crop in this fixture, but is present in the composed HTML and asserted by `evidence.test.ts`.

## Scope and caveat

- `package.json` and `package-lock.json` were additionally changed only to add the D3 temporal dependencies required by accepted ADR-003; no shell composition root was rewritten. This is a narrow shared dependency hotspot, not a product-scope change.
- The live `/` route remains the empty shell by design; AIH-12 owns final composition wiring. The browser smoke suite therefore verifies the current shell, while the feature's component/evidence tests verify timeline composition in isolation.
- No implementation files were modified by the reviewer; this report is the review artifact named by the card.
