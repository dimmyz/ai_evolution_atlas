# SP01 editorial draft  -  Transformer and ChatGPT

Status: Editorial working draft. Not public copy. Not a publishable connected Story Path.
Packet: `SP01-transformer-chatgpt-r2`
Fact-check: `docs/v2/story-packs/sp01-factcheck.md` (packet verdict: `needs_more`)
Editor: `editor`
Drafted against HEAD: `3bc5db0e18ed5890a6872fddd83ab4cf5a1ad7a7`

This file is the Editor return for V2-ED-SP01. Every reader sentence below is a paraphrase of an `accepted` or `accepted_with_reservations` claim. Reservations stay visible. No new facts, dates, names, or causal links are added.

## Path status

The flagship question is still: how did a 2017 architecture become the basis of a mass-market AI interface?

The matching fact-check does not authorize an answer. Endpoint and method claims exist. The transitions that would connect Transformer to ChatGPT do not. This draft therefore does **not** narrate a path. It states what the accepted records say, and it stops where the evidence stops.

Do not publish this as a connected Story Path.

## Entry (L1)

**Candidate title:** From Transformer to ChatGPT

**Candidate subtitle:** Documented records; the connecting path is not yet evidenced

**One-sentence promise:** The 2017 Transformer paper, OpenAI's GPT-2, GPT-3, and InstructGPT records, and ChatGPT's November 30, 2022 research preview are documented. The steps that would join them into one history are not.

The title names the intended path. It does not claim the path is proven.

## Documented records (L2)

Each block is independent. Adjacent blocks are not a sequence of causes. Where a transition sentence is missing, that is deliberate.

### Attention Is All You Need and the Transformer

**What happened.** In 2017, the paper *Attention Is All You Need* proposed the Transformer, a network architecture based solely on attention mechanisms. It does not use recurrence or convolutions.

**Why it matters here.** This is the architecture named at the start of the flagship question. The accepted record is the proposal itself, not a later product that used it.

**Transition onward.** None. There is no accepted claim that GPT, GPT-3, InstructGPT, or ChatGPT uses or descends from this architecture.

### Generative pre-training paper

**What happened.** A paper on generative pre-training reports that a language model can perform well across a wide range of tasks with only minimal changes to the model architecture.

**Why it matters here.** The accepted point is a method claim about small architecture change, not a zero-change design and not a link to the Transformer paper.

**Reservation (keep visible).** Do not render this as "no task-specific architecture modifications." The source says "minimal changes."

**Transition onward.** None.

### GPT-2

**What happened.** OpenAI's GPT-2 release page calls GPT-2 "a successor to GPT." The same page describes GPT-2 as a Transformer-based language model.

**Why it matters here.** This is the only accepted wording in the packet that both names a successor to GPT and calls a model Transformer-based. It is OpenAI's description of GPT-2, not a map of everything that followed.

**Transition.** OpenAI called GPT-2 a successor to GPT (source wording; the generic "GPT" endpoint still needs ontology review). OpenAI described GPT-2 as Transformer-based (source wording; that does not establish onward lineage from the Transformer to later systems).

### GPT-3

**What happened.** The GPT-3 paper's abstract says GPT-3 is applied in a few-shot setting without any gradient updates or fine-tuning. Tasks and few-shot demonstrations are specified through text interaction with the model.

**Why it matters here.** The accepted record is this evaluation setting, not a successor step after GPT-2 and not an architecture claim.

**Transition.** None. Chronology and related names do not make GPT-3 a successor of GPT-2, and they do not make GPT-3 Transformer-based.

### InstructGPT method and name

**What happened.** A paper on training language models to follow instructions with human feedback says the authors fine-tune GPT-3 with supervised learning on labeler demonstrations. They then further fine-tune that supervised model with reinforcement learning from human feedback. The paper calls the resulting models InstructGPT.

**Why it matters here.** The accepted record is a two-stage fine-tuning method applied to GPT-3, plus the name the paper uses. It is not a product identity in the Atlas graph, and it is not a typed link to ChatGPT.

**Reservation (keep visible).** "InstructGPT" is the paper's name for those resulting models. It is not an approved graph entity.

**Transition.** None as a graph edge. The method wording names GPT-3 as the fine-tuning base; that is not accepted here as a typed relation.

### ChatGPT research preview

**What happened.** On November 30, 2022, OpenAI introduced ChatGPT as a research preview. The announcement says, "ChatGPT is a sibling model to InstructGPT."

**Why it matters here.** This is the named endpoint event of the intended path: a dated OpenAI introduction, not a demonstrated mass-market consequence and not a proven descendant of the Transformer.

**Reservation (keep visible).** "Sibling model" is OpenAI's phrase. It does not specify derivation, succession, family membership, or a causal mechanism.

**Transition.** None. Do not write that ChatGPT was built from InstructGPT, GPT-3, GPT-2, or the Transformer.

## Transitions not written

The following would be needed for a connected path and are not written, because they are not accepted:

- Transformer to GPT
- GPT-2 to GPT-3 as succession
- GPT-3 as Transformer-based
- InstructGPT to GPT-3 as a typed edge
- ChatGPT derived from InstructGPT
- ChatGPT to GPT-3 or GPT-2
- Transformer to ChatGPT

Date order is not used as an explanation. Shared names, a shared organization, and shared architecture words are not used as an explanation.

## Technical note (L3)

The Transformer, as proposed in *Attention Is All You Need*, is a network architecture based solely on attention mechanisms. The paper presents it as doing without recurrence and convolutions.

No further account of attention, training scale, or interface design is included, because those statements are not in the accepted claims.

## Evidence layer (L4)

Honesty class is marked per sentence group. Class 1 is a documented fact. Class 2 is evidence-backed influence or source-owned relation wording, with reservations. Class 3 is editorial arrangement (what to show on this intended path), not a new edge.

| Reader passage | Claims / relations | Honesty class | Reservation |
| --- | --- | --- | --- |
| 2017; title *Attention Is All You Need*; Transformer proposed | `sp01-c01`, `sp01-c02` | 1 | Year precision only. |
| Architecture based solely on attention; no recurrence or convolutions | `sp01-c02` | 1 | None beyond the abstract's wording. |
| Language model performs well on diverse tasks with minimal architecture changes | `sp01-c03` | 1, reserved | Not a zero-change claim. |
| GPT-2 called "a successor to GPT" | `sp01-c04`, `sp01-r01` | 2, reserved | Source wording; generic GPT endpoint not ontology-approved. |
| GPT-2 described as Transformer-based | `sp01-c05`, `sp01-r02` | 2, reserved | Does not prove later systems use the Transformer. |
| GPT-3 few-shot; no gradient updates or fine-tuning; tasks via text | `sp01-c07` | 1 | Do not substitute `sp01-c06`. |
| Supervised fine-tuning of GPT-3 on labeler demonstrations | `sp01-c08` | 1 | Not a typed InstructGPT→GPT-3 edge. |
| Further fine-tuning with reinforcement learning from human feedback | `sp01-c09` | 1 | Same limit. |
| Resulting models called InstructGPT | `sp01-c10` | 1, reserved | Name only; no new entity. |
| ChatGPT introduced as a research preview on November 30, 2022 | `sp01-c11` | 1 | Day precision from the announcement page. |
| "ChatGPT is a sibling model to InstructGPT." | `sp01-c12`, `sp01-r03` | 2, reserved | Attributed phrase only; no typed relation. |
| These records do not form a connected path | Fact-check packet verdict `needs_more`; §5 unproven transitions | 3 | Editorial refusal, not a new historical claim. |

Sources used (from the fact-check register, not re-fetched here): `src-a01` *Attention Is All You Need*; `src-as01` *Improving Language Understanding by Generative Pre-Training*; `src-as02` *Better language models and their implications*; `src-a04` *Language Models are Few-Shot Learners*; `src-a08` *Training language models to follow instructions with human feedback*; `src-a15` *Introducing ChatGPT*.

## What this draft does not claim

- `sp01-c06` (unsupported as written): not used.
- "Transformer led to ChatGPT," "ChatGPT was built from InstructGPT," "GPT-3 became ChatGPT," or equivalent lineage.
- "Sibling model" as successor, derived-from, same-family, or a mechanism.
- ChatGPT or InstructGPT as minted graph entities.
- Years for the GPT, GPT-2, GPT-3, or InstructGPT papers. Those years are not in the accepted claim texts.
- Parameter counts, training-corpus size, free preview pricing, or "mass-market" as a fact about ChatGPT.
- Superlatives, rankings, or lab marketing taken as Atlas's own verdict.

## Return to Research

Needed before connected path copy can be written:

1. Direct evidence for the missing transitions, especially Transformer → GPT, GPT-2 → GPT-3, and the permitted reading of InstructGPT / ChatGPT.
2. A narrowed replacement for `sp01-c06`.
3. Canonical identities and approved relation types for InstructGPT and ChatGPT.
4. If reader copy needs paper years other than 2017 and November 30, 2022, those dates as separately accepted claims.

Until then, the Editor will not invent connecting sentences to make the flagship question look answered.

## Handoff fields

| Field | Copy |
| --- | --- |
| Candidate title | From Transformer to ChatGPT |
| Candidate subtitle | Documented records; the connecting path is not yet evidenced |
| Short summary | In 2017, *Attention Is All You Need* proposed the Transformer, based solely on attention mechanisms. Separate accepted records cover GPT-2's successor and Transformer-based wording, GPT-3's few-shot setting without gradient updates, InstructGPT's supervised then human-feedback fine-tuning of GPT-3, and ChatGPT's November 30, 2022 research preview. They do not yet form one connected path. |
| Why it matters | Path-level consequence is omitted: the pack does not support an explanation of how the 2017 architecture became a mass-market interface. Record-level why-it-matters is limited to the mechanism or source wording each accepted claim actually carries. |
| Optional technical note | Transformer = attention-only architecture, without recurrence or convolutions. |
| Transition copy | Only GPT-2 → GPT (successor wording) and GPT-2 as Transformer-based. No other transitions. |
| Publication recommendation | Do not ship as a connected Story Path. Reuse record blurbs only after Research closes the gaps and Fact-check re-accepts the transitions. |
