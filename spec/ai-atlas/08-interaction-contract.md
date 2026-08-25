# 08 — Interaction Contract (Sprint 2)

Status: proposed canon for Sprint 2. Supersedes the implicit two-tab model used in Sprint 1.

## Why this document exists

Sprint 1 shipped two parallel views — Timeline and Lineage — connected by a shared selection but not by a shared *idea*. In human testing the result was: *"I pressed the buttons and nothing happened."* That is an accurate description. The product had features but no **spine**: no single gesture that a first-time reader can perform and immediately understand what the site is for.

This contract defines that spine.

## 1. The one-sentence product

> **AI Evolution Atlas shows how today's AI systems descend from each other — by placing every model on a real timeline and drawing the sourced line back to where it came from.**

Everything below serves that sentence. If a feature does not help a reader trace a line backwards through time, it is secondary.

## 2. The signature mechanic — "the Thread"

**One primary interaction. Everything else is secondary.**

The main stage is a horizontal time axis, 2017 → 2026, with three horizontal lanes:

| Lane | Contents | Role |
|---|---|---|
| **Top** — Labs | organizations | who shipped it |
| **Middle** — Models | models (the primary lane) | the spine of the story |
| **Bottom** — Foundations | technologies/architectures (Transformer, MoE, CLIP) | what it was built on |

Every node sits at its **real date**, honouring the existing `date_precision` rules. Nothing is invented to make the picture prettier.

### The gesture

**Select any model → its Thread lights up.**

The Thread is the chain of published relations reachable from that model:

- `successor_of` — drawn **backwards along the time axis** as a solid arrow. This is the Thread's backbone.
- `same_family_as` — a soft tie within the same lane.
- `uses_architecture` — a **dotted drop** down to the Foundations lane.
- `released_by` / `authored_by` — a **thin tie up** to the Labs lane.

Selecting Claude 4 should draw: `Claude 4 (2025) ← Claude 3.5 Sonnet (2024) ← Claude 3 (2024) ← Claude 2 (2023)`, each tied upward to Anthropic, and each dropping a dotted line down to Transformer (2017).

**A reader who performs that one gesture has understood the entire product.**

### Why this specific mechanic

1. **It is literally a picture of evolution.** The current neighbourhood graph shows a star of nearest neighbours; it can never show a line of descent. A Thread can.
2. **Time carries the layout.** The dataset's strongest asset is honest, precision-aware dates on all 36 milestones. Use the strong asset as the organising axis.
3. **It makes sparse data read as intentional.** A thread is *supposed* to be thin. A graph with 2 nodes reads as broken; a thread with 4 links reads as a lineage. This is not spin — it is choosing a visual form honest about what the data is.
4. **It collapses the confusing two-tab split** that made the view switch feel inert.
5. **Relation types become distinguishable by direction and lane** rather than by legend lookup — which is what a reader can actually parse.

### Relation-type legibility requirement

Relation types MUST be distinguishable without reading a legend, via **lane + direction + stroke**:

- horizontal + solid = descent in time (`successor_of`)
- horizontal + soft = sibling (`same_family_as`)
- downward + dotted = built on (`uses_architecture`)
- upward + thin = shipped by (`released_by`, `authored_by`)

Any `influenced_by` / `enabled_by` edges added later MUST be visually weaker than `successor_of` and MUST carry their confidence level in the visible UI. Chronology is never rendered as descent.

## 3. First action and default state

The Home screen MUST NOT open on an empty reading surface or a filter form.

Home opens showing **all threads at low intensity** — the full decade as a faint constellation. This is simultaneously the hero image and the product explanation.

Overlaid on it, one line of copy and **four preset entry threads**:

> Follow a line: **GPT** · **Claude** · **Llama** · **Gemini**

Clicking one lights its Thread and opens the detail surface. **That is the first action, and it is unambiguous.**

Requirements:
- The first screen (1440×900 and 390×844) MUST contain historical content, not only controls.
- Search and filters MUST be reachable but MUST NOT occupy the top of the first screen.
- "Nothing selected" MUST NOT be the most prominent element on the page.

## 4. Interaction hierarchy

| Tier | Pattern | Status |
|---|---|---|
| **Primary** | Thread on the timeline | the product |
| Secondary | Neighbourhood graph ("expand around this node") | retained, reachable from a selected node |
| Secondary | Search + filters | retained, demoted below the fold |
| Secondary | Era browse | retained in the left rail |
| Tertiary | Deep link / URL state | already implemented, keep |

The Sprint 1 neighbourhood graph is **not discarded** — it becomes the "zoom in on this node" affordance, reached *from* a Thread rather than competing with it.

## 5. Detail surface

Unchanged in principle, with two additions:

- When a Thread is active, the detail surface shows **position in the line**: what came before, what came after, what it was built on.
- Related entries remain navigable controls and MUST keep the Thread context when followed.

## 6. Mobile

The Thread MUST degrade to a **vertical** thread: time flows top→bottom, lanes become indentation levels. Mobile is not required to render the full constellation; it MUST render a selected Thread legibly.

## 7. Acceptance additions for Sprint 2

- [ ] A first-time reader can perform the primary gesture without instruction.
- [ ] The first screen contains historical content above the fold at both target viewports.
- [ ] Selecting a model draws a visible multi-link Thread for at least the four backbone families (GPT, Claude, Llama, Gemini).
- [ ] Relation types are distinguishable without consulting the legend.
- [ ] No view renders with zero interactive controls.
- [ ] No stage region exceeds 1.5× viewport height while empty.
- [ ] Switching any primary view produces a visible change above the fold.

## 8. Dependency

**This contract is blocked on content.** A Thread requires chains of `successor_of`. The atlas currently publishes exactly one. See `09-content-plan.md`.

Implementation MUST NOT begin before Campaign 0 completes, or the same failure repeats: good machinery with nothing to show.
