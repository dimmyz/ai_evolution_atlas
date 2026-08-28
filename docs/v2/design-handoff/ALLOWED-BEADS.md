# Allowed beads and connectors (Phase 1 only)

Copy into any external design tool. Only these facts may appear as history.

## Beads (cards the reader may see)

1. **2017 — Attention Is All You Need.** Proposes the Transformer, attention only, no recurrence/convolutions. (`sp01-c01`, `sp01-c02`)
2. **GPT paper (2018).** Generative pre-training; §3.1: “For our model architecture, we use the Transformer.” (`sp01-c03` reserved wording; `sp01-hv-c01` accepted)
3. **GPT-2 (2019).** OpenAI page: “a successor to GPT”; “a large transformer-based language model.” (`sp01-c04`, `sp01-c05`)
4. **GPT-3 paper (2020).** Few-shot, no gradient updates. §2.1: same model/architecture as GPT-2 **with stated exceptions** (sparse attention). (`sp01-c07`, `sp01-hv-c02`)
5. **InstructGPT paper (2022).** SFT + RLHF on GPT-3; authors name the resulting models InstructGPT. (`sp01-c08`, `sp01-c09`, `sp01-c10`)
6. **ChatGPT, 2022-11-30.** Official preview. Quote only: “ChatGPT is a sibling model to InstructGPT.” (`sp01-c11`, `sp01-c12`)

## Connectors you MAY draw (quoted, dashed if reserved)

| From | To | Allowed label (near-quote) |
|---|---|---|
| GPT paper | Transformer | “we use the Transformer” |
| GPT-2 | GPT (generic family as source said) | “a successor to GPT” |
| GPT-2 | Transformer | “transformer-based” |
| GPT-3 | GPT-2 | “same model and architecture as GPT-2” + exceptions visible |
| InstructGPT method | GPT-3 | “fine-tune GPT-3” (method, not a graph identity unless labeled paper-name) |
| ChatGPT | InstructGPT | “sibling model” only — **dashed**, no type |

## Connectors you MUST NOT draw

- Transformer → ChatGPT as cause / engine / “allowed models to scale”
- GPT (generic) “used Transformer” as if it were the accepted GPT-2 edge
- GPT-2 → GPT-3 as successor_of
- ChatGPT derived_from InstructGPT
- “developed in parallel”
- Date order as explanation

## First screen

A real bead, recommended **Transformer (2017)** or **GPT-2 (2019)**. Not filters. Not empty home.

## Later / not in this slice

SP02 ImageNet/AlexNet, SP04 NVIDIA, and any missing ChatGPT lineage. Label “not in this slice” — do not invent filler.
