# 05 — Research Contract

## Goal

Create a compact, defensible historical dataset — not an LLM-written mythology of AI.

## Source tiers

### S1 — Primary
Preferred for core facts:
- original paper/preprint/proceedings;
- official lab/company release note;
- official model/system card;
- official technical report/repository.

### S2 — Independent structured research
Good for discovery/cross-check:
- Epoch AI model data/documentation;
- Stanford HAI AI Index;
- equivalent transparent research datasets/reports.

### S3 — Credible reporting
Use for business/context claims when primary material is unavailable.
Not preferred for technical lineage.

### S4 — Discovery-only
Search snippets, community posts, generic aggregators, unsourced family trees.
May identify leads but may not alone support a publishable claim.

## Publish rule

Each publishable milestone requires:
- at least one S1 source where a reasonable primary source exists;
- otherwise at least one strong S2/S3 source with an explicit reason primary evidence is unavailable;
- neutral paraphrase;
- citation IDs attached to the item.

## Relationship rule

`successor_of`:
- official family naming or strong primary evidence.

`uses_architecture`:
- paper/model report/official technical source.

`influenced_by` / `enabled_by`:
- explicit evidence or clearly labeled editorial inference with medium/low confidence.
- mere chronology is insufficient.

## Researcher output discipline

Research cards first write **raw evidence reports** under `research/batches/`.
They do not directly mutate shared canonical data in parallel unless Orchestrator grants exclusive ownership.
A later consolidation card produces the validated dataset.

## Required evidence per candidate

For every candidate milestone, capture:
- proposed title;
- date + precision;
- category;
- organization(s);
- 1–3 sentence neutral summary;
- why it might be historically significant;
- primary/secondary source IDs;
- relation candidates with evidence notes;
- unresolved questions;
- confidence.

## Anti-hype policy

Avoid unsourced claims such as:
- “first ever”;
- “revolutionary”;
- “best model”;
- “changed everything”;
- “directly led to X”.

These require evidence or more cautious language.

## Suggested source baseline discovered before kickoff

- **Epoch AI — Data on AI Models**: large, actively maintained model database; useful as a discovery/cross-check source and reusable under CC BY with attribution.
- **Stanford HAI — AI Index 2026**: independent broad context and technical-progress synthesis.
- **Google Research — Attention Is All You Need**: primary anchor for the 2017 Transformer milestone.
- Official OpenAI, Anthropic, Google/DeepMind, Meta, Mistral, DeepSeek, xAI, Alibaba/Qwen and other lab release pages/system cards for individual milestones.

The Researcher should still verify each item rather than importing an aggregator wholesale.
