# Atlas v2 — program roadmap (Strateg)

Status: working plan after Claude M1 checkpoint  
Date: 2026-08-26  
Does not replace DEC-001. Human may supersede §0.

## Layers

| Layer | Where | What |
|---|---|---|
| Strategy | GitHub **Issues** labelled `epic` | milestones to the site |
| Execution | Hermes board `atlas-v2` | one wave of agent cards |
| Canon | `docs/v2/` + DEC-001 | what is true |

Hermes Kanban is a **scheduling queue**, not a program office.  
GitHub Projects UI is **not** wired yet: the `gh` token lacks `project` scope. Issues are the durable backlog until you run `gh auth refresh -s project`.

## 0. Presentation contract (working, pending human)

Adopt **(B) now, (A) as content work**:

- **Show** what is established and where the popular story outruns the record.
- **Keep harvesting** transitions. Do not treat “path not connected” as a factory failure.
- **Designer** only after at least one packet is FC-accepted **or** a human accepts a “gaps-as-product” UX brief.

If you reject (B), say so. M1 exit then stays “path must connect.”

## Epics → site

| Epic | Outcome | Now |
|---|---|---|
| **E0 Bootstrap** | `main` is v2 entry; v1 archived | PR #3 open, `human:approved` |
| **E1 Evidence method + M1 packs** | 04/05/06, RM0, SP01/02/04 research | done |
| **E2 Independent fact-check** | verdicts; no invented edges | done; all 3 `needs_more` |
| **E3 Editorial (honest)** | reader copy from accepted claims only | drafts done; not a connected path |
| **E4 Claim harvest (this wave)** | claims from **already-read** sources | **next** |
| **E5 Ontology 08** | entities + relation types | next, parallel |
| **E6 Story Path UX (honest brief)** | mechanic on real FC output | **blocked** until E4/E5 or human (B) |
| **E7 Architecture + acceptance** | ADR, NFR, H5 matrix | after E6 |
| **E8 Implementation** | Coder builds site | **H5 closed** |

## Current wave (Hermes)

1. Register every card in `docs/reports/v2-card-ids.json` before spawn.  
2. Harvest SP01/SP02/SP04 claims from already-read PDFs (researcher).  
3. Fact-check those claims (fact-checker).  
4. Editor **assembles** existing FC + new verdicts; still no invented transitions.  
5. Architect drafts ontology under pressure of real claims.  
6. **Do not** re-run V2-UX on “draw Step 1 of 6.” Old spec has D1–D4 (critic).  
7. Factory card: `request_review` must set `--reviewer reviewer`.

## Stop

- Broad site coding.  
- Fabricating edges.  
- Designer on a connected-path brief while packets are `needs_more`.  
- Untracked evidence (commit same day).
