# ORCHESTRATION — AI Evolution Atlas Sprint 1

## 1. Control layers

### Strateg
Owns:
- intent and scope;
- source/research policy;
- sprint goal;
- model/profile policy;
- material trade-offs;
- final strategic acceptance synthesis.

Strateg does **not** become a routine developer/project coordinator after kickoff.

### Orchestrator
Owns:
- real Hermes card DAG;
- assignments/dependencies;
- file-ownership conflict prevention;
- blocked/rework handling;
- evidence quality/provenance;
- final sprint report.

Orchestrator does not silently rewrite product or historical claims.

### Dispatcher/gateway
Mechanical only:
- promote/spawn/reclaim according to actual Hermes behavior.
It does not understand historical truth or visual quality.

## 2. Logical Sprint vs Hermes dependencies

Logical sprint: `AIH-SPRINT-01`.

Do not assume a Hermes parent behaves like a Jira epic. If parent means “children cannot start until parent done,” keep the sprint as logical metadata and use only true prerequisite dependency edges.

## 3. Seed execution graph

Strateg may refine this after reading actual profile descriptions, but must preserve bounded ownership and quality gates.

| ID | Work | Assignee | Depends on | Main output |
|---|---|---|---|---|
| AIH-01 | Source baseline + research plan | Researcher | — | `research/source-baseline.md` |
| AIH-02 | Architecture + data/visualization ADRs | Architect | AIH-01 | ADRs + module map |
| AIH-03 | Research batch A: 2017–2022 | Researcher | AIH-01 | raw evidence batch A |
| AIH-04 | Research batch B: 2023–2026 | Researcher | AIH-01 | raw evidence batch B |
| AIH-05 | Canonical dataset v1 consolidation | Researcher | AIH-02,03,04 | validated source/entity/milestone/relation files |
| AIH-06 | Repo scaffold + workspace guard + Playwright | Coder | AIH-02 | runnable app + harness |
| AIH-07 | Visual system + editorial shell | Coder | AIH-06 | shell/design tokens/layout |
| AIH-08 | Timeline + detail panel | Coder | AIH-05,07 | isolated timeline feature |
| AIH-09 | Lineage graph | Coder | AIH-05,07 | isolated graph feature |
| AIH-10 | Search/filter + citation UX | Coder | AIH-05,07 | isolated discovery feature |
| AIH-11 | Adversarial UX/content critique | Critic (Sonnet 5) | AIH-08,09,10 | critique report with severity |
| AIH-12 | Integrated slice + critic rework | Coder | AIH-11 | composition root + fixes |
| AIH-13 | Factual/data acceptance evidence | Tester | AIH-12 | factual sample + validator evidence |
| AIH-14 | Browser/a11y/visual evidence | Tester | AIH-12 | Playwright + screenshots |
| AIH-15 | Sprint closure + factory scorecard | Orchestrator | AIH-13,14 | final report |

## 4. Same-card Reviewer routing

Significant worker cards request review on themselves.
Default Reviewer: **Claude Sonnet 5**.

Examples:
- Researcher completes AIH-03 -> Sonnet 5 checks sources/claims on AIH-03.
- Architect completes AIH-02 -> Sonnet 5 checks ADR reasoning/boundaries.
- Coder completes AIH-08 -> Sonnet 5 checks diff + tests + acceptance.

AIH-11 is intentionally a separate Critic card because the critique itself is a new deliverable used by downstream integration; it is not a duplicate acceptance task.

## 5. Orchestrator duty policy

Preferred triggers:
- card becomes blocked;
- card enters review;
- review requests changes;
- prerequisite completes;
- timeout/stale worker;
- all terminal prerequisites for closure are done.

If actual Hermes lacks trigger-based duty:
- perform one status sweep per wake;
- write only changed material state;
- enter wait/dependency state;
- never self-trigger a long chain of “still waiting” passes.

## 6. Shared write ownership

Research:
- AIH-03 writes only `research/batches/2017-2022.*`;
- AIH-04 writes only `research/batches/2023-2026.*`;
- AIH-05 alone owns canonical `data/` consolidation.

Frontend:
- AIH-08 owns `src/features/timeline/**`;
- AIH-09 owns `src/features/lineage/**`;
- AIH-10 owns `src/features/discovery/**`;
- AIH-12 owns shared composition/root wiring and integration fixes.

Architect may adjust exact paths in ADR, but must keep equivalent exclusive ownership.

## 7. Human gate

The human is called only for:
- material scope/product decision;
- permission/credentials;
- final screenshot/preview acceptance;
- third rework cycle escalation.
