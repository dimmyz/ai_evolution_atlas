# V2-UX-P1 — Phase-1 Story Path slice (honest brief)

Status: Designer draft · awaiting same-card review  
Logical milestone: `V2-M3-ux`  
Card: `t_f22a925f`  
Human unlock: `design:open` 2026-08-26 (H5 coding still closed)  
Owner file: **this file only**  
Do not edit: `docs/v2/10-interaction-story-path-spec.md` (failed brief; D1–D4)

Workspace proof (this run):

- cwd / git root: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_CLONE_2026-08-25`
- `.hermes.md` contains `AI Evolution Atlas`
- HEAD: `02b088a`
- Branch: `v2-bootstrap`

Canon read for this draft: `DEC-002.md`, `DESIGN-READY-MINIMUM.md`, `progress/SCORECARD-PHASE1.md`, `story-packs/sp01-factcheck.md`, `story-packs/harvest-factcheck.md`, `CLAUDE-M1-CHECKPOINT-REVIEW.md`. Supporting (not rewritten): `DEC-001.md` H2–H5, `04-audience-personas-learning-jobs.md`, `story-packs/sp01-editorial.md`, `design-handoff/ALLOWED-BEADS.md`, `design-handoff/SCHEMA.md`.

This is a **spec + ASCII wireframe**. It is not production site code, not a publishable Story Path, and not a graph dump.

---

## 1. Honest premise

The product unit remains **Story Path / Focus Path** (DEC-001 H3). The exact mechanic is a hypothesis.

Phase 1 does **not** give the Designer a connected Transformer → ChatGPT path. Fact-check packet SP01 is `needs_more`. What exists is:

- six documented beads on the *intended* sequence (M-A);
- a few **quoted local links** whose wording is already `accepted` or `accepted_with_reservations`;
- an official ChatGPT introduction that is an endpoint bead, not a descent proof (M-E).

The first slice is therefore **beads + quoted local links**. The flagship question may stay unanswered on screen. Gaps are content. Invented transitions are not.

Audience note (04 vs this slice): document 04 still asks a first-visit reader to retell a flagship path as a short *causal* sketch. DEC-002 + this brief override that bar **for Phase 1**. A naive reader who leaves able to recite “Transformer led to ChatGPT” has failed this slice, even if they feel they “got the path.”

Phase-1 first-visit bar:

1. Name the first bead they landed on (the 2017 Transformer paper).
2. Repeat one source-owned local link in the source’s words.
3. Know that ChatGPT is a dated official preview **and** that this slice does not join it to the Transformer.
4. Know where evidence lives (one more click).
5. Not treat date order as descent.

---

## 2. Surface and mechanic hypothesis

**Surface:** Command / Inspect. One historical record is in focus. Not a filter home. Not a dashboard. Not a six-step hero.

**Hypothesis to test on this real content:** *Quoted neighborhood.*

- The reader focuses one bead.
- Neighbors appear only when an allowed quote exists.
- A missing popular next step is a **gap state**, not a thinner arrow.
- Records that exist but are not joined sit on a **records rail**, not on a numbered spine.
- Later / other flagships are labeled **not in this slice**.

This replaces the failed `10-…` mechanic (“The Thread” + “Step *n* of 6”). Do not patch that file. If later evidence accepts more transitions, the neighborhood can grow; it must not pretend to be a completed thread today.

Name on the chrome (reader-facing, not reviewer-facing): **Nearby records**. Path header names the *intended* flagship without claiming it is proven.

---

## 3. Inventory — only accepted / accepted_with_reservations

No new facts. Years appear only where the accepted claim already carries them (2017 on the Transformer record; 30 November 2022 on the ChatGPT announcement). Paper years for GPT / GPT-2 / GPT-3 / InstructGPT are **not** in the accepted claim texts and must not be invented on the wireframe.

### 3.1 Beads the reader may see (`in_slice`)

| Bead ID | What the card shows | Allowed body (near-source) | Claim IDs | Reservation the UI must keep |
| --- | --- | --- | --- | --- |
| B1 Transformer | Title *Attention Is All You Need*; name “the Transformer”; 2017 | “We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.” | `sp01-c01`, `sp01-c02` | Year precision only. This is the proposal, not a later product. |
| B2 GPT paper | Title *Improving Language Understanding by Generative Pre-Training* | Method: generative pre-training, then discriminative fine-tuning; “minimal changes to the model architecture.” Architecture quote lives on the connector, not as a generic “GPT used Transformer” slogan. | `sp01-c03` (reserved), `sp01-hv-c01` | Do not render “no task-specific architecture modifications.” Do not convert the paper into a canonical `model-gpt` node. |
| B3 GPT-2 | OpenAI page title *Better language models and their implications*; model name GPT-2 | “Our model, called GPT-2 (a successor to GPT)”; “a large transformer-based language model.” | `sp01-c04`, `sp01-c05` | Source wording. Generic “GPT” endpoint is not ontology-approved. Does not prove later systems use the Transformer. |
| B4 GPT-3 | Paper title *Language Models are Few-Shot Learners*; name GPT-3 | Few-shot; “without any gradient updates or fine-tuning”; tasks and demonstrations via text. Architecture quote (same as GPT-2 + exceptions) lives on the connector. | `sp01-c07`, `sp01-hv-c02` | Never use `sp01-c06`. Do not call GPT-3 a successor of GPT-2. Do not call GPT-3 Transformer-based as an Atlas fact. |
| B5 InstructGPT method | Paper title *Training language models to follow instructions with human feedback*; the paper’s name InstructGPT | Supervised fine-tuning of GPT-3 on labeler demonstrations; then RLHF on that supervised model; “We call the resulting models InstructGPT.” | `sp01-c08`, `sp01-c09`, `sp01-c10`, `sp01-hv-c03` | Name is the paper’s. Not an approved graph entity. Method wording is not a typed edge. |
| B6 ChatGPT preview | OpenAI page *Introducing ChatGPT*; 30 November 2022 | “We’ve trained a model called ChatGPT which interacts in a conversational way.” Research preview. Sibling sentence lives on the dashed connector only. | `sp01-c11`, `sp01-c12` | Endpoint bead only. “Sibling model” does not specify type, direction, derivation, succession, or causation. |

### 3.2 Connectors the UI may draw (`quoted_link`)

Draw these as **quoted labels**, not typed Atlas edges. Use a solid quote-mark if `accepted`, a dashed quote-mark if `accepted_with_reservations`.

| Link ID | From | To | Label the reader sees | Claim / relation | Draw |
| --- | --- | --- | --- | --- | --- |
| L1 | B2 GPT paper | B1 Transformer | GPT paper: “For our model architecture, we use the Transformer.” | `sp01-hv-c01` | solid quote |
| L2 | B3 GPT-2 | B2 / “GPT” as the page said | GPT-2 page: “a successor to GPT” | `sp01-c04`, `sp01-r01` | dashed quote |
| L3 | B3 GPT-2 | B1 Transformer | GPT-2 page: “transformer-based” | `sp01-c05`, `sp01-r02` | dashed quote |
| L4 | B4 GPT-3 | B3 GPT-2 | GPT-3 paper: “We use the same model and architecture as GPT-2” + visible exception: alternating dense and locally banded sparse attention | `sp01-hv-c02` | dashed quote |
| L5 | B5 InstructGPT method | B4 GPT-3 | InstructGPT paper: “fine-tune GPT-3” (supervised, then RLHF) | `sp01-c08`, `sp01-c09`, `sp01-hv-c03` | method chip, not an identity edge |
| L6 | B6 ChatGPT | B5 InstructGPT method | OpenAI: “ChatGPT is a sibling model to InstructGPT.” | `sp01-c12`, `sp01-r03` | dashed, **no type** |

Endpoints stay exact:

- L1 is the **GPT paper**, not “GPT” and not the GPT-2 edge.
- L3 is **GPT-2**, not GPT.
- L4 is GPT-3 ↔ GPT-2 architecture wording with exceptions, not `successor_of` and not `uses_architecture` on the Transformer.

### 3.3 Must not draw

| Forbidden | Why |
| --- | --- |
| Transformer → ChatGPT as cause, engine, “allowed models to scale,” or Step 1 of 6 | D1, D3; `sp01-factcheck` §5–§6 |
| “GPT used the Transformer” as if it restated `sp01-r02` | D2; that accepted relation is GPT-2. GPT-paper wording is L1, quoted as the paper. |
| GPT-2 → GPT-3 as successor | Chronology is not succession |
| GPT-3 → Transformer as Atlas fact | Unproven exact endpoint relation |
| ChatGPT derived from InstructGPT / GPT-3 / GPT-2 / Transformer | “sibling” is not derivation |
| “developed in parallel” on the sibling sentence | D4 |
| Date order as explanation | `sp01-factcheck` §6 |
| `sp01-c06` | `unsupported` |
| SP02 / SP04 beads as if they belong on this spine | `out_of_slice` |
| ChatGPT **descent** as a path destination | `out_of_slice`; B6 itself may appear as a record |

---

## 4. First-screen contract

First paint **is** bead B1 (Transformer, 2017), already in focus.

Required on first screen:

- Path header that names the intended flagship **and** says the connecting path is not evidenced.
- The Transformer quote (what happened).
- One historical next action that is not a filter: **See who names this architecture** (opens L1 / L3).
- Evidence affordance on the same card.
- A records rail of the other Phase-1 beads, unnumbered.
- At least one **not in this slice** label.

Forbidden on first screen:

- Search + filters as the only actions.
- Empty home / “choose a path” empty state.
- “Step 1 of 6.”
- A downward causal spine into ChatGPT.
- Control-panel chrome (global graph tools, era chips, layer legends).

Recommended first bead: **Transformer**. Alternate first bead **GPT-2** is allowed if a later test prefers a model name the reader already knows; it must still open as a focused historical card, not a hub of filters. This spec wires Transformer first.

---

## 5. Desktop wireframe — 1440×900 — S0 + S1

Editorial paper surface. Ink on warm off-white, one rust accent for the focused bead, muted rules — not neon, not React Flow, not a KPI strip.

```text
1440 × 900
+------------------------------------------------------------------------------+
|  Atlas                              Nearby records              Evidence     |
|  a source-grounded history          · this slice                · closed     |
+------------------------------------------------------------------------------+
|                                                                              |
|  Intended path: Transformer and ChatGPT                                      |
|  Documented records. The connecting path is not yet evidenced.               |
|                                                                              |
|  +----------------------------------------------------+   +----------------+ |
|  |  2017                                              |   | Nearby         | |
|  |  ATTENTION IS ALL YOU NEED                         |   |                | |
|  |  the Transformer                                   |   |  who names     | |
|  |                                                    |   |  this          | |
|  |  “We propose a new simple network architecture,    |   |  architecture  | |
|  |   the Transformer, based solely on attention       |   |                | |
|  |   mechanisms, dispensing with recurrence and       |   |  GPT paper     | |
|  |   convolutions entirely.”                          |   |  “we use the   | |
|  |                                                    |   |   Transformer” | |
|  |  Why this record is here                           |   |  [open paper]  | |
|  |  This is the architecture named at the start of    |   |                | |
|  |  the intended path. The accepted record is the     |   |  GPT-2 page    | |
|  |  proposal itself, not a later product.             |   |  “transformer- | |
|  |                                                    |   |   based”       | |
|  |  [ Open the paper quote ]   [ Technical note ]     |   |  [open GPT-2]  | |
|  |  [ Evidence for this card ]                        |   |                | |
|  +----------------------------------------------------+   |  no sourced    | |
|                                                           |  link from     | |
|  Other records in this slice — not steps                  |  here to       | |
|  [ GPT paper ] [ GPT-2 ] [ GPT-3 ]                        |  ChatGPT       | |
|  [ InstructGPT method ] [ ChatGPT, 30 Nov 2022 ]          |                | |
|                                                           +----------------+ |
|  Not in this slice                                                           |
|  ImageNet / AlexNet · NVIDIA / CUDA · how ChatGPT was built                  |
|                                                                              |
+------------------------------------------------------------------------------+
|  Focus: Transformer     Records: 6 in slice     Proven path: none            |
+------------------------------------------------------------------------------+
```

Primary hit targets (min 44px in a later prototype): the focused card itself, “GPT paper — we use the Transformer”, “GPT-2 — transformer-based”, “Evidence for this card”.

There is no “Next step” that implies ChatGPT. Moving to B6 is choosing another record, not advancing a numbered journey.

---

## 6. Mobile wireframe — 390×844 — S0 / first paint

```text
390 × 844
+----------------------------------+
| Atlas                            |
+----------------------------------+
|                                  |
| Intended path                    |
| Transformer and ChatGPT          |
| Documented records. The          |
| connecting path is not yet       |
| evidenced.                       |
|                                  |
| +------------------------------+ |
| | 2017                         | |
| | Attention Is All You Need    | |
| | the Transformer              | |
| |                              | |
| | “We propose a new simple     | |
| |  network architecture, the   | |
| |  Transformer, based solely   | |
| |  on attention mechanisms,    | |
| |  dispensing with recurrence  | |
| |  and convolutions entirely.” | |
| |                              | |
| | [ Open the paper quote ]     | |
| | [ Evidence for this card ]   | |
| +------------------------------+ |
|                                  |
| Who names this architecture      |
|                                  |
| [ GPT paper                    ] |
|   “we use the Transformer”       |
| [ GPT-2                        ] |
|   “transformer-based”            |
|                                  |
| Other records — not steps        |
| GPT-3 · InstructGPT · ChatGPT    |
|                                  |
| Not in this slice                |
| ImageNet · NVIDIA · descent      |
|                                  |
+----------------------------------+
```

The focused B1 card carries `[ Evidence for this card ]` (same control as desktop S1). That is the focused-card evidence action, not a global drawer. Keyboard: Tab still reaches it (journey step 3; A9). Order remains focused bead → quoted neighbors → records rail → evidence → out-of-slice.

First screen still contains a real historical bead. Filters are absent. ChatGPT is a record chip, not “step 6”.

---

## 7. Other screens and states

### S2 — Connector (only if a quote exists)

Example: reader activates L1 from B1.

```text
+------------------------------------------------------------------------------+
|  Quoted link — not a causal spine                                            |
+------------------------------------------------------------------------------+
|                                                                              |
|   [ GPT paper ]  —— “For our model architecture, we use the Transformer.”    |
|                         Improving Language Understanding                     |
|                         by Generative Pre-Training                           |
|                                              →   [ Transformer, 2017 ]       |
|                                                                              |
|   This sentence is the paper’s architecture wording.                         |
|   It does not say later systems used the Transformer.                        |
|   It is not the GPT-2 page’s “transformer-based” sentence.                   |
|                                                                              |
|   [ Stay with the Transformer ]   [ Open the GPT paper card ]                |
|   [ Evidence ]                                                               |
+------------------------------------------------------------------------------+
```

GPT-2 connector L3 uses **its** sentence only: “a large transformer-based language model.” Never merge L1 and L3 into “GPT used the Transformer.”

GPT-3 connector L4 must show the exception on the same panel, not in a footnote the naive reader never opens.

Sibling connector L6 is dashed and repeats the official sentence only. No “parallel,” no “family,” no “built from.”

### S2-gap — popular next step not evidenced

When the reader is on B1 and looks toward ChatGPT:

```text
+--------------------------------------------------+
|  No sourced link in this slice                   |
|                                                  |
|  ChatGPT is a documented research preview        |
|  (30 November 2022).                             |
|                                                  |
|  There is no accepted sentence here that joins   |
|  the Transformer to ChatGPT.                     |
|                                                  |
|  [ Open the ChatGPT record anyway ]              |
|  [ Stay with the Transformer ]                   |
+--------------------------------------------------+
```

Do not fill this with a dotted causal arrow.

### S3 — Next-bead preview

Dimmed preview is allowed only for a bead that has a quoted link from the focus. B6 must not preview as “next after Transformer.” If shown from the records rail, its preview is just the dated introduction, plus “not joined to this card.”

### S4 — Evidence

Reader labels, not raw source IDs as the only text.

```text
+--------------------------------------------------+
|  Evidence                                        |
|                                                  |
|  Claim   Attention Is All You Need is the        |
|          title of this paper record              |
|  Verdict accepted                                |
|  Source  arXiv: Attention Is All You Need        |
|          (1706.03762)                            |
|                                                  |
|  Claim   The abstract proposes the Transformer   |
|          based solely on attention mechanisms    |
|  Verdict accepted                                |
|  Source  same paper, abstract                    |
|                                                  |
|  Atlas IDs (for staff): sp01-c01, sp01-c02       |
+--------------------------------------------------+
```

### Out of slice

Selecting ImageNet / AlexNet, NVIDIA / CUDA, or “how ChatGPT was built”:

```text
+--------------------------------------------------+
|  Not in this slice                               |
|                                                  |
|  This first slice only shows Phase-1 records     |
|  around the Transformer and nearby GPT papers.   |
|  Other flagships and ChatGPT’s construction      |
|  are not evidenced here.                         |
|                                                  |
|  [ Back to the Transformer ]                     |
+--------------------------------------------------+
```

---

## 8. Copy deck (visible historical sentences)

Only these historical sentences may appear as history. Editorial glue is labeled as arrangement, not as a claim.

**Path header (arrangement, class 3)**  
Intended path: Transformer and ChatGPT.  
Documented records. The connecting path is not yet evidenced.

**B1**  
2017. *Attention Is All You Need.*  
“We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.”

**B1 why-here (arrangement; must not become engine-copy)**  
This is the architecture named at the start of the intended path. The accepted record is the proposal itself, not a later product.

**B2**  
*Improving Language Understanding by Generative Pre-Training.*  
Large gains by generative pre-training of a language model on unlabeled text, then discriminative fine-tuning. The approach uses “minimal changes to the model architecture.”

**L1**  
“For our model architecture, we use the Transformer.”

**B3**  
“Our model, called GPT-2 (a successor to GPT), was trained simply to predict the next word in 40GB of Internet text.”  
“a large transformer-based language model”

**B4**  
GPT-3 is applied “without any gradient updates or fine-tuning,” with tasks and few-shot demonstrations specified through text interaction.

**L4**  
“We use the same model and architecture as GPT-2” — exception: “alternating dense and locally banded sparse attention patterns in the layers of the transformer.”

**B5**  
Labeler demonstrations used to fine-tune GPT-3 with supervised learning; then rankings used to further fine-tune that model with reinforcement learning from human feedback. “We call the resulting models InstructGPT.”

**B6**  
30 November 2022. “We’ve trained a model called ChatGPT which interacts in a conversational way.” Research preview.

**L6**  
“ChatGPT is a sibling model to InstructGPT.”

**Technical note (L3, on demand)**  
The Transformer, as proposed, is a network architecture based solely on attention mechanisms. The paper presents it as doing without recurrence and convolutions.  
No account of training scale, parameter counts, or interface design — those are not in the accepted claims used here.

Do not put paper years 2018 / 2019 / 2020 / 2022 on B2–B5. Do not put 175 billion parameters on the first screens.

---

## 9. Naive-user journey (8 steps)

Persona: Nia (curious technology professional). Time budget: under 10 minutes. No Atlas jargon required to finish.

| Step | Input | What she sees | Must not happen |
| --- | --- | --- | --- |
| 1 | Lands / first paint (no instruction) | B1 Transformer card already open, with the 2017 quote. Path header admits the connecting path is unproven. | Filter-only home. Empty state. “Step 1 of 6.” |
| 2 | Click **GPT paper — “we use the Transformer”** or activate it with Enter | S2 for L1. Endpoints: GPT paper → Transformer. Quote verbatim. | Copy that says “GPT used the Transformer” as if it were the GPT-2 relation. |
| 3 | Keyboard: Tab to **Evidence for this card**, Enter | S4 lists accepted claims in English + source names. Staff IDs secondary. Control lives on the focused bead, not a global top bar. | Raw `src-a01` as the only label. |
| 4 | Esc / Back to B1, then open **GPT-2 — “transformer-based”** | B3 + L3. Separate sentence from L1. “successor to GPT” visible as the page’s words, dashed. | Merged “GPT / GPT-2 used Transformer.” Causal onward lineage. |
| 5 | From B3, open GPT-3 from the records rail (not as “next step”) | B4 few-shot wording. If she opens L4, exceptions are on the same panel. | “Successor of GPT-2.” Unqualified “same architecture.” GPT-3 called Transformer-based. |
| 6 | Open InstructGPT method, then ChatGPT record | B5 method + paper name. B6 dated preview. L6 dashed sibling quote only. | “Built from.” “developed in parallel.” InstructGPT minted as a product node. |
| 7 | From B1, try to go “to ChatGPT as the destination of this architecture” | S2-gap: no sourced link. She may still open B6 as a record. | A spine, numbered steps, or “engine for ChatGPT.” |
| 8 | Open **Not in this slice** (ImageNet or “how ChatGPT was built”) | Out-of-slice panel. One action back to the Transformer. | Fake filler beads. SP02/SP04 facts imported to pad the path. |

Keyboard contract for the happy path: Tab order is focused bead → quoted neighbors → records rail → evidence → out-of-slice. Arrow keys may move between quoted neighbors only. There is no “next step” key that lands on ChatGPT from the Transformer.

After these eight steps Nia should be able to say, in her own words:

- “The first thing I saw was the 2017 Transformer paper.”
- “The GPT paper says it uses the Transformer; the GPT-2 page calls GPT-2 transformer-based.”
- “ChatGPT showed up as a November 2022 preview, not as the last step of a proven chain.”

If she says “so that’s how ChatGPT was built,” the UI has failed.

---

## 10. Acceptance scenarios

### A1 — First screen is a bead

Given a first-time H2 reader  
When the Phase-1 slice loads  
Then the Transformer paper is already the focused historical object  
And search/filters are absent or visually secondary  
And the screen is not an empty home.

### A2 — Historical action before chrome

Given A1  
When the reader takes the most obvious next control  
Then that control opens a quoted local link (L1 or L3) or the paper quote  
And it does not open a filter drawer.

### A3 — Endpoints stay exact (D2)

Given the GPT-2 connector  
Then the label is GPT-2’s “transformer-based” wording  
And it is not rewritten as “GPT used the Transformer.”  
Given the GPT-paper connector  
Then the label is “For our model architecture, we use the Transformer.”  
And the from-bead is the GPT paper, not GPT-2.

### A4 — No causal spine (D1, D3)

Given any screen in this slice  
Then no copy says the Transformer led to, enabled, powered, or was the engine of ChatGPT  
And no chrome says “Step *n* of 6” (or any fixed step count to ChatGPT).

### A5 — Sibling stays a quote (D4)

Given the ChatGPT ↔ InstructGPT connector  
Then the only historical sentence is “ChatGPT is a sibling model to InstructGPT.”  
And “developed in parallel,” derived-from, family, and succession do not appear.

### A6 — Exceptions stay visible

Given L4  
Then “same model and architecture as GPT-2” is shown with the sparse-attention exception on the same panel.

### A7 — Gap is a state, not a thinner arrow

Given focus on the Transformer and a request for ChatGPT-as-destination  
Then the reader gets the no-sourced-link state  
And may still open the ChatGPT record as an unjoined bead.

### A8 — Out of slice is labeled

Given ImageNet / AlexNet, NVIDIA / CUDA, or ChatGPT descent  
Then the UI says “not in this slice”  
And does not invent filler history.

### A9 — Evidence is reachable

Given any in-slice bead  
Then one control opens claim + verdict + human-readable source  
And `sp01-c06` is absent.

### A10 — No production implementation in this card

Given this deliverable  
Then the only owned file is this markdown spec  
And no `src/` product code and no `chrome:` links were added.

---

## 11. Rejected lines (D1–D4 self-check)

Lines considered and **not** used:

| Rejected | Ban |
| --- | --- |
| “This architecture provided the underlying engine that allowed language models to scale to the size required for ChatGPT.” | D1 (from the failed `10-…` spec) |
| “How the Transformer became ChatGPT — Step 1 of 6.” | D3 |
| “GPT used the Transformer architecture.” | D2 (wrong endpoint if it stands in for the GPT-2 relation; GPT-paper wording must stay the paper’s sentence) |
| “ChatGPT and InstructGPT are sibling models developed in parallel.” | D4 |
| “Transformer-based models led to GPT-2, then GPT-3, then ChatGPT.” | D1 + date-as-cause |
| “GPT-3 is a successor to GPT-2.” | Unproven succession |
| “GPT-3 uses the Transformer.” | Unproven exact endpoint; do not infer from L4 |
| “ChatGPT was built from InstructGPT.” | Sibling ≠ derived_from |
| “Start your journey to ChatGPT.” | D3 framed as CTA |
| Paper years 2018 / 2019 / 2020 on B2–B5 | Not in accepted claim text (`sp01-editorial` handoff) |

---

## 12. What later work may change

- Mechanic name and visual tone are a hypothesis. Reviewer / human may prefer GPT-2 as the first bead.
- Phase 2 may add ChatGPT identity, typed sibling, or more architecture claims **as new claim IDs**. It must not silently rewrite Phase-1 copy.
- Ontology may later approve or reject `model-gpt` as a `successor_of` endpoint. Until then L2 stays dashed source wording.
- H5 remains closed. A clickable HTML mock is allowed only on a later, narrowly approved prototype harness — not this card.

---

## 13. Reviewer packet

Please review **this file only** against:

- DEC-002 first honest slice;
- DESIGN-READY-MINIMUM designer brief + M-F (D1–D4);
- SCORECARD-PHASE1 cited claim IDs;
- `sp01-factcheck.md` and `harvest-factcheck.md` reservations;
- Critic D1–D4 in `CLAUDE-M1-CHECKPOINT-REVIEW.md`.

Pass if a naive reader can inspect real beads and quoted local links without being taught a myth spine. Fail if any first-screen or connector copy reintroduces D1–D4 or mixes GPT / GPT-2 / GPT-paper endpoints.
