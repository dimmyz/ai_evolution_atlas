# AIH-17 — Supplementary raw evidence: 2023–2026

## Provenance and scope

- `cwd`: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- `git_root`: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- `head`: `f5d61c02e5c9e7cf08f347be6d82ffadd400ee90`
- Workspace project marker: `AI Evolution Atlas`
- Status: raw research evidence only; this supplement does not create or modify canonical `data/` records.

This supplement applies the S1-primary policy in `spec/ai-atlas/05-research-contract.md`. It rescues four records from `research/batches/2023-2026.md` through directly retrieved official pages, repositories, and technical material, then adds six S1-backed candidates that have an explicitly evidenced connection to existing A/B records. A relation is listed only where the cited source supplies family, predecessor, capability, or technical evidence; chronology is not used as relation evidence.

## Source register

| ID | Class | Publisher / authoring organization | Publication date visible in retrieved material | Title |
|---|---|---|---|---|
| SB17-01 | primary | OpenAI | 2024-05-13 | Hello GPT-4o |
| SB17-02 | primary | Anthropic | 2024-06-21 | Introducing Claude 3.5 Sonnet |
| SB17-03 | primary | DeepSeek-AI | 2024-12-27 | DeepSeek-V3 Technical Report |
| SB17-04 | primary | DeepSeek-AI | 2024 (repository citation) | DeepSeek-V3 repository |
| SB17-05 | primary | DeepSeek | 2025-01-20 (visible release navigation label; URL identifier agrees; report separately retrieved) | DeepSeek-R1 Release |
| SB17-06 | primary | DeepSeek-AI | no publication date asserted in this supplement | DeepSeek-R1 technical report PDF |
| SB17-07 | primary | Google / Google DeepMind | 2023-12-06 | Introducing Gemini: our largest and most capable AI model |
| SB17-08 | primary | Anthropic | 2023-07-11 | Claude 2 |
| SB17-09 | primary | Anthropic | July 2023 | Model Card and Evaluations for Claude Models |
| SB17-10 | primary | OpenAI | 2023-09-25 | ChatGPT can now see, hear, and speak |
| SB17-11 | primary | Qwen Team | 2024-09 (citation metadata) | Qwen2.5: A Party of Foundation Models |
| SB17-12 | primary | xAI | 2023-11-03 | Announcing Grok |
| SB17-13 | primary | Anthropic | 2025-05-22 | Introducing Claude 4 |

## Rescued existing candidates

### B-05 — GPT-4o announcement

- Date + precision: 2024-05-13 (`day`)
- Category: model-system release
- Organization(s): OpenAI
- Archive/original-date result: the current official announcement displays `May 13, 2024`; it also identifies a later `Updated May 8, 2024` risk-scorecard section. The publication header supports the release date; the risk-scorecard update must not replace it.
- Technical-report / system-card result: the release says a system card would follow; this supplement does not treat an unlinked or later card as evidence for the original announcement.
- License/version note: SB17-01 describes staged product/API availability, not model-weight release terms. No weight-license claim is made.
- Neutral summary: OpenAI announced GPT-4o as a model that accepts combinations of text, audio, image, and video and generates text, audio, and image outputs. The announcement says it was trained end-to-end across text, vision, and audio, and that its text and image capabilities were beginning to roll out in ChatGPT while developers could access a text-and-vision API model. [SB17-01]
- Why it might matter: Candidate dated primary record for an OpenAI multimodal model-system release.
- Relation candidates: `same_family_as` B-05 → B-01 (GPT-4 technical report), medium confidence; evidence SB17-01 calls GPT-4o a GPT-4-level model and compares it with GPT-4 Turbo, but does not specify a formal predecessor/successor relation. No directional edge is proposed.
- Unresolved questions: Consolidation should retain the published date and avoid treating current product availability as 2024 availability.
- Confidence: high
- Verification status: verified-ready — official page supplies a day-precise release header and narrow technical/availability claims.

### B-06 — Claude 3.5 Sonnet release

- Date + precision: 2024-06-21 (`day`)
- Category: model release
- Organization(s): Anthropic
- Archive/original-date result: the official page header displays `Jun 21, 2024`; a separate 2025 consumer-terms update is not the release date.
- Technical-report / system-card result: the release links `Model Card Claude 3 Addendum.pdf`; the announcement itself supports the family, availability, context-window, and addendum-link claims used here.
- License/version note: SB17-02 identifies product/API and cloud-provider availability; it does not state model-weight license terms.
- Neutral summary: Anthropic announced Claude 3.5 Sonnet as the first release in the forthcoming Claude 3.5 model family. The announcement says it was available through Claude products and the API and identifies a 200K-token context window. [SB17-02]
- Why it might matter: Candidate day-dated family update with an official model-card addendum link.
- Relation candidates: `same_family_as` B-06 → B-03 (Claude 3 model family), high confidence; SB17-02 explicitly calls Claude 3.5 Sonnet a first release in a new Claude 3.5 family and compares it with Claude 3 Opus, but does not provide a precise directional lineage statement. No `successor_of` relation is asserted.
- Unresolved questions: If the consolidator needs model-card findings beyond the release page, it must retrieve and cite the addendum directly.
- Confidence: high
- Verification status: verified-ready — day date and the retained claims are directly supported by the official announcement.

### B-10 — DeepSeek-V3 technical report

- Date + precision: 2024-12-27 (`day`)
- Category: technical report / repository release
- Organization(s): DeepSeek-AI
- Archive/original-date result: the retrieved arXiv record for *DeepSeek-V3 Technical Report* displays `Published: 2024-12-27` and identifies DeepSeek-AI among its authors. [SB17-03]
- Technical-report / repository result: SB17-04 links the technical-report PDF at arXiv:2412.19437 and its citation block identifies the report as `DeepSeek-V3 Technical Report`, year 2024. SB17-03 supplies the day-precise preprint date.
- License/version note: SB17-04 states the code repository is MIT-licensed; the DeepSeek-V3 Base/Chat models are subject to a separate Model License, and the repository says the series supports commercial use. Do not collapse these distinct terms into “MIT-licensed model.”
- Neutral summary: The report presents DeepSeek-V3 as a mixture-of-experts language model with 671B total parameters and 37B activated per token. It describes Multi-head Latent Attention, DeepSeekMoE, an auxiliary-loss-free load-balancing strategy, and a multi-token prediction objective. [SB17-03][SB17-04]
- Why it might matter: Candidate day-dated technical record for a model report with explicit architecture and distinct code/model reuse terms.
- Relation candidates: `uses_architecture` B-10 → mixture-of-experts, high confidence; SB17-03 explicitly describes DeepSeek-V3 as a mixture-of-experts model. `same_family_as` B-10 → B-11, medium confidence; SB17-04 describes later post-training text involving a DeepSeek R1-series model, but that mutable repository text is insufficient for a directional relation and should not create one.
- Unresolved questions: Use the report PDF/preprint version for technical facts; do not use current repository prose as evidence of a 2024 release-state claim.
- Confidence: high
- Verification status: verified-ready — the primary preprint supplies a day-precise record and technical description; repository terms are separately qualified.

### B-11 — DeepSeek-R1 release

- Date + precision: 2025-01-20 (`day`)
- Category: model release / technical report
- Organization(s): DeepSeek / DeepSeek-AI
- Archive/original-date result: the directly retrieved official page exposes the visible navigation label `DeepSeek-R1 Release 2025/01/20`; its URL is also `news250120`. Retain the day date as official release-page evidence, while preserving that the date is presented in navigation rather than a publication header.
- Technical-report / system-card result: SB17-05 directly links `DeepSeek_R1.pdf`; SB17-06 is the linked primary technical-report PDF, retrieved separately. The release page states that it provides details on large-scale reinforcement learning in post-training. [SB17-05]
- License/version note: SB17-05 states that DeepSeek-R1 code and models are released under the MIT License and separately says the release is MIT licensed. This is a release-page statement, not a general rule for all DeepSeek repositories.
- Neutral summary: DeepSeek’s official release page states that DeepSeek-R1 code and models were released under the MIT License and links a technical report. It describes large-scale reinforcement learning in post-training and identifies an API model name for access. [SB17-05]
- Why it might matter: Candidate reasoning-model release with official release documentation, a linked technical report, and stated reuse terms.
- Relation candidates: None to existing IDs. The retrieved sources do not explicitly describe a relationship between B-11 and existing B-10. SB17-05 does explicitly identify six smaller models as “Distilled from DeepSeek-R1,” but they are not existing A/B endpoints in this supplement.
- Unresolved questions: Before canonical publication, preserve a date-bearing archive/header if a publication-header provenance is required beyond the visible official navigation label.
- Confidence: high for identity, date, license, report link, and technical framing; the date's navigation-label presentation remains qualified.
- Verification status: verified-ready — the official release page supplies a visible day date and linked technical report, while the date presentation is explicitly qualified.

## New candidate evidence records

### BS01 — Gemini 1.0 launch

- Date + precision: 2023-12-06 (`day`)
- Category: model-family announcement
- Organization(s): Google / Google DeepMind
- Neutral summary: Google announced Gemini 1.0 in Ultra, Pro, and Nano sizes. The official announcement says Gemini was built from the ground up to be multimodal and describes it as operating across text, code, audio, image, and video. [SB17-07]
- Why it might matter: Candidate primary launch record for the Google/DeepMind Gemini line in the period after the existing PaLM record A10.
- Relation candidates: None to existing IDs. SB17-07 does not name the existing PaLM record A10 or establish a direct family relationship.
- Unresolved questions: Consolidation should not imply Gemini is formally a direct successor to PaLM without an S1 source that names that relationship.
- Confidence: high
- Verification status: verified-ready

### BS02 — Claude 2 announcement

- Date + precision: 2023-07-11 (`day`)
- Category: model release
- Organization(s): Anthropic
- Neutral summary: Anthropic announced Claude 2 as a new model with API access and a public-facing beta website. Its accompanying model card states that Claude 2 is a general-purpose large language model using a Transformer architecture and trained through unsupervised learning, RLHF, and Constitutional AI. [SB17-08][SB17-09]
- Why it might matter: Candidate predecessor-context record for the existing Claude 3 family milestone B-03, with an official announcement and model-card source.
- Relation candidates: None to existing IDs. SB17-08/SB17-09 do not name the existing Claude 3 record B-03 or establish a directional relationship.
- Unresolved questions: The model card provides July 2023 rather than a day, while SB17-08 supplies the day date.
- Confidence: high
- Verification status: verified-ready

### BS03 — ChatGPT voice and image capabilities (GPT-4V deployment context)

- Date + precision: 2023-09-25 (`day`)
- Category: product capability rollout
- Organization(s): OpenAI
- Neutral summary: OpenAI announced a staged rollout of voice and image capabilities in ChatGPT. The announcement says image understanding was powered by multimodal GPT-3.5 and GPT-4, and that images would become available on all platforms for Plus and Enterprise users. [SB17-10]
- Why it might matter: Candidate distinct S1 deployment event adjacent to the GPT-4 technical report B-01; it represents product rollout rather than a duplicate technical-report milestone.
- Relation candidates: `enabled_by` BS03 → B-01, medium confidence; SB17-10 explicitly says the deployed image understanding uses multimodal GPT-4, while B-01 documents GPT-4. This is source-supported deployment linkage, not chronology.
- Unresolved questions: The announcement refers readers to “GPT-4V(ision) technical work” but the extracted page does not identify a distinct technical-report URL; do not manufacture a separate GPT-4V paper record from that label.
- Confidence: high
- Verification status: verified-ready

### BS04 — Qwen2.5 release

- Date + precision: 2024-09 (`month`)
- Category: model-family release
- Organization(s): Qwen Team
- Neutral summary: The Qwen Team’s release post describes Qwen2.5 language models as pretrained on a dataset of up to 18 trillion tokens and identifies Qwen2.5-14B and Qwen2.5-32B among the updated models. Its citation metadata identifies September 2024. [SB17-11]
- Why it might matter: Candidate S1 record for a Qwen family milestone, selected to add an official-source Qwen line rather than infer one from third-party catalogs.
- Relation candidates: `successor_of` BS04 → Qwen2, high confidence; SB17-11 explicitly frames Qwen2.5 updates in comparison with Qwen2 and says Qwen2.5 maintains compatibility with Qwen2’s template and Qwen-Agent. Consolidation must create/retain an appropriate Qwen2 endpoint before publishing the relation; no relation to an existing A/B ID is claimed because none is evidenced in the current batches.
- Unresolved questions: The retrieved official post supports month, not day, precision. The promised Qwen2.5 technical report was not used because this source says it would be released “very soon.”
- Confidence: high
- Verification status: verified-ready

### BS05 — Grok-1 announcement

- Date + precision: 2023-11-03 (`day`)
- Category: model announcement
- Organization(s): xAI
- Neutral summary: xAI’s official Grok announcement describes the progression from Grok-0 to Grok-1 and reports its evaluation framing using mathematics, knowledge, and code benchmarks. The page labels this material “The journey to Grok-1.” [SB17-12]
- Why it might matter: Candidate S1 record adding an xAI/Grok family line, while limiting claims to the retrieved official description.
- Relation candidates: `successor_of` BS05 (Grok-1) → Grok-0, high confidence; SB17-12 explicitly presents evaluation progression from Grok-0 to Grok-1. This has no connection to an existing A/B record in the current batches, so no existing-ID relation is asserted.
- Unresolved questions: The official page's visible date is `Nov 3, 2023`; preserve that primary page evidence when consolidating. A separate archive is not needed for this raw record's day precision.
- Confidence: high
- Verification status: verified-ready — the official page supplies a visible day-precise publication date, identity, and the stated Grok-0→Grok-1 progression.

### BS06 — Claude 4 announcement

- Date + precision: 2025-05-22 (`day`)
- Category: model-family announcement
- Organization(s): Anthropic
- Neutral summary: Anthropic announced Claude Opus 4 and Claude Sonnet 4 as the next generation of Claude models. The announcement says the models offer near-instant and extended-thinking modes and identifies extended thinking with tool use as a beta capability. [SB17-13]
- Why it might matter: Candidate date-specific S1 record in the 2025 portion of the requested window, with explicit model-family and capability information.
- Relation candidates: None to existing IDs. SB17-13 calls Claude 4 the next generation of Claude models and names Sonnet 3.7, but it does not name the existing B-06 Claude 3.5 Sonnet or B-03 Claude 3 endpoints.
- Unresolved questions: Do not turn the announcement’s performance superlatives into neutral canonical facts. A model-card/technical report would be needed for technical claims beyond the official release description.
- Confidence: high
- Verification status: verified-ready

## Explicit relationship handoff

The following relationship candidates reference existing IDs only where the source provides more than chronology:

| Candidate relation | Confidence | Evidence / publication instruction |
|---|---|---|
| B-05 `same_family_as` B-01 | medium | SB17-01 calls GPT-4o a GPT-4-level model and compares it with GPT-4 Turbo. Preserve as candidate only; no formal directional naming is supplied. |
| B-06 `same_family_as` B-03 | high | SB17-02 identifies Claude 3.5 Sonnet as the first Claude 3.5-family release and discusses Claude 3 Opus. Candidate only because it does not define the exact relationship to the B-03 family record. |
| BS03 `enabled_by` B-01 | medium | SB17-10 explicitly says the image capability rollout is powered by multimodal GPT-4; B-01 is the GPT-4 technical-report milestone. Consolidation must retain the source rationale. |


No relation is proposed merely because two records share an organization or date sequence.

## Rescue and addition summary

| Group | Count | Status |
|---|---:|---|
| Rescued existing records verified-ready | 4 | B-05, B-06, B-10, B-11 |
| New verified-ready records | 6 | BS01, BS02, BS03, BS04, BS05, BS06 |
| New still-candidate records | 0 | None |
| Total verified-ready from this supplement | 10 | 4 rescued + 6 new |

Combined with the 7 verified-ready records in AIH-16 and the earlier reviewed batch material, this supplement makes a 30-or-more verified-ready consolidation plausible, but it does not itself promote raw records into canonical data.

## Sources

- SB17-01 — OpenAI: https://openai.com/index/hello-gpt-4o/
- SB17-02 — Anthropic: https://www.anthropic.com/news/claude-3-5-sonnet
- SB17-03 — arXiv / DeepSeek-AI: https://arxiv.org/abs/2412.19437
- SB17-04 — DeepSeek-AI GitHub repository: https://github.com/deepseek-ai/DeepSeek-V3
- SB17-05 — DeepSeek API documentation: https://api-docs.deepseek.com/news/news250120
- SB17-06 — DeepSeek-AI technical report PDF: https://github.com/deepseek-ai/DeepSeek-R1/blob/main/DeepSeek_R1.pdf
- SB17-07 — Google: https://blog.google/technology/ai/google-gemini-ai/
- SB17-08 — Anthropic: https://www.anthropic.com/news/claude-2
- SB17-09 — Anthropic model card PDF: https://www-cdn.anthropic.com/bd2a28d2535bfb0494cc8e2a3bf135d2e7523226/Model-Card-Claude-2.pdf
- SB17-10 — OpenAI: https://openai.com/index/chatgpt-can-now-see-hear-and-speak/
- SB17-11 — Qwen: https://qwenlm.github.io/blog/qwen2.5/
- SB17-12 — xAI: https://x.ai/news/grok
- SB17-13 — Anthropic: https://www.anthropic.com/news/claude-4
