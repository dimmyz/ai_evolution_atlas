# SP04 harvest — NVIDIA already-read sources

Status: Researcher claim proposals — Fact-check pending  
Packet ID: `SP04-harvest-nvidia-r1`  
Research date: 2026-08-26  
Researcher: `researcher`

## Scope and boundary

This is a claim-authoring pass over the already-read NVIDIA sources recorded in `docs/v2/story-packs/sp04-nvidia-cuda-infra.md` and independently re-read in `docs/v2/story-packs/sp04-factcheck.md`. It adds only source-bounded proposals that were not atomic claims in the prior SP04 ledger. It does not re-open those packets, add a source, assign a Fact-check verdict, or authorize a relation or reader-facing transition.

The broader transition from graphics hardware to deep-learning adoption or modern AI infrastructure remains unproven by these sources. No claim below supports causation, adoption, a successor relationship, a field-wide dependency, or a publication-ready graph edge.

## Already-read source register

| Source ID | Tier / class | Publisher | Title | Existing locator used here | URL | Scope limit |
|---|---|---|---|---|---|---|
| `sp04-s05` | S1 / official technical blog | NVIDIA Developer | *NVIDIA DGX-1: The Fastest Deep Learning System* | Article body: opening description; P100/NVLink configuration; later software-stack discussion | https://developer.nvidia.com/blog/dgx-1-fastest-deep-learning-system/ | NVIDIA-authored source. Its performance and “fastest” wording is not used as neutral historical proof. The accessed article does not establish what the 2016 announcement listed. |

## Evidence notes

The following source text was already recorded as independently read in `sp04-factcheck.md`; it is reproduced here to identify the precise propositions submitted for a new review round:

- `sp04-s05` calls DGX-1 “an integrated system for deep learning.”
- `sp04-s05` says DGX-1 “features eight Tesla P100 GPU accelerators connected through NVLink.”
- `sp04-s05` later identifies the NVIDIA CUDA Toolkit and cuDNN in the software stack.

The existing fact-check records that the article’s standalone CUDA Toolkit wording is later than the 2016 announcement. It cannot establish that the 2016 announcement listed standalone CUDA Toolkit or CUDA platform software.

## Atomic claim proposals

`researcher_confidence` is not a Fact-check verdict. All `fact_checker_*` fields are deliberately blank pending an independent re-read and verdict.

| Claim ID | Claim text | Criticality / reason | Subject ref | Object ref | Date / precision | Source ID and locator | Researcher confidence | Gaps or limits | Proposed verdict | Fact-checker verdict | Fact-checker reviewed by | Fact-checker reviewed at |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `sp04-h-c01` | NVIDIA’s DGX-1 technical-blog article describes DGX-1 as an integrated system for deep learning. | Non-critical — bounded system description; not a transition. | `candidate:dgx-1` | — | — | `sp04-s05`, article-body opening description | high | NVIDIA-authored description. It does not establish historical significance, adoption, or performance. | `accepted_with_reservations` |  |  |  |
| `sp04-h-c02` | NVIDIA’s DGX-1 technical-blog article states that DGX-1 features eight Tesla P100 GPU accelerators connected through NVLink. | Non-critical — source-bounded configuration wording. | `candidate:dgx-1` | `candidate:tesla-p100`; `candidate:nvlink` | — | `sp04-s05`, article-body P100/NVLink configuration | high | NVIDIA-authored configuration statement. It does not establish a typed component relation, performance, adoption, or later infrastructure lineage. | `accepted_with_reservations` |  |  |  |
| `sp04-h-c03` | NVIDIA’s DGX-1 technical-blog article identifies the NVIDIA CUDA Toolkit in the system’s software stack. | Critical — distinguishes the later article’s standalone CUDA Toolkit wording from the 2016 announcement. | `candidate:dgx-1` | `candidate:cuda` | — | `sp04-s05`, later software-stack discussion | high | This is a later-article statement, not evidence for the contents of `sp04-s04`’s 2016 announcement. It does not establish a dependency, adoption, or exclusive use. | `accepted_with_reservations` |  |  |  |
| `sp04-h-c04` | NVIDIA’s DGX-1 technical-blog article identifies cuDNN in the system’s software stack. | Non-critical — source-bounded software-stack wording. | `candidate:dgx-1` | `candidate:cudnn` | — | `sp04-s05`, later software-stack discussion | high | NVIDIA-authored source. It does not establish an ecosystem-wide cuDNN dependency, a typed relation, or a causal infrastructure consequence. | `accepted_with_reservations` |  |  |  |

## Relation boundary

No relation proposal is submitted. The governing materials still provide no approved v2 relation vocabulary, and the source statements above do not independently entail dependency, enablement, influence, succession, adoption, or causation.

## Fact-check request

Independently re-read `sp04-s05`’s article body (not any AI-generated summary) and verify each proposition and locator. In particular, preserve the distinction between the article’s later CUDA Toolkit wording and the 2016 announcement’s naming of “NVIDIA CUDA® Deep Neural Network library (cuDNN) version 5.” Record one canon verdict for each proposed claim and retain the listed reservations.
