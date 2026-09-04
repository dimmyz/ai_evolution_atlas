# 08 — Ontology pressure test from real claims

Status: proposed v0.1; architecture and ADR only  
Owner: Architect  
Scope: contract design for V2-M2 claim harvesting. This document does not create, re-verdict, or publish any `data/` records.

## 1. Decision boundary

This pressure test starts with fact-checked source wording, rather than trying to make a connected Story Path. It covers:

- the distinction between GPT as a source-identified model, GPT-2 as a specific release, and an ambiguous generic “GPT” reference;
- InstructGPT as a source-named set of resulting models and ChatGPT as a source-named conversational model;
- the narrow meaning of `uses_architecture`;
- the evidence-backed SP02 and SP04 candidate shapes that require paper, person, dataset subset, software, system, and technology endpoints.

It is subordinate to DEC-001 and to the evidence method. A contract entry permits a relation to be proposed; it does not turn a proposal into a fact. Fact-check remains the authority for claim and relation verdicts, and only validated data may become publishable.

## 2. Inputs that constrain the design

| Pressure case | Established source wording / result | Ontology consequence |
|---|---|---|
| GPT-2 and GPT | `sp01-r01` supports the attributed wording “GPT-2 (a successor to GPT),” but reserves the generic GPT endpoint. | A family label must not silently stand in for a specific release in `successor_of`. |
| GPT-2 and Transformer | `sp01-r02` supports “Transformer-based,” with endpoint/abstraction review still required. | `uses_architecture` needs typed endpoints and must not be rendered as historical descent. |
| InstructGPT | The paper says it fine-tunes GPT-3 and calls the resulting models InstructGPT; the named result is not yet an approved entity. | The contract must represent a source-named model collection without pretending it is one specific release. |
| ChatGPT | The announcement calls ChatGPT a model and calls it “a sibling model to InstructGPT.” | A named model/system can be represented, but “sibling model” remains attributed wording, not a typed edge. |
| SP02 | Fact-check supports paper authorship, a bounded dataset-subset use, and a technical role of an optimized implementation. | Paper, person, dataset subset, and software/technology endpoints need explicit classes. |
| SP04 | Fact-check supports bounded NVIDIA/CUDA/cuDNN/DGX-1 wording but rejects causal/dependency inflation. | Software, hardware system, and component/configuration propositions must not be forced into `enabled_by` or lineage. |

## 3. Proposed ontology modules and ownership

No implementation is authorized by this document. The following module boundaries name the future contract owners and prevent the harvest, validator, and UI from deciding semantics independently.

| Module / proposed file | Owned by | Responsibility | Test seam |
|---|---|---|---|
| `docs/v2/08-ontology-pressure-test.md` | Architect | Vocabulary, endpoint rules, ADR, migration boundary. | Review against fact-check ledgers; no data mutation. |
| `data/schema/atlas.schema.json` | Data-contract implementer | Machine-readable entity/relation enum and endpoint validation shape after this proposal is approved. | Invalid endpoint-pair fixtures rejected by `npm run validate:data`. |
| `src/data/types.ts` | Data-contract implementer | TypeScript mirror of approved schema vocabulary; must remain synchronized with schema. | Compile-time exhaustive maps and relation fixture tests. |
| `src/data/validateAtlas.ts` | Data-contract implementer | Referential integrity plus semantic relation validation, including directionality and endpoint-kind rules. | Unit fixtures per relation rule and error code. |
| `scripts/validate-atlas.ts` | Data-contract implementer | CLI seam that loads canonical data and exposes validator failure. | `npm run validate:data` on valid and deliberately invalid fixture documents. |
| `src/features/lineage/graphModel.ts` | Lineage/UI implementer, after contract approval | Reader labels and display-only semantics; it must consume relation metadata, never infer it. | `src/features/lineage/__tests__/graphModel.test.ts`: `descent` true only for approved descent relations. |

The current schema/types are a legacy baseline: they offer five entity types and broad relation enums, but do not encode endpoint compatibility. This proposal defines the V2 contract target without changing those files in this card.

## 4. Entity contract

### 4.1 Entity classes

Adopt the following classes in the V2 data contract. IDs remain stable opaque identifiers; display names and aliases do not determine identity.

| Entity class | Meaning | Examples from pressure test | Identity rule |
|---|---|---|---|
| `model_release` | A named, bounded model release or specifically identified trained model. | GPT-2; a source-unambiguously identified original GPT. | One record only when source evidence distinguishes the artifact from a family/series. |
| `model_family` | A named family, series, or source-named collection whose members are not one release. | An ambiguous generic “GPT” reference; InstructGPT if the record remains plural/collective. | Never substitute for a `model_release` endpoint merely because names overlap. |
| `model_system` | A named model-facing system/product when source wording identifies a model but does not establish one bounded release artifact. | ChatGPT research preview. | It is not automatically a release, family member, or derivative of another record. |
| `paper` | A published technical work. | *Attention Is All You Need*; AlexNet paper. | Paper identity is bibliographic; it is not an alias for every model described in it. |
| `person` | An identified natural person. | Alex Krizhevsky; Ilya Sutskever; Geoffrey Hinton. | Name collision requires a source-backed identity note. |
| `organization` | An identified organization. | OpenAI; NVIDIA. | Shared branding, employment, or corporate affiliation does not supply other edges. |
| `technology` | A named technical concept, architecture, library, or implementation. Required attribute: `technology_kind` = `architecture`, `library`, `implementation`, `platform`, or `hardware_component`. | Transformer (`architecture`); cuDNN (`library`); optimized 2D convolution (`implementation`); CUDA (`platform`); NVLink (`hardware_component`). | A display-name collision such as CLIP requires an explicit type/identity decision. |
| `dataset_subset` | A bounded dataset/version/subset, not a loose brand name. | LSVRC-2010 ImageNet subset. | Preserve source-bounded version, split, and scope. |
| `hardware_system` | A named assembled hardware system or accelerator configuration. | DGX-1; Tesla P100 when represented as a separately identified component. | Configuration membership is not technical enablement or lineage. |

`entity_type: model` and `entity_type: technology` in the existing baseline are too broad for the pressure cases. The approved migration must replace them with the classes above, rather than adding an unvalidated optional subtype that consumers can ignore.

### 4.2 Canonicalization rules for the GPT/ChatGPT set

1. `model-gpt-2` is a `model_release` candidate.
2. A generic `model-gpt` record must not be assumed to be the original GPT release. Before publication, either:
   - resolve it from source evidence to a specific `model_release`, or
   - replace it with a distinct `model_family` record and retain the original wording as an alias/provenance note.
3. `successor_of` never accepts a `model_family` endpoint. Consequently `sp01-r01` stays an evidence-supported but contract-blocked proposal until the source’s GPT endpoint is resolved.
4. InstructGPT may be represented as a `model_family` only after source-backed identity review records that the collective wording is the intended entity. It is not a proxy for GPT-3.
5. ChatGPT may be represented as a `model_system` after source-backed identity review. This grants no membership, descent, or derivation edge to InstructGPT, GPT-3, GPT-2, or Transformer.
6. “Sibling model” is retained as an attributed claim/evidence note. No `sibling_model`, `same_family_as`, `derived_from`, or symmetric edge is authorized by that phrase alone.

## 5. Relation contract

Each relation record must carry `from`, `to`, `type`, source/evidence identifiers, claim-level fact-check verdict/reference, and downstream publication status. Direction is meaningful unless the table explicitly says symmetric. The existing `confidence` field remains distinct from the verdict and cannot approve an edge.

| Relation type | Allowed endpoints and direction | Evidence minimum | Explicit non-meaning |
|---|---|---|---|
| `successor_of` | `model_release → model_release` | Source explicitly identifies the later release as successor to the earlier release. | Not family membership, chronology, or causal descent of a product/system. |
| `uses_architecture` | `model_release` or `model_system` → `technology(architecture)` | Technical source states or demonstrates architectural use for that exact endpoint. | Not influence, implementation identity, or a path to later models. |
| `fine_tuned_from` | `model_release` or `model_family` → `model_release` | Source explicitly describes the output model/collection as fine-tuned from the named base. | Not a broad successor, product derivation, or ChatGPT relation. |
| `released_by` | `model_release`, `model_system`, `hardware_system`, or `technology` → `organization` | Official release/announcement wording identifies both event and organization. | Not paper authorship or affiliation. |
| `authored_by` | `paper → person` or `paper → organization` | Authorship is present in the paper record. | Not mentorship, influence, employment, or model authorship. |
| `used_by` | `dataset_subset → paper` or `dataset_subset → model_release` | Exact source-bounded usage of that version/subset by the named work or release. | Not causal importance of the whole dataset brand. |
| `technical_enablement` | `technology(implementation)` or `technology(library)` → `paper`, `model_release`, or `hardware_system` | Source describes the specific mechanism materially facilitating the named work. | Not a field-wide consequence or generic association. |
| `introduced_by` | `technology → organization` | Source identifies the organization that introduced the technology. | Not proof the technology enabled later AI systems. |
| `has_component` | `hardware_system → technology(hardware_component)` or `hardware_system → hardware_system` | Configuration/source text lists the component in the system. | Not technical enablement, performance, or lineage. |
| `includes_software` | `hardware_system → technology(library)` or `technology(platform)` | Source lists the exact named software/library in the system configuration. | No inferred standalone CUDA/platform presence when the source names only cuDNN. |

Not adopted: `same_family_as`, `derived_from`, `influenced_by`, `enabled_by`, `integrated_into`, and `contemporary_with` as shortcuts for this harvest. They may be reconsidered only through a new ADR with endpoint rules and direct-evidence tests. Existing legacy occurrences require later migration review; this decision does not validate or rewrite them.

## 6. Architecture behavior and test matrix

The data-contract implementer must encode validation before UI presentation work. Tests use compact fixture documents; they do not require modifying canonical `data/` during contract development.

| Fixture | Expected result | Primary seam |
|---|---|---|
| GPT-2 `successor_of` ambiguous GPT family | Reject endpoint pair with a specific semantic validation issue. | `validateAtlas` unit fixture. |
| Resolved original GPT release and GPT-2 successor wording | Accept only when both endpoints are `model_release` and source/evidence references are present. | `validateAtlas` unit fixture. |
| GPT-2 `uses_architecture` Transformer | Accept only when Transformer is `technology_kind: architecture`; graph marks `descent: false`. | Validator fixture plus `graphModel.test.ts`. |
| ChatGPT ↔ InstructGPT “sibling model” | Reject as an edge with no approved relation type; permit it only in claim/evidence material outside the graph. | Validator fixture. |
| InstructGPT fine-tuned from GPT-3 | Accept only after the source-proposed output is identity-resolved and fact-checked; otherwise reject as unresolved entity semantics. | Validator fixture. |
| AlexNet authorship and LSVRC subset use | Accept `paper → person` `authored_by` and bounded `dataset_subset → paper` `used_by`; reject both person-to-paper `authored_by` and paper-to-dataset-subset `used_by` reversals. | Validator fixture. |
| CUDA introduction attribution | Accept source-bounded `technology → organization` `introduced_by`; reject organization-to-technology reversal. | Validator fixture. |
| DGX-1 configuration | Accept `has_component`/`includes_software` only for the exact listed item; reject a standalone CUDA edge when evidence names only cuDNN. | Validator fixture. |
| UI graph rendering | Every relation keeps label, rationale, evidence IDs, and a display class; only `successor_of` is descent. | `graphModel.test.ts`. |

## 7. ADR-008 — Replace broad legacy model/technology buckets with explicit V2 entity classes and endpoint-validated relations

**Status:** Proposed for human approval.

**Context:** The legacy schema represents GPT, GPT-2, InstructGPT, ChatGPT, Transformer, CUDA, cuDNN, and DGX-1 with broad entity classes and relation enums that lack endpoint constraints. Real fact-check results show that this allows a generic family label to masquerade as a release and creates pressure to convert source wording such as “sibling model” or “CUDA Deep Neural Network library” into causal, lineage, or platform relations.

**Decision:** Adopt the entity classes and relation contract in sections 4–5. Enforce relation direction, endpoint compatibility, evidence linkage, and fact-check outcome in the V2 validator before a relation becomes publishable. Preserve untyped/unsupported wording in research and fact-check artifacts rather than graph data.

**Consequences:**

- The current `model` and `technology` buckets require a reviewed migration map; no bulk automatic reclassification is permitted.
- The existing GPT-2 → generic GPT candidate remains blocked until the GPT endpoint is identity-resolved.
- ChatGPT and InstructGPT can become reviewed entity candidates without manufacturing their connection.
- `uses_architecture` becomes inspectable technical characterization, not a descent/cause signal.
- SP02/SP04 source-bounded configuration and technical-role statements become representable without upgrading them to a field-wide historical story.
- The data validator, TypeScript types, schema, and graph label maps will need synchronized implementation in a future dedicated card; broad implementation remains closed under DEC-001 H5.

**Alternatives rejected:**

1. Keep the current broad `model` and `technology` types and rely on prose conventions. Rejected because validators and UI cannot enforce endpoint semantics.
2. Add `sibling_model` or map it to `same_family_as`. Rejected because the source wording does not establish direction, membership, derivation, or a permitted semantic relation.
3. Treat `uses_architecture` as a lineage edge. Rejected because it overstates source evidence and conflicts with the fact-check guardrails.
4. Encode every plausible AI-history relation now. Rejected: the evidence methodology prohibits vocabulary-driven graph padding.

## 8. Handoff and next-card boundary

Architect has produced the contract proposal and ADR only. No `data/`, website, schema, TypeScript, validator, or UI file is changed by this card.

If approved, follow-up work must be split by ownership:

1. A data-contract card implements the schema/types/validator changes and fixture tests atomically.
2. A research/fact-check sequence resolves each proposed entity and relation from already-read sources; it may not rely on this contract as evidence.
3. A lineage/UI integration card updates labels and display semantics only after the contract and validated data exist.

The acceptance condition for any such implementation is not a connected Story Path. It is that valid, source-grounded statements are representable, invalid endpoint/semantic combinations fail validation, and unresolved source wording remains visibly unresolved.

## 9. Audit record

- Workspace verified before authoring: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_CLONE_2026-08-25`
- Git root verified: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_CLONE_2026-08-25`
- Branch: `v2-bootstrap`
- HEAD observed: `d256c2832e37e4a8bbf61317f9238fa0104d15e1`
- Project marker verified: `.hermes.md` contains `AI Evolution Atlas`.
- Governing inputs read: `docs/v2/06-research-evidence-methodology.md`, `docs/v2/CLAUDE-M1-CHECKPOINT-REVIEW.md`, `docs/v2/PROGRAM-ROADMAP.md`, and `docs/v2/DEC-001.md`.
- Pressure-test inputs read: `docs/v2/rm0-corpus-audit.md`, `docs/v2/story-packs/sp01-factcheck.md`, `docs/v2/story-packs/sp02-factcheck.md`, and `docs/v2/story-packs/sp04-factcheck.md`.
