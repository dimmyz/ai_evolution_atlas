# 05 — Content Strategy & Editorial System

Status: Draft v0.1 · M1 editorial canon candidate  
Owner: Content Editor  
Independent check: Reviewer; later Critic + human H3 on a sample set  
Does not authorize site code.

This file is the v2 writing contract. It tells factory workers how Atlas copy is produced, what it must sound like, and where the Editor is forbidden to invent. It does not add AI-history facts.

## 1. Why this document exists

v1 shipped a working site whose “why it matters” fields explained why a row qualified for a spreadsheet, not why a milestone mattered to a reader. The Critic named that failure plainly: the editorial atlas contained no editorial writing.

v2 treats that as a process defect, not a prose preference. Research extracts and checks claims. Editorial writing turns *accepted* claims into something a curious learner can follow. Mixing those jobs is how hype, false lineage, and reviewer-speak get published.

DEC-001 already locked the reader (curious learner / technology professional) and the product unit (Story Path / Focus Path). This document locks the writing system those decisions require.

## 2. Authority

When this file conflicts with other text, use this order unless a later human-approved decision supersedes it:

1. `docs/v2/DEC-001.md`
2. `docs/v2/PG-01.md`
3. Charter / Vision / PRD / Research Program in the v2 pack (and their in-repo copies as they land)
4. This file, for voice, depth, field recipes, and the Researcher → Editor boundary
5. `docs/v2/06-research-evidence-methodology.md` (when accepted) for source tiers, claim status, and relation proof — not for reader voice

This file does **not** decide ontology, UX mechanics, flagship-path membership beyond DEC-001 H4, or whether a claim is true. Those belong to 08, 10, Research/Fact-checker, and 06.

## 3. The reader

Write for a person who already recognizes names such as ChatGPT, Transformer, DeepMind, NVIDIA, Claude, Llama, or DeepSeek, and who lacks a coherent map of how they connect.

Assume:

- they want a reliable explanation before they open papers;
- they can handle precise technical language when it earns its keep;
- they will bounce if the first sentences sound like a dataset intake note, a press release, or a graph-database schema.

Do not write for the Reviewer, the Fact-checker, or the ontology. Those audiences get research packs and structured data. The public surface is the reader.

Secondary audiences (students, educators, journalists, researchers who want provenance) are served by *depth layers* and a reachable evidence surface — not by making the default copy denser.

## 4. What Atlas copy is for

Every published stretch of reader text has one job: help someone form a correct mental model of a path.

After a short visit they should be able to say, in their own words:

- what this is;
- what came before;
- what enabled it;
- who and which organizations were involved;
- what happened next;
- which links are documented fact, which are evidence-backed influence, and which are editorial interpretation;
- where to inspect sources.

The writing is successful when those answers are available without the reader first learning Atlas internals.

The writing has failed when it:

- explains why an item was included in a research batch;
- implies causality from date order;
- sells a lab, a model, or a valuation;
- collapses competing accounts into one smooth story;
- uses empty superlatives in place of a mechanism.

## 5. Researcher → Fact-checker → Editor

This boundary is load-bearing. It is not etiquette.

```
Researcher     extracts evidence, proposes claims and relations, records gaps
Fact-checker   independently labels claims: accepted | accepted_with_reservations |
               unsupported | disputed | needs_more
Editor         writes narrative from accepted (and clearly marked reserved) claims only
```

### Editor may

- choose order, rhythm, and what to put on which depth layer;
- paraphrase accepted claims in plain language;
- write titles, short summaries, why-it-matters, and path transitions *supported by the pack*;
- surface uncertainty the pack already recorded;
- refuse to publish a path that still has a critical unexplained break;
- send a needed factual sentence back to Research.

### Editor may not

- add a fact, date, name, amount, ranking, or causal link that is not in the accepted pack;
- “fill in” a missing transition because the story would read better;
- upgrade `influenced_by` or chronology into succession;
- treat company marketing as independent history;
- resolve a dispute by picking the more elegant version;
- invent date precision;
- use LLM fluency as a source.

If the Editor needs a new factual statement, the task returns to Research. It is not filled in editorially. PG-01’s M1 exit (“Editor can produce compelling reader copy without inventing facts”) is a test of the *packs*, not permission to improvise.

Editorial drafts for a Story Path start only after the matching fact-check is `accepted` or `accepted_with_reservations`. Reservations stay visible in the copy or in the evidence layer; they are not smoothed away.

## 6. Voice

The product identity, already in Vision, is the voice spec:

- educational but not simplistic;
- visual but not decorative (writing should leave room for the interface, not narrate the chrome);
- technical but readable;
- evidence-based but not academic in tone;
- broad in context, selective in depth;
- historical, and useful for understanding the present frontier.

Register: concise, specific, slightly dry. Prefer verbs of mechanism (`introduced`, `trained on`, `made feasible`, `adopted`) over verbs of myth (`revolutionized`, `ushered in`, `changed everything`).

Address the reader as a peer who is missing a map, not as a student who is missing intelligence, and not as a reviewer who is missing a citation ID.

English is the canonical language for this contract and for agent-facing editorial specs. Translation happens after editorial copy is accepted (PRD localization rule). Do not translate first and edit later.

## 7. Anti-hype

Do not publish, unless the accepted pack *explicitly* supports the stronger wording and the Fact-checker allowed it:

- “first ever”
- “revolutionary” / “seminal” / “landmark” as decoration
- “best model”
- “changed everything”
- “directly led to X”
- “won” / “crushed” / “disrupted”
- valuation-as-significance
- benchmark score as a universal measure of historical importance

Cautious substitutes that still explain:

- “widely cited as …” only if the pack says who cited it and for what;
- “made Y practical at Z scale” only if the pack states the capability shift;
- “adopted by …” only with named adopters in the pack;
- “a convergence of A, B, and C” only when those factors are in the pack as such.

Lab or vendor adjectives in a primary source are evidence of *what that source claimed*, not of Atlas’s own verdict. Quote or attribute them; do not launder them into narrator voice.

Historical analogies (electrification, internet, railroads) are editorial analysis, not graph facts. If used at all, they sit on the interpretation layer and must be labeled as analogy.

## 8. Depth layers

Vision requires progressive disclosure. Editorial copy is written in four layers so the interface can reveal complexity without dumping the ontology on first sight.

| Layer | Reader question | Copy | Default visibility |
|---|---|---|---|
| L1 — Entry | What is this path / entity, in one breath? | Title + one-sentence promise | Always |
| L2 — Path | What happened, in order, and why each step is here? | Milestone summary + why-it-matters + transition | Default reading |
| L3 — Entity | Who, what system, what idea, what machine, what dataset? | Entity short explanation; optional technical note | On open / on demand |
| L4 — Evidence | How do we know? How sure? What is disputed? | Claims, confidence, date precision, sources, competing accounts | One or two actions away; never a prerequisite for L1–L2 |

Rules:

- L1–L2 must be understandable without L4.
- L4 must be reachable from any critical claim without hunting a global bibliography.
- L3 technical depth appears only when it changes the reader’s model (PRD: deeper explanation only where it adds understanding).
- The user should never have to understand internal types (`successor_of`, `enabled_by`, claim IDs) before benefiting. Relation types may be shown in human language (“uses the same architecture”, “funded”, “trained on”) with the typed edge available in L4.

Capital, compute, data, and organizational context are *layers*, not a separate finance or hardware magazine. Bring them in when they explain a transition. Leave them out when they only inflate the node.

## 9. Story Path as the editorial unit

A Story Path is a curated, source-backed sequence that answers one historical question. It is not a dump of every related node.

DEC-001 H4 flagship questions (titles may be sharpened later; the questions may not be silently replaced):

1. How did a 2017 architecture become the basis of a mass-market AI interface? (Transformer → ChatGPT)
2. Why was AlexNet a convergence of people, data, and compute rather than merely another image classifier? (ImageNet / Hinton / AlexNet / GPU)
3. How did graphics hardware become the infrastructure layer of frontier AI? (NVIDIA → CUDA → deep learning → AI infrastructure)

Path copy must include:

- a title framed as a question or explanatory theme;
- a beginning, a middle that is actually connected, and an end or current frontier;
- for each milestone: period/date with honest precision, what happened, why it matters *in this path*, links to adjacent path nodes;
- for each critical transition: at least one explanatory sentence that restates an accepted claim — not “and then later…”;
- a way to open an entity without abandoning the path (UX owns the mechanic; editorial owns not writing as if the path is a dead-end article).

A path is not accepted because each node is individually accurate. Unexplained breaks, orphan required nodes, and chronology-as-lineage fail editorial review even if every date is right.

## 10. Field recipes

These recipes are for reader-facing fields. Structured data fields stay in the evidence pack / ontology.

### Title / subtitle

- Name the thing the reader already has a word for, then the question.
- Prefer “From Transformer to ChatGPT” over “GPT lineage cluster (2017–2022)”.
- Do not encode research status (“candidate”, “seed”, “batch B”) in a public title.

### What happened (summary)

Two or three sentences. Neutral paraphrase of accepted claims.

Must contain: actor or system, action, time with declared precision, and the concrete object (paper, model, product, hardware, dataset, organization event).

Must not contain: why we ingested it; citation mechanics; empty praise.

### Why it matters

One to three sentences answering *this path’s* question, not “why this row exists”.

Good why-it-matters points at a mechanism, a capability shift, an institutional move, or a documented consequence that is in the pack.

Bad why-it-matters (v1, quoted as anti-pattern — do not reuse the voice):

- “Primary record for a large-language-model candidate in the period.”
- “Dated primary-source multimodal model record.”
- “Anchor for the selected Transformer-era timeline.”

Those sentences are triage notes. They tell a reviewer the item passed intake. They tell a reader nothing.

If the pack does not support a consequence, omit why-it-matters and return the gap to Research. Do not generate significance.

### Transition copy (between two path nodes)

State what the accepted relation actually is.

| If the pack has | Write |
|---|---|
| documented succession / official family | “B followed A in the same family / release line.” |
| architecture use | “B is built on / uses A.” |
| evidence-backed influence | “A shaped B (influence — not identity).” |
| enabling infrastructure or data | “A made B feasible / trained / deployable, as documented.” |
| same time, no relation | Do not write a transition. Place both on the timeline without a causal verb. |
| disputed | Present both accounts; do not pick a winner in narrator voice. |

Chronology alone is not a transition.

### Technical note (optional L3)

Allowed when a mechanism is load-bearing (e.g. what attention does, what CUDA made programmable, what a benchmark measured). Keep it shorter than the summary. If it cannot be sourced from the pack, it does not ship.

## 11. Three honesty classes

Vision Principle 6 and the Charter’s minimum useful outcome require the reader to see the difference:

1. **Documented fact** — a claim Fact-checker accepted, usually from a primary or strong secondary source. Narrated without hedging theater, with honest date precision.
2. **Evidence-backed influence** — a typed relation the pack supports but that is not identity or official succession. Use influence/enabling language; keep confidence visible at L4.
3. **Editorial interpretation** — arrangement, emphasis, analogy, “why it matters” synthesis *within* accepted claims. Never presented as a new graph edge.

Do not hide class 3 as class 1. Do not hide a gap as class 3.

Fast-changing roles, org charts, and product names carry a last-verified date in the data layer. Editorial copy should not freeze a current job title as eternal.

## 12. Handoff

### Editor receives (from Research Program §14)

- accepted claims;
- accepted relations;
- source locators;
- uncertainty notes;
- technical significance notes;
- prohibited overstatements;
- open gaps.

### Editor returns

- short summary;
- why-it-matters;
- optional deeper technical explanation;
- transition copy for the Story Path;
- candidate title/subtitle.

Editor does **not** return new entities, new edges, or silently repaired dates. Graph Curator / data roles consume structured evidence, not prose. No relation is accepted from copy alone.

### Stop conditions (escalate; do not smooth)

- pressure to invent relations to fill a path;
- a critical transition with no accepted claim;
- fact-check status `unsupported`, `disputed`, or `needs_more` on a P0 step;
- copy that can only be made “compelling” by adding facts;
- request to write reader copy before fact-check.

## 13. Sample set (human H3) — later, not this file

Charter H3 and 00B require a sample set (about 5–10 entries) accepted by a human and challenged by Critic *before mass editing*.

This document is the contract those samples will be judged against. It does not itself invent sample history. Samples are written on V2-ED-\* cards after SP01 / SP02 / SP04 fact-check accept.

Until that gate, do not mass-rewrite v1 `why_it_matters` fields and do not generate placeholder “good” encyclopedia blurbs.

## 14. Localization (editorial implications only)

- Canonical editorial language: English, matching DEC-001’s agent-facing rule.
- RU/EN capability is a product requirement; first public language is still a human decision.
- Names, model names, and paper titles follow the future localization contract (12). Until 12 exists, do not invent transliteration policy in this file.
- Translate accepted editorial copy; do not research in one language and publish a second-language paraphrase that introduces facts.

## 15. Acceptance

### This document is done when

- voice, anti-hype, depth layers, and the no-new-facts boundary are explicit;
- field recipes cover summary, why-it-matters, titles, and transitions;
- Story Path is the editorial unit and matches DEC-001 H3/H4;
- handoff in/out matches the Research Program;
- no site code and no new historical claims were introduced.

### A later editorial packet is done when

- every sentence of reader copy maps to an accepted or clearly reserved claim;
- no critical transition is chronology-only;
- honesty classes are distinguishable;
- L1–L2 read as explanation, not intake;
- Critic can attack comprehension without needing a new research pass to fix invented facts.

### Mass editorial work is not done when

- tests are green but the copy still sounds like research-triage;
- the graph is denser but the path still does not teach;
- hype was removed by deleting why-it-matters instead of writing one the pack supports.

## 16. Out of scope here

- Website implementation, components, or visual chrome (H5 closed).
- Source-tier tables, claim schema, and freshness rules (document 06).
- Ontology types and storage (document 08).
- First-click / Thread visual mechanic (Designer; DEC-001 H3 leaves it unlocked).
- Audience ranking beyond DEC-001 H2 (document 04).
- New flagship paths beyond H4’s first three.

If a needed rule is missing from canon, surface it. Do not resolve it in prose and call it a fact.
