# SP02 editorial draft  -  ImageNet / AlexNet

Status: Editorial working draft. Not public copy. Not a publishable connected Story Path.
Packet: `SP02-imagenet-alexnet-gpu-r1`
Fact-check: `docs/v2/story-packs/sp02-factcheck.md` (packet verdict: `needs_more`)
Editor: `editor`
Drafted against HEAD: `3bc5db0e18ed5890a6872fddd83ab4cf5a1ad7a7`

This file is the Editor return for V2-ED-SP02. Every reader sentence below is a paraphrase of an `accepted` or `accepted_with_reservations` claim. Reservations stay visible. No new facts, dates, names, or causal links are added.

## Path status

The flagship question is still: why was AlexNet a convergence of people, data, and compute rather than merely another image classifier?

The matching fact-check does not authorize an answer. Dataset, paper, and reported-compute claims exist. The historical-context and ontology decisions that would join them into one path do not. This draft therefore does **not** narrate a path. It states what the accepted records say, and it stops where the evidence stops.

Do not publish this as a connected Story Path.

## Entry (L1)

**Candidate title:** ImageNet, AlexNet, and GPU

**Candidate subtitle:** Documented records; the connecting path is not yet evidenced

**One-sentence promise:** The 2009 ImageNet paper, the 2012 Krizhevsky, Sutskever, and Hinton paper and its reported ILSVRC-2012 figure, that paper's GPU training account, and NVIDIA's CUDA Toolkit 1.1 page are documented. The evidence that would make these one convergence history is not.

The title names the intended path. It does not claim the path is proven.

## Documented records (L2)

Each block is independent. Adjacent blocks are not a sequence of causes. Where a transition sentence is missing, that is deliberate.

### The 2009 ImageNet paper

**What happened.** The 2009 ImageNet paper describes ImageNet as a large-scale ontology of images built on the WordNet structure. The same paper reports 12 subtrees, 5,247 synsets, and 3.2 million images in the database state it analyzed.

**Why it matters here.** This is the dataset named at the start of the flagship path. The accepted record is the 2009 description and those counts, not later ImageNet releases and not challenge use.

**Reservation (keep visible).** Use the counts only as the 2009 paper's analyzed state. They are not current statistics.

**Transition onward.** None. There is no accepted claim that the 2009 database caused the 2012 result, or that ImageNet as a whole was the training set for that paper.

### The 2012 paper and the LSVRC-2010 training setting

**What happened.** Krizhevsky, Sutskever, and Hinton report training a deep convolutional neural network on 1.2 million high-resolution images in the ImageNet LSVRC-2010 contest, across 1,000 classes. The 2012 paper lists those three people as authors. This draft uses "AlexNet" only as the informal label for that paper.

**Why it matters here.** This is the training setting the pack actually supports: a named contest subset, a deep CNN, and three listed authors. It is not a claim that ImageNet as a whole caused the result, and it is not mentorship, influence, or later organizational lineage.

**Reservation (keep visible).** Authorship is for this paper only. The person identities, direction, and `authored_by` type are not ontology-approved. Dataset use is accepted only at this LSVRC-2010 subset. The informal name "AlexNet" is not a canonical entity decision.

**Transition.** The paper reports training on that LSVRC-2010 subset (source wording; not a publishable graph edge, and not a claim that the dataset alone produced the result). No transition from the 2009 ImageNet paper. No mentorship or influence edge from Hinton.

### The paper's ILSVRC-2012 comparison

**What happened.** The same paper reports a winning ILSVRC-2012 top-5 test error rate of 15.3%, compared with 26.2% for the second-best entry.

**Why it matters here.** The accepted record is the paper's own comparison, not an official ranking Atlas has independently confirmed, and not a measure of historical importance.

**Reservation (keep visible).** Attribute the 15.3% / 26.2% comparison to the paper. An official ILSVRC 2012 results table confirms the best rounded 15.3% figure (`0.15315`). It lists a second SuperVision submission at `0.16422` before an ISI result of `0.26172`, so it does not independently confirm the paper's "second-best entry" wording or the 26.2% ranking. Do not treat either figure as a universal historical ranking. "Winning" is the paper's word.

**Transition.** None. The paper discusses both the LSVRC-2010 training setting and the ILSVRC-2012 comparison. Shared naming and date order are not a succession or a causal step.

### GPU training in the reported work

**What happened.** The paper states that current GPUs, paired with a highly optimized implementation of 2D convolution, facilitated training of large CNNs in the reported work. It also states that its network took between five and six days to train on two GTX 580 3GB GPUs.

**Why it matters here.** This is the compute condition the pack supports: GPUs plus that implementation, for this training run. It is not a field-wide claim that GPUs changed computer vision.

**Reservation (keep visible).** The configuration and duration apply to the reported network and training run, not to all variants or later reproductions. The implementation is not identified as a named product, codebase, or corporate owner. A GTX 580 product name does not establish an NVIDIA relation.

**Transition.** The paper says that implementation, paired with GPUs, facilitated the reported training (source wording; not a publishable graph edge, and not a general GPU-history claim).

### CUDA Toolkit 1.1 as a separate page

**What happened.** NVIDIA's developer page labels CUDA Toolkit 1.1 as a December 2007 release and lists release highlights.

**Why it matters here.** This is a dated NVIDIA software record. It is not a step on the AlexNet path.

**Reservation (keep visible).** The page URL slug contains `june-2007`. Keep the title's December 2007 month. Do not infer a different release date from the slug, and do not infer an AlexNet connection.

**Transition onward.** None. No cited source says the 2012 paper used CUDA Toolkit 1.1, or that the toolkit was a dependency.

## Bounded reading that is not a path

Taken together, the accepted 2012 claims support only this limited reading: the reported work combined a large labeled benchmark subset, a deep CNN, and a GPU-optimized training implementation. That is an interpretation of those claims. It is not proof of a field-wide consequence, and it is not a connected Story Path.

## Transitions not written

The following would be needed for a connected path and are not written, because they are not accepted:

- 2009 ImageNet database to the 2012 paper as cause or significance
- ImageNet as a whole to the 2012 paper (use is accepted only at the LSVRC-2010 subset)
- LSVRC-2010 subset to ILSVRC-2012 as succession or causal lineage
- CUDA Toolkit 1.1 to the 2012 paper or to the 2D-convolution implementation
- NVIDIA to the 2012 paper, the authors, or the GTX 580 hardware
- Hinton to the work as mentorship, influence, or intellectual transfer
- the 2012 paper to a neural-network revival, a modern AI boom, or any claim that the result made later AI inevitable

Date order is not used as an explanation. A hardware brand name, a shared contest name, and a benchmark score are not used as an explanation.

## Technical note (L3)

ImageNet, in the 2009 paper's wording, is a large-scale ontology of images built on WordNet. The 2012 paper reports a deep convolutional neural network trained on 1.2 million high-resolution LSVRC-2010 images across 1,000 classes, with GPUs and an optimized 2D-convolution implementation, taking five to six days on two GTX 580 3GB GPUs.

No further account of convolution, CUDA programming, or later ImageNet releases is included, because those statements are not in the accepted claims.

## Evidence layer (L4)

Honesty class is marked per sentence group. Class 1 is a documented fact. Class 2 is evidence-backed influence or source-owned relation wording, with reservations. Class 3 is editorial arrangement (what to show on this intended path), not a new edge.

| Reader passage | Claims / relations | Honesty class | Reservation |
| --- | --- | --- | --- |
| 2009; ImageNet described as a large-scale ontology of images built on WordNet | `SP02-C01` | 1 | Paper description only; not later releases. |
| 12 subtrees; 5,247 synsets; 3.2 million images | `SP02-C02` | 1 | 2009 analyzed state, not current statistics. |
| Deep CNN trained on 1.2 million high-resolution LSVRC-2010 images; 1,000 classes | `SP02-C03`, `SP02-R04` | 1; 2, reserved | Subset use only; not ImageNet-as-cause; relation type ontology-pending. |
| Paper lists Krizhevsky, Sutskever, and Hinton as authors | `SP02-R01`, `SP02-R02`, `SP02-R03` | 2, reserved | This paper only; identities and `authored_by` not ontology-approved; not mentorship or influence. |
| Informal label "AlexNet" tied to the 2012 paper | Fact-check §6 naming guardrail | 3 | Not a canonical entity. |
| Paper reports winning ILSVRC-2012 top-5 test error 15.3% vs 26.2% second-best | `SP02-C04` | 1, reserved | Paper attribution only; official table confirms `0.15315` but not the 26.2% ranking. |
| Official table `0.15315` / `0.16422` / `0.26172` used only to bound that reservation | `SP02-C04` reservation; `SP02-FC-S04` | 2, reserved | Not an Atlas ranking; SuperVision is not equated with the paper. |
| GPUs plus optimized 2D convolution facilitated training of large CNNs in the reported work | `SP02-C05`, `SP02-R05` | 1; 2, reserved | Reported work only; not field-wide GPU causation; type ontology-pending. |
| Five to six days on two GTX 580 3GB GPUs | `SP02-C06` | 1 | This training run only; product name is not an NVIDIA edge. |
| CUDA Toolkit 1.1 labeled December 2007; release highlights listed | `SP02-C07` | 1, reserved | Keep title month; URL slug is `june-2007`; no AlexNet link. |
| Reported work combined a large labeled subset, a deep CNN, and GPU-optimized training | `SP02-C03`–`SP02-C06`; fact-check §6 bounded reading | 3 | Interpretation of accepted claims; not a field-wide consequence. |
| These records do not form a connected path | Fact-check packet verdict `needs_more`; §5 unproven transitions | 3 | Editorial refusal, not a new historical claim. |

Sources used (from the fact-check register, not re-fetched here): `SP02-S01` *ImageNet: A Large-Scale Hierarchical Image Database*; `SP02-S02` *ImageNet Classification with Deep Convolutional Neural Networks*; `SP02-S03` *CUDA Toolkit 1.1 (December 2007)*; `SP02-FC-S04` ILSVRC 2012 official results (reservation cross-check only).

## What this draft does not claim

- CUDA Toolkit 1.1 as a dependency of the 2012 paper or of the 2D-convolution implementation.
- An NVIDIA-to-paper, NVIDIA-to-author, or NVIDIA-to-GTX-580 relation.
- ImageNet as the cause of the 2012 result.
- LSVRC-2010 to ILSVRC-2012 as succession.
- Hinton as mentor or intellectual source beyond listed authorship.
- A neural-network revival, a modern AI boom, or any claim that the result made later AI inevitable.
- "AlexNet" as a minted graph entity.
- ImageNet paper authors, University of Toronto affiliation, validation/test image counts, or CUDA release-highlight details. Those strings are not in the accepted claim texts.
- SuperVision as the identity of the 2012 paper.
- Superlatives, rankings, or lab marketing taken as Atlas's own verdict.

## Return to Research

Needed before connected path copy can be written:

1. Independent, directly entailing evidence for the broader historical consequence or bounded comparative context required by the question "why a convergence point rather than merely another image classifier?"
2. Approved ontology types and canonical identities for `SP02-R01`–`SP02-R05` before any relation is treated as publishable data.
3. If a CUDA, NVIDIA, neural-network revival, Google/DNNresearch, influence, or field-wide consequence transition is wanted, return it to Research with a source request. Do not infer it from dates, hardware branding, or the benchmark figure.
4. If reader copy needs a ranking that is not only the paper's 15.3% / 26.2% wording, a separately accepted claim that resolves the official-table reservation.

Until then, the Editor will not invent connecting sentences to make the flagship question look answered.

## Handoff fields

| Field | Copy |
| --- | --- |
| Candidate title | ImageNet, AlexNet, and GPU |
| Candidate subtitle | Documented records; the connecting path is not yet evidenced |
| Short summary | The 2009 ImageNet paper describes ImageNet as a WordNet-based image ontology and reports 12 subtrees, 5,247 synsets, and 3.2 million images in the state it analyzed. A separate 2012 paper by Krizhevsky, Sutskever, and Hinton reports training a deep CNN on 1.2 million LSVRC-2010 images across 1,000 classes, a paper-attributed ILSVRC-2012 top-5 comparison of 15.3% versus 26.2%, and five-to-six-day training on two GTX 580 3GB GPUs with an optimized 2D-convolution implementation. NVIDIA's page labels CUDA Toolkit 1.1 as a December 2007 release. These records do not yet form one connected path. |
| Why it matters | Path-level consequence is omitted: the pack does not support an explanation of why this work was a convergence rather than another image classifier. Record-level why-it-matters is limited to the mechanism or source wording each accepted claim actually carries. A bounded reading of the 2012 claims (large labeled subset + deep CNN + GPU-optimized training) is interpretation, not a path answer. |
| Optional technical note | 2009 ImageNet = WordNet-structured image ontology, with the paper's 12 / 5,247 / 3.2 million counts. 2012 training = 1.2 million LSVRC-2010 images, 1,000 classes, two GTX 580 3GB GPUs, five to six days, optimized 2D convolution. |
| Transition copy | Only paper-reported LSVRC-2010 subset use, paper authorship, and paper-stated GPU / 2D-convolution facilitation. No other transitions. None are publishable graph edges. |
| Publication recommendation | Do not ship as a connected Story Path. Reuse record blurbs only after Research closes the gaps, ontology is decided, and Fact-check re-accepts the transitions. |
