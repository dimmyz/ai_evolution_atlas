# AIH-13 factual/data acceptance evidence

- Project: `ai-evolution-atlas`
- Workspace: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- Git root: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- HEAD at inspection: `f5d61c02e5c9e7cf08f347be6d82ffadd400ee90`
- Inspection date recorded by the dataset: `2026-08-24`

## Gate result

`accepted_with_reservations`

The canonical data validator passes, and the sampled verified milestones and relations below have source IDs that resolve to primary sources in `data/atlas.yaml`. This is factual/data acceptance evidence only; it does not claim that every statement in every source has been independently re-reviewed. The sample is intentionally bounded and records the exact page-level checks performed.

## Automated schema/data gate

Command executed from the declared workspace:

```text
npm.cmd run verify:workspace
npm.cmd run validate:data
```

Observed output:

```text
verify:workspace ok
project_id: ai-evolution-atlas
package: ai-evolution-atlas
validate:data ok (sources=36 entities=36 milestones=36 relations=16)
```

This verifies workspace identity and the repository's canonical schema/reference validation. The dataset contains 36 verified milestones, 36 sources/entities, and 16 relations.

## Milestone sample (10 across early, middle, and late period)

The local record was checked for: `status: verified`, declared date precision, non-empty `source_ids`, and source-ID resolution. The linked source page was fetched and checked for the title/date or the core neutral proposition recorded in the local summary.

| Period | Milestone | Date/precision | Source ID | Page-level evidence checked | Result |
|---|---|---:|---|---|---|
| early | Transformer paper | 2017 / year | `src-a01` | arXiv record identifies *Attention Is All You Need*, submitted 12 Jun 2017; abstract proposes the Transformer architecture based solely on attention mechanisms. | pass |
| early | BERT open-source release | 2018-11-02 / day | `src-a02` | Google AI page is dated November 2, 2018 and states that BERT was open sourced, including TensorFlow code and pretrained models. | pass |
| early | T5 paper | 2019 / year | `src-a03` | arXiv record identifies the unified text-to-text Transformer paper and its abstract describes converting text-based NLP problems into a text-to-text format. | pass |
| middle | GPT-3 paper | 2020 / year | `src-a04` | arXiv abstract identifies GPT-3 as an autoregressive language model and describes few-shot use without gradient updates or fine-tuning. | pass |
| middle | InstructGPT paper | 2022 / year | `src-a08` | arXiv abstract says the paper aligns models with user intent by fine-tuning GPT-3 with supervised learning on labeler demonstrations, then reinforcement learning from human feedback; it calls the resulting models InstructGPT. | pass |
| middle | Chain-of-thought prompting paper | 2022-01-28 / day | `src-a09` | arXiv abstract says chain-of-thought prompting provides a few demonstrations containing intermediate reasoning steps and improves complex-reasoning performance across arithmetic, commonsense, and symbolic tasks. | pass |
| middle | ChatGPT research preview | 2022-11-30 / day | `src-a15` | OpenAI page identifies *Introducing ChatGPT*, describes supervised fine-tuning/RLHF methods, and calls it an iterative research release. | pass |
| middle | GPT-4 technical report | 2023-03-15 / day | `src-b01` | arXiv abstract describes GPT-4 as a large-scale multimodal model accepting image and text inputs and producing text outputs. | pass |
| late | Meta Llama 3 initial release | 2024-04-18 / day | `src-b04` | Meta page is dated April 18, 2024 and states the initial release includes pretrained and instruction-fine-tuned 8B and 70B models. | pass |
| late | DeepSeek-R1 release | 2025-01-20 / day | `src-b11` | Official DeepSeek page identifies the release, states code/models are MIT licensed, and describes large-scale RL in post-training. | pass |

No sampled milestone had an empty source list, unresolved source ID, or a date whose precision contradicted the stored date shape.

## Relation sample (10, includes every published relation type)

The relation record was checked for: endpoints resolving to canonical entities, `status: verified`, non-empty `evidence_source_ids`, and a rationale that matches the relation type. This sample includes all five relation types present in the dataset.

| Relation | Type | Evidence source | Rationale check | Result |
|---|---|---|---|---|
| `model-gpt-2 -> model-gpt` | `successor_of` | `src-as02` | Local rationale explicitly says the OpenAI release calls GPT-2 a successor to GPT; this meets the strong-directional-evidence rule. | pass |
| `model-codex -> model-gpt-3` | `same_family_as` | `src-as03` | Local rationale says the Codex paper identifies Codex as a GPT language model. | pass |
| `model-dall-e-2 -> model-clip` | `uses_architecture` | `src-a13` | Local rationale records the CLIP image-embedding prior and decoder described by the paper. | pass |
| `model-palm -> tech-transformer` | `uses_architecture` | `src-a10` | Local rationale records PaLM as a Transformer language model. | pass |
| `model-t5 -> tech-transformer` | `uses_architecture` | `src-a03` | Paper title and abstract identify the unified text-to-text Transformer formulation. | pass |
| `model-t5 -> org-google` | `authored_by` | `src-a03` | Source publisher is Google Research and the rationale records Google Research authorship. | pass |
| `model-gpt-4 -> tech-transformer` | `uses_architecture` | `src-b01` | arXiv abstract explicitly states: “GPT-4 is a Transformer-based model pre-trained to predict the next token in a document.” This directly supports the architecture relation. | pass |
| `model-gpt-4 -> org-openai` | `released_by` | `src-b01` | Source publisher is OpenAI and the rationale records OpenAI authorship of the report. | pass |
| `model-llama-3 -> org-meta` | `released_by` | `src-b04` | Meta's fetched release page explicitly announces Meta Llama 3. | pass |
| `model-deepseek-r1 -> org-deepseek` | `released_by` | `src-b11` | Official DeepSeek API Docs page is the named release source. | pass |

The remaining six relations are not re-counted as independently sampled claims here, but the validator confirms all 16 relation records have valid endpoints and evidence references. No sampled strong directional relation lacked evidence.

## Wording check

The sampled summaries and rationales use neutral, source-bounded language. Marketing phrases in source pages (for example, “most capable” or “best”) were not copied into canonical summaries as factual superlatives. No sampled canonical field uses unsupported `first`, `best`, `revolutionary`, `changed everything`, or `directly led to` wording.

## Reservations and follow-up

1. This report is a 10-milestone/10-relation sample, as required by the acceptance contract; it is not a claim of line-by-line review of all 36 milestones.
2. The automated validator currently reports counts and structural validity; it does not itself prove that a source URL remains reachable or that every paraphrase is entailed. Future data refreshes should repeat this sample, especially for older blog URLs.

## Sources checked

- https://arxiv.org/abs/1706.03762
- https://ai.googleblog.com/2018/11/open-sourcing-bert-state-of-art-pre.html
- https://arxiv.org/abs/1910.10683
- https://arxiv.org/abs/2005.14165
- https://arxiv.org/abs/2203.02155
- https://arxiv.org/abs/2201.11903
- https://arxiv.org/abs/2303.08774
- https://openai.com/index/chatgpt/
- https://ai.meta.com/blog/meta-llama-3/
- https://api-docs.deepseek.com/news/news250120
- https://www.anthropic.com/news/claude-4
