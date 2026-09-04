# 06 — Research & Evidence Methodology

Status: Draft v0.1 · V2-M1 working canon candidate  
Owner: Source Auditor / Fact Checker  
Applies to: Wave 0 corpus audit, foundation research, and Story Path evidence packs

## 1. Purpose and boundary

This document turns the v2 Research Program into a reviewable evidence workflow. It defines:

- source tiers S1–S3;
- the smallest review unit for factual statements (an atomic claim);
- the evidence required before proposing or accepting a typed relation;
- the fact-check verdict vocabulary;
- the Researcher → Fact-checker handoff and return path.

It is a methodology, not an ontology. It does not add entity classes, relation types, publication statuses, or product features. Researchers must use the current approved data/ontology contract for those fields. A relation type that is not approved remains a proposal for ontology review and is not a publishable edge.

The method follows the v2 sequence: research/evidence → fact-check → editorial. The Editor receives accepted evidence and may not use prose to create a new factual claim or graph relation. If a narrative needs a new fact, the packet returns to Research.

## 2. Operating principles

1. Research produces reusable artifacts, not a summary or a list of interesting links.
2. The fact-checker independently reads the cited sources. A Researcher’s summary, confidence, or proposed relation is a lead, not proof.
3. Every critical Story Path transition must be supported by evidence at the level of the transition, not merely by accurate endpoint facts.
4. A date establishes timing only. It does not establish influence, causation, succession, enablement, or intellectual lineage.
5. Source quality and entailment are separate tests. A prestigious source that does not state or support the proposition cannot carry that proposition.
6. Uncertainty is retained. Honest gaps, reservations, and rejected relations are useful outputs and must not be hidden to increase graph density.
7. Exact dates, amounts, status, identity, and scope retain the precision supplied by the evidence. Precision must never be invented.

## 3. Source tiers S1–S3

A source receives one tier in the packet source register. The tier describes the source’s evidentiary role; it does not automatically determine the verdict.

### S1 — Primary authoritative sources

Use S1 first for core technical, release, authorship, organizational, and event claims where a reasonable primary source exists. Examples include:

- original papers, technical reports, and proceedings;
- official model cards, system cards, release notes, and technical documentation;
- official organization announcements or filings;
- university or other institutional pages;
- patents or formal filings where relevant;
- official interviews or transcripts when attributing a statement to a person.

An S1 source is authoritative for what it records or claims. An organization announcement supports the fact that the organization made that announcement; it is not automatically independent proof of a marketing claim about broader impact, superiority, or historical significance.

### S2 — High-quality secondary sources

Use S2 for independent context, synthesis, historical interpretation, and cross-checking. Examples include:

- peer-reviewed historical or technical surveys;
- books by credible domain authors;
- reputable technical journalism with named sourcing;
- well-researched institutional histories.

S2 can support a claim when it directly entails the claim and is appropriate to the subject. For technical lineage, an S2 source should not silently replace an available primary technical source.

### S3 — Discovery and navigation sources

S3 sources help locate stronger evidence or identify terminology and candidate records. Examples include:

- Wikipedia;
- community discussions;
- blogs and social posts;
- aggregators and unsourced summaries.

S3 normally cannot anchor a critical factual transition or a strong directional relation. It may be retained as a discovery locator, a lead, or explicitly attributed context. If no stronger source is available for a non-critical claim, the packet must say so and the fact-checker must decide whether the limitation warrants `accepted_with_reservations` or `needs_more`; S3 is never upgraded by repetition.

### Source register requirements

Each source record should contain, when available:

- stable `source_id`;
- tier and source class;
- author, organization, or publisher;
- title;
- URL, archive locator, or formal identifier;
- publication date and its precision;
- retrieval/access date;
- page, section, timestamp, figure, table, paragraph, or other locator used;
- access limitations, version notes, or translation notes.

A search-result snippet is not a read source. It may be recorded as S3 discovery evidence but cannot substitute for reading the destination page. If a cited source cannot be accessed or independently read, mark the affected item `needs_more` unless another cited source actually supports it.

## 4. Atomic claims

### 4.1 Definition

An atomic claim is one independently checkable proposition. It has one principal assertion and one evidentiary question. It must not bundle multiple events, dates, entities, or causal steps with “and”, “therefore”, or an equivalent compression.

Examples of useful separations:

- “The paper was published in 2017.”
- “The paper describes the Transformer architecture.”
- “The authors report using the architecture for the stated task.”
- “A later system cites or describes use of that architecture.”

The last three statements are not interchangeable. A source supporting the first or second does not, by itself, support influence, succession, or historical importance.

### 4.2 Required claim record

Each claim in a Research packet should have:

| Field | Requirement |
|---|---|
| `claim_id` | Stable packet-local identifier; never reuse it for a changed proposition. |
| `claim_text` | Neutral, atomic statement as it would appear in a fact-check report. |
| `criticality` | Critical or non-critical, with a reason. Critical includes a Story Path question, endpoint, or transition. |
| `subject_ref` / `object_ref` | Existing or proposed entity references when the claim concerns identified records. Do not infer identity from a name alone. |
| `date_or_period` | Date or period only when supported; preserve source precision. |
| `date_precision` | The precision actually supported, not a guessed day or month. |
| `source_ids` | One or more registered sources that are claimed to support this exact statement. |
| `evidence_locators` | Verbatim extract or precise page/section/timestamp locator for each supporting source. |
| `researcher_confidence` | Existing project confidence field, kept separate from the fact-check verdict. |
| `gaps_or_conflicts` | Missing evidence, identity ambiguity, contradictory sources, or scope limits. |
| `proposed_verdict` | Researcher proposal only; the Fact-checker may change it. |
| `fact_checker_verdict` | Authoritative Fact-checker result for this claim, using exactly one vocabulary value from §6; this is distinct from `proposed_verdict` and is populated only after independent review. |
| `fact_checker_reviewed_by` / `fact_checker_reviewed_at` | Required attribution and review date/time for the authoritative verdict; a linked decision record may supplement this audit entry. |

At Researcher handoff, the Fact-checker fields are reserved and may be blank pending independent review. They must be populated before the packet leaves Fact-check; the Researcher must not pre-fill an authoritative verdict or treat `researcher_confidence`/`proposed_verdict` as one.

Claims about “why it matters”, historical significance, or editorial framing must be labeled as interpretation or rationale. They must not be smuggled into a factual claim.

### 4.3 Claim writing tests

Before handoff, the Researcher asks:

- Can a reviewer underline the exact sentence or passage that entails this claim?
- Does the source support the whole claim, or only one clause?
- Are the subject and object unambiguous and correctly identified?
- Is the date no more precise than the source permits?
- Is a causal, influence, or significance statement being presented as if it were a date or release fact?
- Would splitting the sentence produce two different verdicts?

If the answer to the last question is yes, split the claim. If no source entails the rewritten claim, narrow it or record the gap rather than making the source carry more than it says.

## 5. Relation evidence rules

### 5.1 General rule

A relation is a typed assertion about two identified records, not a visual convenience. Every proposed relation must specify:

- `relation_id`;
- `from` and `to` references, with direction;
- a relation type from the approved ontology;
- the exact proposition the edge is intended to express;
- source IDs and precise evidence locators;
- whether the support is direct or an explicitly labeled inference;
- time/scope limitations;
- confidence and proposed status;
- unresolved gaps or competing readings;
- `fact_checker_verdict`, using exactly one value from §6, distinct from proposed status and confidence;
- `fact_checker_reviewed_by` and `fact_checker_reviewed_at`, or a linked decision record that provides equivalent review attribution and date.

At Researcher handoff, these final relation fields are reserved and may be blank pending independent review. They must be populated before the relation is accepted or the packet leaves Fact-check; the Researcher’s proposed status and confidence are not substitutes.

No relation may be accepted from prose alone. The fact-checker must be able to inspect structured evidence attached to the edge. A source may support an entity or milestone claim while failing to support the proposed relation between two entities.

### 5.2 Evidence tests by relation meaning

The relation type controls the evidence test. The methodology does not create new types; the following tests explain what evidence a type must entail when it is present in the approved contract.

- **Authorship, release, or attribution:** the source identifies the responsible person, team, organization, or release event. Do not infer authorship from employment, affiliation, or a company logo.
- **Model-family or successor lineage:** official family naming, a primary technical source, or an independent source with explicit lineage evidence is required. A later date, similar name, shared architecture, or shared benchmark is not enough.
- **Architecture or technique use:** the paper, model/system report, or official technical source must state or technically demonstrate the relevant use. Shared vocabulary is not proof of shared implementation.
- **Influence, mentorship, collaboration, or intellectual transfer:** require explicit attribution, a documented citation or contribution trail, a recorded mentorship/collaboration, or equivalent direct evidence. Working at the same organization is not influence; temporal order is not influence.
- **Technical enablement or dependency:** the evidence must explain the mechanism or documented consequence by which one item made a capability, scale, or workflow possible or materially easier. “Available before” or “used by the industry” is not sufficient.
- **Organizational integration or corporate event:** use an official announcement, filing, or strong independent report appropriate to the event. Distinguish announced, agreed, completed, and reported status; distinguish valuation, transaction price, investment amount, capex, and partnership commitment.
- **Contemporaneity or chronology:** a date may support ordering or overlap only. It cannot be repurposed as a causal, influence, or lineage edge.

If the source itself uses a stronger term than the evidence justifies, quote or attribute the statement narrowly and do not convert it into an independent historical fact. Marketing establishes what the organization said; it does not establish the broader significance of that statement.

### 5.3 Direct support versus editorial inference

A direct relation is one the source states or documents in terms that entail the proposed edge. An editorial inference is a bounded interpretation derived from multiple facts. An inference must:

- be labeled as inference in the packet;
- list every premise claim;
- state the reasoning in a sentence that does not overclaim;
- carry the project’s permitted confidence value;
- remain excluded from a strong published edge when the approved data contract requires direct evidence.

“Clearly labeled inference” does not mean “accepted by default.” If the inference is material to the Story Path, it needs fact-checker approval and an explicit reservation or a narrower factual formulation.

### 5.4 Anti-padding rules

Reject or leave unresolved an edge when it is supported only by:

- shared employer or institutional affiliation;
- a date sequence;
- similar names, branding, or terminology;
- shared architecture without a documented path between records;
- a later model being presumed to be a successor;
- a company’s self-description treated as neutral history;
- a press valuation treated as an official transaction amount;
- a historical analogy treated as a graph fact;
- a need to make the graph look connected.

A missing edge is a valid result. The packet must list expected-but-unproven relations separately from newly proven relations.

## 6. Verdict vocabulary

Verdicts apply independently to each atomic claim and each relation. They are evidence outcomes, not writing-quality scores and not the same as the validated dataset’s internal publication status.

| Verdict | Meaning | Publication implication |
|---|---|---|
| `accepted` | The cited evidence entails the proposition as written; identity, scope, and supported date precision are sound; no material unresolved contradiction remains. | May be used as accepted evidence. |
| `accepted_with_reservations` | The evidence supports the proposition, but a bounded limitation remains, such as source dependence, incomplete scope, imprecise period, attribution limits, or a clearly marked inference. The reservation must be written next to the item. | May be used only with the reservation preserved; never use this to hide a failed critical criterion. |
| `unsupported` | The cited evidence does not entail the proposition, the source is not fit for the proposition, or the proposed relation relies on a forbidden shortcut such as chronology alone. | Do not publish as stated. Narrow, replace, or remove the claim/edge. |
| `disputed` | Two or more credible sources materially conflict on the proposition, and the available evidence does not resolve the conflict. | Do not present one reading as settled; publish only an attributed dispute if the Editorial system explicitly allows it. |
| `needs_more` | The proposition may be plausible, but the packet is incomplete: a source is inaccessible, a locator is missing, identity is unresolved, a critical premise is absent, or the relevant evidence has not yet been independently checked. | Hold for research. This is not a negative finding and must not be silently converted to `accepted`. |

Use `unsupported` when the available evidence fails. Use `needs_more` when the evidence path is incomplete and no reliable negative conclusion can yet be drawn. Use `disputed` only for a real material conflict, not for ordinary uncertainty.

### Packet-level gate

The Fact-checker may return a packet as `accepted` only when every critical claim and critical transition is `accepted`, and non-critical reservations are disclosed. A packet may be `accepted_with_reservations` when all critical items are accepted or accepted with bounded reservations and no critical item is unsupported, disputed, or incomplete. Any critical `unsupported`, `disputed`, or `needs_more` item blocks the relevant Story Path transition and must be returned to Research. Non-critical gaps remain visible in the handoff.

A packet verdict never erases item-level verdicts. The report must preserve the full claim and relation ledger so an Editor can see exactly what is safe to use.

## 7. Researcher → Fact-checker handoff

### 7.1 Required packet contents

The Researcher hands over one bounded packet containing:

1. **Packet header** — packet ID, title, research question, Story Path relevance, scope, exclusions, and blocking dependencies from the Research Program.
2. **Spine** — proposed sequence of milestones or transitions, with the reason each item is included.
3. **Entity candidates** — canonical references, aliases, identity notes, and duplicate/ambiguity warnings.
4. **Source register** — all cited sources with S1–S3 tier, class, locator, access/version notes, and source IDs.
5. **Evidence notes** — verbatim excerpts or exact locators, separated from Researcher interpretation.
6. **Atomic claim ledger** — one row per claim using the fields in section 4.
7. **Relation ledger** — one row per candidate relation using the fields in section 5.
8. **Contradictions and gaps** — expected-but-unproven claims/relations, inaccessible sources, conflicting accounts, unresolved dates, and identity questions.
9. **Technical significance / suggested editorial “why it matters” notes** — the source-bounded interpretation/rationale required by the Research Program’s mandatory “why it matters” output. These notes explain a capability or system consequence in this path without adding a factual claim, new relation, or unsupported significance; they remain explicitly interpretation/rationale rather than Fact-checker verdicts.
10. **Editorial guardrails** — prohibited overstatements, required attribution, reservations, and facts that must not be implied.
11. **Researcher recommendation** — accept, investigate further, or exclude from current scope, with reasons.

The packet is incomplete if it ends in a summary or “interesting links” list without claim-level evidence and relation-level evidence.

### 7.2 Fact-check procedure

The Fact-checker:

1. freezes the packet’s claim and relation identifiers for the review round;
2. reads every cited source independently, beginning with critical transitions;
3. checks that each source ID resolves to the source actually used;
4. verifies source tier and source-to-claim fit;
5. tests the exact entailment of every critical atomic claim;
6. tests the direction, identity, type, and evidence of every proposed relation;
7. preserves supported source wording and date precision without upgrading it;
8. records conflicts, inaccessible sources, and reservations explicitly;
9. assigns one authoritative `fact_checker_verdict` per claim and relation and records the reviewer attribution/date (or linked decision record);
10. returns the packet with a packet-level gate and a list of required rework.

The Fact-checker must not repair a weak claim silently. A repaired/narrowed formulation is a new claim version with a new or clearly superseding identifier and an audit note explaining the change.

### 7.3 Return path

- If evidence is sufficient, the packet moves to Editorial with claims and relations carrying their authoritative Fact-checker verdicts, reservations, source locators, technical significance / suggested “why it matters” notes, prohibited overstatements, and open non-blocking gaps.
- If evidence is incomplete or a claim is too broad, return the affected items to Research rather than asking the Editor to fill the gap.
- If a relation is unsupported, remove it or retain it explicitly as an unproven candidate; never preserve it solely to maintain Story Path connectivity.
- If sources materially conflict, return the dispute with both readings and the exact conflict. The Editor may only write an attributed uncertainty if the product’s editorial rules permit it.
- After rework, the Fact-checker re-reads the changed claims and their cited sources. A new source or changed proposition requires a fresh check.

## 8. Evidence and audit record

A fact-check report should preserve an inspectable chain:

`claim/relation → source_id → exact quote or locator → proposed result → authoritative Fact-checker verdict → reservation/gap → reviewer/date or decision record`

Source IDs must remain stable across Researcher, Fact-checker, Editor, and Data handoffs. The claim and relation ledgers must preserve both the Researcher proposal and the authoritative `fact_checker_verdict`, together with `fact_checker_reviewed_by` and `fact_checker_reviewed_at` (or the linked decision record). The final data layer must preserve source IDs and relation evidence IDs so a reader or reviewer can inspect why an item or edge exists and who/date recorded the verdict.

Do not treat confidence as a verdict. Confidence is the project’s separate estimate of evidentiary strength and should use the existing allowed values; it cannot turn an unsupported relation into a verified one. Likewise, a dataset status such as `candidate`, `verified`, `rejected`, or `needs_review` is a downstream publication/data state, not a substitute for the claim-level verdicts in this methodology.

## 9. Definition of done for an evidence packet

A packet is ready to leave Fact-check when:

- the research question and exclusions are explicit;
- all critical milestones and transitions have atomic claims;
- every source is registered and independently read, or the limitation is recorded;
- dates and date precision are source-bounded;
- every proposed relation has structured evidence and an approved type;
- chronology has not been used as causal or influence evidence;
- unsupported, disputed, and needs-more items are visible;
- reservations and prohibited overstatements are carried forward;
- every claim and relation carries its authoritative `fact_checker_verdict` and review attribution/date or linked decision record;
- the required technical significance / suggested editorial “why it matters” notes are present as source-bounded interpretation/rationale;
- the packet-level verdict is justified by item-level verdicts;
- the Editor can write without introducing a new factual statement;
- the remaining gaps are named and assigned to Research rather than hidden.

This definition of done supports the v2 Research Program’s goal: a defensible Story Path with enough context to teach, without pretending that an accurate list of endpoints proves the path between them.

## 10. Inputs and governing documents

This methodology is derived from and remains subordinate to:

- `docs/v2/DEC-001.md` — H1–H5 decisions and the closed broad-implementation gate;
- `docs/v2/PG-01.md` — planning gate and M1 exit conditions;
- `docs/v2/HERMES-INTAKE-001.md` — required product → evidence → fact-check → editorial sequence;
- `docs/v2/OPERATIONAL-STRATEG-INTAKE-REPORT.md` — v2 role chain and verdict vocabulary;
- `07 — Research Program & Story-Path Backlog v1.docx` in the local v2 pack — research waves, packet outputs, Story Path acceptance contract, and handoff roles;
- the current approved data/ontology contract and its validation rules — entity, relation, confidence, status, source-ID, and date fields.

Where a later human-approved v2 ontology or data contract changes a field or relation type, this methodology continues to govern evidence and entailment while the later canon governs the field vocabulary.
