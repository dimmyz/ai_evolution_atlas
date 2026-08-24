# AIH-01 — Source baseline and research plan

## Workspace evidence

- `cwd`: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- `git_root`: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- `head`: `f5d61c02e5c9e7cf08f347be6d82ffadd400ee90`
- `hermes_project_title_seen`: `AI Evolution Atlas`

This baseline is a planning and provenance document only. It creates no canonical dataset records and makes no unverified historical milestone claims.

## Scope and editorial boundary

- Research window: 2017–2026, with the Transformer era as the entry anchor.
- Target: 30–40 curated milestones, not an exhaustive release list.
- Editorial bands are navigation aids, not objective scientific periodization.
- The product should explain supported lineage and influence without treating chronology as evidence of causation.
- Candidate material is raw evidence until the later consolidation card validates it for canonical `data/`.

## Source hierarchy and publication policy

This plan follows the primary-first policy in `spec/ai-atlas/05-research-contract.md` (§§7–36):

1. **S1 — Primary** — preferred for core facts: “original paper/preprint/proceedings;”, “official lab/company release note;”, “official model/system card;”, and “official technical report/repository.”
2. **S2 — Independent structured research** — used for discovery and cross-checking, including Epoch AI model data/documentation and Stanford HAI AI Index.
3. **S3 — Credible reporting** — used for business/context claims only when primary material is unavailable; not preferred for technical lineage.
4. **S4 — Discovery-only** — search snippets, community posts, generic aggregators, and unsourced family trees may identify leads but cannot by themselves support a publishable claim.

A publishable milestone must have at least one S1 source when a reasonable primary source exists. If it does not, the evidence report must retain a strong S2/S3 source and explicitly state why primary evidence is unavailable. The final displayed text must be a neutral paraphrase and carry source IDs.

## Baseline sources and their intended role

| Source family | Intended role | Limits |
|---|---|---|
| Google Research, “Attention Is All You Need” | Primary origin anchor for the 2017 Transformer milestone; use the paper/proceedings version for claims about the architecture and paper. | Does not itself establish later model-family or causal relations. |
| Official paper, technical report, system card, repository, or release page for each candidate | Default S1 evidence for date, organization, model/system identity, technical description, and any supported relationship. | Release marketing language is not automatically a neutral historical claim; paraphrase narrowly. |
| Epoch AI — Data on AI Models | S2 discovery, timeline orientation, and cross-checking; identify candidates and possible gaps. | Not a substitute for S1 when a reasonable primary source exists; do not import records wholesale. |
| Stanford HAI — AI Index | S2 broad context and trend orientation; useful for cross-checking overall period framing. | Not the sole evidence for individual technical lineage claims. |
| Credible reporting | S3 fallback for business/context facts when primary material is unavailable. | Record the reason primary evidence is unavailable; avoid using it as sole technical-lineage evidence when S1 is reasonably available. |

The spec names the Transformer paper as the primary 2017 anchor and identifies Epoch AI and the Stanford HAI AI Index as useful orientation/cross-check sources (`spec/ai-atlas/05-research-contract.md` §§81–88). They are not sole truth sources.

## Candidate evidence record required in each batch

For every proposed milestone, capture the required fields from `spec/ai-atlas/05-research-contract.md` §§56–68:

- proposed title;
- date and precision;
- category;
- organization(s);
- 1–3 sentence neutral summary;
- why it might be historically significant;
- primary/secondary source IDs;
- relation candidates with evidence notes;
- unresolved questions; and
- confidence.

Dates must not claim day precision unless the source supports it. Candidate milestones should be marked and treated as raw evidence; later consolidation determines canonical IDs and publish status.

## Relationship evidence rules

- `successor_of` needs official family naming or strong primary evidence.
- `uses_architecture` needs a paper, model report, or official technical source.
- `influenced_by` and `enabled_by` require explicit evidence, or a clearly labeled editorial inference with medium/low confidence.
- Mere chronology is insufficient for `influenced_by` or `enabled_by`.
- Avoid unsupported “first ever,” “revolutionary,” “best model,” “changed everything,” and “directly led to” language.

## Research plan

### Batch A — 2017–2022 (`research/batches/2017-2022.*`)

Purpose: establish the Transformer anchor and the transition through scaling and instruction/chat-era foundations while keeping each candidate primary-grounded.

1. Start with the Transformer paper as the 2017 paper/technology anchor.
2. Build an S2 orientation list from Epoch AI and AI Index material, then turn each selected candidate into an S1-first evidence record.
3. Prioritize a balanced set across research publications, model/system releases, open-model activity, and relevant technical concepts rather than only one lab’s releases.
4. For every proposed relation, capture the explicit sentence or official family evidence; leave unsupported links unresolved.
5. Stop adding candidates when the period has a defensible, non-duplicative set; count targets never override evidence quality.

Expected batch-A result: a raw evidence report containing approximately half of the eventual curated milestone target, with source IDs, dates at supported precision, and relation candidates separated from verified relations.

### Batch B — 2023–2026 (`research/batches/2023-2026.*`)

Purpose: cover the later period without turning current-release velocity into a weakly sourced chronology.

1. Use Epoch AI and Stanford HAI AI Index only to orient coverage and identify gaps; verify each selected candidate through the relevant official report, system card, repository, paper, or release material.
2. Balance open foundation models, multimodality, reasoning, and agents/tool-use developments according to available evidence rather than assigning predetermined winners.
3. Apply extra caution to recent and evolving claims: record publication/release date, accessed date during consolidation, source version where visible, and unresolved questions.
4. Keep business/context claims distinct from technical lineage claims; use S3 only under the fallback policy.
5. Treat 2026 candidates as provisional until their source material is checked in the batch and later consolidation.

Expected batch-B result: a raw evidence report covering the later half of the timeline, including only candidates with traceable source records and explicit evidence notes for any proposed relationships.

## Handoff to consolidation

The batch reports should give the later consolidation card enough information to create machine-validatable source, entity, milestone, and relation records without guessing. Consolidation must reject or keep as `needs_review` any candidate lacking required source support, a supported date precision, or evidence for a directional relation.

## Canon references

- `spec/ai-atlas/00-charter.md` — purpose and non-goals.
- `spec/ai-atlas/01-scope.md` — 2017–2026 boundary and 30–40 target.
- `spec/ai-atlas/03-information-architecture.md` — relation vocabulary and chronology rule.
- `spec/ai-atlas/04-data-contract.md` — source/milestone/relation minimums and date precision.
- `spec/ai-atlas/05-research-contract.md` — source tiers, publish rule, relationship rule, raw-evidence discipline, and anti-hype policy.
