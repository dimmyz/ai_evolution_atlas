# 04 — Audience, Personas & Learning Jobs

Status: Draft v0.1 · Designer canon candidate  
Owner: Product Designer / UX  
Independent check: Reviewer (same-card)  
Logical milestone: V2-M1  
Does not implement UI. Does not reopen DEC-001.

---

## 0. Authority and workspace

This file is the v2 audience contract. It binds later editorial voice, IA, UX, and naive-user tests. It does not bind ontology, evidence methodology, or production code.

Canon this draft is derived from (not replaced by):

- `docs/v2/DEC-001.md` — H2 audience, H3 Story Path / Focus Path as product unit, H4 three flagship stories
- `docs/v2/PG-01.md` — 04 is authorized discovery work; broad coding remains closed
- Charter §8–9, Vision §3–5, PRD §3–4 and journeys A–C (local v2 pack; not yet all in git)
- v1 lesson, treated as evidence not orders: first-time readers could press controls and still not know what the site was for (`spec/ai-atlas/08-interaction-contract.md`)

**Locked by human decision (DEC-001 H2):** the primary audience is a curious learner / technology professional who recognizes major AI names but lacks a coherent historical and causal map.

Charter §14 still lists “which audience is primary” as OPEN. **DEC-001 wins.** This document does not re-open H2. It validates learning jobs and the first-visit comprehension bar for that already-chosen reader.

**Not locked here:** the visual Thread mechanic, first public language, capital-layer depth, and any historical relation not yet fact-checked in a v2 story pack.

---

## 1. Product reader, in one sentence

A first-time visitor should be able to pick a name they already know, follow one Story Path, and leave able to say — in their own words — what came before it, what made the next step possible, who was involved, and that the links are inspectable rather than asserted.

That is the public job. The factory job (training agents) is never visible to this reader.

---

## 2. What is locked vs what this draft validates

| Item | Status | Consequence |
|---|---|---|
| Primary audience = curious learner / tech professional | **Locked (H2)** | Language, density, onboarding, and first-screen action are designed for this reader |
| Product unit = Story Path / Focus Path | **Locked (H3)** | First visit succeeds or fails on one path, not on a global graph |
| Exact visual mechanic (Thread vs other) | **Hypothesis** | Must be tested on real flagship content; this file defines the test, not the chrome |
| First three stories | **Locked as M1 subjects (H4)** | Journeys below use these three questions only |
| Intermediate causal edges inside those stories | **Not asserted here** | Research / fact-check own the edges. This file uses product questions, not invented lineage |

---

## 3. Primary audience — validated, not re-chosen

### 3.1 Who they are

They already live in the current AI conversation. They can name ChatGPT, maybe Transformer, NVIDIA, DeepMind, Claude, Llama, DeepSeek. They have fragments: a paper title, a company, a launch date. They do not have a map.

They are not coming to complete a bibliography. They are coming to answer a question they already have, in 5–10 minutes, without being asked to learn an ontology first.

Typical situation (not a psychographic):

- They read a model announcement or a colleague’s take and cannot tell what was actually new.
- They know “GPUs matter” or “Transformers matter” as slogans, not as a sequence of enabling steps.
- They will inspect a source *after* they understand the story, not before.

### 3.2 What they already know vs what they need

| Already know | Do not yet have | Must not be asked to know first |
|---|---|---|
| A handful of famous names and products | Which of those names are ancestors, siblings, or coincidences in time | Entity types, relation enums, confidence codes |
| That 2017 and 2022 were important years for some people | Why a year is not a cause | How the Atlas graph is stored |
| That labs and hardware exist in the background | When compute or data actually changed what was possible | Filter taxonomies, era chips, layer legends |

### 3.3 Success for this reader

After one short visit they can:

1. Say what the site is for (evolution and connection, not a news feed or a catalog).
2. Follow one flagship path without instruction.
3. Retell that path as a short causal sketch, not a date list.
4. Point to where evidence lives, even if they did not open every source.
5. Leave without believing that “later than” means “descended from.”

If they cannot do (1)–(3) in 5–10 minutes, the product has failed this audience regardless of test counts.

---

## 4. Personas

Personas here are **jobs wearing a name**. They are not market segments to “cover.” Secondary personas may use the same paths; they do not get to thicken the first screen.

### 4.1 Primary — Nia, curious technology professional

- **Role:** software / data / product person, roughly 3–15 years in. Uses AI tools at work. Reads technical news in fragments.
- **Recognizes:** ChatGPT, Transformer (as a word), NVIDIA, OpenAI, maybe AlexNet as a lecture slide.
- **Does not have:** a connected story from architecture → product, or from dataset + GPU → field change.
- **Opening question (H4 / PRD journey A):** “Where did ChatGPT come from?”
- **Time budget:** 5–10 minutes on first visit; may return if the first path felt solid.
- **Trust move:** will open one source if the narrative made a sharp claim. Will bounce if the first screen is a control panel.
- **Failure mode:** treating the Atlas as a dashboard. If Home is filters, Nia never starts.

Design for Nia’s first action. Everyone else rides along.

### 4.2 Primary variant — Omar, self-taught curious learner

Same H2 audience, less workplace jargon.

- **Role:** student, career-switcher, or engaged enthusiast. Has watched explainers. Has not read the papers.
- **Opening question:** same as Nia’s, or “Why did AlexNet matter?” if they arrived from a deep-learning course.
- **Need:** plain “why this step changed anything” before names of labs.
- **Risk if ignored:** copy written for reviewers (“successor_of, high confidence”) that Omar cannot use.
- **Risk if over-served:** a kid’s timeline that Nia finds empty.

Omar and Nia share **one** register: technically curious non-specialist. Not two sites.

### 4.3 Secondary — do not drive P0 density

| Persona | Legitimate job | Rule |
|---|---|---|
| **Educator** | Assign one path; show evidence | Path must be readable start-to-end. No classroom mode in v2 P0 |
| **Journalist / analyst** | Check a connection and its source class | Evidence must be one or two actions from a sharp claim. No newsroom CMS |
| **Researcher** | Navigate provenance | Structured sources exist; UI is not an academic database |
| **Advanced enthusiast** | Branch after the first path | Adjacent exploration is JTBD-6, after the first 10 minutes |

Secondary users succeed when the primary path is excellent. They fail the product if they force Home to display every layer.

### 4.4 Anti-personas — do not design the first visit for them

- **Completeness hunter** — wants every paper 1943–present. That is encyclopedia drift (Charter risk).
- **Valuation reader** — wants NVIDIA as a stock story. Capital is an explanatory layer, not the product.
- **Prompt tourist** — wants model tricks and leaderboards. Out of scope (Vision §9).
- **Ontology operator** — wants to browse types and filters. That is author machinery, not the reader’s first action.
- **Machine consumer** — future graph export. Not the public UI target (H2 / Vision §4).

---

## 5. Learning jobs — validated against PRD JTBD

PRD jobs JTBD-1…6 stand. This section ranks them for a **first 5–10 minute visit** versus a longer or return visit. Ranking is a designer validation of the already-written jobs, not a new product.

| ID | Job (reader words) | First 5–10 min | Later in same visit | Return visit |
|---|---|---|---|---|
| **LJ-1 Origins** | “Where did this thing I already know come from?” | **P0** | — | deepen |
| **LJ-2 Transitions** | “Why did this step make the next one possible — not just happen later?” | **P0** | — | compare paths |
| **LJ-3 People & institutions** | “Who and which labs carried this?” | Visible on the path, not a directory | open an entity | follow a person across paths |
| **LJ-4 Infrastructure** | “When did compute, data, or capital change what was possible?” | **P0 on SP04**; contextual on SP01/SP02 | toggle a layer | — |
| **LJ-5 Verify** | “Can I see the source for a sharp claim?” | **Know it is possible**; open one claim if curious | inspect confidence vs interpretation | audit a disputed edge |
| **LJ-6 Adjacent** | “What else is connected without losing this path?” | **Out of the 5–10 min bar** | optional branch | second path |

### 5.1 Jobs that must complete inside 5–10 minutes

On **one** flagship path, the reader can answer:

1. **What is this path’s question?** (example: How did a 2017 architecture become the basis of a mass-market interface?)
2. **What is the recognizable start and the recognizable now?** Anchors the reader already knows — not a tutorial.
3. **What is one enabling step between them, in plain language?** A transition, not a year.
4. **Who or which organization is on that step, if the path needs it?**
5. **Is this stated as documented fact, evidence-backed influence, or editorial reading?** They do not need the full provenance panel, but they must not be tricked.

LJ-6 (adjacent graph) is explicitly **not** a first-visit success criterion. v1 failed by offering two views and no spine.

### 5.2 Jobs this audience does not have

- Count entities.
- Learn the Atlas schema.
- Settle a disputed historical interpretation as “the truth.”
- Compare every frontier lab’s benchmark table.
- Use the site as a real-time feed.

If a screen only serves those jobs, it is not for H2.

---

## 6. Five-to-ten-minute comprehension contract

This is the designer acceptance bar for later UX (docs 09–11) and for editorial samples (doc 05). It is testable with a naive reader and a stopwatch. It is not a layout.

### Minute 0–1 — recognize the product

Without scrolling into a help page, the visitor can say:

> This is about how today’s AI came to be, by following connections — not a list of models and not a search box.

**Fails if:** the first viewport is dominated by search, filters, empty canvas, “nothing selected,” internal type names, or a legend the reader must study before seeing history.

**Passes if:** the first viewport already contains a **meaningful historical action** — enter a real flagship path from a recognizable question — plus enough visible history that the site is not a control panel.

### Minute 1–2 — take the historical action

The visitor chooses one of the H4 entry questions and is inside that Story Path.

M1 entry questions (product questions from the research program; **not** extra historical claims):

| Entry (reader-facing) | Flagship (H4) | Research pack question |
|---|---|---|
| Where did ChatGPT come from? | Transformer → ChatGPT | How did a 2017 architecture become the basis of a mass-market AI interface? (SP01) |
| Why did AlexNet matter? | ImageNet / Hinton / AlexNet / GPU | Why was AlexNet a convergence point rather than merely another image classifier? (SP02) |
| Why is NVIDIA central to AI? | NVIDIA → CUDA → Deep Learning → AI Infrastructure | How did graphics hardware become the infrastructure layer of frontier AI? (SP04) |

At least three such entries are visible. One obvious action starts a path. Search may exist; it must not be the hero.

### Minutes 2–10 — leave with a mental model

The visitor can retell the chosen path in **three beats**:

- **Before** — a recognizable earlier thing.
- **Enabled** — what made the jump possible (idea, data, compute, institution — whichever the path actually uses).
- **After / now** — the thing they already knew.

They can also:

- Move forward and back on the path without losing it.
- Open one milestone’s “why it matters.”
- See that evidence exists for a critical transition.

They are **not** required, in 10 minutes, to:

- Toggle every layer.
- Visit the global timeline as a separate product.
- Recite source IDs.
- Understand entities that are not on the path.

### Exit test (spoken, no UI coaching)

Ask a naive H2 reader, after ≤10 minutes, with no Atlas jargon allowed in the answer:

1. What is this site for?
2. What path did you follow?
3. What came before the thing you already knew?
4. What made the next step possible?
5. If you wanted to check a claim, where would you look?

**Pass:** four of five answers are substantially correct and (4) is not “because it happened later.”  
**Fail:** they describe buttons, tabs, or filters; or they recap a timeline of dates with no enabling step.

This test cannot be run honestly on lorem ipsum. It waits for at least one fact-checked flagship pack. Until then, this contract still governs prototypes: **real verified anchors only**.

---

## 7. Grounding: what may appear in journeys now

Do not invent relations in this document. Until SP01/SP02/SP04 are fact-checked, journeys may use:

**A. Human-locked product questions** — H4 titles and the SP01/SP02/SP04 questions above.

**B. v1 harvest anchors already marked `verified` in `data/atlas.yaml`** (legacy corpus, not v2 path publication). Safe to mention as dated records, not as a complete lineage:

- Transformer paper *Attention Is All You Need*, date precision year `2017` (`ms-attention-is-all-you-need`).
- OpenAI ChatGPT research preview, `2022-11-30` (`ms-chatgpt-preview`).
- GPT-2 described in its primary release text as a successor to GPT and as Transformer-based (`ms-gpt-2-release`).

**C. Gaps** — say so. The v1 corpus was relation-sparse (Charter: 36 entities, 16 relations, 11 orphans). AlexNet / ImageNet / CUDA flywheel **are H4 subjects**, not currently treated here as proven v2 paths. Designers must not draw those edges to make a prettier first screen.

If a prototype needs a step that is not in (A) or (B), stop and wait for research. Filling the path with plausible names is a product defect.

---

## 8. Naive-user journeys (M1)

Exact screens belong to later UX canon. These journeys specify **reader intent, first action, and the 10-minute takeaway**. Mechanic = Story Path / Focus Path; visual Thread remains a hypothesis (H3).

### Journey A — Nia, “Where did ChatGPT come from?”

1. **Lands.** Sees historical substance and three flagship questions, not a blank stage.
2. **Acts.** Chooses the ChatGPT / Transformer path (one control, visible text).
3. **Reads.** Meets a start she can recognize (Transformer, 2017 paper as verified anchor) and an end she already knew (ChatGPT, 30 Nov 2022 preview as verified anchor).
4. **Understands one transition** only if research has accepted it. Until then the prototype may show the two anchors and an honest gap, not a fake chain.
5. **Optional verify.** Opens evidence on one dated claim (e.g. the ChatGPT preview source).
6. **Takeaway she can say:** ChatGPT is a product moment on top of an earlier architecture, not a year that sprang from nowhere — and the site will show which links are sourced.

**10-minute bar:** LJ-1 + LJ-2. LJ-3/4 only if those nodes are on the accepted path. LJ-6 not required.

### Journey B — Omar, “Why did AlexNet matter?”

1. **Lands / acts.** Chooses the ImageNet / AlexNet / GPU question.
2. **Must learn:** this is a **convergence** (people, dataset, compute, result) — PRD journey B — not “a famous CNN shipped.”
3. **Must not be taught yet:** a fully drawn influence graph among every 2012-era lab. H4 names Hinton / ImageNet / AlexNet / GPU as the *subject*. Edges wait for SP02 fact-check.
4. **Takeaway:** “Several conditions met at once” beats “AlexNet is important because it is famous.”

**10-minute bar:** LJ-1 + LJ-2 + enough LJ-3/LJ-4 to make convergence visible **once those relations are accepted**.

### Journey C — Nia, “Why is NVIDIA central to AI?”

1. **Acts** on the compute / CUDA / infrastructure question.
2. **Must learn:** a capability flywheel (hardware → programmable software → research adoption → larger systems), not a price chart.
3. **Must not learn from us:** valuations, unverified capex, or “NVIDIA caused deep learning.”
4. **Takeaway:** infrastructure changed what models could be trained; company fame is a consequence to be evidenced, not the plot.

**10-minute bar:** LJ-4 is P0 *on this path*. LJ-5 still “reachable,” not homework.

### Shared anti-journey (v1 failure, must not return)

Reader arrives → sees Timeline and Lineage (or any two equal views) → clicks filters → “I pressed the buttons and nothing happened.”

That journey is **out of contract**. Two views without a path is not a first action.

---

## 9. First-screen reader contract (spec, not a mock)

For documents 09–11 and any later prototype harness:

1. **First viewport contains history**, not only chrome. A flagship question plus a way into its path is the historical action.
2. **Three H4 entries visible** (ChatGPT / AlexNet / NVIDIA questions). Not four model-family chips from the v1 Thread contract unless H4 is rewritten — it is not. GPT / Claude / Llama / Gemini as the *only* home doors would optimize a 2017–2026 model catalog, which v2 rejected as the product unit.
3. **One primary control** reads as “follow this path” (wording is editorial). Search and layer filters are reachable and visually secondary.
4. **No ontology on the glass.** No `successor_of`, no “0 selected,” no empty graph apology.
5. **Mobile:** the same historical action; a vertical path is acceptable; a constellation of everything is not required.
6. **Story Path is the unit.** Timeline, entity, evidence, search are destinations after the path has been entered, or quiet accessories, not competing homes.

The Sprint 2 Thread lanes (Labs / Models / Foundations) remain a **hypothesis** to test against these journeys when real SP01 content exists. This file neither adopts nor bans that drawing.

---

## 10. Language, density, and progressive disclosure

Implications of H2 for other owners (Editor, later UX). Not an editorial system (that is 05).

| Layer | H2 reader gets | Must stay off the first 10 minutes |
|---|---|---|
| 1 — Picture | Recognizable names, one path question, visible history | Site map, factory status, schema |
| 2 — Path | Before / enabled / who / after in short prose | Every related entity |
| 3 — Entity | Optional open-in-place | Full biography, complete model card |
| 4 — Evidence | One-step reach from a sharp claim; fact vs interpretation | Source-class homework before the story |

Register: educational but not simplistic; technical but readable; evidence-based but not academic in tone (Vision §16). No hype, no reviewer dialect, no marketing superlatives.

RU/EN capability is a system requirement. **First public language is not decided here.** Agent-facing canon stays English (DEC-001).

---

## 11. What other roles must take from this file

| Role | Binding takeaway |
|---|---|
| **Editor (05)** | Write for Nia/Omar on flagship paths. Do not add facts. First sample should survive the spoken exit test in §6 |
| **Researcher / Fact-checker** | M1 packs are SP01, SP02, SP04 because those are the first-visit doors. Gaps stay gaps |
| **IA / UX (09–11)** | Home = historical action into a Story Path. Mechanic unfixed; comprehension contract is fixed |
| **Architect / Coder** | No implementation from this file. H5 still closed |
| **Tester** | Future naive-click / stopwatch tests follow §6 and §8, by visible text, not by `data-testid` |
| **Critic** | May fail a milestone that passes engineering if a naive H2 reader still cannot retell one path |

---

## 12. Acceptance scenarios

These are product-acceptance scenarios for later gates. None require coding now.

### A1 — Audience lock

**Given** DEC-001 H2  
**Then** Home copy, path titles, and first-action labeling are comprehensible to a technically curious non-specialist who already knows “ChatGPT”  
**And** a completeness hunter, trader, or ontology operator is not the implied reader of the first viewport

### A2 — First viewport is a historical action

**Given** a first-time visitor at desktop (~1440×900) and mobile (~390×844)  
**When** the first viewport loads  
**Then** it contains a real H4 path invitation and visible historical substance  
**And** search/filters are not the dominant element  
**And** “nothing selected” is not the most prominent message

### A3 — Ten-minute ChatGPT question

**Given** Nia has ≤10 minutes and no coaching  
**When** she follows “Where did ChatGPT come from?”  
**Then** she can name a before, an enabling step (only if sourced), and ChatGPT as the familiar end  
**And** she does not claim a relation this project has not accepted  
**And** she can indicate where a source would be

### A4 — AlexNet is a convergence, not a trophy

**Given** Omar follows the AlexNet flagship question  
**When** asked why it mattered  
**Then** the answer involves more than one of: people, dataset, compute, result  
**And** not merely “it won a contest once”

### A5 — NVIDIA is infrastructure, not a ticker

**Given** Nia follows the NVIDIA / CUDA question  
**When** asked why NVIDIA is central  
**Then** the answer is about capability / software / adoption / systems  
**And** not about share price

### A6 — Chronology is not causality

**Given** any of A3–A5  
**When** two dated milestones sit on the path  
**Then** the UI and copy do not present “later” as “descended from” unless a typed, sourced relation says so

### A7 — Honest gaps beat pretty paths

**Given** a prototype built before SP packs are accepted  
**Then** it uses only H4 questions plus verified v1 anchors in §7  
**And** missing intermediate edges are labeled as not yet in evidence  
**And** no lorem-ipsum models, people, or influence arrows appear

### A8 — Secondary audiences do not capture Home

**Given** an educator or journalist arrives  
**Then** they can read the same flagship path and reach evidence  
**And** Home still offers Nia’s historical action, not a teaching console or a CMS

---

## 13. Anti-goals

- Do not reopen H2.
- Do not treat Sprint 2’s four model families as the v2 home doors.
- Do not write UI, components, or `src/` against this card.
- Do not invent AlexNet, CUDA, or GPT-family edges to complete a journey.
- Do not optimize for “users who already understand the ontology.”
- Do not make Verify (LJ-5) a wall before Origins (LJ-1).
- Do not make Adjacent (LJ-6) the first screen.

---

## 14. Open items this document deliberately leaves open

| Item | Owner when it closes |
|---|---|
| Exact Focus Path visual mechanic | Designer, after one FC-accepted pack + prototype (H3, H4 UX gate) |
| Editorial voice sample | Editor, 05; human H3 |
| Which intermediate nodes belong on SP01/SP02/SP04 | Research + fact-check |
| First public language | Human / localization contract |
| How much capital sits on SP04 in P0 | PRD residual; not an audience question |
| Analytics for the stopwatch test | Optional; privacy not decided |

---

## 15. Readiness

**Ready for:** editorial system (05) to target this reader; research packs to treat SP01/SP02/SP04 as first-visit doors; later UX to design Home as a historical action.

**Not ready for:** implementation, visual prototype as production UI, or claiming that naive-user tests have been run (they have not; H5 coding is closed and no FC-accepted v2 pack exists yet).

Next sibling documents: `05` editorial system, `06` evidence methodology, then fact-checked story packs before any UX prototype on real content.
