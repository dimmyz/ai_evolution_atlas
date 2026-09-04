# Phase-1 UX schema (for Studio or Hermes)

Product unit: **Story Path / Focus Path** (DEC-001 H3). Mechanic not locked.  
Audience: curious learner / tech professional (H2).  
Implementation: **spec only**. No production `src/` in this cycle.

## Screens

| ID | Purpose |
|---|---|
| S0 Entry | Named path title + one-sentence honest promise + primary action on first bead |
| S1 Bead focus | Active bead: what happened / why this record is here / evidence affordance |
| S2 Connector | Only if an allowed quote exists; else a “no sourced link” gap state |
| S3 Next bead preview | Dimmed; or “not in this slice” |
| S4 Evidence | Claim ID + verdict + source name (not raw `src-a01` as the only label) |

## First-screen contract

Must contain a **historical action** (open Transformer or GPT-2). Forbidden: only search/filters/pills.

## States

- `in_slice` — Phase-1 bead
- `quoted_link` — allowed connector
- `gap` — popular next step not evidenced (do not fill with a fake arrow)
- `out_of_slice` — SP02/SP04 or ChatGPT descent

## Visual tone

Editorial, dark or paper; not neon dashboard; not default React Flow chrome. Demo-worthy for colleagues.

## Output we need back

1. ASCII or HTML wireframe 1440×900 of S0+S1  
2. Mobile 390×844 of S0  
3. Naive-user 8-step journey (keyboard + click)  
4. Copy deck using **only** ALLOWED-BEADS wording  
5. List of rejected lines you almost wrote (self-check against D1–D4)
