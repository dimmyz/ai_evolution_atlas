# Test Plan — AI Evolution Atlas Sprint 1

## 0. Workspace preflight — required for every agent run

- prove cwd;
- prove Git root;
- confirm project marker/canon;
- record head/commit when practical.

## 1. Data/schema unit tests — MUST

Test at minimum:
- unique IDs;
- all references resolve;
- relation endpoints resolve;
- relation type enum;
- publishable milestones have sources;
- verified strong relations have evidence;
- date precision validity;
- search/index builder handles all verified records;
- filters do not silently drop selected valid entity state.

## 2. Component/unit tests — SHOULD/MUST where deterministic

- filter reducer/state;
- selected-entity state;
- timeline date-to-position/cluster logic if custom;
- relation-neighborhood extraction;
- source/citation formatting;
- URL state parser if implemented.

## 3. Engineering gate — MUST

Run project equivalents of:
- test;
- typecheck;
- build.

On Windows use `npm.cmd` if PowerShell blocks `npm.ps1`.

## 4. Playwright Chromium — MUST from scaffold

At minimum:
1. home loads without `pageerror`;
2. purpose/title visible;
3. timeline exists;
4. select known milestone -> detail panel updates;
5. filter/search finds known item;
6. lineage view opens;
7. select a lineage node -> detail panel updates;
8. citation/source element exists for selected verified item;
9. basic keyboard path works for a core interaction;
10. mobile viewport loads without unusable overflow trap.

## 5. Screenshot evidence — MUST

Stable screenshots defined in Visual Contract.
Do not rely solely on pixel-perfect snapshot equality; use them for Critic/human review.

## 6. Factual audit — MUST

Tester/Reviewer:
- sample at least 10 milestones across the timeline;
- follow the source records;
- verify date, summary and organization attribution;
- sample at least 10 relations across every published relation type;
- record pass/fail/questions in `docs/reports/factual-audit.md`.

## 7. Broken-source sanity — SHOULD

If network/tools permit, verify external source URLs are syntactically valid/reachable.
A temporary network failure is not evidence that a historical claim is false; record it separately.

## 8. Visual Critic + human MUST

Critic reviews screenshot pack against rubric.
Coder resolves blockers in AIH-12 or same-card rework.
Human receives screenshots + preview URL after gates are green.
