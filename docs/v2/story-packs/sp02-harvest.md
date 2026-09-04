# SP02 claim harvest — ImageNet / AlexNet / GPU

Status: Researcher handoff — pending independent Fact-check  
Harvest ID: `SP02-HV-r1`  
Parent packet: `docs/v2/story-packs/sp02-imagenet-alexnet-gpu.md`  
Existing fact-check: `docs/v2/story-packs/sp02-factcheck.md`  
Researcher: `researcher`  
Harvest completed: 2026-08-26  
Governing method: `docs/v2/06-research-evidence-methodology.md`

## 1. Purpose and boundary

This is a claim-authoring pass over sources already read for SP02. It does not retrieve a new source, alter an existing claim or verdict, create an entity, or propose a publishable edge. Every item below is a new proposal for an independent Fact-checker to assess.

The pass targets narrowly stated GPU, CUDA, organization, and ILSVRC-result claims that are already visible in the SP02 source corpus or the prior independent Fact-check record. It does not establish CUDA use by the AlexNet work, an NVIDIA-to-AlexNet dependency, a field-wide consequence, or a connected Story Path.

## 2. Reused source register

| source_id | Tier / class | Already-read source | Exact relevant locator | Reuse boundary |
|---|---|---|---|---|
| `SP02-S02` | S1 / proceedings paper | Alex Krizhevsky, Ilya Sutskever, Geoffrey E. Hinton, *ImageNet Classification with Deep Convolutional Neural Networks* (2012). | §1; abstract. | The paper supports statements about the authors' reported implementation, hardware, training run, and competition wording; it is not independent proof of a broad historical consequence. |
| `SP02-S03` | S1 / official technical documentation | NVIDIA, *CUDA Toolkit 1.1 (December 2007)*. | Page title; Release Highlights. | This source records its page title and listed release highlights only. The URL slug and title conflict on month wording; retain the title's stated month. It does not identify AlexNet or document an AlexNet dependency. |
| `SP02-FC-S04` | S1 / official results page | ImageNet, *ILSVRC 2012 official results*. | Task 1 table. | The table supports the listed values and order only. It does not corroborate the AlexNet paper's literal “second-best entry” wording for `0.26172`. |

## 3. Atomic claim proposals

`proposed_verdict` is the Researcher's proposal only. `fact_checker_verdict` and review attribution are reserved for independent review.

| claim_id | claim_text | criticality / reason | subject_ref / object_ref | date_or_period / precision | source_ids | evidence_locators | researcher_confidence | gaps_or_conflicts | proposed_verdict | fact_checker_verdict | fact_checker_reviewed_by / fact_checker_reviewed_at |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `SP02-HV-C01` | The AlexNet paper states that current GPUs, paired with a highly-optimized implementation of 2D convolution, are powerful enough to facilitate training of “interestingly-large CNNs.” | Critical — preserves the paper's GPU-and-implementation wording as a discrete proposed claim. | `paper-alexnet-2012` / `technology-optimized-2d-convolution-implementation` | 2012 / year | `SP02-S02` | §1, previously independently quoted in `sp02-factcheck.md` §2: “current GPUs, paired with a highly-optimized implementation of 2D convolution, are powerful enough to facilitate the training of interestingly-large CNNs”. | high | This is the paper's technical account; it does not establish CUDA use, NVIDIA involvement, or a field-wide causal consequence. | `accepted` |  |  |
| `SP02-HV-C02` | The AlexNet paper states that its network took between five and six days to train on two GTX 580 3GB GPUs. | Non-critical — preserves the reported training configuration as a discrete proposed claim. | `paper-alexnet-2012` / `hardware-gtx-580-3gb` | 2012 / year | `SP02-S02` | §1, previously independently quoted in `sp02-factcheck.md` §2: “Our network takes between five and six days to train on two GTX 580 3GB GPUs.” | high | Configuration and duration apply to the reported network/training run only, not all variants or later reproductions. A hardware product name does not establish an organizational relation. | `accepted` |  |  |
| `SP02-HV-C03` | NVIDIA’s developer page title labels CUDA Toolkit 1.1 “December 2007.” | Non-critical — records the source's stated title/date separately from its release highlights. | `organization-nvidia` / `software-cuda-toolkit-1-1` | December 2007 / month | `SP02-S03` | Page title, previously independently recorded in `sp02-factcheck.md` §2: “CUDA Toolkit 1.1 (December 2007)”. | medium | The URL slug contains `june-2007`; this claim retains the title's stated month only. It does not establish an AlexNet connection, a distinct release chronology, or a relation from NVIDIA to the paper. | `accepted_with_reservations` |  |  |
| `SP02-HV-C04` | NVIDIA’s CUDA Toolkit 1.1 page lists “CUDA integrated into display driver” among its release highlights. | Non-critical — retains an exact, independently readable release-highlight statement without inferring downstream use. | `software-cuda-toolkit-1-1` / `organization-nvidia` | No date beyond source title's December 2007 / month | `SP02-S03` | Release Highlights, previously independently recorded in `sp02-factcheck.md` §2: “CUDA integrated into display driver”. | medium | A listed release highlight does not prove that AlexNet used CUDA Toolkit 1.1, that it depended on CUDA, or that this artifact enabled the reported work. | `accepted_with_reservations` |  |  |
| `SP02-HV-C05` | The official ILSVRC 2012 Task 1 results table lists SuperVision at `0.15315`, a second SuperVision submission at `0.16422`, and ISI at `0.26172`. | Critical — supplies the exact official-table wording needed to test the prior competition-result reservation. | `event-ilsvrc-2012` / — | 2012 / year | `SP02-FC-S04` | Task 1 table, independently recorded in `sp02-factcheck.md` §§1–2. | high | This claim records the table sequence only. It does not identify `0.26172` as the second-best entry, resolve which submission maps to the paper's wording, or convert a benchmark result into a general historical ranking. | `accepted` |  |  |
| `SP02-HV-C06` | The official ILSVRC 2012 Task 1 results table confirms SuperVision’s best listed error as `0.15315`; it does not independently corroborate the AlexNet paper’s literal “second-best entry” wording for `0.26172`. | Critical — narrows the competition cross-check to what the independently read official table supports. | `event-ilsvrc-2012` / `paper-alexnet-2012` | 2012 / year | `SP02-FC-S04`, `SP02-S02` | `SP02-FC-S04` Task 1 values; `SP02-S02` abstract's “15.3%” and “26.2% achieved by the second-best entry” wording, both reproduced in `sp02-factcheck.md` §2. | high | The first clause is an official-table finding; the second is a bounded comparison with the paper's attributed wording. Do not present the table as confirmation of the 26.2% ranking. | `accepted_with_reservations` |  |  |

## 4. Candidate relations

No new relation is proposed. The available source wording supports bounded source, implementation, hardware, and results-table claims. It does not directly entail a CUDA-to-AlexNet dependency, an NVIDIA-to-AlexNet organizational relation, or a causal transition from the reported result to a field-wide outcome. The existing packet's ontology-pending relation status remains unchanged.

## 5. Explicit gaps and editorial guardrails

- Do not write that AlexNet used CUDA Toolkit 1.1. No source in this harvest states that proposition.
- Do not infer a relation from NVIDIA to the paper, its authors, or the reported work from the GTX 580 product name or NVIDIA-hosted CUDA page.
- Do not treat the official ILSVRC table as independent corroboration that `0.26172` was the “second-best entry.” The paper's wording may be attributed to the paper only, with the existing reservation preserved.
- Do not convert the GPU/optimized-implementation statement into a claim that GPUs caused a field-wide revival, modern AI, or a connected historical path.
- Do not treat the December 2007 page title as evidence of a separate release chronology beyond the title's stated month, given the URL slug discrepancy.

## 6. Fact-check request

Independently re-read `SP02-S02`, `SP02-S03`, and `SP02-FC-S04`; check each proposed claim against its stated locator; assign exactly one canon verdict to every row; and preserve the explicit non-entailments in §5. This harvest may supplement the packet's claim ledger only after independent review. It does not authorize reader-facing copy or a publishable relation.

## 7. Audit record

- Workspace: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_CLONE_2026-08-25`
- Git root: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_CLONE_2026-08-25`
- Branch: `v2-bootstrap`
- HEAD at harvest: `d256c2832e37e4a8bbf61317f9238fa0104d15e1`
- Project marker: `.hermes.md` contains `AI Evolution Atlas`.
- Canon read: `docs/v2/06-research-evidence-methodology.md`, `docs/v2/CLAUDE-M1-CHECKPOINT-REVIEW.md`, `docs/v2/PROGRAM-ROADMAP.md`, `docs/v2/DEC-001.md`.
- Existing packet and prior independent fact-check read: `docs/v2/story-packs/sp02-imagenet-alexnet-gpu.md`; `docs/v2/story-packs/sp02-factcheck.md`.
- Authoring boundary: only this file was authored for this card. No website, source retrieval, data-layer file, packet file, or source register was altered.
