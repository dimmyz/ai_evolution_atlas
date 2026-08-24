# Sprint Closure Report — AIH-SPRINT-01

## Executive verdict
- product: `blocked` — integrated slice evidence is promising, but closure retains the current Chromium marker failure and the required human visual decision is pending.
- factual quality: `pass_with_reservations` — canonical validation and bounded sampling passed; source-server limitations remain recorded.
- visual quality: `blocked` — the required screenshot pack exists and automated checks passed, but human visual acceptance is pending and the integrated marker gate is not deterministic.
- engineering: `blocked` — the independent closure rerun observed 2/3 E2E tests passing and the integrated marker assertion failing with zero markers after an earlier 3/3 pass.
- factory: `pass_with_reservations` — workspace, routing, provenance, review, and rework controls are evidenced; final closure gates remain open.

## Goal
Deliver a source-grounded, visually polished interactive AI Evolution Atlas vertical slice for 2017–2026, with canonical milestones, lineage, discovery, citations, browser/a11y evidence, and an auditable factory handoff while preserving primary-source and workspace-integrity rules.

Workspace integrity at closure inspection:

- Project ID: `ai-evolution-atlas`
- Workspace/Git root: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- HEAD: `f5d61c02e5c9e7cf08f347be6d82ffadd400ee90`
- `.hermes.md` marker: `AI Evolution Atlas` confirmed
- `git diff --check`: passed

## Role/model mapping actually used

| Role | Profile/model actually used | Responsibility |
|---|---|---|
| Strateg | Strateg policy/routing; no routine implementation | Scope, source policy, material trade-offs, human gate policy |
| Orchestrator | `orchestrator` | DAG, routing, evidence integrity, closure report; no product code |
| Researcher | `researcher` | Source baseline, raw batches, supplements, canonical research inputs |
| Architect | `architect` | Architecture and ADRs |
| Coder | `coder` | Scaffold, shell, isolated features, integration/fixes |
| Critic | `critic` | Adversarial UX/content checkpoint AIH-11 |
| Reviewer | `reviewer` | Independent same-card review and approval/rework |
| Tester | `tester` | Browser, accessibility, visual evidence |
| Sonnet 5 | Unavailable in the card registry (`unavailable_no_anthropic_key`) | No unapproved substitute was enabled; reviewer/critic roles remained separated |

## DAG/card outcomes

| Logical card | Hermes id | Assignee | Outcome | Rework | Reviewer | Evidence |
|---|---|---|---|---:|---|---|
| AIH-01 Source baseline | `t_bc4e2593` | researcher → reviewer | done | 0 | reviewer approved | `research/source-baseline.md`; review in card history |
| AIH-02 Architecture/ADRs | `t_1e118a74` | architect → reviewer | done | 0 | reviewer approved | `docs/architecture.md`, `docs/adr/*`, `docs/reports/t_1e118a74-review.md` |
| AIH-03 Research batch A | `t_ccd6c6c4` | researcher → reviewer | done | 0 | reviewer approved | `research/batches/2017-2022.md`, `docs/reports/t_ccd6c6c4-review.md` |
| AIH-04 Research batch B | `t_a2283b3e` | researcher → reviewer | done | 0 | reviewer approved | `research/batches/2023-2026.md`, `docs/reports/t_a2283b3e-review.md` |
| AIH-05 Canonical dataset | `t_0046b3a1` | researcher → reviewer | done | 0 | reviewer approved | `data/atlas.yaml`, `docs/reports/t_0046b3a1-review.md` |
| AIH-06 Scaffold/guard/Playwright | `t_ae14fb7d` | coder → reviewer | done | 0 | reviewer approved | `package.json`, workspace guard, browser smoke, `docs/reports/t_ae14fb7d-review.md` |
| AIH-07 Editorial shell | `t_6272557a` | coder → reviewer | done | 0 | reviewer approved | `src/shell/**`, `evidence/home-1440x900.png`, review report |
| AIH-08 Timeline/detail | `t_ceea8195` | coder → reviewer | done | 1 | reviewer approved round 2 | `src/features/timeline/**`, timeline evidence, review report |
| AIH-09 Lineage | `t_e3744ec3` | coder → reviewer | done | 0 | reviewer approved | `src/features/lineage/**`, `evidence/lineage-1440x900.png`, review report |
| AIH-10 Discovery/citations | `t_5947f6c8` | coder → reviewer | done | 0 | reviewer approved | `src/features/discovery/**`, review report |
| AIH-11 Adversarial critique | `t_e6907d6f` | critic | done | 0 | critic checkpoint, not acceptance | `docs/reports/critic-aih11.md` |
| AIH-12 Integrated slice | `t_4b0e88f4` | coder → reviewer | done | 2 requested-change cycles; approved round 3 | reviewer approved round 3 | `docs/reports/aih12-scope.md`, integrated evidence, review report |
| AIH-13 Factual acceptance | `t_b0368629` | tester/reviewer lane | done | 1 | reviewer approved round 2 | `docs/reports/factual-acceptance.md`, review report |
| AIH-14 Browser/a11y/visual | `t_1f14cf72` | tester | done | 0 | tester completion; human gate pending | `docs/reports/visual-acceptance.md`, four screenshots |
| AIH-15 Closure/scorecard | `t_6ed3a3c6` | orchestrator → reviewer | in review / changes requested | 1 review rework | reviewer requested changes | this report; `docs/reports/t_6ed3a3c6-review.md` |
| AIH-16 2017–2022 supplement | `t_ecac62d3` | researcher → reviewer | done | 0 | reviewer approved | supplement and review report |
| AIH-17 2023–2026 supplement | `t_cf5bf555` | researcher → reviewer | done | 1 requested-change cycle; approved round 2 | reviewer approved round 2 | supplement and review report |

Counting rule: “first-pass approvals” means cards with an approval/completion outcome on their first implementation or checkpoint execution/review round. The auditable first-pass set is AIH-01–07, AIH-09–11, AIH-14, and AIH-16 = 12 cards. AIH-08, AIH-13, and AIH-17 required one correction cycle; AIH-12 required two; AIH-15 is not approved.

## Human interventions after kickoff

- Recorded interventions: 0.
- Required outstanding intervention: final human visual decision against the screenshot pack and integrated runtime (`accepted` or `rework_required`).
- No credentials, privileged action, production publishing, or Sol enablement was used.

## Factual acceptance summary

- `npm.cmd run validate:data`: PASS — 36 sources, 36 entities, 36 milestones, 16 relations.
- AIH-13 sampled 10 milestones and 10 relations, covering `successor_of`, `same_family_as`, `uses_architecture`, `authored_by`, and `released_by`.
- All published milestones have primary-backed source references in the reviewed acceptance sample; the report is bounded sampling, not a claim of line-by-line re-review of every field.
- Five OpenAI URLs returned HTTP 403 in one live probe; primary content and alternate extraction evidence were retained and the limitation is recorded in the relevant review reports.
- No unsupported chronology-only relations were added to inflate the graph.

## Engineering gates

Current closure evidence from the declared workspace:

| Command/gate | Result |
|---|---|
| `npm.cmd run verify:workspace` | PASS |
| `npm.cmd run validate:data` | PASS — 36/36/36/16 |
| `npm.cmd test` | PASS — 29 files, 106 tests |
| `npm.cmd run typecheck` | PASS |
| `npm.cmd run build` | PASS — Vite 8.2.2, 398 modules |
| `git diff --check` | PASS |
| First `npm.cmd run test:e2e` observation | PASS — 3/3 Chromium tests |
| Immediate independent E2E rerun | BLOCKED — 2 passed, 1 failed at `tests/e2e/integrated-slice.spec.ts:31`; SVG marker count was 0 |

The E2E gate is therefore not deterministic evidence of closure. Follow-up coder card `t_71869fb2` is linked to restore/verify the integrated rendered marker and rerun the full gate.

## Visual evidence / human decision

- Required artifacts present: `evidence/home-1440x900.png`, `evidence/timeline-selected-1440x900.png`, `evidence/lineage-1440x900.png`, and `evidence/mobile-390x844.png`.
- AIH-14 recorded 3/3 Chromium tests, keyboard-oriented assertions, no horizontal overflow at 390x844, and no page errors in its run.
- Critic AIH-11 reviewed desktop evidence and produced actionable findings; AIH-12 recorded the integration corrections.
- Human visual acceptance: `PENDING`.
- Closure visual verdict: `blocked` because the human decision is absent and the independent integrated rerun found zero SVG markers.

## Routing/process incidents

- Parallel feature work correctly used isolated ownership, but `package.json`/`package-lock.json` were flagged as a shared hotspot when React Flow and D3 dependencies were added. The hotspot was recorded and bounded; composition-root ownership stayed with AIH-12.
- AIH-17 had one changes-request cycle and was independently approved on round 2; no third-cycle ping-pong occurred.
- AIH-12 reached the three-cycle policy boundary and was approved after the third review round; no further automatic rework was permitted.
- Closure report review correctly returned AIH-15 for changes rather than accepting an incomplete template or unstable E2E claim.
- No wrong-workspace evidence was accepted; Aquarium/MultiAgentTest evidence was explicitly excluded.

## Token/time data if available

No reliable token accounting was recorded in the card handoffs. Wall-clock timestamps and run histories are retained by Kanban; this report does not fabricate token or duration totals.

## What changed in canon/ADRs

- Architecture and visualization decisions were recorded in `docs/architecture.md` and ADR-001 through ADR-004.
- Canonical dataset and source supplements were added under the declared data/research paths without weakening the primary-first research contract.
- `docs/reports/critic-aih11.md`, `docs/reports/factual-acceptance.md`, and `docs/reports/visual-acceptance.md` preserve the Critic, factual, and browser evidence gates.
- No canon rule was narrowed to obtain green tests; no project-specific paths were written to global soul or memory.

## Residual risks

- Integrated SVG marker rendering is currently nondeterministic or absent in the failing rerun; this is a MUST-level engineering/interaction risk.
- Human visual acceptance is still outstanding.
- Factual acceptance is sample-bounded and includes documented source-server access limitations.
- The dataset has 16 source-grounded published relations; relation density was not padded beyond evidence.
- Final closure must be rerun after `t_71869fb2` and must preserve the workspace/provenance checks.

## Recommended Sprint 2

1. Complete and independently review `t_71869fb2`; make the integrated marker assertion deterministic across repeated Chromium runs.
2. Obtain the human visual decision using the four-artifact screenshot pack and the integrated runtime.
3. Re-run the complete closure gate set, then update this report only from current evidence.
4. If accepted, deepen source coverage and relation evidence without lowering the primary-source standard; add repeatable visual regression checks for desktop and mobile.

## Factory score 1–5

`4/5` — strong workspace integrity, one-assignee DAG, isolated ownership, same-card review, Critic checkpoint, bounded rework policy, and honest blocked reporting. Deduction: the final closure artifact is not yet accepted because E2E evidence is unstable and the human visual gate is pending.

## Product score 1–5

`3/5` — the integrated vertical slice, canonical data, citations, timeline, lineage, discovery, and screenshot pack are substantially present and independently exercised. Deduction: a MUST-level integrated marker failure and unresolved human visual acceptance prevent a higher score or acceptance verdict.
