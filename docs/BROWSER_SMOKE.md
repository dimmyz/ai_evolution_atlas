# Browser smoke — AI Evolution Atlas

This document is the scaffold harness note for Playwright Chromium. It is not a feature
acceptance report. Full product flows (timeline, lineage, search, citations) belong to
later cards.

## Windows command note

On Windows, prefer `npm.cmd` when PowerShell execution policy blocks `npm.ps1`.

```text
npm.cmd install
npm.cmd run verify:workspace
npm.cmd test
npm.cmd run typecheck
npm.cmd run build
npm.cmd run test:e2e
```

Do not use `chrome:` protocol links or Microsoft Store browser installers. Agents must
drive this repository's Playwright Chromium harness.

## What the scaffold smoke asserts

`tests/e2e/smoke.spec.ts` starts the local Vite app and checks that:

- `/` loads;
- the document heading is **AI Evolution Atlas**;
- the 2017–2026 purpose text is visible;
- the page does not emit a `pageerror`.

It does not click timeline, lineage, or search controls. Those do not exist yet.

## Playwright Chromium

`@playwright/test` is a dev dependency. The Playwright config uses the Chromium project
only. Install or reuse browsers with:

```text
npx.cmd playwright install chromium
```

If this machine already has a shared Playwright cache (`%LOCALAPPDATA%\ms-playwright`),
Playwright will reuse matching browser builds. The project still owns its own
`playwright.config.ts` and `npm.cmd run test:e2e` script.

## Workspace identity

`npm.cmd run verify:workspace` is fail-closed. It exits non-zero unless:

- `PROJECT_SEED.yaml` `project_id` is `ai-evolution-atlas`;
- `package.json` `name` is `ai-evolution-atlas`;
- `.hermes.md` contains `AI Evolution Atlas`.

Wrong-repository evidence is invalid even if later tests are green.
