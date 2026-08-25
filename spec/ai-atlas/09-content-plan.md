# 09 — Content and Research Plan (Sprint 2)

Status: proposed canon for Sprint 2.

## Measured starting position

Counted directly from `data/atlas.yaml` on 2026-08-25:

| Quantity | Value |
|---|---:|
| Sources | 36 (all `primary`) |
| Entities | 36 — 13 organizations, 20 models, 3 technologies |
| Milestones | 36 (all with ≥1 primary source; none with 2) |
| Relations | **16** |
| `released_by` | 8 (50% of all relations) |
| `uses_architecture` | 5 |
| `successor_of` | **1** |
| `same_family_as` | 1 |
| `authored_by` | 1 |
| Entities with **zero** relations | **11 of 36 (31%)** |
| Entities with degree 1 | 20 |
| **Maximum degree in the entire graph** | **3** |

Disconnected organizations: Google DeepMind, Mistral AI, GitHub, Facebook AI Research, CompVis, Tri Dao et al., Qwen Team.
Disconnected models: GPT-4o, Claude 3.5 Sonnet, Llama 3.1 405B. Disconnected technology: CLIP.

**Diagnosis: the bottleneck is relations, not milestones.** 36 milestones is an adequate Sprint-1 corpus. Do not rush to add 30 more facts while the existing 36 remain unconnected.

---

## Campaign 0 — Harvest (no new sources required)

**This is the highest-return work available and it should run first.**

12 of 20 models have **no `released_by` relation** — yet every one of them already has a milestone in this atlas whose cited primary source explicitly names the releasing organization. The evidence is already in the repository. It was simply never extracted into the relations table.

Models currently missing `released_by`: GPT, GPT-2, GPT-3, Codex, CLIP, DALL·E 2, PaLM, T5, GPT-4o, Claude 3.5 Sonnet, Llama 3.1 405B, DeepSeek-V3.

### Task

Re-read the **36 sources already cited in the atlas** and extract every relation those sources already prove. Add nothing that requires a source not already in `data/atlas.yaml`.

Expected yield by type:

| Type | Expected addition | Basis |
|---|---:|---|
| `released_by` | +12 | each model's existing milestone source names the lab |
| `successor_of` | +6 to +9 | official family naming in already-cited release notes |
| `uses_architecture` | +4 to +8 | already-cited papers state the architecture |
| `authored_by` | +3 to +5 | paper sources name the authoring organization |

**Realistic outcome: 16 → 40–50 relations, with zero new research and zero weakening of the source contract.**

### Hard rules (unchanged)

- Every relation carries `evidence_source_ids`, `confidence`, `rationale`, `status`.
- `successor_of` only on official family naming or explicit primary statement. "Released later" is not succession.
- If a source does not actually prove the relation, **do not add it.** Report the gap; it becomes Campaign 1 input.

### Definition of done

- Relation count reported with per-type breakdown.
- Every added relation traceable to a source ID already present before the card started.
- A written list of relations that were *expected but not provable* from existing sources.

---

## Campaign 1 — The four backbone lines

**Goal: make the four principal families readable as unbroken threads**, since the Thread mechanic (`08-interaction-contract.md`) is only as good as its longest chain.

| Line | Present entities | Needed |
|---|---|---|
| **OpenAI / GPT** | GPT, GPT-2, GPT-3, Codex, GPT-4, GPT-4o | unbroken `successor_of` chain 2018→2024; Codex tied to GPT-3 |
| **Anthropic / Claude** | Claude 2, Claude 3, Claude 3.5 Sonnet, Claude 4 | unbroken chain 2023→2025 |
| **Meta / Llama** | Llama 3, Llama 3.1 405B | chain + the missing earlier Llama generations |
| **Google + DeepMind** | T5, PaLM, Gemini 1.0 | **currently the weakest — Google DeepMind has 3 milestones and degree 0.** Connect Gemini and AlphaFold to DeepMind |

Only after Campaign 0 reports its unprovable list does this campaign know what to research. Source tiers per `05-research-contract.md` are unchanged: S1 preferred — model cards, official release notes, technical reports.

**Target: every backbone family has a chain of at least 3 links.**

---

## Campaign 2 — Reconnect the orphans

Seven organizations and four entities currently have no relation at all. Each needs either a connecting relation or a small number of connecting entities.

Specific, bounded work:

- **Mistral AI** — add the Mistral 7B model entity; tie to its existing milestone.
- **Qwen Team** — add the Qwen2.5 model entity; tie to its existing milestone.
- **GitHub** — tie Copilot to Codex (`uses_architecture` or the relation the source actually supports).
- **Facebook AI Research** — tie to the RAG paper already in the atlas.
- **CompVis** — tie to Latent Diffusion.
- **Tri Dao et al.** — tie FlashAttention to Transformer.
- **CLIP (technology)** — currently orphaned while CLIP (model) is connected; resolve the duplicate-name modelling problem explicitly.

Note the CLIP duplication: "CLIP" exists as both a model and a technology. Decide which it is, or disambiguate both in the UI. Right now it appears twice in the results list with no way to tell them apart.

---

## Campaign 3 — Editorial voice

**This is a separate skill from research and needs a separate role.** See `docs/reports/SPRINT-02-BRIEF.md`.

`why_it_matters` is currently written as dataset-intake justification for a reviewer, not prose for a reader:

- GPT-3 → *"Primary record for a large-language-model candidate in the period."*
- CLIP → *"Dated primary-source multimodal model record."*
- Transformer → *"Anchor for the selected Transformer-era timeline."*

The vocabulary — *record, candidate, dated, primary-source* — explains why the row qualified for the spreadsheet, never what happened or why it mattered.

### Task

Rewrite all 36 `why_it_matters` fields as **reader-facing prose grounded strictly in that milestone's already-cited source**. One to two sentences. No new claims, no hype vocabulary (`05-research-contract.md` anti-hype policy still applies in full).

Also rewrite the ~3 bibliographic `summary` fields (Transformer, GPT-3, DeepSeek-R1) which currently state the paper's title instead of what the paper did.

Additionally write **four era introductions** (60–90 words each) for the existing editorial era bands.

**This is the single highest-leverage change available to the product.** The container is well built; it has no voice.

---

## Campaign 4 — New milestones (deliberately last)

Only after Campaigns 0–2 should new milestones be researched. Target **+8 to +12**, chosen specifically to close gaps in the four backbone threads — not to raise the headline count.

Candidates worth evaluating: earlier Llama generations, intermediate Gemini releases, Stable Diffusion, Whisper, AlphaGo/AlphaZero as pre-2017 context, Mixtral, additional 2025–2026 reasoning and agentic releases.

**Rule: a new milestone is only worth adding if it also adds a relation.** Isolated facts made the current graph sparse; do not repeat that.

---

## Campaign 5 — Russian localization

See `10-localization-contract.md`. Runs after Campaign 3, because translating placeholder editorial text wastes the translation effort.

---

## Sequencing

```
Campaign 0 (harvest)  ──►  Campaign 1 (backbone)  ──►  Campaign 2 (orphans)
        │                                                      │
        └──────────────►  Campaign 3 (editorial)  ◄────────────┘
                                   │
                                   ├──►  Campaign 4 (new milestones)
                                   └──►  Campaign 5 (Russian)
```

Campaign 0 is the unblocker. Nothing in the interaction contract can be built or judged before it lands.

## Anti-goals

- Do not invent relations from chronology.
- Do not pad the relation count to hit a target number. If 40 is not provable, report 31 and escalate to Strateg.
- Do not lower the primary-source standard to accelerate any campaign.
- Do not add milestones to raise a headline count.

<!-- canon gate test: an agent attempting to touch canon -->
