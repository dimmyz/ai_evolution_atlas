# Cycle M2 — harvest (closed as research; scorecard is M2b)

Closed research: 2026-08-26  
Hermes: HV-SP01/02/04, FC-HV, ED-ASSEMBLE, ONT-08 — all `done` on board

## Intent

Author claims from **already-read** sources; fact-check; assemble; pressure-test ontology. No site code.

## Achieved (source-bounded)

- `sp01-hv-c01` **accepted**: GPT paper §3.1 “we use the Transformer”
- `sp01-hv-c02` **accepted_with_reservations**: GPT-3 “same model and architecture as GPT-2” + exceptions
- `sp01-hv-c03` **accepted**: InstructGPT SFT on GPT-3
- SP02 GPU / GTX 580 / ILSVRC table claims accepted or reserved
- SP04 later-blog DGX-1 / CUDA Toolkit / cuDNN reserved (vendor)
- Ontology draft: `docs/v2/08-ontology-pressure-test.md`

## Explicitly still not a path

Harvest FC: no typed relations submitted; does not authorize GPT→ChatGPT spine, CUDA→AlexNet, or DGX-1 causation.

## Next

M2b: fill Phase-1 scorecard (`DESIGN-READY-MINIMUM.md`). Human unlocks design if must-rows pass.
