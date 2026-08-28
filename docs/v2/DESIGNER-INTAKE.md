# Designer intake — Atlas v2 Phase-1 (external agent)

Read this first if you cloned the repo on another machine (Antigravity, VS Code, Claude, Gemini, etc.).

You are **not** implementing the production site in `src/` unless a later human gate (H5) opens coding. Your job: **an alternative visual design / HTML concept** for the Phase-1 Story Path slice, using the same facts as the existing mock, so the curator can compare.

## Clone the right branch

Default `main` is still **v1** until PR #3 merges.

```text
git clone https://github.com/dimmyz/ai_evolution_atlas.git
cd ai_evolution_atlas
git fetch origin
git checkout v2-bootstrap
```

If you only have `main`, you will see the old encyclopedia UI and the old `prompts/START_HERE_FOR_STRATEG.md`. That is legacy.

## What is canon (in this repo)

| Read | Why |
|---|---|
| `docs/v2/DEC-001.md` | H1–H5. Story Path is the unit. Coding closed until H5. |
| `docs/v2/DEC-002.md` | Phase 1 = enough beads to design; Phase 2 = later enrichment. Do not invent a glued myth path. |
| `docs/v2/DESIGN-READY-MINIMUM.md` | Who unlocks design. |
| `docs/v2/progress/SCORECARD-PHASE1.md` | Must-rows passed; human `design:open`. |
| `docs/v2/11-ux-phase1-story-slice.md` | **Current** Hermes/Grok UX spec (honest brief). |
| `docs/v2/design-handoff/ALLOWED-BEADS.md` | Only historical sentences you may show. |
| `docs/v2/design-handoff/SCHEMA.md` | Screens / states. |
| `docs/v2/design-handoff/mocks/phase1-story-slice.html` | Existing static concept. Open in a browser. **Your design is a second concept to compare, not a silent overwrite.** |

Supporting: `docs/v2/04-audience-personas-learning-jobs.md`, `05-content-editorial-system.md`, story-packs fact-checks under `docs/v2/story-packs/`.

**Do not treat as active product law:** `spec/ai-atlas/`, `prompts/START_HERE_FOR_STRATEG.md`, `docs/v2/10-interaction-story-path-spec.md` (failed brief, D1–D4).

## What is NOT in GitHub

- Google Drive / local zip `02 — Site v2 — Project Pack` (full PRD/charter docx). Summaries of H1–H5 and PG-01 **are** in `docs/v2/`.
- Hermes Kanban. GitHub Issues #4–#14 + Milestones M0–M5 are the program plan.
- Production v2 app. `src/` is **v1** reference.

## Your deliverable

Write a **new** file, do not replace the Grok spec unless asked:

- `docs/v2/design-handoff/mocks/phase1-alt-<your-name>.html` and/or
- `docs/v2/12-ux-phase1-alt.md`

Constraints (non-negotiable):

1. First screen = Transformer 2017 **or** GPT-2 as a focused historical card, not filters.
2. Connectors only from ALLOWED-BEADS (quoted). No “Transformer led to ChatGPT.” No “engine.” No “Step 1 of 6.” No “GPT used Transformer” as if it were the GPT-2 edge. No “developed in parallel.”
3. ChatGPT may appear as a dated record; gap if the reader asks for a path from Transformer to ChatGPT.
4. Editorial, demo-worthy. Not a neon dashboard.
5. Static HTML is enough. No backend.

## Prompt (paste into Antigravity / Studio)

```
You are a product designer. Repo: dimmyz/ai_evolution_atlas, branch v2-bootstrap.
Read docs/v2/DESIGNER-INTAKE.md then ALLOWED-BEADS.md and 11-ux-phase1-story-slice.md.
Open docs/v2/design-handoff/mocks/phase1-story-slice.html.
Produce an alternative visual concept in docs/v2/design-handoff/mocks/phase1-alt.html
using only allowed historical sentences. Do not edit src/. Do not invent lineage.
```
