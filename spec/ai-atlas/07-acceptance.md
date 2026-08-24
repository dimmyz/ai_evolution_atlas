# 07 — Sprint 1 Acceptance Criteria

The sprint may be `accepted` only when every MUST class passes.

## MUST — Product

- [ ] Site clearly communicates “AI Evolution Atlas” purpose and 2017–2026 scope.
- [ ] At least 30 verified milestones are available unless Strateg explicitly narrows count for quality and records the decision.
- [ ] Timeline is interactive and remains readable at target desktop viewport.
- [ ] Selecting a timeline item opens a useful detail view.
- [ ] Lineage/relationship view contains a meaningful verified subgraph, not only placeholder nodes.
- [ ] Search/filter works for title plus at least type and organization.
- [ ] Each publishable milestone exposes one or more sources.
- [ ] User can move between related nodes without losing context.
- [ ] Mobile fallback is usable even if graph interaction is simplified.

## MUST — Factual

- [ ] Dataset validator passes.
- [ ] No verified milestone lacks required sources.
- [ ] No strong directional relation lacks evidence.
- [ ] Dates respect declared precision.
- [ ] Reviewer samples at least 10 milestones across early/mid/late period and verifies them against sources.
- [ ] Reviewer samples at least 10 relations, including every relation type actually published.
- [ ] Unsupported “first/best/directly led to” wording is absent or sourced.

## MUST — Engineering

- [ ] Clean install path is documented and works.
- [ ] Unit/data validation tests pass.
- [ ] Typecheck passes.
- [ ] Production build passes.
- [ ] Playwright Chromium is part of the repo from scaffold onward.
- [ ] E2E smoke covers home, timeline selection, filter/search, lineage open/select, source-link presence.
- [ ] No fatal browser console/page errors in smoke flow.
- [ ] No required core asset/data is hot-linked from a CDN.
- [ ] Workspace identity check exists in the harness or runbook.

## MUST — UX/Visual

- [ ] Required screenshot pack exists.
- [ ] Sonnet 5 Critic report exists after integrated feature set.
- [ ] Blocking visual findings are resolved or explicitly escalated.
- [ ] Keyboard can reach core navigation/filters and select/open a timeline item.
- [ ] Obvious text contrast/focus failures are absent.
- [ ] Human visual MUST is `accepted`.

## MUST — Factory

- [ ] Strateg reads repository canon and records actual profile/model mapping.
- [ ] Scheduling DAG reflects Hermes semantics and avoids fake-epic deadlock.
- [ ] Every card includes project/workspace identity.
- [ ] No wrong-repository evidence is accepted.
- [ ] Same-card Reviewer is used on significant research/architecture/coding cards.
- [ ] At least one real Researcher -> Architect/Coder handoff is evidenced.
- [ ] At least one Critic -> Coder rework or explicit no-change decision is evidenced.
- [ ] Rework cycles are bounded.
- [ ] Orchestrator writes a final closure report.
- [ ] Strateg can understand the run from canon + final report without reading worker chats.

## Final verdict vocabulary

Only:
- `accepted`
- `accepted_with_reservations`
- `rework_required`
- `blocked`
- `escalated`

`accepted_with_reservations` is forbidden if a MUST criterion fails.
