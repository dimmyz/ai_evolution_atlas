# Operational Strateg Intake Report — AI Evolution Atlas v2

Date: 2026-08-25  
Author: Operational Strateg (`default` / grok-4.6) in Hermes Desktop  
Status: **intake only** — no discovery DAG created, no broad coding, no GitHub mutation.

This report is the HERMES-INTAKE-001 success artifact. Review it before authorizing cards.

---

## 1) Workspace and repository identity

| Item | Value |
|---|---|
| This Hermes chat cwd | `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1` |
| `.hermes.md` here | still **v1** (“AI Evolution Atlas”, Sprint-1 canon) |
| GitHub repo | https://github.com/dimmyz/ai_evolution_atlas |
| Inspected clone | `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_CLONE_2026-08-25` |
| Same remote also on | `.../AI_Evolution_Atlas_Project_Pack_v0.1` (second working tree) |

Proof (clone):

- `git rev-parse --show-toplevel` = `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_CLONE_2026-08-25`
- `HEAD` = `9f1c058063454840e02baa959889af86bc49cf94`
- `main...origin/main`, clean working tree
- Latest: `docs: add Quality gates badge to README (#1)`
- Default remote: `origin/HEAD -> origin/master` (odd vs local `main`; inspect before first PR)

`gh` is **not** on this bash PATH (`gh: command not found`). Agents cannot open PRs until `gh` is on PATH or we call the full exe. Human said GitHub CLI is installed — this is a factory environment gap, not a product gap.

Recommended **single execution workspace** after bootstrap: the GitHub clone (or one renamed folder). Do not run two dirty copies of `main`.

---

## 2) v2 project pack inventory

Path: `D:/Projects/AI_Evolution_Atlas/02 — Site v2 — Project Pack`

| File | Role |
|---|---|
| README — START HERE | pack gate + authority order |
| HERMES-INTAKE-001 | this kickoff prompt |
| DEC-001 H1–H5 APPROVED | binding human decisions |
| PG-01 Planning Gate | READY discovery / NOT READY implementation |
| 01 Charter | product identity, roles, risks |
| 02 Vision & Scope | (present, not re-summarized here) |
| 03 PRD | (present) |
| 07 Research Program | waves, packets, SP01–SP06 |
| 00B Core Pack & Research Map | documentation map |
| 00C RU executive summary | management only |

**Missing next canon (expected, not a kickoff defect):** 04 audience, 05 editorial, 06 evidence methodology, 08 ontology, 09–11 UX/visual, 12–13 localization/rules, 14–20 architecture/acceptance/handoff.

v2 pack is **docx**, not yet in git. That is correct until a `v2-bootstrap` PR.

---

## 3) Current Git state (legacy reality)

`main` is **v1 product + factory**:

- README still says “Hermes Factory Project Pack v0.1” and points Strateg to `prompts/START_HERE_FOR_STRATEG.md` (would relaunch the **v1 seed DAG**).
- `spec/ai-atlas/` 2017–2026 encyclopedia slice is still the in-repo canon.
- Sprint 2 files exist (interaction/content). **Not v2 canon** unless explicitly adopted.
- Useful and keep: CI quality gates, PR-only `main`, `docs/GITHUB_WORKFLOW.md`, critic:blocking, workspace identity, Playwright.
- Critic context (lessons, not orders): `docs/reports/CLAUDE_EXTERNAL_CRITIC_REPORT.md`, `critic-aih11.md`.

No `v2-bootstrap` branch, no `v1.0-legacy` tag observed in the clone’s local refs.

---

## 4) Hermes profiles vs v2 roles

Live pins (this machine):

| Profile | Model | Keep? |
|---|---|---|
| `default` Strateg | grok-4.6 / xai-oauth | yes |
| `orchestrator` | gpt-5.6-luna-900k | yes |
| `architect` | gpt-5.6-terra | yes (solution + later data-architect cards) |
| `researcher` | gpt-5.6-terra | yes (Research Lead) |
| `coder` | grok-4.6 | **sleep** until H5 / Factory Build Gate |
| `tester` | gpt-5.6-luna | later acceptance design; light now |
| `reviewer` | gpt-5.6-luna high | yes; independent session |
| `critic` | gpt-5.6-luna | yes; not a merge stamp |

**Missing profiles (needed before DAG):**

| New profile | Suggested pin | Why |
|---|---|---|
| `fact-checker` | gpt-5.6-luna **high** | must not share Researcher reasoning; Terra alternative if we want a different Codex model |
| `editor` | grok-4.6 | reader voice, not research-speak |
| `designer` | grok-4.6 | first human action + Story Path mechanic |

Parallel researchers: **one assignee per card**. For concurrent SP packs clone profiles `researcher-sp01` / `researcher-sp02` / `researcher-sp04` (same Terra pin, separate souls/sessions) **or** serialize on one `researcher`. I recommend **three researcher clones** only after Intake is approved; otherwise one researcher + sequential packs is safer.

Souls stay role+protocol only. Project paths stay in cards + future `docs/v2/`.

Auth actually logged in: **xai-oauth**, **openai-codex**. Anthropic / Kimi / Gemini / OpenRouter / GitHub token: **not set**.

PR convention (human request): every PR/review comment states the **role name** (`reviewer`, `orchestrator`, …). I will put this in the first bootstrap work packet, not in SOUL.

---

## 5) Repository transition (proposal only — not executed)

Agree with ChatGPT Strateg: **one repo, one `main`, no fork, no history rewrite.**

```
dimmyz/ai_evolution_atlas
  tag v1.0-legacy          + optional archive/v1-final  ← current 9f1c058
  main                     ← stays protected integration
    PR: v2-bootstrap       ← first change
```

`v2-bootstrap` contents (after you approve):

1. New README: active program is Atlas **v2**; v1 is legacy implementation/reference.
2. Quarantine `prompts/START_HERE_FOR_STRATEG.md` as **do not execute**.
3. Add `docs/v2/` (markdown exports or originals of the pack) as **authoritative direction**.
4. Point `.hermes.md` hierarchy: `docs/v2/` + DEC-001 over `spec/ai-atlas/`.
5. Keep `src/`, `data/`, CI, GITHUB_WORKFLOW as **legacy + factory infrastructure**.
6. Do **not** delete v1 code.

Agents: branch → PR → Reviewer label → bot merge. Never push `main`.

Human gate: tag + first bootstrap PR.

---

## 6) Milestone / epic / card map (discovery only)

**M1 — Research Foundation & Three Flagship Evidence Packs** (PG-01 §10)

Logical cards (not created yet):

| ID | Work | Owner |
|---|---|---|
| V2-00 | `v2-bootstrap` PR (docs only) | Strateg + Reviewer |
| V2-A | 04 Audience, Personas & Learning Jobs | designer (audience) + editor review |
| V2-B | 05 Content Strategy & Editorial System | editor |
| V2-C | 06 Research & Evidence Methodology | fact-checker lead + researcher |
| V2-D | RM0 corpus audit / relation harvest | researcher |
| V2-SP01 | Story pack Transformer → ChatGPT | researcher |
| V2-SP02 | Story pack ImageNet / AlexNet / GPU | researcher |
| V2-SP04 | Story pack NVIDIA → CUDA → DL infra | researcher |
| V2-FC-* | Fact-check each pack | fact-checker |
| V2-ED-* | Editorial draft after FC accept | editor |
| V2-DUTY | bounded orchestrator watch | orchestrator |

**Not in M1:** 08–20, mass UI, Thread implementation, Coder feature cards.

---

## 7) Parallel vs gated

**May start in parallel after V2-00 merges (or even as draft docs on `v2-bootstrap`):**

- V2-A, V2-B, V2-C, V2-D

**Gated:**

- Story packs **after** V2-C methodology exists (or a thin 06 stub approved) so packets share claim/relation rules.
- SP01/02/04 **parallel only if** three researcher profiles exist; else serialize SP01 → SP02 → SP04.
- Editorial drafts **only after** matching fact-check `accepted` / `accepted_with_reservations`.
- UX prototypes **after** at least one FC-accepted pack (Designer needs real story, not lorem).
- Ontology 08 **after** three packs exist to pressure-test.
- Broad Coder **closed** until 08+10+17 + human Factory Build Gate.

---

## 8) Owners for named artifacts

| Artifact | Primary | Independent check |
|---|---|---|
| 04 Audience | `designer` | `reviewer` |
| 05 Editorial system | `editor` | `reviewer` + critic sample |
| 06 Evidence methodology | `fact-checker` | `reviewer` |
| RM0 corpus audit | `researcher` | `fact-checker` |
| SP01 / SP02 / SP04 | `researcher` (+ clones) | `fact-checker` → `editor` |
| Orchestration | `orchestrator` | Strateg on 3rd rework |

---

## 9) Review / fact-check / critic chain

```
Researcher evidence pack
    → Fact Checker (separate profile; no researcher transcript)
         accepted | accepted_with_reservations | unsupported | disputed | needs_more
    → Editor narrative (no new facts)
    → Reviewer (spec + evidence only)
    → Critic on story/UX samples (may block product-level fail)
    → Human: H3 editorial voice, later H4 UX
```

Same-card review for significant cards. Critic is a **checkpoint artifact**, not a duplicate reviewer card — unless the critic produces a new downstream report (then its own card, like AIH-11).

GitHub: Reviewer writes the report **and** `reviewed:approved`. Comment first line: `role: reviewer`.

---

## 10) Stop conditions and human gates

Stop / escalate:

- 3 rework cycles on one card
- pressure to invent relations to “fill the graph”
- any card starts Home/Timeline/Lineage coding
- START_HERE v1 is executed
- wrong workspace / wrong preview (Aquarium lesson)
- stale closure report used as current truth
- `gh` missing when a PR is required

Human gates (do not auto-pass):

- approve this Intake + branch plan
- DEC-001 already done (H1–H5)
- H3 editorial sample (charter)
- H4 UX prototype later
- Factory Build Gate before Coder
- production release

---

## 11) Broad coding remains CLOSED

Confirmed. Coder may only do **narrow, card-approved tooling** (validators, import of existing `data/atlas.yaml` into an audit table, prototype harness if Designer asks). No site redesign, no mass components.

---

## 12) Contradictions: v2 pack vs legacy repo

| Tension | Resolution now |
|---|---|
| Repo README / START_HERE launch v1 DAG | Quarantine in bootstrap PR |
| In-repo `.hermes.md` says `spec/ai-atlas/` is #1 canon | v2 docs override until `.hermes.md` updated |
| Charter still lists audience as OPEN; DEC-001 H2 locked it | **DEC-001 wins** |
| PG-01 “6 candidate paths” vs H4 “these three first” | Research only SP01, SP02, SP04 in M1 |
| Sprint 2 Thread spec in repo | Hypothesis only; Designer may reject |
| v1 scope 2017–2026 encyclopedia | v2 is **story-path first**; 2017–2026 is not the product unit |
| Two local clones of the same GitHub repo | Pick one workspace |
| `origin/HEAD` → `master` vs working `main` | Confirm default branch on GitHub before PR |
| Pack is docx outside git | Bootstrap copies/exports into `docs/v2/` |
| Sonnet/Opus as default judge in older factory notes | **Unavailable** as Hermes profiles today (see models) |
| `gh` not in agent PATH | Fix before first PR |

Critic reports used as **context**: green tests ≠ product; relations > entity count; Researcher ≠ Editor; Designer owns first action; never fabricate edges. That last v1 behavior is **kept**.

---

## Subscriptions vs Hermes (no new paid API assumed)

What already works here: **Grok (xAI OAuth)** and **ChatGPT/Codex OAuth** (Terra / Luna / Luna-900k).

| You pay | Hermes today | Verdict |
|---|---|---|
| Grok ~$30 | xai-oauth → grok-4.6 | **Use** — Strateg, Editor, Designer, later Coder |
| OpenAI ~$20 | openai-codex → gpt-5.6-* | **Use** — Orchestrator, Architect, Researcher, Reviewer, Fact-checker, Critic, Tester |
| Anthropic ~$20 **Pro** | OAuth path is **Max + extra usage**, not Pro. API key = extra $ | **Do not expect Pro to pin Sonnet/Opus in Hermes.** Critic can stay Luna, or later `claude -p` as a **delegated CLI**, not a profile brain. |
| Gemini ~$20 consumer | No consumer OAuth. Needs AI Studio / Vertex / OpenRouter key | **Cannot attach** (same as your earlier rule) |
| Kimi ~$40 chat | Hermes wants `KIMI_API_KEY` (Moonshot Open Platform), not the consumer app | **Likely cannot attach** unless Moonshot gives you an API key from that plan |

Ideas **without buying another monthly AI app**:

1. Stay on Grok + Codex — enough for M1 if we add editor/designer/fact-checker profiles.
2. If Anthropic is actually **Max**, try official `hermes model` → Anthropic OAuth and watch billing (docs: base Max quota is **not** what Hermes burns; extra credits are). I will not flip this on without you.
3. **Qwen OAuth** (`hermes auth add qwen-oauth`) is a free extra lane if you have a Qwen account — useful spare researcher, not a quality upgrade.
4. Do **not** put Claude Pro tokens into third-party Hermes to “save API” — ToS/ban risk.

---

## What I will do next (only after you say yes)

1. Confirm **one** git workspace (I recommend the clone).
2. Locate `gh.exe` and document PATH for workers.
3. Create profiles `editor`, `designer`, `fact-checker` (souls = temperament + protocol; **no** repo paths).
4. After you approve the branch plan: tag `v1.0-legacy`, branch `v2-bootstrap`, PR that only changes entry docs.
5. Then — and only then — M1 discovery DAG (no Coder features).

**I am stopped here.** First successful result is this map, not a new website.
