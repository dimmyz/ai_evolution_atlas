# Sprint 1 kickoff — AI Evolution Atlas

Date: 2026-08-24  
Sprint goal: source-grounded polished interactive vertical slice  
Execution: **safe to start** — duty + AIH-01 already running.

## Surfaces

- Desktop project: **AI Evolution Atlas** (`p_b493de9a`)
- Workspace / Git root: `D:\Projects\AI_Evolution_Atlas\AI_Evolution_Atlas_Project_Pack_v0.1`
- Board: **`ai-atlas`**
- Git seed: `f5d61c0`
- Playwright Chromium already on the VM from Aquarium (`%LOCALAPPDATA%\ms-playwright`). Scaffold card still must wire `npm run test:e2e` in **this** repo.

Nothing copied from Aquarium/MultiAgentTest into this tree.

## Profile / model mapping (actual)

| Role | Profile | Model | Notes |
|---|---|---|---|
| Strateg | `default` | grok-4.6 / xai-oauth | this chat |
| Orchestrator | `orchestrator` | gpt-5.6-luna-900k | bounded duty, no 30-loop |
| Architect | `architect` | gpt-5.6-terra | |
| Researcher | `researcher` | **gpt-5.6-terra** | pinned at kickoff for source work |
| Coder | `coder` | grok-4.6 | |
| Tester | `tester` | gpt-5.6-luna | generic soul |
| Critic | `critic` | gpt-5.6-luna | separate soul; not Coder |
| Reviewer | `reviewer` | gpt-5.6-luna **high** | independent session, not Coder transcript |
| Sonnet 5 / Opus 5 | — | **unavailable** | Anthropic not logged in |

Independence this sprint = **separate profile + no coder reasoning in reviewer context**, not a second vendor.

## Deviations from the ChatGPT pack

1. **No Claude Sonnet 5 / Opus 5.** No `ANTHROPIC_API_KEY` / Claude OAuth on this Hermes. Human also asked to keep Luna reviewer until further notice. Recorded; add Anthropic later to swap critic/reviewer pins only.
2. **Sprint is not a Hermes parent** of all children (deadlock lesson).
3. **Duty has no `--goal` loop.** One sweep then wait (`dependency` block). Wake manually / on escalation.
4. Same-card review still Luna, not Sonnet.

## DAG (logical → Hermes)

See `docs/reports/sprint-01-card-ids.json`.

```
AIH-01 researcher
  ├─ AIH-02 architect ──┐
  ├─ AIH-03 researcher ─┼─ AIH-05 dataset ─┐
  └─ AIH-04 researcher ─┘                  ├─ AIH-08 timeline
           AIH-02 ─ AIH-06 scaffold        ├─ AIH-09 lineage
                    └─ AIH-07 shell ───────┴─ AIH-10 search
                                              └─ AIH-11 critic
                                                 └─ AIH-12 integrate
                                                    ├─ AIH-13 factual
                                                    └─ AIH-14 visual
                                                       └─ AIH-15 closure
```

Duty: `t_92e67a5a`. First work: `t_bc4e2593` AIH-01.

## Orchestrator handoff

Card body: DAG already exists; one sweep; then wait; reject wrong-repo evidence; visual green ≠ accepted; no product code.

## Workspace / browser readiness

- Cards carry `project_id` + expected path + git root.
- Reviewer soul: reject wrong workspace first.
- Playwright browsers present on disk; project harness is AIH-06’s job.
- Humans: `npm.cmd` not `npm` in PowerShell.

## After kickoff

Strateg will not implement the site or run routine tests. Human visual `accepted / rework_required` is still required at the end (spec/06).
