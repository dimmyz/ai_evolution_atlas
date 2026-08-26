# SP01 claim harvest — Transformer/GPT corpus

Status: Researcher handoff — new claim proposals; not fact-checked; not reader-facing copy; not publishable v2 data  
Packet ID: `SP01-harvest-transformer-gpt-r1`  
Researcher: `researcher`  
Prepared: 2026-08-26

## Scope and boundary

This harvest authors atomic claims from sources already independently read for `SP01-transformer-chatgpt-r2`. It does not change any prior Fact-checker verdict, create a canonical entity, or propose a publishable typed relation. In particular, it does not claim a connected Transformer → ChatGPT path.

## Source register

| Source ID | Tier / class | Title | Stable locator | Already-read evidence basis |
| --- | --- | --- | --- | --- |
| `src-as01` | S1 / primary paper | *Improving Language Understanding by Generative Pre-Training* | https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf | `sp01-factcheck.md` §2 records that the PDF was independently retrieved and checked at the abstract and model-architecture passages. |
| `src-a04` | S1 / primary paper | *Language Models are Few-Shot Learners* | https://arxiv.org/abs/2005.14165 | `sp01-factcheck.md` §2 records an independent read of the arXiv abstract and submission record; the previously harvested model-section passage remains for fresh checking. |
| `src-a08` | S1 / primary paper | *Training language models to follow instructions with human feedback* | https://arxiv.org/abs/2203.02155 | `sp01-factcheck.md` §2 records an independent read of the arXiv abstract and submission record. |

## Atomic claim ledger

Fact-check fields are deliberately blank at Researcher handoff. `proposed_verdict` is a proposal, not an authoritative verdict.

| Claim ID | Claim text | Criticality / reason | Subject / object | Date / precision | Source ID | Quote and precise locator | Researcher confidence | Proposed verdict | Gaps or limits | Fact-checker fields |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `sp01-hv-c01` | The GPT paper’s unsupervised pre-training passage describes the paper’s model as a Transformer architecture. | Critical: this is the missing architecture-use proposition for the existing GPT record; it must be checked separately from any onward lineage claim. | `model-gpt` / `tech-transformer` | 2018 / year | `src-as01` | PDF, §3.1 “Unsupervised pre-training”: “For our model architecture, we use the Transformer”. | medium | `needs_more` | The prior packet did not submit this proposition for a claim verdict. This claim does not establish succession, influence, enablement, or any relation to GPT-2, GPT-3, InstructGPT, or ChatGPT. | verdict: blank; reviewer/date: blank |
| `sp01-hv-c02` | The GPT-3 paper’s model-and-architectures section describes GPT-3 as using the GPT-2 model and architecture, subject to the source’s stated exceptions. | Critical: candidate architecture-family evidence, not proof of a typed succession relation. | `model-gpt-3` / `model-gpt-2` | 2020 / year | `src-a04` | Paper PDF, §2.1 “Model and Architectures”: “We use the same model and architecture as GPT-2” and “with the exception that we use alternating dense and locally banded sparse-attention patterns”. | medium | `needs_more` | Fact-check must re-read §2.1 and test the exact scope of “same model and architecture,” including stated exceptions. This claim does not itself establish `successor_of`, `uses_architecture`, or a connection to ChatGPT. | verdict: blank; reviewer/date: blank |
| `sp01-hv-c03` | The InstructGPT paper says its authors use labeler demonstrations to fine-tune GPT-3 using supervised learning. | Critical: direct method/base-model statement; its source support does not select a canonical InstructGPT entity or a permitted typed edge. | InstructGPT candidate / `model-gpt-3` | 2022 / year | `src-a08` | arXiv abstract: “we collect a dataset of labeler demonstrations of the desired model behavior, which we use to fine-tune GPT-3 using supervised learning.” | high | `needs_more` | The prior packet has an accepted claim with similar wording, but this harvest does not carry that verdict forward. A fresh verdict is required for this new claim identifier. The statement does not establish a relation to ChatGPT. | verdict: blank; reviewer/date: blank |

## Relation boundary

No typed relation is proposed in this harvest. If a Fact-checker finds source entailment for a relation-level proposition, endpoint identity and approved ontology semantics remain separate requirements.

## Handoff restrictions

- Do not treat any row as accepted before independent Fact-check review.
- Do not infer `successor_of`, influence, enablement, causation, or a connected Story Path from chronology, shared terminology, or these architecture/method statements.
- Do not mint canonical entities for InstructGPT or ChatGPT from this packet.

## Audit record

- Workspace: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_CLONE_2026-08-25`
- Git root: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_CLONE_2026-08-25`
- Branch: `v2-bootstrap`
- HEAD at harvest: `d256c2832e37e4a8bbf61317f9238fa0104d15e1`
- Project marker: `.hermes.md` contains `AI Evolution Atlas`.
- Governing inputs read: `docs/v2/06-research-evidence-methodology.md`, `docs/v2/CLAUDE-M1-CHECKPOINT-REVIEW.md`, `docs/v2/PROGRAM-ROADMAP.md`, and `docs/v2/DEC-001.md`.
- Existing evidence inputs read: `docs/v2/story-packs/sp01-transformer-chatgpt.md`, `docs/v2/story-packs/sp01-factcheck.md`, `research/batches/2017-2022.md`, and `research/batches/2017-2022-supplement.md`.
- Authored file boundary: only `docs/v2/story-packs/sp01-harvest.md`.
