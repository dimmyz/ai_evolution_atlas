# Sprint 2 Brief — for Strateg (Hermes) and the curating Strateg (chat)

Author: Claude Opus 5, external critic, 2026-08-25
Inputs: `CLAUDE_EXTERNAL_CRITIC_REPORT.md`, and the new canon `spec/ai-atlas/08`, `09`, `10`.

---

## 1. What Sprint 1 actually proved

Read this before planning, because the obvious conclusion is the wrong one.

**Sprint 1 did not fail at engineering.** The build is clean, 108 unit tests and 3 E2E tests pass, typecheck passes, the data validator passes, the factual discipline is genuinely above industry norm, and the team correctly refused to fabricate relations when its own critic report pressured it to.

**Sprint 1 failed at three things, all upstream of code:**

1. **No product idea was written down.** There was a scope, a data contract and a visual contract — but nobody specified *what the reader does on this site*. So the team built two views and a shared selection, which is a structure, not an experience. The human's verdict — *"I pressed the buttons and nothing happened"* — is the direct consequence.

2. **No role owned the reader.** The roster was Strateg, Orchestrator, Architect, Researcher, Coder, Tester, Critic, Reviewer. **There was no Designer and no Editor.** Predictably, the output is a well-engineered container with no interaction spine and no editorial voice. Nobody was accountable for either, so both were nobody's blocker.

3. **The gates measured the wrong properties.** Every gate was green while the flagship Lineage view was a 4,247-pixel empty region containing zero interactive controls. The E2E test found its button via `getByTestId('lineage-view').getByRole('button', {name: /OpenAI/})` — a precision no human has. **The test encoded the author's knowledge of the app, so it could only confirm what the author already believed.**

The human's own diagnosis is correct and worth quoting back: *"documentation was minimal — and the result came out minimal."* That is the lesson. This is a spec-driven process that ran without enough spec.

---

## 2. The single most important change for Sprint 2

**Do not start cards until the spec is written and reviewed.**

Sprint 1 sequence was: scope → data → code → discover the product doesn't work.

Sprint 2 sequence must be:

```
product idea  ──►  interaction spec  ──►  content plan  ──►  design  ──►  data  ──►  code  ──►  test
     (done)          (08 - done)          (09 - done)      (NEW)      (Camp. 0)
```

Three of those documents now exist (`08`, `09`, `10`). **The missing one is design.** See card S2-03.

**Cost note:** spec-writing is the highest-leverage token spend in the whole run and it happens once. It is worth putting a strong model on it. Implementation cards can then run on cheaper models against an unambiguous target — which is the actual economic argument for spec-driven development, not just the quality argument.

---

## 3. Roles to add

| Role | Why it is missing today | Suggested profile |
|---|---|---|
| **Product Designer / UX** | Nobody owned "what does the reader do". This produced two disconnected views and an empty first screen. Highest-value addition. | A strong reasoning model with an explicit design rubric; must produce a written interaction spec + wireframe description, not code |
| **Content Editor** | Nobody owned voice. `why_it_matters` is intake justification, not prose. A Researcher is trained to be cautious and cite; an Editor is trained to make a reader care. **These are different skills — do not merge the roles.** | Strong language model, works only from already-approved sourced text |
| **Localization Reviewer** | Needed from Stage 2 of `10-localization-contract.md` | Native-level Russian, reviews translation against the English + glossary |

Keep the existing routing from `docs/ROLE_ROUTING.md`. Claude Sonnet 5 stays the default Critic/Reviewer; Opus 5 stays escalation-only. **Add the Designer and Editor as first-class card owners, not as advisory voices** — an advisor with no card produces no artifact.

---

## 4. Gate changes

Add to `docs/QUALITY_GATES.md`:

### Gate C additions — cheap assertions that would have caught everything

```
- no primary view renders with zero interactive controls
- no stage region exceeds 1.5x viewport height while empty
- switching a primary view changes the DOM above the fold
- first screen contains content, not only controls
```

Those four assertions would have caught **every visual defect** in the external critic report. They cost minutes to write.

### Gate D addition — the naive-click rule

> At least one E2E path must reach its target the way a first-time reader would: by visible text, without `data-testid` and without scoping to a container.

If the naive path cannot find it, the UI is wrong — not the test.

### Gate F — new: Definition of Done

> A card is done when a human can observe the intended behaviour in the running product and describe it correctly without being told what to look for.

Green tests are necessary and insufficient. That was already `.hermes.md` §9 in spirit; make it an executable gate.

### Process fixes

- **Commit at the close of every implementation card.** Sprint 1 held 136 files of work in an uncommitted working tree for the entire sprint. This is the highest-severity process risk found.
- **Pin the preview port per project** (`preview.port` + `strictPort` in `vite.config.ts`). A leftover Aquarium server occupied 4173 for the whole sprint and served the wrong product to the human at the documented URL. A preview that fails loudly beats one that silently serves the previous pilot.
- **Re-derive closure reports from live evidence before publishing.** `sprint-01.md` reported `blocked` on a defect that a later approved card had already fixed, and cited a stale HEAD. A confident report that is out of date is worse than no report.

---

## 5. Proposed card pack

Ordered by dependency. Every card carries `project_id: ai-evolution-atlas`, the workspace path, the Git root and the canon paths, per `.hermes.md` §3.

| ID | Card | Owner | Depends on | Definition of done |
|---|---|---|---|---|
| **S2-01** | **Relation harvest from existing sources** | Researcher → Reviewer | — | Relation count with per-type breakdown; every new relation cites a source ID already present before the card began; written list of expected-but-unprovable relations |
| **S2-02** | Editorial rewrite of all 36 `why_it_matters` + 3 summaries + 4 era intros | **Editor** → Reviewer (factual gate) | — | Reader-facing prose grounded in each item's existing source; no new claims; anti-hype policy verified |
| **S2-03** | **Interaction design spec for the Thread** | **Designer** → Critic | 08 | Written spec + wireframe description for desktop and mobile; states default state, first action, empty states, and how relation types read without a legend |
| **S2-04** | Backbone line research — GPT / Claude / Llama / Gemini | Researcher → Reviewer | S2-01 | Each backbone family has a `successor_of` chain of ≥3 links, or a written escalation explaining why it is not provable |
| **S2-05** | Reconnect orphaned entities | Researcher → Reviewer | S2-01 | 11 zero-degree entities addressed; CLIP model/technology duplication resolved |
| **S2-06** | Implement the Thread view | Coder → Reviewer | S2-03, S2-04 | Primary gesture works; four backbone threads render; secondary graph reachable from a node |
| **S2-07** | Home screen redesign | Coder → Critic → human | S2-03, S2-06 | History above the fold at 1440×900 and 390×844; four preset entry threads; "Nothing selected" demoted |
| **S2-08** | Visual regression + naive-click gates | Tester | S2-06 | The four Gate C assertions plus the naive-click path, all in CI |
| **S2-09** | i18n architecture + RU/EN switcher | Coder → Reviewer | 10 | Stage 1 acceptance in `10-localization-contract.md`; `en` complete, `ru` may be partial |
| **S2-10** | GitHub remote + push | human-authorised | — | Repository published; branch protection decided; **requires explicit human authorisation** |
| **S2-11** | Sprint 1 report supersession | Orchestrator | — | `sprint-01.md` updated from live evidence or marked superseded |

**Deliberately not in this sprint:** new milestones (Campaign 4) and full Russian content (Stage 2). Both are real work; both are wrong to start before the graph connects and the voice exists.

### The critical path

**S2-01 is the unblocker.** It requires no new research, no new sources and no external access — only re-reading the 36 sources already in the repository. It is expected to take the graph from 16 relations to roughly 40–50. Until it lands, S2-06 has almost nothing to draw and any Thread implementation will look as empty as the current lineage view.

**Start S2-01, S2-02 and S2-03 in parallel on day one.** They have no dependency on each other and they unblock everything else.

---

## 6. Division between the two Strategs

### For the curating Strateg (chat, GPT)

Owns **product judgment** — the questions that are decisions, not tasks:

1. **Approve or amend the Thread as the signature mechanic** (`08-interaction-contract.md` §2). If a different primary gesture is preferred, decide *now*, before S2-03. This is the one decision that everything else hangs on.
2. **Decide the promise if the data will not stretch.** If S2-01 + S2-04 land below ~40 relations, the public claim must narrow. Record the decision in canon. Do not let the tagline outrun the dataset.
3. **Approve the editorial voice** on a sample of 5 rewritten `why_it_matters` before the Editor processes all 36. Cheap to redirect early, expensive later.
4. **Decide the Russian timeline** — whether Stage 2 belongs in Sprint 3 or later.
5. **Set the audience.** Curious professional? Student? Journalist? This has never been written down, and it silently determines the editorial register.

### For the Hermes Strateg (Grok)

Owns **execution**:

1. Read `08`, `09`, `10` and this brief; record the actual model/profile mapping at kickoff.
2. Register the roles: **Designer** and **Editor** as new card owners.
3. Build the DAG from §5, respecting Hermes scheduling semantics — dependency edges only for real prerequisites, no fake-epic deadlock (`.hermes.md` §4).
4. Enforce the new gates from §4, especially the commit-per-card rule.
5. Keep one accountable assignee per card; serialize anything touching shared composition files (`.hermes.md` §5, §11).
6. Escalate to the human only at the intended gates: material scope change, the promise decision, final visual acceptance, and the GitHub push.

---

## 7. What to tell the team

Worth stating plainly at kickoff, because the factory is what is under test:

**What went genuinely well.** When the internal critic demanded 40–70 relations, the team refused to fabricate them and escalated instead. Most teams — human or agent — quietly generate plausible edges at that point. The data model (confidence, rationale, `evidence_source_ids`, `status`) is better than most production systems. None of that should change.

**What to change.** Green tests certified a screen that was 4,247 pixels of nothing. The gates measured the properties the authors knew how to measure. Sprint 2 adds a small number of assertions about what a *reader* encounters, and two roles accountable for the reader's experience.

**The compounding lesson.** Sprint 1's own retrospective (`FACTORY_LESSONS_FROM_AQUARIUM.md`) was excellent and correctly predicted several failure modes — it just did not predict this one, because every lesson was drawn from *process* failures rather than *product* failures. Add the product-level lesson: **specify the reader's experience before building the machinery that serves it.**
