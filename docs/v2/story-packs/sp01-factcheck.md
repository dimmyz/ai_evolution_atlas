# SP01 fact-check — Transformer → ChatGPT

Status: Fact-check result — not reader-facing copy; not publishable v2 data
Packet ID: `SP01-transformer-chatgpt-r2`
Research packet: `docs/v2/story-packs/sp01-transformer-chatgpt.md`
Fact-checker: `fact-checker`
Fact-checked at: `2026-08-25T21:53:31+03:00`

## 1. Review scope and packet verdict

The Fact-checker independently re-read every source cited by the packet. The Researcher’s excerpts, confidence values, and proposed relation statuses were treated as leads only. Verdicts below use the canon vocabulary exactly: `accepted`, `accepted_with_reservations`, `unsupported`, `disputed`, or `needs_more`.

**Packet verdict: `needs_more`.** The cited sources support several endpoint and method claims, including the 2017 Transformer anchor and the GPT-2 successor wording, but they do not establish a defensible connected Transformer → ChatGPT Story Path. The critical transition evidence remains incomplete, and `sp01-c06` is not entailed as written. No editor-facing connected narrative or new graph edge is authorized by this report.

## 2. Independent source re-read

| Source ID | Source | Independent read result | Review evidence / limitation |
| --- | --- | --- | --- |
| `src-a01` | [Attention Is All You Need](https://arxiv.org/abs/1706.03762) | `read` | arXiv abstract and submission record were independently retrieved. The prior RM0 HTTP 403 limitation is not evidence against the source and is superseded for this review by the successful read. |
| `src-as01` | [Improving Language Understanding by Generative Pre-Training](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf) | `read` | PDF text independently retrieved and checked at the abstract and model-architecture passages. |
| `src-as02` | [Better language models and their implications](https://openai.com/index/better-language-models/) | `read` | Official OpenAI page independently retrieved. The page contains the GPT-2 successor and Transformer-based wording used below. |
| `src-a04` | [Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165) | `read` | arXiv abstract and submission record independently retrieved. The abstract names GPT-3 and explicitly states the few-shot/no-gradient/no-fine-tuning condition. |
| `src-a08` | [Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155) | `read` | arXiv abstract and submission record independently retrieved. The abstract explicitly states supervised fine-tuning, RLHF, and the name InstructGPT. |
| `src-a15` | [Introducing ChatGPT](https://openai.com/index/chatgpt/) | `read` | Official OpenAI page independently retrieved. The page is dated November 30, 2022 and contains the research-preview and “sibling model” wording. |

### Independently read source excerpts

The following excerpts are copied from the independently retrieved source text, not from the Researcher’s summary:

- `src-a01`, arXiv abstract: “We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.”
- `src-as01`, PDF abstract: “We demonstrate that large gains on these tasks can be realized by generative pre-training of a language model on a diverse corpus of unlabeled text, followed by discriminative fine-tuning on each specific task.” The same abstract says the approach uses “minimal changes to the model architecture”; the paper later identifies the model architecture as the Transformer.
- `src-as02`, opening body: “Our model, called GPT‑2 (a successor to GPT), was trained simply to predict the next word in 40GB of Internet text.” The following paragraph calls GPT-2 “a large transformer-based language model”.
- `src-a04`, abstract: “Specifically, we train GPT-3, an autoregressive language model with 175 billion parameters…” and “For all tasks, GPT-3 is applied without any gradient updates or fine-tuning, with tasks and few-shot demonstrations specified purely via text interaction with the model.”
- `src-a08`, abstract: “we collect a dataset of labeler demonstrations of the desired model behavior, which we use to fine-tune GPT-3 using supervised learning. We then collect a dataset of rankings of model outputs, which we use to further fine-tune this supervised model using reinforcement learning from human feedback. We call the resulting models InstructGPT.”
- `src-a15`, page date and opening: “November 30, 2022”; “We’ve trained a model called ChatGPT which interacts in a conversational way.” The page also states: “ChatGPT is a sibling model to InstructGPT”.

## 3. Atomic claim verdicts

Review attribution for every row: `fact_checker_reviewed_by: fact-checker`; `fact_checker_reviewed_at: 2026-08-25T21:53:31+03:00`.

| Claim ID | Claim text | Verdict | Evidence basis and reservation / gap |
| --- | --- | --- | --- |
| `sp01-c01` | *Attention Is All You Need* is the title of the `src-a01` paper record. | `accepted` | The independently read arXiv record has the title “Attention Is All You Need” and identifies arXiv:1706.03762. The record’s submission history supplies 2017 context; the packet retains year precision. |
| `sp01-c02` | The `src-a01` abstract proposes the Transformer architecture based solely on attention mechanisms. | `accepted` | The abstract directly states that it proposes the Transformer, “based solely on attention mechanisms,” and dispenses with recurrence and convolutions. |
| `sp01-c03` | The GPT paper reports that a language model can perform well on diverse tasks without task-specific architecture modifications. | `accepted_with_reservations` | The source supports strong performance across a wide range of tasks and says the method requires “minimal changes to the model architecture”; it also reports gains on 9 of 12 tasks. The wording “without task-specific architecture modifications” is broader than the source’s “minimal changes” and should not be rendered as a literal zero-change claim. |
| `sp01-c04` | OpenAI’s GPT-2 release page calls GPT-2 “a successor to GPT.” | `accepted` | The official page directly says: “Our model, called GPT‑2 (a successor to GPT)”. The source-owned wording is accepted; endpoint granularity is handled separately in relation `sp01-r01`. |
| `sp01-c05` | OpenAI’s GPT-2 release page describes GPT-2 as a Transformer-based language model. | `accepted` | The official page directly says GPT-2 is “a large transformer-based language model”. The source supports the characterization; the typed endpoint relation remains separately bounded by ontology considerations. |
| `sp01-c06` | The GPT-3 paper describes language models learning tasks without explicit supervision when trained on a new dataset. | `unsupported` | The independently read abstract instead says the authors train GPT-3 and test it in a few-shot setting, with no gradient updates or fine-tuning for the tasks. It does not entail the proposition’s “when trained on a new dataset” formulation. Do not publish this claim as written; return it to Research for narrowing or replacement. |
| `sp01-c07` | The GPT-3 paper’s abstract discusses few-shot learning without gradient updates or fine-tuning. | `accepted` | The abstract directly states that GPT-3 is applied in the few-shot setting “without any gradient updates or fine-tuning,” with tasks and demonstrations specified through text interaction. |
| `sp01-c08` | The InstructGPT paper says it uses supervised fine-tuning to fine-tune GPT-3. | `accepted` | The abstract directly states that labeler demonstrations are used to fine-tune GPT-3 using supervised learning. |
| `sp01-c09` | The InstructGPT paper says it uses reinforcement learning from human feedback to fine-tune GPT-3. | `accepted` | The abstract directly states that rankings of model outputs are used to further fine-tune the supervised model using reinforcement learning from human feedback. |
| `sp01-c10` | The InstructGPT paper calls the resulting models InstructGPT. | `accepted_with_reservations` | The abstract directly states: “We call the resulting models InstructGPT.” Reservation: the packet has no canonical graph entity or approved ontology class for InstructGPT; the source naming statement must not be silently converted into a new entity or relation. |
| `sp01-c11` | OpenAI introduced ChatGPT as a research preview on 2022-11-30. | `accepted` | The official page is dated November 30, 2022, introduces ChatGPT, and says “During the research preview” usage was free. The day precision is supported by the page. |
| `sp01-c12` | OpenAI’s ChatGPT announcement says, “ChatGPT is a sibling model to InstructGPT.” | `accepted_with_reservations` | The official page directly contains that sentence. Reservation: this is source-attributed wording only; “sibling model” does not by itself specify a permitted typed relation, direction, derivation, succession, causation, or implementation dependency. Neither endpoint is canonical in the current packet. |

## 4. Candidate relation verdicts

No relation below is promoted to a publishable data edge solely by this report. Relation verdicts distinguish source entailment from ontology/entity approval.

| Relation ID | Proposition and direction | Candidate type | Verdict | Evidence basis and reservation / gap |
| --- | --- | --- | --- | --- |
| `sp01-r01` | `model-gpt-2 → model-gpt` | `successor_of` | `accepted_with_reservations` | `src-as02` directly calls GPT-2 “a successor to GPT”, which supports the directional proposition at the source-wording level. Reservation: `model-gpt` is a generic family endpoint and the approved ontology must confirm that this endpoint level is valid for `successor_of`. |
| `sp01-r02` | `model-gpt-2 → tech-transformer` | `uses_architecture` | `accepted_with_reservations` | `src-as02` directly calls GPT-2 “transformer-based” and links the Transformer paper. Reservation: endpoint identity/abstraction and approved relation semantics require ontology/data review; this does not establish onward lineage from the Transformer to later systems. |
| `sp01-r03` | `ChatGPT ↔ InstructGPT` | no proposed type | `accepted_with_reservations` | `src-a15` directly supports the attributed phrase “ChatGPT is a sibling model to InstructGPT.” Reservation is decisive: no relation type, direction, identity mapping, or derivation/causal meaning is entailed. Retain as source wording and an unresolved relation candidate, not as a graph edge. |

## 5. Explicitly unproven transitions and relation guardrails

The following remain unproven or unavailable as typed relations in this packet. Dates, shared naming, shared employer, shared architecture, or the existence of both endpoint facts must not be used to fill them:

- `model-gpt → tech-transformer`: no direct packet evidence establishes this exact edge.
- `model-gpt-3 → model-gpt-2` (`successor_of`): chronology and related names do not establish succession.
- `model-gpt-3 → tech-transformer` (`uses_architecture`): the packet does not provide direct evidence for this exact endpoint relation.
- InstructGPT → `model-gpt-3`: the method wording names GPT-3 as the fine-tuning base, but canonical endpoint identity and permitted edge semantics remain unresolved; no typed edge is accepted here.
- ChatGPT → InstructGPT (`derived_from`): “sibling model” does not entail derivation.
- ChatGPT → GPT-3 or GPT-2: no direct lineage or causal evidence is cited.
- `tech-transformer → ChatGPT`: endpoint facts do not prove a direct causal or lineage relation.

The packet therefore cannot answer its reader question as a connected historical path. The absence of these edges is an intentional fact-check result, not a reason to add graph padding.

## 6. Editorial handoff restrictions

- The Editor may use `accepted` claims and `accepted_with_reservations` claims only with the stated reservations preserved.
- `sp01-c06` is `unsupported` as written and must not be used. A narrowed replacement is a new claim version and requires a fresh check.
- Do not write “Transformer led to ChatGPT,” “ChatGPT was built from InstructGPT,” “GPT-3 became ChatGPT,” or equivalent causal/lineage copy.
- Do not turn “sibling model” into `successor_of`, `derived_from`, `same_family_as`, or a causal mechanism.
- Do not use the date sequence as an explanatory transition.
- Do not mint ChatGPT or InstructGPT graph entities or relation types from these source phrases alone.
- No new historical facts are supplied to the Editor by this report; the open gaps return to Research.

## 7. Required rework before a connected Story Path can leave Fact-check

1. Supply direct, source-backed evidence for the critical transitions that are currently absent, especially Transformer → GPT, GPT-2 → GPT-3, and the exact permitted interpretation of the InstructGPT/ChatGPT connection.
2. Replace or narrow `sp01-c06`; the current proposition is not entailed by `src-a04`.
3. Resolve canonical identities and approved relation types for InstructGPT and ChatGPT before any edge is proposed.
4. Preserve the accepted endpoint and method claims above without converting them into a connected causal or lineage narrative.

## 8. Audit record

- Workspace: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_CLONE_2026-08-25`
- Git root: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_CLONE_2026-08-25`
- Branch: `v2-bootstrap`
- HEAD at review: `3bc5db0e18ed5890a6872fddd83ab4cf5a1ad7a7`
- Project marker: `.hermes.md` contains `AI Evolution Atlas`.
- Governing inputs read: `docs/v2/06-research-evidence-methodology.md`, `docs/v2/DEC-001.md`, and `docs/v2/05-content-editorial-system.md`.
- Research input independently re-read: `docs/v2/story-packs/sp01-transformer-chatgpt.md`.
- Review boundary: only `docs/v2/story-packs/sp01-factcheck.md` was authored for this task; no website or data-layer file was changed.
