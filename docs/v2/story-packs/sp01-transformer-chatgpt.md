# SP01 evidence pack — Transformer → ChatGPT

Status: Researcher handoff — not fact-checked; not reader-facing copy; not publishable v2 data  
Packet ID: `SP01-transformer-chatgpt-r2`  
Researcher: `researcher`  
Prepared: 2026-08-25

## 1. Packet header

### Reader question

**How did a 2017 architecture become the basis of a mass-market AI interface?**

This is the SP01 product question specified by the Research Program. It is a question, not an already-proven causal or lineage assertion.

### Story Path relevance and scope

DEC-001 names `Transformer → ChatGPT` as the first flagship story. The proposed bounded sequence is: Transformer paper (2017); GPT generative pre-training paper (2018); GPT-2 release (2019); GPT-3 paper (2020); InstructGPT paper (2022); and ChatGPT research preview (2022-11-30).

### Exclusions and blocking dependencies

- This packet does not claim that chronology proves lineage, influence, enablement, or causation.
- It does not claim that ChatGPT is derived from InstructGPT, GPT-3, GPT-2, or the Transformer.
- It does not add entities, relations, statuses, or fields to `data/atlas.yaml`; no reader essay or public copy is supplied.
- GPT-4 and later multimodal, reasoning, or agentic events are out of scope.
- The Fact-checker must independently read the cited primary sources, resolve InstructGPT/ChatGPT identity and relation semantics, and test every critical claim and transition.

## 2. Research spine

| Order | Candidate milestone | Why included | Current transition posture |
| --- | --- | --- | --- |
| 1 | Transformer paper (2017) | SP01 start anchor. | `src-a01` was unreadable in RM0; no retained direct edge to later GPT records. |
| 2 | GPT generative pre-training paper (2018) | Early GPT-family context. | No retained direct edge to Transformer or GPT-2. |
| 3 | GPT-2 release (2019) | Official wording directly calls GPT-2 a successor to GPT and Transformer-based. | Candidate GPT-2 → GPT succession and GPT-2 → Transformer architecture relations only. |
| 4 | GPT-3 paper (2020) | Candidate middle milestone. | No retained direct relation to GPT-2 or ChatGPT. |
| 5 | InstructGPT paper (2022) | Candidate instruction-following/human-feedback training context. | No typed edge is proposed. |
| 6 | ChatGPT research preview (2022-11-30) | SP01 endpoint anchor. | “Sibling model” is source wording, not a typed edge. |

## 3. Entity and event candidates

| Candidate ID | Kind | Identity / alias note | Evidence status |
| --- | --- | --- | --- |
| `tech-transformer` | technology | Existing legacy entity: “Transformer.” | `src-a01` has a recorded RM0 HTTP 403 access limitation; no edge is asserted here. |
| `model-gpt` | model | Existing generic family label. | Existing source record `src-as01`; family-level endpoint requires ontology review. |
| `model-gpt-2` | model | Existing legacy entity: “GPT-2.” | Existing `src-as02` record. |
| `model-gpt-3` | model | Existing legacy entity: “GPT-3.” | Existing `src-a04` record. |
| InstructGPT | model/system candidate | No canonical legacy entity ID. | Do not mint an entity or edge pending ontology/data review. |
| ChatGPT | product/system candidate | No canonical legacy entity ID. | Do not mint an entity or edge pending ontology/data review. |
| `org-openai` | organization | Existing legacy entity: “OpenAI.” | Source-owned organizational attribution must retain its exact predicate. |

## 4. Source register

All sources are registered in `data/atlas.yaml` and classified there as primary. The following access notes are source-specific; a registered URL is not evidence that the Researcher independently read it.

| Source ID | Tier / class | Publisher | Title | Date / precision | Stable locator | Access/version note |
| --- | --- | --- | --- | --- | --- | --- |
| `src-a01` | S1 / primary paper | Google Research | *Attention Is All You Need* | 2017 / year | https://arxiv.org/abs/1706.03762 | RM0: `unreadable`, HTTP 403 on 2026-08-25. |
| `src-as01` | S1 / primary paper | OpenAI | *Improving Language Understanding by Generative Pre-Training* | 2018 / year | https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf | RM0: `read`, PDF text extracted on 2026-08-25. |
| `src-as02` | S1 / official release page | OpenAI | *Better language models and their implications* | 2019 / year | https://openai.com/index/better-language-models/ | RM0: `read`, page content extracted on 2026-08-25. |
| `src-a04` | S1 / primary paper | OpenAI | *Language Models are Few-Shot Learners* | 2020 / year | https://arxiv.org/abs/2005.14165 | RM0: `read` at least once; a later retry was HTTP 403. |
| `src-a08` | S1 / primary paper | OpenAI | *Training language models to follow instructions with human feedback* | 2022 / year | https://arxiv.org/abs/2203.02155 | RM0: `read`, page content extracted on 2026-08-25. |
| `src-a15` | S1 / official product announcement | OpenAI | *Introducing ChatGPT* | 2022-11-30 / day | https://openai.com/index/chatgpt/ | RM0: `read`, page content extracted on 2026-08-25. |

## 5. Evidence notes

These notes preserve direct source wording or a source-section locator. They are evidence leads for independent Fact-checker re-reading, not Fact-checker verdicts. “Retained source note” identifies a local capture of the named primary source; it is not a substitute source.

| Evidence ID | Source ID | Exact source excerpt or precise source locator | Supports / limitation |
| --- | --- | --- | --- |
| `sp01-e01` | `src-a01` | arXiv abstract (https://arxiv.org/abs/1706.03762), unavailable to RM0: HTTP 403. No verbatim excerpt is retained in this packet. | `sp01-c01`, `sp01-c02`; incomplete evidence path, so both proposals are `needs_more`. |
| `sp01-e03` | `src-as01` | PDF, Abstract: “We demonstrate that a language model can perform well on diverse tasks without any task-specific architecture modifications.” Retained source note: `research/batches/2017-2022-supplement.md`, AS01, sourced from this PDF. | `sp01-c03`; the PDF needs Fact-checker page-number confirmation. |
| `sp01-e04` | `src-as02` | Opening body paragraph: “Our model, called GPT-2 (a successor to GPT), was trained…” and “GPT-2 is a direct scale-up of GPT, with more than 10X the parameters and trained on more than 10X the amount of data.” | `sp01-c04`, `sp01-r01`; direct succession wording. |
| `sp01-e05` | `src-as02` | Opening body paragraph: “GPT-2 is a large transformer-based language model with 1.5 billion parameters…” | `sp01-c05`, `sp01-r02`; direct architecture wording. |
| `sp01-e06` | `src-a04` | arXiv abstract (https://arxiv.org/abs/2005.14165), first paragraph: “Here we show that language models begin to learn these tasks without any explicit supervision when trained on a new dataset…” | `sp01-c06` and `sp01-c07`; Fact-checker must preserve exact model-name/technical wording from the primary abstract. |
| `sp01-e08` | `src-a08` | arXiv abstract (https://arxiv.org/abs/2203.02155): “We use a combination of supervised fine-tuning (SFT) and reinforcement learning from human feedback (RLHF) to fine-tune GPT-3…” | `sp01-c08`, `sp01-c09`; direct two-stage-method wording. |
| `sp01-e09` | `src-a08` | arXiv abstract (same locator): “We call these models InstructGPT.” | `sp01-c10`; direct naming wording. |
| `sp01-e15` | `src-a15` | Page title and publication date: *Introducing ChatGPT*, https://openai.com/index/chatgpt/, dated November 30, 2022. Opening text: “We’ve trained a model called ChatGPT which interacts in a conversational way.” | `sp01-c11`; Fact-checker must verify the live/page archive date. |
| `sp01-e16` | `src-a15` | Page text, paragraph beginning “ChatGPT is a sibling model to InstructGPT”: “ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response.” | `sp01-c12`, `sp01-r03`; wording is not a relation-type assertion. |

## 6. Atomic claim ledger

`fact_checker_verdict`, `fact_checker_reviewed_by`, and `fact_checker_reviewed_at` are deliberately blank at Researcher handoff.

| Claim ID | Atomic claim text | Criticality / reason | Subject / object | Date / precision | Source IDs | Evidence locator | Researcher confidence | Proposed verdict | Gaps or conflicts | Fact-checker fields |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `sp01-c01` | *Attention Is All You Need* is the title of the `src-a01` paper record. | Critical: start-anchor identity. | `tech-transformer` / paper record | 2017 / year | `src-a01` | `sp01-e01` | low | `needs_more` | RM0 could not independently access the primary record; no readable fallback is cited. | verdict: blank; reviewer/date: blank |
| `sp01-c02` | The `src-a01` abstract proposes the Transformer architecture based solely on attention mechanisms. | Critical: start-anchor technical proposition. | `tech-transformer` / paper record | 2017 / year | `src-a01` | `sp01-e01` | low | `needs_more` | RM0 HTTP 403; packet carries no independently readable fallback. | verdict: blank; reviewer/date: blank |
| `sp01-c03` | The GPT paper reports that a language model can perform well on diverse tasks without task-specific architecture modifications. | Non-critical: bounded early GPT context. | `model-gpt` / paper record | 2018 / year | `src-as01` | `sp01-e03`, PDF Abstract | medium | `accepted_with_reservations` | Exact relevant PDF passage/page must be independently confirmed. | verdict: blank; reviewer/date: blank |
| `sp01-c04` | OpenAI’s GPT-2 release page calls GPT-2 “a successor to GPT.” | Critical: only direct retained family/succession statement. | `model-gpt-2` / `model-gpt` | 2019 / year | `src-as02` | `sp01-e04`, opening body paragraph | high | `accepted` | Endpoint granularity requires ontology review. | verdict: blank; reviewer/date: blank |
| `sp01-c05` | OpenAI’s GPT-2 release page describes GPT-2 as a Transformer-based language model. | Non-critical: architecture characterization. | `model-gpt-2` / `tech-transformer` | 2019 / year | `src-as02` | `sp01-e05`, opening body paragraph | high | `accepted` | A relation remains subject to ontology/data review. | verdict: blank; reviewer/date: blank |
| `sp01-c06` | The GPT-3 paper describes language models learning tasks without explicit supervision when trained on a new dataset. | Non-critical: bounded GPT-3 behavior statement. | `model-gpt-3` / paper record | 2020 / year | `src-a04` | `sp01-e06`, arXiv abstract first paragraph | medium | `accepted_with_reservations` | Exact GPT-3 naming and scope must be re-read from the primary abstract. | verdict: blank; reviewer/date: blank |
| `sp01-c07` | The GPT-3 paper’s abstract discusses few-shot learning without gradient updates or fine-tuning. | Non-critical: bounded GPT-3 behavior statement. | `model-gpt-3` / paper record | 2020 / year | `src-a04` | arXiv abstract (https://arxiv.org/abs/2005.14165), paragraph describing few-shot learning; see `sp01-e06` access note | medium | `needs_more` | Packet lacks a retained verbatim excerpt for this exact proposition; Fact-checker must recover it from the primary source. | verdict: blank; reviewer/date: blank |
| `sp01-c08` | The InstructGPT paper says it uses supervised fine-tuning to fine-tune GPT-3. | Critical: method component. | InstructGPT candidate / `model-gpt-3` | 2022 / year | `src-a08` | `sp01-e08`, arXiv abstract | high | `accepted` | Entity identity remains unresolved. | verdict: blank; reviewer/date: blank |
| `sp01-c09` | The InstructGPT paper says it uses reinforcement learning from human feedback to fine-tune GPT-3. | Critical: method component. | InstructGPT candidate / `model-gpt-3` | 2022 / year | `src-a08` | `sp01-e08`, arXiv abstract | high | `accepted` | Entity identity remains unresolved. | verdict: blank; reviewer/date: blank |
| `sp01-c10` | The InstructGPT paper calls the resulting models InstructGPT. | Critical: candidate identity statement. | InstructGPT candidate / paper record | 2022 / year | `src-a08` | `sp01-e09`, arXiv abstract | high | `accepted_with_reservations` | No canonical entity exists; source wording does not select an ontology class. | verdict: blank; reviewer/date: blank |
| `sp01-c11` | OpenAI introduced ChatGPT as a research preview on 2022-11-30. | Critical: endpoint and date. | ChatGPT candidate / `org-openai` | 2022-11-30 / day | `src-a15` | `sp01-e15`, title/date/opening text | high | `accepted` | No canonical ChatGPT entity ID exists. | verdict: blank; reviewer/date: blank |
| `sp01-c12` | OpenAI’s ChatGPT announcement says, “ChatGPT is a sibling model to InstructGPT.” | Critical: exact endpoint-context statement. | ChatGPT candidate / InstructGPT candidate | 2022-11-30 / day | `src-a15` | `sp01-e16`, named page paragraph | high | `accepted_with_reservations` | The wording does not establish a typed relation, direction, derivation, or causal path. | verdict: blank; reviewer/date: blank |

## 7. Candidate relation ledger

No candidate relation is a publishable edge. The Researcher’s proposed status and confidence are not Fact-checker verdicts.

| Relation ID | Proposition and direction | Candidate type | Source IDs / evidence locator | Direct support or inference | Time / scope limits | Confidence | Proposed status | Gaps / competing reading | Fact-checker fields |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `sp01-r01` | `model-gpt-2 → model-gpt` | `successor_of` | `src-as02`; `sp01-e04`, opening body paragraph | Direct: source calls GPT-2 “a successor to GPT.” | 2019 source; generic `model-gpt` endpoint. | high | `candidate_for_acceptance` | Must confirm approved ontology compatibility. | verdict: blank; reviewer/date: blank |
| `sp01-r02` | `model-gpt-2 → tech-transformer` | `uses_architecture` | `src-as02`; `sp01-e05`, opening body paragraph | Direct: source calls GPT-2 “Transformer-based.” | Does not establish onward lineage. | high | `candidate_for_acceptance` | Requires ontology/data review. | verdict: blank; reviewer/date: blank |
| `sp01-r03` | `ChatGPT ↔ InstructGPT` | no proposed type | `src-a15`; `sp01-e16`, paragraph beginning “ChatGPT is a sibling model to InstructGPT” | Directly attributed wording only; no edge is proposed. | 2022 announcement wording only. | high | `needs_ontology_and_fact_check` | Neither endpoint is canonical; “sibling model” does not determine type or direction. | verdict: blank; reviewer/date: blank |

### Expected but unproven relations — explicitly excluded

| Proposition | Why excluded |
| --- | --- |
| `model-gpt → tech-transformer` | No packet evidence establishes this exact edge. |
| `model-gpt-3 → model-gpt-2` (`successor_of`) | Dates and names do not establish succession. |
| `model-gpt-3 → tech-transformer` (`uses_architecture`) | No packet evidence establishes this exact edge. |
| InstructGPT → `model-gpt-3` (any typed edge) | Method wording exists, but entity and permitted relation semantics are unresolved. |
| ChatGPT → InstructGPT (`derived_from`) | “Sibling model” does not entail derivation. |
| ChatGPT → GPT-3 or GPT-2 (any lineage/causal edge) | No direct evidence establishes it. |
| `tech-transformer → ChatGPT` (any direct causal or lineage edge) | Endpoint facts do not prove the transition. |

## 8. Technical significance and suggested editorial “why it matters” notes

These are source-bounded researcher interpretations, not factual claims or relation verdicts.

1. A future path must separate architecture description (`sp01-c02`, `sp01-c05`), documented GPT-family succession (`sp01-c04`), and the ChatGPT research-preview event (`sp01-c11`).
2. The InstructGPT method statements (`sp01-c08`–`sp01-c10`) supply training context but do not establish a typed causal edge to ChatGPT.
3. The reader question remains unanswered as a defensible connected path while `sp01-c01`/`sp01-c02` are incomplete and critical transitions have no accepted relation evidence.

## 9. Editorial guardrails

- Do not write “Transformer led to ChatGPT,” “ChatGPT was built from InstructGPT,” “GPT-3 became ChatGPT,” or equivalent causal/lineage copy.
- Do not use “sibling model” as successor, derived-from, same-family-as, or a causal mechanism.
- Do not use date sequence as a transition explanation.
- Do not call ChatGPT a graph model entity until identity and ontology review determine its approved class.
- Preserve year precision for the paper records and do not invent dates.

## 10. Gaps and Fact-check handoff

### Blocking gaps

1. `src-a01` was unreadable (HTTP 403) in RM0 and has no independently readable fallback in this packet; `sp01-c01` and `sp01-c02` are therefore `needs_more` proposals.
2. Direct evidence for the critical transitions from Transformer through the GPT-family milestones to ChatGPT is absent.
3. Canonical identities and permitted relation types for InstructGPT and ChatGPT remain unresolved.
4. The source-owned meaning, if any, of “sibling model” is not an ontology decision.

### Non-blocking gaps

1. Fact-checker page-number confirmation for the `src-as01` PDF evidence.
2. A retained verbatim excerpt for `sp01-c07`’s exact few-shot/no-fine-tuning proposition.
3. Whether generic `model-gpt` is an appropriate endpoint for `sp01-r01`.

### Researcher recommendation

`investigate_further`

The packet is source-bounded but cannot answer the reader question as a connected Story Path. Fact-check first on `sp01-c01`–`sp01-c12` and `sp01-r01`–`sp01-r03`; return entity/ontology requirements to Research rather than allowing editorial interpolation.

## 11. Audit record

- Workspace: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_CLONE_2026-08-25`
- Git root: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_CLONE_2026-08-25`
- Branch: `v2-bootstrap`
- HEAD: `631a18e6f05b11f335b2a82e4d2185683f831e69`
- Governing inputs read: `docs/v2/DEC-001.md`, `docs/v2/PG-01.md`, `docs/v2/README.md`, `docs/v2/HERMES-INTAKE-001.md`, `docs/v2/06-research-evidence-methodology.md`, and the local Research Program document.
- Local evidence inputs read: `data/atlas.yaml`, `docs/v2/rm0-corpus-audit.md`, and retained primary-source notes in `research/batches/2017-2022.md` and `research/batches/2017-2022-supplement.md`.