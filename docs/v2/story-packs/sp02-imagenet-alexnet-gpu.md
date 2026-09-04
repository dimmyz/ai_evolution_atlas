# SP02 — ImageNet / AlexNet / GPU evidence pack

Status: Researcher handoff — pending independent Fact-check  
Packet ID: `SP02`  
Researcher: `researcher`  
Research completed: 2026-08-25  
Governing method: `docs/v2/06-research-evidence-methodology.md`

## 1. Packet header

**Product question:** Why was AlexNet a convergence point rather than merely another image classifier?

**Story Path relevance:** This is the second human-approved flagship story in DEC-001 (H4): `ImageNet / Hinton / AlexNet / GPU`. It is research-only work under the closed H5 implementation gate.

**Scope:** The bounded, source-supported core is (a) ImageNet as an image database and ILSVRC benchmark subset, (b) the 2012 Krizhevsky–Sutskever–Hinton paper and its reported experimental result, and (c) the paper's documented GPU implementation and hardware/training constraint. CUDA is retained only as a context candidate: the retrieved NVIDIA page documents CUDA Toolkit 1.1, but does not document use of CUDA by AlexNet.

**Exclusions:** This packet does not claim a general “neural-network revival,” a causal field-wide or industry consequence, individual intellectual influence, a Google/DNNresearch transition, or an NVIDIA-to-AlexNet dependency. It does not convert temporal sequence into lineage. Those claims require additional, directly entailing evidence.

**Blocking dependencies:** R02, R03, R05, and R06 are named as blocking research for SP02 in the Research Program. This packet supplies a narrow core for those lanes; it does not close them.

## 2. Proposed spine

| Step | Included milestone | Why included | Evidence boundary |
|---|---|---|---|
| 1 | ImageNet (2009 paper) | Establishes the dataset's documented scale and WordNet-based organization. | The paper describes ImageNet's 2009 state; it does not prove later model or field effects. |
| 2 | ILSVRC subset used by the AlexNet paper | Makes the paper's task and training/evaluation setting inspectable. | AlexNet paper's description of the subset and its counts. |
| 3 | Krizhevsky, Sutskever, and Hinton's 2012 network | Establishes the authors, model shape, and reported competition result. | Paper reports its own experiment; it is not independent proof of broad historical impact. |
| 4 | GPU implementation and two-GPU training | Establishes a documented compute condition in the reported work. | The paper supports this work's implementation/training facts, not a general GPU-history claim. |
| 5 | CUDA Toolkit 1.1 context | Records a primary NVIDIA software artifact as a possible future compute-history source. | No source in this packet links CUDA Toolkit 1.1 to AlexNet; no edge is proposed. |

## 3. Entity candidates

All identifiers in this table are packet-local candidate references. They are not additions to the approved data/ontology contract.

| Candidate ID | Kind | Canonical reference / alias | Identity note | Warning |
|---|---|---|---|---|
| `dataset-imagenet` | dataset candidate | `ImageNet` | Image database described by Deng et al. | Do not equate the 2009 database state with every later ImageNet release or challenge subset. |
| `knowledge-base-wordnet` | knowledge-base candidate | `WordNet` | Hierarchical structure named by the 2009 ImageNet paper. | This packet does not establish a broader relation beyond the paper's description of ImageNet. |
| `benchmark-ilsvrc` | benchmark/challenge candidate | `ImageNet Large-Scale Visual Recognition Challenge` | Annual competition described in the AlexNet paper as starting in 2010. | Treat as a benchmark/challenge context; validate ontology class. |
| `subset-ilsvrc-2010-image-classification` | dataset-subset candidate | `ImageNet LSVRC-2010 contest subset` | The AlexNet abstract identifies 1.2 million high-resolution images and 1,000 classes for this experiment. | Do not merge it with the distinct ILSVRC-2012 competition event. |
| `event-ilsvrc-2012` | competition-event candidate | `ILSVRC-2012 competition` | Competition event in which the paper reports entering a variant of the model. | The result remains sourced here only to the paper pending an official competition cross-check. |
| `paper-alexnet-2012` | paper-event candidate | `ImageNet Classification with Deep Convolutional Neural Networks` | 2012 paper by Krizhevsky, Sutskever, and Hinton; this is the source-grounded record behind the informal “AlexNet” label. | The paper does not by itself establish “AlexNet” as a formal canonical entity label. |
| `person-alex-krizhevsky` | person candidate | `Alex Krizhevsky` | Listed author and University of Toronto affiliation in the paper. | Affiliation is not a claim of sole authorship or broader influence. |
| `person-ilya-sutskever` | person candidate | `Ilya Sutskever` | Listed author and University of Toronto affiliation in the paper. | Same limitation. |
| `person-geoffrey-e-hinton` | person candidate | `Geoffrey E. Hinton` | Listed author and University of Toronto affiliation in the paper. | Same limitation. |
| `technology-optimized-2d-convolution-implementation` | software/technique candidate | `highly-optimized implementation of 2D convolution` | Technical implementation described by the AlexNet paper in its statement about facilitating training. | Source does not identify a separate product, codebase, or corporate owner. |
| `hardware-gtx-580-3gb` | hardware candidate | `GTX 580 3GB GPUs` | Hardware named in the paper's training statement. | Do not infer an NVIDIA corporate relation from a hardware product name without an approved ontology/data record. |
| `software-cuda-toolkit-1-1` | software candidate | `CUDA Toolkit 1.1` | NVIDIA developer page labels it “December 2007.” | Context only; no documented AlexNet linkage in this packet. |
| `organization-nvidia` | organization candidate | `NVIDIA` | Publisher identified on the CUDA Toolkit 1.1 developer page. | This identity row does not establish an edge to AlexNet or GTX 580 hardware. |

## 4. Source register

| source_id | Tier / class | Author / publisher | Title | Publication date / precision | Locator used | Access / version note |
|---|---|---|---|---|---|---|
| `SP02-S01` | S1 / conference paper | Jia Deng, Wei Dong, Richard Socher, Li-Jia Li, Kai Li, Li Fei-Fei | *ImageNet: A Large-Scale Hierarchical Image Database* | 2009 / year | Abstract; §1; §2 | PDF hosted by ImageNet; retrieved 2026-08-25. https://www.image-net.org/static_files/papers/imagenet_cvpr09.pdf |
| `SP02-S02` | S1 / proceedings paper | Alex Krizhevsky, Ilya Sutskever, Geoffrey E. Hinton | *ImageNet Classification with Deep Convolutional Neural Networks* | 2012 / year | Abstract; §§1–3; §6 | NeurIPS proceedings PDF; retrieved 2026-08-25. https://proceedings.neurips.cc/paper_files/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf |
| `SP02-S03` | S1 / official technical documentation | NVIDIA | *CUDA Toolkit 1.1 (December 2007)* | December 2007 / month | Release Highlights | NVIDIA Developer page; retrieved 2026-08-25. https://developer.nvidia.com/content/cuda-toolkit-11-june-2007 |

## 5. Evidence notes

### `SP02-S01`

- Abstract: “We introduce here a new database called ‘ImageNet’, a large-scale ontology of images built upon the backbone of the WordNet structure.”
- Abstract: “This paper offers a detailed analysis of ImageNet in its current state: 12 subtrees with 5247 synsets and 3.2 million images in total.”
- §1: “ImageNet uses the hierarchical structure of WordNet.”

### `SP02-S02`

- Abstract: “We trained a large, deep convolutional neural network to classify the 1.2 million high-resolution images in the ImageNet LSVRC-2010 contest into the 1000 different classes.”
- Abstract: “We also entered a variant of this model in the ILSVRC-2012 competition and achieved a winning top-5 test error rate of 15.3%, compared to 26.2% achieved by the second-best entry.”
- §1: “Luckily, current GPUs, paired with a highly-optimized implementation of 2D convolution, are powerful enough to facilitate the training of interestingly-large CNNs, and recent datasets such as ImageNet contain enough labeled examples to train such models without severe overfitting.”
- §1: “Our network takes between five and six days to train on two GTX 580 3GB GPUs.”
- §2: “ILSVRC uses a subset of ImageNet with roughly 1000 images in each of 1000 categories. In all, there are roughly 1.2 million training images, 50,000 validation images, and 150,000 testing images.”

### `SP02-S03`

- Release Highlights: “CUDA integrated into display driver (169.09 and above on Windows, 169.01 and above on Linux).”
- The page title labels the artifact “CUDA Toolkit 1.1 (December 2007).”

## 6. Atomic claim ledger

Researcher confidence uses the existing project-style labels provisionally; it is not a Fact-checker verdict. `fact_checker_*` fields are intentionally blank pending independent review.

| claim_id | claim_text | criticality / reason | subject_ref / object_ref | date_or_period / precision | source_ids | evidence_locators | researcher_confidence | gaps_or_conflicts | proposed_verdict | fact_checker_verdict | fact_checker_reviewed_by / fact_checker_reviewed_at |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `SP02-C01` | The 2009 ImageNet paper describes ImageNet as a large-scale ontology of images built on the WordNet structure. | Critical — dataset anchor. | `dataset-imagenet` / `knowledge-base-wordnet` | 2009 / year | `SP02-S01` | Abstract; §1 quotes in §5 | high | Describes the paper's account; does not establish later benchmark use. | `accepted` |  |  |
| `SP02-C02` | The 2009 ImageNet paper reports 12 subtrees, 5,247 synsets, and 3.2 million images in the database state it analyzed. | Non-critical — historical dataset-state context. | `dataset-imagenet` / — | 2009 / year | `SP02-S01` | Abstract quote in §5 | high | Counts are paper-specific and must not be used as current statistics. | `accepted` |  |  |
| `SP02-C03` | Krizhevsky, Sutskever, and Hinton report training a deep convolutional neural network on 1.2 million high-resolution images in ImageNet LSVRC-2010 across 1,000 classes. | Critical — model/dataset transition. | `paper-alexnet-2012` / `subset-ilsvrc-2010-image-classification` | 2012 / year | `SP02-S02` | Abstract quote in §5 | high | The paper reports the authors' experiment. | `accepted` |  |  |
| `SP02-C04` | The AlexNet paper reports a winning ILSVRC-2012 top-5 test error rate of 15.3%, compared with 26.2% for the second-best entry. | Critical — documented result. | `paper-alexnet-2012` / `event-ilsvrc-2012` | 2012 / year | `SP02-S02` | Abstract quote in §5 | high | Independent competition record was not retrieved in this packet. | `accepted_with_reservations` |  |  |
| `SP02-C05` | The AlexNet paper states that current GPUs paired with a highly optimized 2D-convolution implementation facilitated training of large CNNs in the reported work. | Critical — compute transition. | `paper-alexnet-2012` / `technology-optimized-2d-convolution-implementation` | 2012 / year | `SP02-S02` | §1 quote in §5 | high | This supports the paper's technical account, not a universal causal claim about GPUs. | `accepted` |  |  |
| `SP02-C06` | The AlexNet paper states that its network took between five and six days to train on two GTX 580 3GB GPUs. | Non-critical — concrete training context. | `paper-alexnet-2012` / `hardware-gtx-580-3gb` | 2012 / year | `SP02-S02` | §1 quote in §5 | high | Exact configuration applies to the reported network/training, not all variants. | `accepted` |  |  |
| `SP02-C07` | NVIDIA's developer page labels CUDA Toolkit 1.1 as a December 2007 release and lists release highlights. | Non-critical — compute-history context only. | `software-cuda-toolkit-1-1` / `organization-nvidia` | December 2007 / month | `SP02-S03` | Page title and Release Highlights in §5 | medium | Page URL contains “june-2007” while page title says December 2007; retain the title's stated precision and do not infer an AlexNet connection. | `accepted_with_reservations` |  |  |

## 7. Relation ledger

Relation types below are **semantic proposals pending the approved ontology contract**. They are not publishable typed edges until the Graph Curator validates the actual permitted relation vocabulary. No relation is proposed from chronology alone.

| relation_id | from → to | candidate_type / ontology status | proposed relation meaning | direct support / inference | source_ids / evidence_locators | time/scope limitations | researcher_confidence / proposed status | gaps_or_conflicts | proposed_verdict | fact_checker_verdict | fact_checker_reviewed_by / fact_checker_reviewed_at |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `SP02-R01` | `paper-alexnet-2012` → `person-alex-krizhevsky` | `authored_by` — ontology-pending candidate type | Authorship: the paper lists Krizhevsky as an author. | Direct. | `SP02-S02`; paper header. | Authorship of this paper only. | high / candidate | Validate canonical person record and whether `authored_by` is permitted by the approved ontology. | `accepted` |  |  |
| `SP02-R02` | `paper-alexnet-2012` → `person-ilya-sutskever` | `authored_by` — ontology-pending candidate type | Authorship: the paper lists Sutskever as an author. | Direct. | `SP02-S02`; paper header. | Authorship of this paper only. | high / candidate | Validate canonical person record and whether `authored_by` is permitted by the approved ontology. | `accepted` |  |  |
| `SP02-R03` | `paper-alexnet-2012` → `person-geoffrey-e-hinton` | `authored_by` — ontology-pending candidate type | Authorship: the paper lists Hinton as an author. | Direct. | `SP02-S02`; paper header. | Authorship of this paper only. | high / candidate | Validate canonical person record and whether `authored_by` is permitted by the approved ontology. | `accepted` |  |  |
| `SP02-R04` | `subset-ilsvrc-2010-image-classification` → `paper-alexnet-2012` | `used_by` — ontology-pending candidate type | Dataset/benchmark use: the paper reports training on this specific ImageNet LSVRC-2010 subset. | Direct. | `SP02-S02`; Abstract and §2 quotes in §5. | Establishes use in the paper, not that ImageNet alone caused the result. | high / candidate | Validate whether a dataset-to-paper `used_by` direction and this subset granularity are permitted by the approved ontology. | `accepted` |  |  |
| `SP02-R05` | `technology-optimized-2d-convolution-implementation` → `paper-alexnet-2012` | `technical_enablement` — ontology-pending candidate type | Technical enablement in the reported work: the paper says GPUs paired with this implementation facilitated training. | Direct for the paper's stated technical account. | `SP02-S02`; §1 quote in §5. | Do not generalize to all deep learning or assert a corporate NVIDIA relation. `hardware-gtx-580-3gb` remains a distinct training-context record in `SP02-C06`, not a combined endpoint for this edge. | high / candidate | Validate whether the source's wording entails the proposed direction and whether `technical_enablement` is permitted by the approved ontology. | `accepted_with_reservations` |  |  |

## 8. Contradictions, gaps, and expected-but-unproven relations

- **CUDA → AlexNet:** no retrieved source says that AlexNet used CUDA Toolkit 1.1, or establishes a direct dependency from that 2007 toolkit to the 2012 work. No edge is proposed.
- **Field-wide consequence:** this packet does not source an immediate research or industry consequence of AlexNet. A reported benchmark result does not, by itself, entail “changed the field.”
- **Neural-network revival:** no source here supports a bounded account of the relevant revival context; do not make this a path transition yet.
- **Google/DNNresearch transition:** named by the Research Program “where relevant,” but no source for it was retrieved. It remains out of scope for the current core.
- **Competition cross-check:** `SP02-C04` relies on the authors' paper for its competition comparison. Fact-check should independently inspect an official ILSVRC result source before assigning a final critical verdict.
- **Ontology vocabulary:** no approved relation-type contract was identified in the supplied canon. The relation rows are evidence-bearing semantic proposals, not asserted data-model edges.

## 9. Technical significance / suggested editorial “why it matters” notes

These are source-bounded interpretation/rationale, not new factual claims or graph relations.

- The paper's own account makes the convergence legible without a single-cause story: its reported result sits at the intersection of a large labeled benchmark subset, a deep CNN, and a GPU-optimized training implementation. This is an interpretation of `SP02-C03`–`SP02-C06`; it does not claim that any one component independently caused a field-wide change.
- The reader-facing answer may say that the paper gives a concrete example of dataset scale and compute constraints shaping what the authors could train. It must preserve the boundary: the source supports the reported experiment, not a general historical conclusion about all computer vision or AI.

## 10. Editorial guardrails

- Do not write that AlexNet “single-handedly revived deep learning,” “proved GPUs caused the AI boom,” or “made modern AI inevitable.”
- Do not state a direct CUDA-to-AlexNet dependency from this packet.
- Do not use the 2009 ImageNet counts as present-day statistics.
- Attribute competition results to the AlexNet paper unless independently cross-checked.
- Distinguish paper authorship from mentorship, intellectual influence, organizational lineage, or later employment.
- Do not turn the source's description of GPU-facilitated training into a universal causal relation.
- Keep the informal name “AlexNet” tied to the cited 2012 paper unless canonical naming is validated.

## 11. Researcher recommendation and Fact-check handoff

**Recommendation:** `investigate further` before an accepted Story Path. The core dataset–paper–compute evidence is sufficiently structured for independent review, but the product question asks why AlexNet was a convergence point. The packet deliberately does not claim the missing field-wide consequences, revival context, organizational transition, or CUDA dependency.

**Fact-check request:** Independently read `SP02-S01`–`SP02-S03`; verify every quoted locator and the author/result/hardware claims; obtain an official ILSVRC result source for `SP02-C04`; determine the approved ontology types for the relation proposals; and populate exactly one authoritative `fact_checker_verdict` plus `fact_checker_reviewed_by` and `fact_checker_reviewed_at` for every claim and relation.

**Editor handoff state:** No editorial copy is authorized from this researcher packet alone. If Fact-check accepts bounded items, the Editor receives the accepted claims/relations, source locators, the reservations above, the two technical-significance notes, these prohibited overstatements, and the open gaps.
