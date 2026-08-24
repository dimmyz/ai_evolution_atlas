# External Critic Report — AI Evolution Atlas v0.1

- Critic: Claude Opus 5, external independent reviewer (not part of the Sprint 1 factory run)
- Date: 2026-08-25
- Workspace: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- Git root: same; `.hermes.md` marker `AI Evolution Atlas` confirmed
- HEAD at start: `f5d61c0` (seed only)
- Safety checkpoint created: `60b789a`
- HEAD at end: `0b1238b`

---

## Executive verdict

**Final verdict: `rework_required`** — but for reasons almost entirely different from the ones Sprint 1 reported.

Three separate things were tangled together and reported as one `blocked` status:

1. **A real, but already-fixed, engineering defect.** The SVG lineage marker flakiness was genuine. It was fixed in follow-up card `t_71869fb2` and independently approved. I ran the E2E gate **five times** across this session (three before my changes, two after). It passed 3/3 every single time. `sprint-01.md` is **stale** — it was written before that fix landed and was never updated.

2. **An environment problem that was never diagnosed, and which invalidated the human gate.** `http://127.0.0.1:4173/` — the URL written into `EXTERNAL_CRITIC_BRIEF.md` and used by Strateg — was serving the **previous pilot, Aquarium Factory Pilot**, not this project. A `vite preview --strictPort` process from `D:\Projects\Aquarium_Factory_Pilot\...` (PID 3528) had been holding port 4173 since the earlier run. Anyone who followed the documented instructions saw the wrong product. This is the single most likely reason the human visual acceptance stayed `PENDING` for so long: **the site was never visible at the address everyone was told to open.**

3. **Genuine product defects that no gate caught, because every gate was green.** These are the real blockers, and they were invisible to Playwright precisely because the tests use exact selectors that a human never has. Details below.

The factory's *factual* discipline is the strongest part of this project and deserves saying plainly: every milestone is primary-sourced, dates respect declared precision, non-descent edges are explicitly labelled as such, editorial eras are labelled as navigation rather than science, and the team **refused to pad the relation count** when pressured by its own critic report. That refusal was correct and I did not overturn it.

But the product cannot currently deliver its headline promise, and the reason is content, not code.

---

## Did the site actually run?

**Yes — but not at the documented URL until I evicted the stale process.**

| Check | Result |
|---|---|
| Port 4173 owner at session start | PID 3528, `vite preview` from `D:\Projects\Aquarium_Factory_Pilot\...`, `--strictPort` |
| `curl http://127.0.0.1:4173/` before | `<title>Aquarium Factory Pilot</title>` |
| Action taken | Stopped PID 3528 and its parent shell (explicitly requested by the human) |
| `curl http://127.0.0.1:4173/` after | HTTP 200, `<title>AI Evolution Atlas</title>` |
| Actual working URL now | **`http://127.0.0.1:4173/`** |

Because Aquarium held the port with `--strictPort`, Atlas's own `npm run preview` (which has no port pinned in `vite.config.ts`) would have silently fallen back to 4174. The team's own evidence was therefore likely captured on a different port than the one they documented.

Evidence: the application was loaded in real headless Chromium at 1440x900 and 390x844, with `pageerror` and `console.error` listeners attached. **Zero page errors, zero console errors** in every run. Fresh screenshots are in `evidence/fresh/`.

---

## Why Sprint 1 said BLOCKED

Splitting the single `blocked` into its actual components:

| Layer | Was it really broken? | Current state |
|---|---|---|
| **Runtime** | No. The app booted fine throughout. | Boots clean, no page errors. |
| **Engineering** | Yes — SVG marker assertion was nondeterministic. | **Fixed** in `t_71869fb2`. 5/5 clean E2E runs observed by me. |
| **Visual** | Partly — but the wrong problems were flagged. The critic's memo caught real issues; the ones that survived integration were never re-measured on the live app. | Three of the surviving defects were severe. I fixed them. |
| **Human acceptance** | Yes, and legitimately so — but it was **unobtainable**, not refused. The human was pointed at a URL serving another project. | Port freed; the human can now actually inspect the product. |
| **Stale report** | Yes. `sprint-01.md` reports engineering as `blocked` on a defect fixed by a later approved card, and still cites `HEAD f5d61c0`. | Superseded by this report. |

**Plain-language summary:** the project was not broken in the way the report said. It was mis-measured. One real bug had already been fixed and nobody updated the report; the human gate was blocked by a leftover server from the *previous* project; and the defects that actually mattered were never caught, because they are the kind that only a human clicking around can see.

---

## Independent scores

Scored against `spec/ai-atlas/06-visual-ux-contract.md`. Per that contract, **any dimension ≤2 is blocking**.

| # | Dimension | Before my fixes | After my fixes | Note |
|---|---|---:|---:|---|
| 1 | First screen / first impression | 2 | 3 | Masthead is genuinely handsome. But the fold still shows a *filter form* and a large "Nothing selected", not history. |
| 2 | New user understands the product | 4 | 4 | Title + purpose sentence are clear and honest. |
| 3 | Can a person trace AI 2017→2026 | 3 | 3 | All 36 milestones in correct order; reading value is thin (see #12). |
| 4 | Timeline usefulness | 3 | 3 | Axis marks now match the list; selection is highlighted; precision handled honestly. Still essentially a grouped list — no zoom, clustering or era bands on the axis. |
| 5 | **Lineage explains evolution** | **2** | **2** | **BLOCKING.** See the dedicated section. Not fixable by code. |
| 6 | Search / filters / discovery | 2 | 4 | Was a 2,500px wall of undifferentiated chips. Now grouped, wrapped, counted, labelled. |
| 7 | Detail view | 4 | 4 | Clean, typed, only supported fields shown, related items navigable. |
| 8 | Sources and citations | 4 | 4 | Real resolved links, not raw IDs. Every milestone has ≥1 primary source. Exactly one each — no corroboration. |
| 9 | Desktop visual quality | 2 | 4 | The void and the wall were the problem, not the design language. |
| 10 | Mobile | 3 | 3 | No horizontal overflow, readable type. But 5,215px tall and the first two screens are chrome. |
| 11 | Keyboard / accessibility | 4 | 4 | Skip link, native controls, `aria-pressed`, fieldset legends, `aria-live`, visible focus. Graph canvas isn't keyboard-semantic but has an accessible list twin. |
| 12 | **Editorial storytelling** | **2** | **2** | **BLOCKING.** See "Problems found — MUST 2". Not fixable without research. |
| 13 | Distinctiveness (not a dev demo) | 2 | 4 | Genuinely no longer reads as a generic admin dashboard. |
| 14 | Factual honesty | 5 | 5 | The strongest dimension in the project. |
| 15 | Overall — would I show this to a colleague? | 2 | 3 | I'd show it as a promising slice, not as a finished product. |

**Average: 2.8 → 3.5.** Target is ≥4.0 with no blocker. Two blocking dimensions remain, both in **content, not code**.

---

## Problems found

### MUST

**MUST 1 — The lineage graph cannot support the product's central promise.** *(not fixed — requires research, not engineering)*

Measured from `data/atlas.yaml`:

- 16 relations across 36 entities.
- **8 of the 16 (50%) are `released_by`** — corporate ownership. "GPT-4 was released by OpenAI" says nothing about how AI evolved.
- **Exactly ONE `successor_of` edge exists in the entire 2017–2026 atlas** (GPT-2 → GPT).
- 5 `uses_architecture`, 1 `same_family_as`, 1 `authored_by`.
- **11 of 36 entities (31%) have zero relations** — selecting them yields a single isolated node.
- 20 of 36 have degree 1. Only 5 entities have 2+ relations. **Maximum degree in the whole graph is 3.**

Concretely: clicking OpenAI — the most connected organisation in modern AI — produces a graph of **two nodes and one edge**: `GPT-4 → released by → OpenAI`.

The graph *implementation* is good. Node shapes distinguish types, arrowheads encode direction, dotted strokes mark non-descent, every edge carries confidence, rationale and a clickable source. The mechanism is sound. **There is simply almost nothing to draw.** A product promising to explain evolution, backed by one succession edge per decade, does not keep its promise.

**MUST 2 — The editorial layer contains no editorial writing.** *(not fixed — would require inventing or re-researching claims)*

`why_it_matters` is the field that carries the entire "why this is in the atlas" story. Across all 36 milestones it is written as **dataset-intake justification aimed at the researcher's reviewer**, not as prose for a reader:

- GPT-3 → *"Primary record for a large-language-model candidate in the period."*
- CLIP → *"Dated primary-source multimodal model record."*
- AlphaFold → *"Dated system-level record outside language and image generation."*
- PaLM → *"Scaling-era candidate with explicit model and systems description."*
- Transformer → *"Anchor for the selected Transformer-era timeline."*

The vocabulary — "record", "candidate", "dated", "primary-source" — is research-triage language. A reader is told **why the row qualified for the spreadsheet**, never what happened or why it mattered. This is the real reason the product feels like a developer demo despite genuinely good typography: **the editorial atlas contains no editorial writing.**

Roughly 3 of 36 `summary` fields have the same problem (e.g. Transformer: *"The primary paper is titled Attention Is All You Need and is indexed as arXiv:1706.03762"* — bibliography, not summary). The other summaries are largely fine.

**MUST 3 — Lineage was a dead end.** *(FIXED)* With nothing selected, the Lineage view rendered a **728 × 4,247 px** region containing three lines of text and **zero interactive controls** — while its own copy instructed the reader to "Select an entity". There was no control anywhere in that view to do so.

**MUST 4 — Switching to Lineage changed nothing on screen.** *(FIXED)* At 1440×900 the Lineage view was byte-for-byte identical to Home above the fold. The graph began at **y = 4,363 px** — the reader had to scroll past the entire discovery wall to discover the view had changed at all.

**MUST 5 — The obvious click did the wrong thing.** *(FIXED)* Two visually identical chips both labelled "OpenAI" sat in the same column ~500px apart: one an *organization filter*, one the *entity*. Clicking the obvious one filtered the list and left the graph empty. The E2E suite never caught this because it uses a scoped exact selector — a precision no human has. **This is the clearest example in the project of a green test hiding a real defect.**

**MUST 6 — Port 4173 served the wrong product.** *(FIXED)* Documented in the section above.

**MUST 7 — The entire implementation was untracked in Git.** *(FIXED)* At session start the repository contained exactly one commit — the canon seed. All 136 files of actual product work existed only in the working tree, one `rm -rf` from total loss. This is a Factory process failure, not a code failure.

### SHOULD

- **Home leads with a filter form.** `02-product-contract.md` explicitly says *"Avoid a dense dashboard as the first impression"* and requires *"a visual hint that both time and lineage matter"*. The first screen currently shows the masthead, a search box, and two rows of filter pills — zero history content, and a large "Nothing selected" as the most prominent secondary element. Not fixed: restructuring the home IA is a design decision that belongs to the team, not to a reviewing critic.
- **Every milestone has exactly one source.** Good discipline, but no corroboration anywhere.
- **Five OpenAI source URLs returned HTTP 403** in the team's live probe. Links may be dead for readers.
- **Timeline has no zoom, clustering or era banding on the axis** — the `SHOULD` items in the product contract are unimplemented.
- **Mobile is 5,215px tall** and spends its first two screens on masthead and era rail before any content.

### NICE

- The graph canvas is not keyboard-navigable (an accessible list twin exists, which is a defensible choice).
- `docs/reports.zip` was a generated artifact sitting in the repo; I added it to `.gitignore`.
- `sprint-01.md` should be marked superseded rather than left to contradict later approved cards.

---

## Changes I made

All changes are local, additive, and touch **no canon, no dataset, and no test**.

| File | Change | Why |
|---|---|---|
| `src/features/lineage/lineage.css` | `.lineage-view` `min-height: 100%` → `24rem`, `align-content: start` | The stage was inflated to ~4,000px by the discovery list; `100%` of that produced the 4,247px void. |
| `src/features/discovery/discovery.css` | `.discovery-results` → wrapping flex; added group heading/count/note styles | 72 block-level items were a ~2,500px vertical wall. |
| `src/features/discovery/DiscoveryPanel.tsx` | Results grouped into *Milestones* and *Models, labs and technologies* with counts and notes | Resolves the ambiguous duplicate-"OpenAI" trap; makes the list scannable. |
| `src/shell/AtlasShell.tsx` | Added `data-view` to `.atlas-stage` | Lets CSS reorder by active view without changing the DOM (so tests are unaffected). |
| `src/shell/shell.css` | Stage is flex; discovery moves to `order: 2` in lineage view | Switching to Lineage now visibly changes the screen. |
| `src/features/lineage/LineageView.tsx` | Optional `entryPoints` prop renders connected entities in the empty state | Removes the dead end. |
| `src/app/App.tsx` | Derives `lineageEntryPoints` by degree from `atlas.publishedRelations` | **Derived purely from existing verified edges — invents no lineage.** |
| `.gitignore` | Added `docs/reports.zip` | Generated artifact. |

### Measured effect

| Metric | Before | After |
|---|---:|---:|
| Home page height | 5,214 px | **2,813 px** (−46%) |
| Lineage page height (no selection) | 8,609 px | **2,854 px** (−67%) |
| Lineage view region | 728 × 4,247 px | **728 × 772 px** |
| Scroll distance to reach lineage stage | 4,363 px | **367 px** |
| Interactive controls in lineage empty state | **0** | **25** |
| Page / console errors | 0 | 0 |

---

## What I deliberately did NOT change

This is the most important section of this report.

1. **I did not add a single relation.** The graph is thin because the evidence is thin. Adding `influenced_by` edges by chronological intuition — "GPT-3 came after BERT, so it was influenced by it" — is exactly what `05-research-contract.md` forbids and exactly what would make this product dishonest. The previous team was pressured by its own critic report to reach 40–70 relations and **correctly refused**. I upheld that refusal.
2. **I did not rewrite `why_it_matters`.** I can see clearly that it is broken. Fixing it properly means reading 36 primary sources and writing grounded editorial prose. Writing it from my own knowledge would insert unsourced claims into a source-grounded product — the one thing this project is built to prevent. It is flagged as a blocker and handed back as a research card.
3. **I did not weaken any test or acceptance criterion.** No selector loosened, no assertion deleted, no threshold lowered. All 108 unit tests and all 3 E2E tests pass unchanged.
4. **I did not restructure the Home information architecture.** It violates the product contract, but the fix is a design decision that belongs to the team.
5. **I did not push anything to a remote.** No external publication without explicit human authorisation.
6. **I did not touch Aquarium or MultiAgentTest**, beyond stopping the stale preview process the human explicitly asked to have closed.

---

## Verification

Every command run from `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`.

### Before my changes

| Command | Result |
|---|---|
| `npm.cmd run verify:workspace` | PASS |
| `npm.cmd run validate:data` | PASS — sources=36 entities=36 milestones=36 relations=16 |
| `npm.cmd test` | PASS — 30 files, 108 tests |
| `npm.cmd run typecheck` | PASS |
| `npm.cmd run build` | PASS — Vite 8.2.2, 399 modules |
| `npm.cmd run test:e2e` ×3 | PASS — 3/3, 3/3, 3/3 |

### After my changes

| Command | Result |
|---|---|
| `npm.cmd run verify:workspace` | PASS |
| `npm.cmd run validate:data` | PASS — 36/36/36/16 (unchanged) |
| `npm.cmd test` | PASS — 30 files, 108 tests |
| `npm.cmd run typecheck` | PASS |
| `npm.cmd run build` | PASS — Vite 8.2.2, 399 modules |
| `npm.cmd run test:e2e` ×2 | PASS — 3/3, 3/3 |
| `git diff --check` | PASS |
| Live browser inspection | 0 page errors, 0 console errors, no mobile overflow |

**On the "flaky" E2E gate: it passed 5 consecutive times in this session (3 before my changes, 2 after), plus 2 recorded by the `t_71869fb2` reviewer. Seven consecutive green runs. I found no evidence of remaining flakiness.**

Fresh visual evidence in `evidence/fresh/`: `A1-home-after.png`, `A2-lineage-after.png`, `A3-lineage-transformer.png`, `A4-mobile-after.png`, plus the before-state captures.

---

## Git safety

| Item | Value |
|---|---|
| HEAD at session start | `f5d61c0` — seed only; **136 files untracked** |
| **Safety checkpoint** | **`60b789a`** — full pre-existing working state, no product changes |
| Fix commit | `0b1238b` |
| `git diff --check` | PASS |
| Working tree | Clean |
| Pushed to a remote | **No** — no remote configured, no authorisation requested or given |
| Backup clone | `D:\Projects\AI_Evolution_Atlas\AI_Evolution_Atlas_CLONE_2026-08-25` — 188 tracked files, full history |

`node_modules`, `dist`, `test-results`, Playwright caches and `docs/reports.zip` are correctly excluded.

### GitHub

Not done — and it needs a human. `gh` CLI is not installed and the GitHub connector is unauthorised in this session. The repository is otherwise **ready to publish**: clean history, sane `.gitignore`, no dependencies or build output committed. Once a remote exists:

```
git remote add origin <url>
git push -u origin main
```

---

## Remaining risks

1. **The core promise is unmet.** With 16 relations and one `successor_of`, "explains the evolution of AI" is not currently true. Either the dataset grows or the promise narrows. This is a Strateg decision, not an engineering one.
2. **The editorial voice does not exist yet.** Until `why_it_matters` is rewritten for readers, the product will keep reading as a well-typeset database.
3. **Single-source milestones** mean one dead or wrong URL removes all evidence for that item.
4. **Five OpenAI URLs 403'd.** Unverified whether readers can open them.
5. **No visual regression testing.** The 4,247px void and the 2,500px wall both passed every gate. Nothing currently prevents a recurrence.
6. **Port collisions across pilots are unmanaged.** This will happen again on the third pilot unless each project pins its own preview port.
7. **`sprint-01.md` remains factually stale** and will mislead anyone who reads it without this report.

---

## Recommended next Factory cards

1. **AIH-18 — Relation research batch (Researcher → Reviewer).** Target the specific gaps: `successor_of` across GPT/Claude/Llama/Gemini/Qwen/DeepSeek families, and `uses_architecture` for models already in the atlas. Source-backed only. Realistic target 40–60 relations; **if unreachable, escalate to Strateg rather than padding.**
2. **AIH-19 — Editorial rewrite of `why_it_matters` (Researcher/Editor → Reviewer).** Rewrite all 36 fields as reader-facing prose grounded in each item's existing cited source. No new claims. This is the single highest-leverage change available to the product.
3. **AIH-20 — Strateg scope decision on the lineage promise.** If 40+ relations are not achievable this sprint, narrow the public claim from "how AI evolved" to something the data supports, and record it in canon. Do not let the marketing copy outrun the dataset.
4. **AIH-21 — Home orientation redesign (Coder → Critic).** Put history above the fold. Lead with a milestone or an era, not a filter form. Demote "Nothing selected".
5. **AIH-22 — Visual regression gate (Tester).** Assert bounded page height, non-empty stage regions, and no zero-control views. These three assertions would have caught every visual defect in this report.
6. **AIH-23 — Pin preview ports per project (Orchestrator).** Set an explicit `preview.port` + `strictPort` in each pilot's `vite.config.ts` and document it. A preview that fails loudly beats one that silently serves the previous project.
7. **AIH-24 — Git hygiene rule (Factory canon).** Require a commit at the close of every implementation card. This run came within one accident of losing the entire sprint.
8. **AIH-25 — Supersede `sprint-01.md`.** Update it from current evidence or mark it superseded by this report.

---

## Notes for the team

Some of this is worth saying directly, because the factory itself is what's under test.

**What went genuinely well.** The factual discipline is real and rare. When your own critic report demanded 40–70 relations, you refused to fabricate them and escalated instead. Most teams — human or agent — quietly generate plausible edges at that point. You didn't. The data model (confidence, rationale, `evidence_source_ids`, `status`) is better than most production systems I see. Keep all of it.

**The central lesson.** Every gate was green while the flagship view was a 4,247-pixel empty void with no controls in it. That is not bad luck — it is structural. Your E2E test clicks `getByTestId('lineage-view').getByRole('button', {name: /OpenAI/})`. A human clicks the first thing labelled "OpenAI" they see, which was a filter, and gets nothing. **The test encoded the author's knowledge of the app, so it could only ever confirm what the author already believed.** Assertions like "the stage is not empty" and "the view has at least one control" are cheap and would have caught all of it.

**On reporting.** `sprint-01.md` is careful, honest, and wrong — because it was written once and never re-derived after `t_71869fb2` landed. A closure report that cites a stale HEAD is worse than no report, because it carries authority. Re-run the evidence before you publish the summary.

**On the environment.** Nobody checked what was actually answering on port 4173. The Strateg pointed the human at a URL, the human opened it, saw the wrong project, and the sprint stalled on a "pending human decision" that was never actually possible. One `curl` would have found it. When a human says "I don't see it", verify the channel before defending the artifact.

**On Git.** 136 files of good work existed in exactly one place, uncommitted, for the entire sprint. Nothing else in this report would have mattered if that directory had been lost.

---

## Final verdict

### `rework_required`

Not because the engineering is bad — the engineering is decent, the tests are honest, the build is clean, and the factual discipline is genuinely admirable.

**Because the product does not yet keep the promise its own title makes.** An atlas of AI *evolution* that publishes one succession relationship across a decade, and whose editorial field explains why each row qualified for the database rather than why it mattered to the world, is a well-built container awaiting its content.

The path forward is narrow and clear: **two research cards (relations and editorial voice), one Strateg scope decision, and one home-screen redesign.** The infrastructure to carry that content already exists and works. Nothing needs to be rebuilt.

Under `07-acceptance.md` this cannot be `accepted_with_reservations`, because MUST-Product criteria fail: *"Lineage/relationship view contains a meaningful verified subgraph"* is not satisfied by 2-node neighbourhoods, and two visual-contract dimensions score 2, which that contract defines as blocking.

The slice is closer to good than the Sprint 1 report suggests — and further from finished than a green test suite implies.
