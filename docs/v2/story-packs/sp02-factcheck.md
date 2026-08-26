# SP02 fact-check — ImageNet / AlexNet / GPU

Status: Fact-check result — not reader-facing copy; not publishable v2 data
Packet ID: `SP02-imagenet-alexnet-gpu-r1`
Research packet: `docs/v2/story-packs/sp02-imagenet-alexnet-gpu.md`
Fact-checker: `fact-checker`
Fact-checked at: `2026-08-25T22:18:49+03:00`

## 1. Review scope and packet verdict

The Fact-checker independently re-read every source cited by the packet and added an independent official ILSVRC results page for the competition cross-check requested by the Researcher. The Researcher’s excerpts, confidence values, and proposed statuses were treated as leads only. Verdicts below use the canon vocabulary exactly: `accepted`, `accepted_with_reservations`, `unsupported`, `disputed`, or `needs_more`.

**Packet verdict: `needs_more`.** The bounded dataset, model, and reported compute claims are source-supported. The official ILSVRC results page independently confirms the best SuperVision error figure, but it does not independently corroborate the paper’s literal “second-best entry” wording: it lists another SuperVision submission before the `0.26172` ISI result. The packet still does not establish the broader historical consequence, “neural-network revival” context, organizational transition, or CUDA-to-AlexNet dependency needed to answer the flagship question as a connected Story Path. No reader-facing connected narrative or typed graph edge is authorized by this report; the accepted items below are limited to the stated scope and reservations.

## 2. Independent source re-read

| Source ID | Source | Independent read result | Review evidence / limitation |
| --- | --- | --- | --- |
| `SP02-S01` | [ImageNet: A Large-Scale Hierarchical Image Database](https://www.image-net.org/static_files/papers/imagenet_cvpr09.pdf) | `read` | The PDF was independently retrieved and checked at the abstract and §1–§2 passages covering the WordNet structure, 2009 database state, synsets, and image counts. |
| `SP02-S02` | [ImageNet Classification with Deep Convolutional Neural Networks](https://proceedings.neurips.cc/paper_files/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf) | `read` | The proceedings PDF was independently retrieved and checked at the title/header, abstract, §§1–3, and §6. It directly states the training dataset, competition comparison, GPU implementation, and two-GPU training duration. |
| `SP02-S03` | [CUDA Toolkit 1.1 (December 2007)](https://developer.nvidia.com/content/cuda-toolkit-11-june-2007) | `read` | The official NVIDIA page title states “CUDA Toolkit 1.1 (December 2007)” and the page lists release highlights. The URL slug contains `june-2007`; the report retains the page title’s month and does not infer a different date. |
| `SP02-FC-S04` | [ILSVRC 2012 official results](https://www.image-net.org/challenges/LSVRC/2012/results.html) | `read` | The official Task 1 table lists SuperVision at `0.15315`, a second SuperVision submission at `0.16422`, and ISI at `0.26172`. It independently confirms the best rounded 15.3% figure, but does not independently corroborate the paper’s literal “second-best entry” wording or treat `0.26172` as the next entry. |
| `SP02-FC-S05` | [ILSVRC 2012 official challenge page](https://www.image-net.org/challenges/LSVRC/2012/) | `read` | The official challenge page independently describes the 1000-category task, 1.2 million-image training subset, 50,000 validation images, and 150,000 test images. It also distinguishes challenge data from the previously published ImageNet dataset. |

### Independently read source excerpts

The following excerpts are copied from independently retrieved source text, not from the Researcher’s summary:

- `SP02-S01`, abstract: “We introduce here a new database called ‘ImageNet’, a large-scale ontology of images built upon the backbone of the WordNet structure.” The same abstract reports “12 subtrees with 5247 synsets and 3.2 million images in total.”
- `SP02-S01`, §1: “ImageNet uses the hierarchical structure of WordNet.”
- `SP02-S02`, abstract: “We trained a large, deep convolutional neural network to classify the 1.2 million high-resolution images in the ImageNet LSVRC-2010 contest into the 1000 different classes.” The abstract also reports a winning ILSVRC-2012 top-5 test error rate of 15.3%, compared with 26.2% for the second-best entry.
- `SP02-S02`, §1: “current GPUs, paired with a highly-optimized implementation of 2D convolution, are powerful enough to facilitate the training of interestingly-large CNNs”.
- `SP02-S02`, §1: “Our network takes between five and six days to train on two GTX 580 3GB GPUs.”
- `SP02-S02`, §2: “ILSVRC uses a subset of ImageNet with roughly 1000 images in each of 1000 categories. In all, there are roughly 1.2 million training images, 50,000 validation images, and 150,000 testing images.”
- `SP02-S03`, page title: “CUDA Toolkit 1.1 (December 2007)”. Release highlights include “CUDA integrated into display driver” and support for GeForce 8800 GT.
- `SP02-FC-S04`, official results table: SuperVision’s best Task 1 submission is listed with error `0.15315`; a second SuperVision submission is listed with `0.16422`; the ISI submission is listed with `0.26172`. The table therefore confirms the best rounded 15.3% figure but does not independently corroborate the paper’s literal “second-best entry” wording.
- `SP02-FC-S05`, Data section: “The training data, the subset of ImageNet containing the 1000 categories and 1.2 million images, will be packaged for easy downloading.”

## 3. Atomic claim verdicts

Review attribution for every row: `fact_checker_reviewed_by: fact-checker`; `fact_checker_reviewed_at: 2026-08-25T22:18:49+03:00`.

| Claim ID | Claim text | Verdict | Evidence basis and reservation / gap |
| --- | --- | --- | --- |
| `SP02-C01` | The 2009 ImageNet paper describes ImageNet as a large-scale ontology of images built on the WordNet structure. | `accepted` | `SP02-S01` states this directly in the abstract and says in §1 that ImageNet uses WordNet’s hierarchical structure. Scope is the paper’s description; this does not establish every later ImageNet release or challenge use. |
| `SP02-C02` | The 2009 ImageNet paper reports 12 subtrees, 5,247 synsets, and 3.2 million images in the database state it analyzed. | `accepted` | `SP02-S01` reports all three figures in its abstract. These are the 2009 paper’s analyzed state, not current ImageNet statistics. |
| `SP02-C03` | Krizhevsky, Sutskever, and Hinton report training a deep convolutional neural network on 1.2 million high-resolution images in ImageNet LSVRC-2010 across 1,000 classes. | `accepted` | `SP02-S02` states this directly in the abstract. The claim is about the authors’ reported experiment and retains the paper’s LSVRC-2010 scope. |
| `SP02-C04` | The AlexNet paper reports a winning ILSVRC-2012 top-5 test error rate of 15.3%, compared with 26.2% for the second-best entry. | `accepted_with_reservations` | `SP02-S02` states this comparison directly, so the report can attribute it to the paper. `SP02-FC-S04` independently confirms the best rounded 15.3% result (`0.15315`), but lists a second SuperVision submission at `0.16422` before ISI at `0.26172`; it therefore does not independently corroborate the paper’s literal “second-best entry” wording. Preserve the paper attribution and do not present the official table as confirmation of the 26.2% ranking or as a universal measure of historical importance. |
| `SP02-C05` | The AlexNet paper states that current GPUs paired with a highly optimized 2D-convolution implementation facilitated training of large CNNs in the reported work. | `accepted` | `SP02-S02` directly states that GPUs paired with the optimized implementation were powerful enough to facilitate training of “interestingly-large CNNs,” and separately describes the authors’ implementation. The wording must remain bounded to the paper’s technical account; it does not prove that GPUs caused a field-wide change. |
| `SP02-C06` | The AlexNet paper states that its network took between five and six days to train on two GTX 580 3GB GPUs. | `accepted` | `SP02-S02` states this directly in §1. The configuration and duration apply to the reported network/training run, not to all model variants or later reproductions. |
| `SP02-C07` | NVIDIA’s developer page labels CUDA Toolkit 1.1 as a December 2007 release and lists release highlights. | `accepted_with_reservations` | `SP02-S03` directly supplies the page title and release-highlight list. Reservation: the URL slug contains `june-2007`, while the page title says December 2007; retain the title’s stated month and do not infer an AlexNet connection or a separate release chronology from the slug. |

## 4. Candidate relation verdicts

No relation below is promoted to a publishable data edge by this report. The packet itself marks the candidate types as ontology-pending, and the supplied v2 canon does not provide an approved relation contract. Relation verdicts therefore separate source entailment from ontology/entity approval.

| Relation ID | Proposition and direction | Candidate type | Verdict | Evidence basis and reservation / gap |
| --- | --- | --- | --- | --- |
| `SP02-R01` | `paper-alexnet-2012 → person-alex-krizhevsky`: the paper lists Krizhevsky as an author. | `authored_by` | `accepted_with_reservations` | The `SP02-S02` paper header directly lists Alex Krizhevsky as an author. Reservation: authorship is for this paper only, and the approved ontology must validate the packet-local person identity, direction, and permitted type before publication. |
| `SP02-R02` | `paper-alexnet-2012 → person-ilya-sutskever`: the paper lists Sutskever as an author. | `authored_by` | `accepted_with_reservations` | The `SP02-S02` paper header directly lists Ilya Sutskever as an author. Reservation: same paper-only scope and ontology/entity validation requirement; no influence or broader collaboration claim follows. |
| `SP02-R03` | `paper-alexnet-2012 → person-geoffrey-e-hinton`: the paper lists Hinton as an author. | `authored_by` | `accepted_with_reservations` | The `SP02-S02` paper header directly lists Geoffrey E. Hinton as an author. Reservation: same paper-only scope and ontology/entity validation requirement; authorship does not establish mentorship, intellectual influence, or later organizational lineage. |
| `SP02-R04` | `subset-ilsvrc-2010-image-classification → paper-alexnet-2012`: the paper reports training on this specific ImageNet LSVRC-2010 subset. | `used_by` | `accepted_with_reservations` | `SP02-S02` directly identifies the 1.2 million-image, 1000-class LSVRC-2010 training setting and describes the ILSVRC subset in §2. Reservation: validate the dataset-subset identity, direction, granularity, and permitted ontology type; this does not claim that ImageNet alone caused the result. |
| `SP02-R05` | `technology-optimized-2d-convolution-implementation → paper-alexnet-2012`: the implementation technically enabled the reported training work. | `technical_enablement` | `accepted_with_reservations` | `SP02-S02` states that GPUs paired with a highly optimized 2D-convolution implementation facilitated training and says the authors wrote such an implementation. Reservation: this supports a bounded technical role in the reported work, not a general GPU-history or NVIDIA relation; the proposed direction/type and paper-as-endpoint semantics remain ontology-pending. |

## 5. Explicitly unproven transitions and relation guardrails

The following must remain out of the graph and out of reader-facing transition copy unless new, directly entailing evidence is supplied:

- `software-cuda-toolkit-1-1 → paper-alexnet-2012` or `software-cuda-toolkit-1-1 → technology-optimized-2d-convolution-implementation`: `SP02-S03` documents CUDA Toolkit 1.1 and `SP02-S02` documents an optimized GPU implementation, but no cited source says that AlexNet used CUDA Toolkit 1.1 or that the toolkit was a dependency.
- `organization-nvidia → paper-alexnet-2012` or `organization-nvidia → person-*`: a GTX 580 product name and an NVIDIA-hosted CUDA page do not establish corporate authorship, influence, sponsorship, or dependency.
- `dataset-imagenet → paper-alexnet-2012` as a causal or significance edge: dataset use is supported only at the bounded LSVRC-2010 subset level; the sources do not entail that ImageNet alone caused the result.
- `paper-alexnet-2012 → field-wide neural-network revival` or equivalent: the paper’s benchmark result and technical account do not by themselves establish a field-wide consequence.
- `paper-alexnet-2012 → modern AI boom`, “made modern AI inevitable,” or “proved GPUs caused the AI boom”: unsupported by this packet.
- Hinton → AlexNet as mentorship, influence, or intellectual transfer: authorship is documented; those stronger relations are not established by the cited sources.
- LSVRC-2010 subset → LSVRC-2012 competition as succession or causal lineage: the paper discusses both settings, but temporal coexistence and shared naming do not establish a typed transition.

These gaps are intentional. A missing edge is preferable to graph padding.

## 6. Editorial handoff restrictions

- The Editor may use `accepted` claims and `accepted_with_reservations` claims only with the stated scope and reservations preserved.
- Use the 2009 ImageNet counts only as the historical state reported by `SP02-S01`; do not present them as current statistics.
- Attribute the 15.3% / 26.2% comparison to the AlexNet paper. The official ILSVRC result cross-check confirms the best rounded 15.3% result but does not independently corroborate the paper’s literal 26.2% “second-best entry” wording; do not present it as such or convert either figure into a universal historical ranking.
- It is source-bounded to say that the reported work combined a large labeled benchmark subset, a deep CNN, and GPU-optimized training implementation. That is a bounded interpretation of accepted claims, not proof of a field-wide consequence.
- Do not write that AlexNet single-handedly revived deep learning, that GPUs caused the AI boom, or that the result made modern AI inevitable.
- Do not state a direct CUDA Toolkit 1.1 dependency or an NVIDIA-to-AlexNet relation from this packet.
- Distinguish paper authorship from mentorship, intellectual influence, organizational lineage, sponsorship, or later employment.
- Keep “AlexNet” tied to the cited 2012 paper; the paper is the source-grounded record behind the informal label, not by itself a canonical ontology decision.
- No editor-facing connected Story Path is authorized until the missing historical-context evidence and ontology decisions are supplied.

## 7. Required rework before a connected Story Path can leave Fact-check

1. Supply independent, directly entailing evidence for the broader historical consequence or bounded comparative context required by the question “why a convergence point rather than merely another image classifier?”
2. Resolve the approved ontology types and canonical identities for the five relation proposals before any relation is entered as publishable data.
3. If a CUDA, NVIDIA, neural-network revival, Google/DNNresearch, influence, or field-wide consequence transition is desired, return it to Research with a source request rather than inferring it from dates, hardware branding, or the benchmark result.
4. Preserve the accepted bounded dataset–paper–compute claims and all reservations without turning them into a general causal or lineage narrative.

## 8. Audit record

- Workspace: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_CLONE_2026-08-25`
- Git root: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_CLONE_2026-08-25`
- Branch: `v2-bootstrap`
- HEAD at review: `3bc5db0e18ed5890a6872fddd83ab4cf5a1ad7a7`
- Project marker: `.hermes.md` contains `AI Evolution Atlas`.
- Governing inputs read: `docs/v2/06-research-evidence-methodology.md`, `docs/v2/DEC-001.md`, and `docs/v2/05-content-editorial-system.md`.
- Research input independently re-read: `docs/v2/story-packs/sp02-imagenet-alexnet-gpu.md`.
- Sources independently read: `SP02-S01`, `SP02-S02`, `SP02-S03`, and official cross-checks `SP02-FC-S04` / `SP02-FC-S05`.
- Review boundary: only `docs/v2/story-packs/sp02-factcheck.md` was authored for this task; no website, data-layer, or research-packet file was changed.
- Previously untracked verdict-file audit: direct trailing-whitespace scan returned zero lines after removing the intentional hard-break whitespace; the ordinary tracked-file `git diff --check` result was not used as evidence for this file.
