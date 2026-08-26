# Review — t_23ca177e

## Verdict

**REQUEST CHANGES**

The harvest has the correct scope and three substantively supported atomic claim proposals, but two required evidence locators are inaccurate/incomplete. The fact-checker must be able to check the exact source passage from the handoff; do not approve this packet until those locators are corrected.

## Workspace and scope checks

- `pwd`: `/d/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_CLONE_2026-08-25`
- `git rev-parse --show-toplevel`: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_CLONE_2026-08-25`
- HEAD reviewed: `d256c2832e37e4a8bbf61317f9238fa0104d15e1`
- `.hermes.md` contains `AI Evolution Atlas`.
- `docs/reports/v2-card-ids.json` parses successfully and maps `V2-HV-SP01` to `t_23ca177e`.
- The submitted implementation artifact is limited to `docs/v2/story-packs/sp01-harvest.md`; no implementation files were edited by this review.

## Acceptance audit

- Three requested proposals are present: `sp01-hv-c01`, `sp01-hv-c02`, and `sp01-hv-c03`.
- The proposals correspond to the three listed unproven-but-already-excerpted areas: GPT architecture, GPT-3 model/architecture, and InstructGPT fine-tuning of GPT-3.
- No typed relation is proposed, and all three Fact-checker fields remain blank.
- The source-boundary and anti-lineage guardrails are present.
- `git diff --check` passes for tracked changes; a separate structural validation command passes for the untracked harvest file.

## Independent source checks

The cited primary sources were independently retrieved and inspected:

- GPT PDF: HTTP `200`, PDF, `541036` bytes. The source contains `For our model architecture, we use the Transformer` and, in the actual §3.1, `In our experiments, we use a multi-layer Transformer decoder`.
- GPT-3 arXiv API/PDF: the PDF's actual heading is `2.1 Model and Architectures`; it contains `We use the same model and architecture as GPT-2 ... with the exception that we use alternating dense and locally banded sparse-attention patterns...`.
- InstructGPT PDF: the abstract contains `fine-tune GPT-3 using supervised learning` and `We call the resulting models InstructGPT`.

The source-quote assertion command passed for all of these phrases, as did the harvest structure assertions.

## Required corrections

1. `docs/v2/story-packs/sp01-harvest.md:26` (`sp01-hv-c01`): the locator says `PDF, §3.1 “Model Specifications”`. The retrieved source has no section with that title; its §3.1 heading is `Unsupervised pre-training`. Replace the incorrect heading and include a verbatim source excerpt, such as the sentence beginning `For our model architecture, we use the Transformer`, with the actual page/section locator. The current text `the paper later identifies the model architecture as the Transformer` is a paraphrase of the prior fact-check note, not a quote from the primary source.

2. `docs/v2/story-packs/sp01-harvest.md:27` (`sp01-hv-c02`): the locator says `§2.1 “Model and Architecture”`, but the retrieved source heading is `§2.1 “Model and Architectures”`. Add the verbatim §2.1 architecture passage (including the stated exception) rather than only quoting the abstract's separate GPT-3 description. Preserve the claim's explicit exception boundary.

After these corrections, rerun the structural/evidence checks and request review again. No change is required to `sp01-hv-c03`, the no-relation boundary, or the blank Fact-checker fields.

## Verification commands

- `git rev-parse --show-toplevel && git rev-parse HEAD && git diff --check` — passed.
- Python structural assertions over the harvest and registry — passed: three claim IDs, no typed relation, three blank Fact-checker fields, registry mapping.
- Independent downloaded-source quote assertions — passed for the GPT, GPT-3, and InstructGPT passages named above.
