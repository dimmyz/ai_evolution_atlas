# Harvest fact-check — SP01 / SP02 / SP04 claim proposals

Status: Fact-check result — not reader-facing copy; not publishable v2 data  
Fact-checker: `fact-checker`  
Fact-checked at: `2026-08-26T14:21:23+03:00`  
Input packets: `sp01-harvest.md`, `sp02-harvest.md`, `sp04-harvest.md`

## 1. Review scope and packet verdict

The Fact-checker independently re-read each cited source named by the three harvest packets. Researcher excerpts, confidence values, and proposed verdicts were treated as leads only. Verdicts below use exactly the canon vocabulary: `accepted`, `accepted_with_reservations`, `unsupported`, `disputed`, or `needs_more`.

**Harvest verdict: `accepted_with_reservations`.** Every submitted atomic claim is supported at its stated source and locator, with bounded reservations retained where the source is vendor-authored, where a source title conflicts with its URL slug, or where a cross-source comparison must not be upgraded into a ranking claim. The harvest submits no typed relation and does not establish a connected Story Path, causal transition, influence, dependency, succession, adoption, or field-wide consequence. The accepted items below are source-bounded evidence only; they do not authorize reader-facing connected narrative or publishable graph edges.

## 2. Independent source re-read

| Source ID | Source | Independent read result | Review evidence / limitation |
|---|---|---|---|
| `src-as01` | [Improving Language Understanding by Generative Pre-Training](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf) | `read` | PDF text was retrieved and checked at the abstract, §3.1 “Unsupervised pre-training,” and the model-architecture passage. |
| `src-a04` | [Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165) | `read` | The arXiv record/abstract and the paper PDF §2.1 “Model and Architectures” were independently retrieved. |
| `src-a08` | [Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155) | `read` | The arXiv record and abstract were independently retrieved and checked at the supervised fine-tuning and InstructGPT statements. |
| `SP02-S02` | [ImageNet Classification with Deep Convolutional Neural Networks](https://proceedings.neurips.cc/paper_files/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf) | `read` | Proceedings PDF was independently retrieved and checked at the abstract and §1 passages on GPU implementation and training hardware. |
| `SP02-S03` | [CUDA Toolkit 1.1 (December 2007)](https://developer.nvidia.com/content/cuda-toolkit-11-june-2007) | `read` | The official NVIDIA page title and release-highlights list were checked. The URL slug says `june-2007`, while the page title says December 2007. |
| `SP02-FC-S04` | [ILSVRC 2012 official results](https://www.image-net.org/challenges/LSVRC/2012/results.html) | `read` | The official Task 1 table was checked directly. It lists SuperVision at `0.15315`, a second SuperVision submission at `0.16422`, and ISI at `0.26172`. |
| `sp04-s05` | [NVIDIA DGX-1: The Fastest Deep Learning System](https://developer.nvidia.com/blog/dgx-1-fastest-deep-learning-system/) | `read` | The article body was checked directly, including its opening DGX-1 description, P100/NVLink configuration, and later software-stack section. The page’s AI-generated summary was not used as evidence. |

### Independently read source excerpts

The following excerpts were copied from the independently retrieved source text, not from the Researcher’s summaries:

- `src-as01`, PDF §3.1: “For our model architecture, we use the Transformer”.
- `src-a04`, paper PDF §2.1: “We use the same model and architecture as GPT-2 [RWC+19], including the modified initialization, pre-normalization, and reversible tokenization described therein, with the exception that we use alternating dense and locally banded sparse attention patterns in the layers of the transformer”. The same section identifies GPT-3 as the 175-billion-parameter model among the eight sizes.
- `src-a08`, abstract: “we collect a dataset of labeler demonstrations of the desired model behavior, which we use to fine-tune GPT-3 using supervised learning.”
- `SP02-S02`, §1: “current GPUs, paired with a highly-optimized implementation of 2D convolution, are powerful enough to facilitate the training of interestingly-large CNNs”.
- `SP02-S02`, §1: “Our network takes between five and six days to train on two GTX 580 3GB GPUs.”
- `SP02-S03`, page title: “CUDA Toolkit 1.1 (December 2007)”. The release highlights include “CUDA integrated into display driver”.
- `SP02-FC-S04`, Task 1 table: SuperVision appears with `0.15315`, a second SuperVision row with `0.16422`, and ISI with `0.26172`.
- `sp04-s05`, article body: “One year ago today, NVIDIA announced the NVIDIA® DGX-1™, an integrated system for deep learning.” The article says DGX-1 “features eight Tesla P100 GPU accelerators connected through NVLink” and later lists “The NVIDIA [CUDA Toolkit]” in the DGX-1 software stack. It separately identifies cuDNN under the NVIDIA Deep Learning SDK.

## 3. Atomic claim verdicts

Review attribution for every row: `fact_checker_reviewed_by: fact-checker`; `fact_checker_reviewed_at: 2026-08-26T14:21:23+03:00`.

### SP01 — Transformer / GPT claims

| Claim ID | Claim text | Verdict | Evidence basis and reservation / gap |
|---|---|---|---|
| `sp01-hv-c01` | The GPT paper’s unsupervised pre-training passage describes the paper’s model as a Transformer architecture. | `accepted` | `src-as01` §3.1 states verbatim, “For our model architecture, we use the Transformer.” This is a bounded architecture statement about the GPT paper; it does not establish succession, influence, enablement, causation, or a connected path to later systems. |
| `sp01-hv-c02` | The GPT-3 paper’s model-and-architectures section describes GPT-3 as using the GPT-2 model and architecture, subject to the source’s stated exceptions. | `accepted_with_reservations` | `src-a04` §2.1 directly says, “We use the same model and architecture as GPT-2,” then states the exception concerning alternating dense and locally banded sparse-attention patterns. The paper identifies GPT-3 as the 175-billion-parameter model among the eight sizes. Reservation: “same model and architecture” must remain qualified by the paper’s explicit exceptions and must not be converted by itself into a typed `successor_of`, `uses_architecture`, or causal relation. |
| `sp01-hv-c03` | The InstructGPT paper says its authors use labeler demonstrations to fine-tune GPT-3 using supervised learning. | `accepted` | `src-a08` abstract states this directly. The claim supports the paper’s method/base-model wording only; it does not by itself authorize a canonical InstructGPT entity or a publishable typed edge to GPT-3 or ChatGPT. |

### SP02 — ImageNet / AlexNet / GPU claims

| Claim ID | Claim text | Verdict | Evidence basis and reservation / gap |
|---|---|---|---|
| `SP02-HV-C01` | The AlexNet paper states that current GPUs, paired with a highly-optimized implementation of 2D convolution, are powerful enough to facilitate training of “interestingly-large CNNs.” | `accepted` | `SP02-S02` §1 states this directly. It is the paper’s bounded technical account and does not establish CUDA use, NVIDIA involvement, or a field-wide causal consequence. |
| `SP02-HV-C02` | The AlexNet paper states that its network took between five and six days to train on two GTX 580 3GB GPUs. | `accepted` | `SP02-S02` §1 states this directly. The duration and hardware apply to the reported network/training run only; the product name does not establish an organizational relation. |
| `SP02-HV-C03` | NVIDIA’s developer page title labels CUDA Toolkit 1.1 “December 2007.” | `accepted_with_reservations` | `SP02-S03` page title states this exact wording. Reservation: the URL slug contains `june-2007`; retain the page title’s stated month as an attributed source fact and do not resolve the discrepancy into a separate release chronology without further evidence. |
| `SP02-HV-C04` | NVIDIA’s CUDA Toolkit 1.1 page lists “CUDA integrated into display driver” among its release highlights. | `accepted_with_reservations` | `SP02-S03` lists this exact release highlight. Reservation: the vendor page documents its own release-highlight statement only; it does not prove that AlexNet used CUDA Toolkit 1.1, depended on it, or was enabled by it. |
| `SP02-HV-C05` | The official ILSVRC 2012 Task 1 results table lists SuperVision at `0.15315`, a second SuperVision submission at `0.16422`, and ISI at `0.26172`. | `accepted` | `SP02-FC-S04` Task 1 lists these rows and values in this order. The verdict is limited to the table contents and does not identify `0.26172` as the second-best entry in the sense used by the AlexNet paper. |
| `SP02-HV-C06` | The official ILSVRC 2012 Task 1 results table confirms SuperVision’s best listed error as `0.15315`; it does not independently corroborate the AlexNet paper’s literal “second-best entry” wording for `0.26172`. | `accepted_with_reservations` | The first clause is directly supported by `SP02-FC-S04`. The second is the fact-check comparison with `SP02-S02`: the official table places another SuperVision submission at `0.16422` before ISI’s `0.26172`, so it must not be presented as independent confirmation of the paper’s literal ranking wording. This remains a bounded cross-source finding, not a universal historical ranking. |

### SP04 — DGX-1 claims

| Claim ID | Claim text | Verdict | Evidence basis and reservation / gap |
|---|---|---|---|
| `sp04-h-c01` | NVIDIA’s DGX-1 technical-blog article describes DGX-1 as an integrated system for deep learning. | `accepted_with_reservations` | The article body says “an integrated system for deep learning.” Reservation: this is an NVIDIA-authored product description; it does not establish historical significance, adoption, or performance independently. |
| `sp04-h-c02` | NVIDIA’s DGX-1 technical-blog article states that DGX-1 features eight Tesla P100 GPU accelerators connected through NVLink. | `accepted_with_reservations` | The article body states this configuration and describes the hybrid cube-mesh network. Reservation: the source documents NVIDIA’s configuration claim; it does not by itself establish an approved component relation, independent performance, adoption, or later infrastructure lineage. |
| `sp04-h-c03` | NVIDIA’s DGX-1 technical-blog article identifies the NVIDIA CUDA Toolkit in the system’s software stack. | `accepted_with_reservations` | The article’s “DGX-1 Software” section lists the NVIDIA CUDA Toolkit among the software components. Reservation: this is a later article’s software-stack statement and cannot be used to establish what the 2016 DGX-1 announcement listed; it also does not establish dependency, adoption, or exclusivity. |
| `sp04-h-c04` | NVIDIA’s DGX-1 technical-blog article identifies cuDNN in the system’s software stack. | `accepted_with_reservations` | The article identifies cuDNN under the NVIDIA Deep Learning SDK and discusses cuDNN in the software/performance context. Reservation: the vendor-authored article does not establish an ecosystem-wide cuDNN dependency, a typed relation, or a causal infrastructure consequence. |

## 4. Relation verdicts and explicit non-entailments

No relation was submitted by any harvest packet. Therefore there are no relation rows to accept, reject, or mark incomplete in this review. The source statements above do **not** authorize any of the following edges or transitions:

- `model-gpt → tech-transformer`, `model-gpt-3 → model-gpt-2`, `model-gpt-3 → tech-transformer`, or InstructGPT → GPT-3 as a publishable typed edge. The harvest claims provide bounded architecture/method wording only; endpoint identity and approved relation semantics remain separate requirements.
- CUDA Toolkit 1.1 → AlexNet, NVIDIA → AlexNet, or NVIDIA → the AlexNet authors. The AlexNet paper’s GPU wording and an NVIDIA-hosted CUDA page do not establish toolkit use, dependency, sponsorship, influence, or corporate relation.
- AlexNet → field-wide revival, modern AI, or a causal consequence. The GPU/implementation statements and competition table do not entail a field-wide historical outcome.
- DGX-1 → CUDA as a 2016-announcement claim. The later blog’s standalone CUDA Toolkit wording must not be back-projected into the 2016 announcement; the harvest does not cite that announcement as a source for these claims.
- DGX-1 → cuDNN as a typed dependency, DGX-1 → modern infrastructure, or NVIDIA → deep-learning adoption. Vendor product documentation and software-stack inclusion do not by themselves establish the relevant relation semantics or historical causation.

Chronology, shared employer/vendor, shared branding, shared architecture, product naming, and software-suite inclusion remain insufficient evidence for influence, succession, dependency, enablement, adoption, or causation. No connected Story Path is established by this harvest.

## 5. Editorial and data handoff restrictions

- The Editor may use the accepted claims only within the stated source scope and with every reservation preserved.
- Keep the GPT architecture statement tied to `src-as01`’s paper and the GPT-3 architecture statement qualified by the explicit §2.1 exceptions.
- Do not turn the GPT-3 “same model and architecture as GPT-2” wording into a successor, causal, or connected-lineage claim.
- Attribute the CUDA Toolkit month to the NVIDIA page title and preserve the title/URL-slug discrepancy.
- Attribute the ILSVRC `0.15315` / `0.16422` / `0.26172` values to the official table. Do not present `0.26172` as independently confirmed “second-best” wording.
- Attribute DGX-1 configuration and software-stack statements to NVIDIA’s technical blog. Do not back-project the later standalone CUDA Toolkit wording into the 2016 announcement.
- Do not infer a relation from dates, shared organization, product branding, hardware names, or software inclusion.
- This report authorizes no new entity, relation, connected transition, or reader-facing Story Path.

## 6. Audit record

- Workspace: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_CLONE_2026-08-25`
- Git root: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_CLONE_2026-08-25`
- Branch: `v2-bootstrap`
- HEAD at review: `d256c2832e37e4a8bbf61317f9238fa0104d15e1`
- Project marker: `.hermes.md` contains `AI Evolution Atlas`.
- Governing inputs read: `docs/v2/06-research-evidence-methodology.md`, `docs/v2/CLAUDE-M1-CHECKPOINT-REVIEW.md`, `docs/v2/PROGRAM-ROADMAP.md`, and `docs/v2/DEC-001.md`.
- Harvest inputs independently re-read: `docs/v2/story-packs/sp01-harvest.md`, `docs/v2/story-packs/sp02-harvest.md`, and `docs/v2/story-packs/sp04-harvest.md`.
- Source re-read method: direct retrieval of the cited PDF, arXiv, official results, NVIDIA release page, and NVIDIA technical-blog sources; source summaries were not treated as evidence.
- Authored file boundary: only `docs/v2/story-packs/harvest-factcheck.md` was authored for this card. No website, data-layer file, harvest packet, source register, or other project file was changed.
- Registry: `docs/reports/v2-card-ids.json` already contained `"V2-FC-HV": "t_e3cb2a8b"`; it was not modified because it is outside this card’s assigned file boundary.
