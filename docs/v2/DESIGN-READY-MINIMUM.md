# Design-ready minimum (Phase 1)

Status: criteria v0.1 · filled by Fact-checker · unlocked by Human  
Related: DEC-002, `docs/v2/progress/`

This is **not** “the popular path is proven.” It is “enough true beads to design a first slice without lying.”

## Decision rights

| Role | Does |
|---|---|
| Strateg | Writes / amends these criteria (this file). Does not unlock design. |
| Fact-checker | Fills the scorecard from **accepted / accepted_with_reservations** only. Never upgrades wording. |
| Reviewer | Same-card review of the scorecard (no overclaim, IDs resolve). |
| Critic (optional) | Adversarial checkpoint on the packet, not a merge stamp. |
| **Human curator** | **Unlocks design** (`design:open` on the scorecard issue / cycle note). Only the human says “minimum is enough.” |

If Fact-checker marks any **must** row `fail`, design stays closed.  
If all must rows `pass` and Human has not signed, design stays closed.

## Must (Phase 1 slice = SP01 neighborhood)

A row passes only with a cited claim ID whose latest FC verdict is `accepted` or `accepted_with_reservations`.

| ID | Must | Why it is enough to start |
|---|---|---|
| M-A | ≥ 5 distinct documented beads (paper/release/announcement) on the intended SP01 sequence | Something to put on a first screen and next cards |
| M-B | ≥ 1 source-owned architecture link **GPT paper → Transformer** | Critic’s harvest target; local neighborhood |
| M-C | ≥ 1 source-owned GPT-2 ↔ Transformer **or** GPT-2 successor wording | Already in SP01 FC |
| M-D | ≥ 1 source-owned GPT-3 ↔ GPT-2 architecture wording (exceptions kept) | Harvest `sp01-hv-c02` |
| M-E | ChatGPT introduction date/name as official announcement | Endpoint exists without claiming descent |
| M-F | Designer brief forbids causal spine and GPT vs GPT-2 mix-up (D1–D4) | Prevents the failed V2-UX brief |

## Should (do not block Phase 1)

| ID | Item | Goes to Phase 2 if fail |
|---|---|---|
| S-1 | InstructGPT / ChatGPT identity + typed “sibling” | E4 enrichment |
| S-2 | CUDA used by AlexNet (not just GTX 580 + a CUDA page) | SP02 enrichment |
| S-3 | Independent (non-vendor) NVIDIA→DL adoption | SP04 enrichment |
| S-4 | Publishable typed graph of the whole flagship path | After ontology + more FC |

## Designer, if Human unlocks

Brief (replace V2-UX):

> Design the first slice as **beads + quoted local links**.  
> First screen = a real bead (Transformer or GPT-2), not filters.  
> Connectors only restated from accepted source wording (GPT-2, not GPT).  
> Do not draw “Step 1 of 6 to ChatGPT.” Later beads can be “not in this slice.”

## Scorecard (Fact-checker fills)

Copy into `docs/v2/progress/SCORECARD-PHASE1.md` with verdict + claim IDs + date. Do not edit this criteria file to “make it pass.”
