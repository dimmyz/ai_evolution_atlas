# Phase-1 design-ready scorecard

Status: fact-checker filled; reviewer approved; **human unlock 2026-08-26: design:open**  
Logical milestone: `V2-M2b`  
Filled at: `2026-08-26T15:08:42+03:00`  
Governing criteria: `docs/v2/DESIGN-READY-MINIMUM.md`  
Fact-check inputs: `docs/v2/story-packs/harvest-factcheck.md`, `docs/v2/story-packs/sp01-factcheck.md`

A row passes only where the cited claim ID has the latest fact-check verdict `accepted` or `accepted_with_reservations`. Claim IDs below are copied from the existing fact-check files; no new claim, entity, relation, or causal transition is introduced here.

| ID | Verdict | Existing accepted claim ID(s) | Evidence-bounded basis |
|---|---|---|---|
| M-A | **pass** | `sp01-c01`; `sp01-c03`; `sp01-c04`; `sp01-c07`; `sp01-c08`; `sp01-c11` | Six distinct documented SP01-sequence beads are represented: Transformer paper, GPT paper, GPT-2 release, GPT-3 paper, InstructGPT paper, and ChatGPT announcement. This counts documented beads only; it does not assert a connected path. |
| M-B | **pass** | `sp01-hv-c01` | The GPT paper’s unsupervised-pretraining passage states that its model architecture uses the Transformer. This remains source-owned architecture wording, not a causal or lineage edge. |
| M-C | **pass** | `sp01-c04`; `sp01-c05` | The official GPT-2 release wording calls GPT-2 “a successor to GPT” and describes it as “transformer-based.” Endpoint and relation semantics remain subject to the reservations in the fact-check. |
| M-D | **pass** | `sp01-hv-c02` | The GPT-3 paper states that it uses the same model and architecture as GPT-2, with the paper’s explicit exceptions retained. Do not broaden this into an unqualified identity, successor, or causal claim. |
| M-E | **pass** | `sp01-c11` | The official OpenAI announcement introduces ChatGPT as a research preview on 2022-11-30. This establishes the endpoint bead only; it does not establish descent. |
| M-F | **pass** | `sp01-c04`; `sp01-c05`; `sp01-c12` | The replacement designer brief must keep the causal spine out and must distinguish GPT-2 from GPT. The cited FC boundaries support GPT-2’s source wording and preserve the “sibling model” wording without adding derivation, parallel development, succession, or causation. The brief therefore remains beads plus quoted local links, not “Step 1 of 6 to ChatGPT.” |

## Gate disposition

All Phase-1 must rows pass under the accepted/accepted-with-reservations rule. This scorecard **does not unlock design**: `DESIGN-READY-MINIMUM.md` assigns `design:open` exclusively to the human curator, and no human unlock is recorded here. No connected Transformer → ChatGPT path is asserted.
