# Factory lessons carried forward from Aquarium Sprint 1

The Aquarium pilot was successful as orchestration and weak as final visual product. This project pack deliberately turns those observations into hard constraints.

## Lesson 1 — Green tests can certify the wrong project

Incident: an acceptance card executed landing-page tests in `D:/Projects/MultiAgentTest` and initially appeared green.

**New rule:** every card declares project ID/workspace. Every handoff records cwd/Git root. Reviewer rejects mismatch before reading test results.

## Lesson 2 — Project-poisoned SOUL causes cross-project drift

Incident: global souls still contained MultiAgentTest/Lumen Desk paths and test commands.

**New rule:** global SOUL = role + protocol only. Project truth = `.hermes.md` + `spec/` + card.

## Lesson 3 — Playwright belongs in bootstrap

Incident: browser/WebGL evidence arrived late because browser harness was installed mid-sprint.

**New rule:** scaffold card installs Playwright Chromium and creates E2E smoke before feature work.

## Lesson 4 — Visual quality is a separate acceptance dimension

Incident: 48 tests + build + Playwright could coexist with visually poor “fish” made from primitives.

**New rule:** screenshot evidence + independent visual Critic + human visual MUST.

## Lesson 5 — Review must examine the right property

Reviewer did a reasonable logic review, but the product needed taste/readability review too.

**New rule:** engineering Reviewer, factual Reviewer and visual Critic use explicit rubrics. “Looks good” is not inferred from `npm test`.

## Lesson 6 — Orchestrator must not burn tokens by pacing the hallway

Incident: duty card produced roughly 30 watch passes.

**New rule:** prefer event/status-change wakeups. If Hermes cannot do that, one bounded sweep per explicit wakeup; no recursive self-poll loop.

## Lesson 7 — Parallel feature cards need ownership boundaries

Incident: multiple Aquarium cards touched shared `bootstrap.ts`/`world.ts` and integration absorbed collisions.

**New rule:** feature cards own isolated modules. Root composition and shared indexes are owned by one integration card; serialize shared-file changes when needed.

## Lesson 8 — Orchestrator catching false done is valuable

The most important success was not the aquarium rendering. It was the Orchestrator refusing contaminated AQ-10 evidence.

**Keep:** independent evidence, same-card review, explicit blockers, no self-acceptance.
