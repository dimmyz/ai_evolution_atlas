# RM0 corpus audit and relation harvest

Status: discovery/research note — not publishable v2 data

## Scope and method

This audit reads the legacy corpus at `data/atlas.yaml` without changing it. It follows DEC-001 H5 and PG-01: research and relation harvesting are authorized; broad implementation and publication are not. It evaluates only assertions carried by the cited primary sources already listed in that file. A relation below is a harvest candidate, not a v2 graph insertion.

Preflight evidence:

- Workspace: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_CLONE_2026-08-25`
- Git root: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_CLONE_2026-08-25`
- Branch: `v2-bootstrap`
- HEAD: `631a18e6f05b11f335b2a82e4d2185683f831e69`
- `.hermes.md` confirms `AI Evolution Atlas`.

Corpus inventory (counted from `data/atlas.yaml`): 36 sources, 36 entities, 36 milestones, and 16 explicit relations. All 36 sources are labelled `primary` in the corpus. The corpus is a v1 harvest source, not v2 publishable data.

## Source re-read record

All 36 cited URLs were requested on 2026-08-25 without web search. The following is a complete, disjoint result ledger for the re-read attempts: 30 sources returned extractable content at least once and 6 did not. `unreadable` is an access/tool limitation, not evidence that the source is absent. No new relation assertion relies on an `unreadable` source.

| Source ID | Status | Access note |
| --- | --- | --- |
| `src-a01` | `unreadable` | Extractor returned HTTP 403. |
| `src-a02` | `unreadable` | Extractor returned HTTP 403. |
| `src-a03` | `read` | Extracted page content in a successful re-read; later retry returned HTTP 403. |
| `src-a04` | `read` | Extracted page content in a successful re-read; later retry returned HTTP 403. |
| `src-a05` | `unreadable` | Extractor returned HTTP 403. |
| `src-a06` | `read` | Extracted page content. |
| `src-a07` | `read` | Extracted page content. |
| `src-a08` | `read` | Extracted page content. |
| `src-a09` | `read` | Extracted page content. |
| `src-a10` | `read` | Extracted page content. |
| `src-a11` | `unreadable` | Extractor returned an unrecognized backend response. |
| `src-a12` | `read` | Extracted page content. |
| `src-a13` | `read` | Extracted page content. |
| `src-a14` | `read` | Extracted page content. |
| `src-a15` | `read` | Extracted page content. |
| `src-as01` | `read` | Extracted PDF text. |
| `src-as02` | `read` | Extracted page content. |
| `src-as03` | `read` | Extracted page content. |
| `src-as04` | `read` | Extracted page content. |
| `src-as05` | `read` | Extracted page content. |
| `src-b01` | `read` | Extracted page content. |
| `src-b02` | `read` | Extracted page content. |
| `src-b03` | `read` | Extracted page content. |
| `src-b04` | `read` | Extracted page content. |
| `src-b05` | `read` | Extracted page content. |
| `src-b06` | `read` | Extracted page content in a successful re-read; later retry returned HTTP 403. |
| `src-b07` | `read` | Extracted page content in a successful re-read; later retry returned HTTP 403. |
| `src-b09` | `unreadable` | Extractor returned HTTP 403. |
| `src-b10` | `read` | Extracted page content in a successful re-read; later retry returned HTTP 403. |
| `src-b11` | `unreadable` | Extractor returned HTTP 403. |
| `src-bs01` | `read` | Extracted page content. |
| `src-bs02` | `read` | Extracted page content. |
| `src-bs03` | `read` | Extracted page content. |
| `src-bs04` | `read` | Extracted page content. |
| `src-bs05` | `read` | Extracted page content. |
| `src-bs06` | `read` | Extracted page content. |

## Existing explicit relations: audit result

The 16 stored relations are internally well-formed: every endpoint is present in the entity list, every cited `evidence_source_id` is present in the source list, and no relation duplicates another exact `(from, to, type)` triple.

| Relation class | Count | Existing evidence-source IDs |
| --- | ---: | --- |
| `successor_of` | 1 | `src-as02` |
| `same_family_as` | 1 | `src-as03` |
| `uses_architecture` | 5 | `src-a13`, `src-a10`, `src-a03`, `src-b01`, `src-b10` |
| `authored_by` | 1 | `src-a03` |
| `released_by` | 8 | `src-b01`, `src-b03`, `src-b04`, `src-b11`, `src-bs01`, `src-bs02`, `src-bs05`, `src-bs06` |

The table count is by relation record; an evidence source can support more than one record. `src-bs06` supports the Claude 4 record and is included in the eight `released_by` records.

## Campaign 0 `released_by` harvest ledger

The legacy Campaign 0 list names 12 models missing `released_by`. This ledger preserves all 12 rather than silently treating paper authorship, a publisher field, or a co-occurring milestone entity as a release event. “Direct” means the quoted source wording identifies the release/launch and the organization; `needs_more` means the source may support a narrower attribution relation but the retained evidence does not establish this exact predicate. Quotes are verbatim from the re-read source; paragraph/section names are locators, not additional evidence.

| Relation ID and proposition | Source and precise locator | Evidence excerpt / access result | Support and verdict |
| --- | --- | --- | --- |
| `rm0-rel-01`: `model-gpt released_by org-openai` | `src-as01`, PDF front matter, before “Abstract” | “Alec Radford  OpenAI”; the front matter likewise labels Karthik Narasimhan, Tim Salimans, and Ilya Sutskever “OpenAI.” | Direct organizational authorship is inspectable, but no release event is stated. `needs_more` for `released_by`; do not substitute `authored_by` without ontology approval. |
| `rm0-rel-02`: `model-gpt-2 released_by org-openai` | `src-as02`, opening body paragraph | “Our model, called GPT‑2 (a successor to GPT‑), was trained…” and “we are instead releasing a much smaller model…” The page title is “Better language models and their implications \| OpenAI.” | Direct official release wording and publisher identity. `accepted`. |
| `rm0-rel-03`: `model-gpt-3 released_by org-openai` | `src-a04`, source page | The source returned content, but the retained extraction did not expose an inspectable release statement naming OpenAI. | `needs_more`; a paper title, publisher field, and milestone co-occurrence do not by themselves prove `released_by`. |
| `rm0-rel-04`: `model-codex released_by org-openai` | `src-as03`, abstract and author-affiliation block | “We introduce Codex, a GPT language model fine tuned on publicly available code from GitHub…” The author-affiliation block says “1OpenAI, San Francisco, California, USA.” | The excerpt identifies Codex and organizational authorship, not a release event. `needs_more` for `released_by`. |
| `rm0-rel-05`: `model-clip released_by org-openai` | `src-a07`, arXiv abstract-page body | “We release our code and pre-trained model weights at this https URL.” | The excerpt records a release but does not itself name OpenAI in the retrieved passage. `needs_more` for this exact organization predicate. |
| `rm0-rel-06`: `model-dall-e-2 released_by org-openai` | `src-a13`, arXiv abstract | “we propose a two-stage model: a prior that generates a CLIP image embedding given a text caption, and a decoder that generates an image conditioned on the image embedding.” | The excerpt supports the existing CLIP dependency, not a DALL·E 2 release by OpenAI. `needs_more`. |
| `rm0-rel-07`: `model-palm released_by org-google` | `src-a10`, abstract | “we trained a 540-billion parameter, densely activated, Transformer language model, which we call Pathways Language Model PaLM.” | The excerpt identifies PaLM but not Google Research or a release event. `needs_more`. |
| `rm0-rel-08`: `model-t5 released_by org-google` | `src-a03`, source page | The source returned content, but no release statement naming Google Research was exposed. The existing `model-t5 authored_by org-google` record cites this paper; its rationale is “Google Research authored the T5 paper.” | `unsupported` as `released_by`: the existing evidence/rationale is expressly authorship of a paper, not a release event. Retain the existing `authored_by` record; do not create a duplicate provenance edge under a different predicate. |
| `rm0-rel-09`: `model-gpt-4o released_by org-openai` | `src-b05`, title and opening sentence | “Hello GPT‑4o” and “We’re announcing GPT‑4o, our new flagship model…” | Direct official announcement by the organization identified in the page title/domain. `accepted`. |
| `rm0-rel-10`: `model-claude-35-sonnet released_by org-anthropic` | `src-b06`, opening body paragraph | “Today, we’re launching Claude 3.5 Sonnet—our first release in the forthcoming Claude 3.5 model family.” The page is an Anthropic news page. | Direct official launch wording and source identity. `accepted`. |
| `rm0-rel-11`: `model-llama-31-405b released_by org-meta` | `src-b07`, “Takeaways” paragraph | “We’re publicly releasing Meta Llama 3.1 405B…” | Direct official release wording and organization named in the sentence. `accepted`. |
| `rm0-rel-12`: `model-deepseek-v3 released_by org-deepseek` | `src-b10`, source page and experimental HTML view | A separate HTML read exposed “The model checkpoints are available at https://github.com/deepseek-ai/DeepSeek-V3 .” but did not expose a release statement naming the responsible organization. | `needs_more`; availability of checkpoints and the repository namespace do not by themselves establish the `released_by` predicate. |

Only `rm0-rel-02`, `rm0-rel-09`, `rm0-rel-10`, and `rm0-rel-11` meet the packet’s direct-evidence test. They remain candidate relations pending v2 ontology/data-contract approval; none is written to `data/`.

## Orphans and sparse areas

### Relation-graph orphans

These entities have no endpoint in the 16 explicit relation records: `org-deepmind`, `org-mistral`, `org-github`, `org-facebook-ai`, `org-compvis`, `org-tri-dao`, `org-qwen`, `tech-clip`, `model-gpt-4o`, `model-claude-35-sonnet`, and `model-llama-31-405b`.

The four accepted candidates above would reduce the three named model orphans and add a relation for GPT-2. The remaining organizations require a relation tied to a model or technology entity that exists in the corpus; do not connect them merely because a milestone cites them.

### Milestone/entity coverage gaps

- `ms-bert-release`, `ms-rag-paper`, `ms-alphafold-casp14`, `ms-chain-of-thought-paper`, `ms-flashattention-paper`, `ms-latent-diffusion-paper`, `ms-mistral-7b-release`, `ms-github-copilot-ga`, `ms-chatgpt-preview`, `ms-openai-o1-preview`, and `ms-qwen25-release` lack a named model or technology entity matching their primary subject.
- `ms-chatgpt-preview` identifies only `org-openai`; therefore no ChatGPT model entity or ChatGPT-to-InstructGPT relation may be inferred from the current graph.
- The H3 flagship paths include ImageNet / Hinton / AlexNet / GPU and NVIDIA / CUDA / Deep Learning / AI Infrastructure, but none of those named entities or transitions appears in the legacy corpus. RM0 cannot represent those two paths from this dataset.

## Duplicates and modelling collisions

1. `model-clip` and `tech-clip` have the identical display name, “CLIP,” and overlapping source coverage. They are different types, so this is not an exact duplicate, but it needs a v2 identity policy before rendering or relation generation.
2. `org-google` is named “Google Research,” while `org-deepmind` is named “Google DeepMind.” Their distinct identities are not a duplicate, but the corpus contains no relationship explaining the organizational connection.
3. `model-gpt` is a generic family label while `model-gpt-2`, `model-gpt-3`, and `model-gpt-4` are specific releases. The sole family relation is `model-gpt-2 successor_of model-gpt`; the direction and level-of-abstraction choice needs v2 ontology review before extending the family chain.
4. The same provenance intent is represented both as `authored_by` (T5) and `released_by` (several models). The T5 verdict above demonstrates why the predicates must not be treated as interchangeable.

## Expected but unproven relations — excluded

The following are plausible to a reader but not harvested because the current source record does not directly establish the stated edge or a required endpoint is missing:

- GPT-3 `successor_of` GPT-2; the corpus cites separate GPT-2 and GPT-3 sources but no direct lineage assertion.
- GPT-4o `successor_of` GPT-4; the GPT-4o announcement identifies GPT-4o but does not, in the stored evidence, define it as a successor of GPT-4.
- Claude 3.5 Sonnet `successor_of` Claude 3 and Claude 4 `successor_of` Claude 3.5 Sonnet; the existing sources establish releases, not a precise model-to-model lineage edge in the retained corpus evidence.
- Llama 3.1 405B `successor_of` Llama 3; the re-read release announcement does not state that exact model-to-model lineage proposition.
- ChatGPT `derived_from` InstructGPT or GPT-3; no ChatGPT entity exists and the source summary does not supply that relation.
- GitHub Copilot `uses_model` Codex; the release milestone attaches `model-codex`, but the stored summary says only that Copilot reached general availability.
- DALL·E 2 `uses_architecture` Transformer; the retained source directly supports its CLIP embedding dependency, not this broader architecture claim.
- Imagen `uses_model` T5; the milestone summary says Imagen uses a large language model to encode text and attaches T5, but no explicit `uses_model` relation or source rationale is stored.
- Gemini 1.0 `released_by` Google DeepMind; the existing relation is to `org-google`; the corpus has no provenance rule or relation rationale resolving the two organizations.

## RM0 conclusion

The corpus is sufficient for a limited Transformer-to-ChatGPT research starting point, subject to evidence-methodology normalization and the explicit gaps above. It cannot supply the ImageNet / Hinton / AlexNet / GPU or NVIDIA / CUDA / Deep Learning / AI Infrastructure flagship paths. Preserve the four direct relation candidates as review notes only; do not write them into `data/` or present them as v2 facts.