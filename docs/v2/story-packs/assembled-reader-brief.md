# Assembled reader brief — three flagship questions, as the record stands

Status: Editorial assembly. Not public copy. Not a publishable connected Story Path.
Editor: `editor`
Assembled against HEAD: `d256c2832e37e4a8bbf61317f9238fa0104d15e1`
Inputs: `sp01-editorial.md`, `sp02-editorial.md`, `sp04-editorial.md`, `sp01-factcheck.md`, `sp02-factcheck.md`, `sp04-factcheck.md`, `harvest-factcheck.md`

This file is the Editor return for V2-ED-ASSEMBLE. It restates accepted and reserved claims from the original SP01 / SP02 / SP04 fact-checks, plus harvest claims that later received `accepted` or `accepted_with_reservations`. Reservations stay visible. No new facts, dates, names, or causal links are added. Adjacent blocks are not a sequence of causes.

The three flagship questions remain:

1. How did a 2017 architecture become the basis of a mass-market AI interface?
2. Why was AlexNet a convergence of people, data, and compute rather than merely another image classifier?
3. How did graphics hardware become the infrastructure layer of frontier AI?

None of those questions is answered here as a connected history. The useful product of this assembly is the documented records, the few source-owned local links, and the gaps between them.

Do not publish this as three Story Paths, or as one mega-path. Shared names, shared vendors, and date order are not used to join packs.

## How to read this

Each record says what happened, why that record is on this intended path, and whether a transition exists. Where a transition sentence is missing, that is the content. A reader should finish knowing both what is established and where a popular account outruns the record.

Honesty class is marked in the evidence tables at the end. Class 1 is a documented fact. Class 2 is source-owned relation wording, with reservations. Class 3 is editorial arrangement, not a new edge.

Harvest did not mint entities, typed relations, or a connected path. Original packet verdicts remain `needs_more`. Harvest packet verdict is `accepted_with_reservations` for source-bounded claims only.

## What harvest changed

Harvest did not close the flagship questions. It added, or restated more tightly, a few already-read source sentences.

**Now writable that the original SP01 editorial could not say.** The GPT paper’s unsupervised pre-training passage describes that paper’s model as a Transformer architecture. The GPT-3 paper’s model-and-architectures section describes GPT-3 as using the GPT-2 model and architecture, with the paper’s stated exceptions.

Those sentences stay inside their papers. They are not typed graph edges. They do not join Transformer to ChatGPT. They do not make GPT-3 a successor of GPT-2.

**Now writable on SP02 with harvest IDs.** The 2012 paper’s GPU wording includes “interestingly-large CNNs.” NVIDIA’s CUDA Toolkit 1.1 page lists “CUDA integrated into display driver” among release highlights. The official ILSVRC 2012 Task 1 table lists SuperVision at `0.15315`, a second SuperVision submission at `0.16422`, and ISI at `0.26172`. The table confirms SuperVision’s best listed error as `0.15315`. It does not independently corroborate the 2012 paper’s “second-best entry” wording for `0.26172`.

**Now writable on SP04 from the later NVIDIA blog, kept separate from the 2016 announcement.** That blog describes DGX-1 as an integrated system for deep learning, states eight Tesla P100 GPU accelerators connected through NVLink, and identifies the NVIDIA CUDA Toolkit and cuDNN in the system’s software stack. The CUDA Toolkit wording is the later article’s. It is not evidence for what the 2016 announcement listed.

Harvest restated some original claims (InstructGPT’s supervised fine-tuning of GPT-3; the 2012 training duration; the CUDA Toolkit 1.1 title month). Restatements do not upgrade those claims into relations.

---

# Path 1 — From Transformer to ChatGPT

**Candidate subtitle:** Documented records; the connecting path is not yet evidenced

**One-sentence promise:** The 2017 Transformer paper, the GPT paper’s Transformer-architecture wording, OpenAI’s GPT-2 successor and Transformer-based wording, GPT-3’s few-shot setting and GPT-2-architecture wording, InstructGPT’s fine-tuning of GPT-3, and ChatGPT’s November 30, 2022 research preview are documented. The steps that would join them into one history are not.

### Attention Is All You Need and the Transformer

**What happened.** In 2017, the paper *Attention Is All You Need* proposed the Transformer, a network architecture based solely on attention mechanisms. It does not use recurrence or convolutions.

**Why it matters here.** This is the architecture named at the start of the flagship question. The accepted record is the proposal itself.

**Transition onward.** None as a typed path step. A later record, below, is the GPT paper describing *its own* model as a Transformer. That is not a published edge from this 2017 paper to GPT, GPT-2, GPT-3, InstructGPT, or ChatGPT.

### Generative pre-training paper

**What happened.** A paper on generative pre-training reports that a language model can perform well across a wide range of tasks with only minimal changes to the model architecture. The same paper’s unsupervised pre-training passage describes that paper’s model as a Transformer architecture.

**Why it matters here.** The method claim is about small architecture change, not a zero-change design. The architecture sentence is about this paper’s model. It is not a map of later systems.

**Reservation (keep visible).** Do not render the method claim as “no task-specific architecture modifications.” The source says “minimal changes.” The Transformer wording is a bounded architecture statement. Harvest forbids treating it as succession, influence, enablement, causation, or a connected path.

**Transition onward.** None as a typed edge. The architecture sentence does not establish `model-gpt → tech-transformer` as publishable data, and it does not connect this paper to GPT-2, GPT-3, InstructGPT, or ChatGPT.

### GPT-2

**What happened.** OpenAI’s GPT-2 release page calls GPT-2 “a successor to GPT.” The same page describes GPT-2 as a Transformer-based language model.

**Why it matters here.** This is still the only original-packet wording that both names a successor to GPT and calls a model Transformer-based. It is OpenAI’s description of GPT-2, not a map of everything that followed.

**Transition.** OpenAI called GPT-2 a successor to GPT (source wording; the generic “GPT” endpoint still needs ontology review). OpenAI described GPT-2 as Transformer-based (source wording; that does not establish onward lineage from the Transformer to later systems). Harvest does not add a typed GPT-2 relation.

### GPT-3

**What happened.** The GPT-3 paper’s abstract says GPT-3 is applied in a few-shot setting without any gradient updates or fine-tuning. Tasks and few-shot demonstrations are specified through text interaction with the model. Separately, the paper’s model-and-architectures section describes GPT-3 as using the same model and architecture as GPT-2, with the paper’s stated exceptions, including alternating dense and locally banded sparse-attention patterns.

**Why it matters here.** The few-shot record is an evaluation setting, not a successor step after GPT-2. The architecture record is that paper’s qualified comparison with GPT-2, not a Transformer claim for GPT-3 and not a typed succession.

**Reservation (keep visible).** “Same model and architecture” must keep the stated exceptions. Do not convert it into `successor_of`, `uses_architecture`, or a causal link. Do not chain it with GPT-2’s Transformer-based wording to say GPT-3 is Transformer-based.

**Transition.** None as a typed edge. Chronology and related names still do not make GPT-3 a successor of GPT-2.

### InstructGPT method and name

**What happened.** A paper on training language models to follow instructions with human feedback says the authors collect labeler demonstrations of the desired model behavior and use them to fine-tune GPT-3 using supervised learning. They then further fine-tune that supervised model with reinforcement learning from human feedback. The paper calls the resulting models InstructGPT.

**Why it matters here.** The accepted record is a two-stage fine-tuning method applied to GPT-3, plus the name the paper uses. It is not a product identity in the Atlas graph, and it is not a typed link to ChatGPT.

**Reservation (keep visible).** “InstructGPT” is the paper’s name for those resulting models. It is not an approved graph entity. Harvest re-accepted the supervised-fine-tuning sentence as source-bounded method wording only.

**Transition.** None as a graph edge. The method wording names GPT-3 as the fine-tuning base; that is not accepted as a typed relation.

### ChatGPT research preview

**What happened.** On November 30, 2022, OpenAI introduced ChatGPT as a research preview. The announcement says, “ChatGPT is a sibling model to InstructGPT.”

**Why it matters here.** This is the named endpoint event of the intended path: a dated OpenAI introduction, not a demonstrated mass-market consequence and not a proven descendant of the Transformer.

**Reservation (keep visible).** “Sibling model” is OpenAI’s phrase. It does not specify derivation, succession, family membership, or a causal mechanism.

**Transition.** None. Do not write that ChatGPT was built from InstructGPT, GPT-3, GPT-2, or the Transformer.

### Path 1 transitions not written

Needed for a connected path and not written, because they are not accepted as typed relations or causal copy:

- Transformer paper to GPT as a publishable edge
- GPT-2 to GPT-3 as succession
- GPT-3 as Transformer-based
- InstructGPT to GPT-3 as a typed edge
- ChatGPT derived from InstructGPT
- ChatGPT to GPT-3 or GPT-2
- Transformer to ChatGPT

Date order is not used as an explanation. Shared names, a shared organization, and shared architecture words are not used as an explanation. Harvest architecture sentences are not used as a chain.

---

# Path 2 — ImageNet, AlexNet, and GPU

**Candidate subtitle:** Documented records; the connecting path is not yet evidenced

**One-sentence promise:** The 2009 ImageNet paper, the 2012 Krizhevsky, Sutskever, and Hinton paper and its reported ILSVRC-2012 figure, that paper’s GPU training account, the official ILSVRC 2012 Task 1 table, and NVIDIA’s CUDA Toolkit 1.1 page are documented. The evidence that would make these one convergence history is not.

This draft uses “AlexNet” only as the informal label for the 2012 paper. That label is not a canonical entity.

### The 2009 ImageNet paper

**What happened.** The 2009 ImageNet paper describes ImageNet as a large-scale ontology of images built on the WordNet structure. The same paper reports 12 subtrees, 5,247 synsets, and 3.2 million images in the database state it analyzed.

**Why it matters here.** This is the dataset named at the start of the flagship path. The accepted record is the 2009 description and those counts, not later ImageNet releases and not challenge use.

**Reservation (keep visible).** Use the counts only as the 2009 paper’s analyzed state. They are not current statistics.

**Transition onward.** None. There is no accepted claim that the 2009 database caused the 2012 result, or that ImageNet as a whole was the training set for that paper.

### The 2012 paper and the LSVRC-2010 training setting

**What happened.** Krizhevsky, Sutskever, and Hinton report training a deep convolutional neural network on 1.2 million high-resolution images in the ImageNet LSVRC-2010 contest, across 1,000 classes. The 2012 paper lists those three people as authors.

**Why it matters here.** This is the training setting the pack actually supports: a named contest subset, a deep CNN, and three listed authors. It is not a claim that ImageNet as a whole caused the result, and it is not mentorship, influence, or later organizational lineage.

**Reservation (keep visible).** Authorship is for this paper only. The person identities, direction, and `authored_by` type are not ontology-approved. Dataset use is accepted only at this LSVRC-2010 subset.

**Transition.** The paper reports training on that LSVRC-2010 subset (source wording; not a publishable graph edge). No transition from the 2009 ImageNet paper. No mentorship or influence edge from Hinton.

### The paper’s ILSVRC-2012 comparison, and the official table

**What happened.** The same paper reports a winning ILSVRC-2012 top-5 test error rate of 15.3%, compared with 26.2% for the second-best entry. Separately, the official ILSVRC 2012 Task 1 results table lists SuperVision at `0.15315`, a second SuperVision submission at `0.16422`, and ISI at `0.26172`. That table confirms SuperVision’s best listed error as `0.15315`. It does not independently corroborate the paper’s literal “second-best entry” wording for `0.26172`.

**Why it matters here.** The paper’s comparison is the paper’s own wording. The official table is a second record of listed values and order. Neither is a measure of historical importance.

**Reservation (keep visible).** Attribute 15.3% / 26.2% to the paper. Attribute `0.15315` / `0.16422` / `0.26172` to the official table. Do not treat SuperVision as the identity of the 2012 paper. Do not treat either figure as a universal historical ranking. “Winning” is the paper’s word.

**Transition.** None. The paper discusses both the LSVRC-2010 training setting and the ILSVRC-2012 comparison. Shared naming and date order are not a succession or a causal step.

### GPU training in the reported work

**What happened.** The paper states that current GPUs, paired with a highly-optimized implementation of 2D convolution, are powerful enough to facilitate training of “interestingly-large CNNs.” It also states that its network took between five and six days to train on two GTX 580 3GB GPUs.

**Why it matters here.** This is the compute condition the pack supports: GPUs plus that implementation, for this training run. It is not a field-wide claim that GPUs changed computer vision.

**Reservation (keep visible).** The configuration and duration apply to the reported network and training run, not to all variants or later reproductions. The implementation is not identified as a named product, codebase, or corporate owner. A GTX 580 product name does not establish an NVIDIA relation. The paper does not say the work used CUDA.

**Transition.** The paper says that implementation, paired with GPUs, facilitated the reported training (source wording; not a publishable graph edge, and not a general GPU-history claim).

### CUDA Toolkit 1.1 as a separate page

**What happened.** NVIDIA’s developer page title labels CUDA Toolkit 1.1 “December 2007.” The same page lists “CUDA integrated into display driver” among its release highlights.

**Why it matters here.** This is a dated NVIDIA software record. It is not a step on the AlexNet path.

**Reservation (keep visible).** The page URL slug contains `june-2007`. Keep the title’s December 2007 month. Do not infer a different release date from the slug. A listed highlight does not prove that the 2012 paper used this toolkit, depended on it, or was enabled by it.

**Transition onward.** None. No cited source says the 2012 paper used CUDA Toolkit 1.1.

### Bounded reading that is not a path

Taken together, the accepted 2012 claims support only this limited reading: the reported work combined a large labeled benchmark subset, a deep CNN, and a GPU-optimized training implementation. That is an interpretation of those claims. It is not proof of a field-wide consequence, and it is not a connected Story Path.

### Path 2 transitions not written

- 2009 ImageNet database to the 2012 paper as cause or significance
- ImageNet as a whole to the 2012 paper (use is accepted only at the LSVRC-2010 subset)
- LSVRC-2010 subset to ILSVRC-2012 as succession or causal lineage
- CUDA Toolkit 1.1 to the 2012 paper or to the 2D-convolution implementation
- NVIDIA to the 2012 paper, the authors, or the GTX 580 hardware
- Hinton to the work as mentorship, influence, or intellectual transfer
- the 2012 paper to a neural-network revival, a modern AI boom, or any claim that the result made later AI inevitable

---

# Path 3 — NVIDIA, CUDA, and AI infrastructure

**Candidate subtitle:** Documented records; the connecting path is not yet evidenced

**One-sentence promise:** NVIDIA’s November 2006 CUDA introduction, its description of CUDA and of cuDNN, its current Tensor Cores wording, the April 5, 2016 DGX-1 announcement, and a later NVIDIA blog’s DGX-1 configuration and software-stack wording are documented. The evidence that would make these one infrastructure history is not.

Keep the 2016 announcement and the later blog as two records. Do not merge them.

### CUDA, November 2006

**What happened.** NVIDIA introduced CUDA in November 2006. NVIDIA describes CUDA as a general-purpose parallel computing platform and programming model.

**Why it matters here.** This is the software platform named on the intended path. The accepted record is NVIDIA’s own introduction and description, not later adoption, and not a claim that CUDA became industry infrastructure.

**Reservation (keep visible).** The date and the platform wording are NVIDIA’s account in its own documentation. They do not independently corroborate the historical date, and they do not establish influence or causation.

**Transition onward.** NVIDIA introduced CUDA (source wording; not a publishable graph edge). None onward to cuDNN, Tensor Cores, DGX-1, deep learning, or AI infrastructure.

### cuDNN as a library

**What happened.** NVIDIA describes cuDNN as a GPU-accelerated library of primitives for deep neural networks. NVIDIA’s documentation calls it the NVIDIA CUDA Deep Neural Network library.

**Why it matters here.** This is the DNN-library record the pack supports. It is a function claim about a library, not a dated release and not a named-framework dependency.

**Reservation (keep visible).** The living documentation used for this description does not supply a historical release date in the accessed text. It does not show use by any named framework, model, or deployment. The CUDA-branded name is NVIDIA’s wording, not a typed dependency on the CUDA platform.

**Transition.** None as a graph edge. The CUDA-branded library name is source wording only.

### Tensor Cores, as NVIDIA currently describes them

**What happened.** NVIDIA describes Tensor Cores as enabling mixed-precision computing for AI and HPC workloads.

**Why it matters here.** This is a vendor-documented capability. It is not an introduction event, and it is not a hardware step on a proven infrastructure path.

**Reservation (keep visible).** The wording is current product documentation. No introduction date is accepted. Accuracy, throughput, security, and performance language on that page stay with NVIDIA; they are not Atlas’s findings.

**Transition onward.** None. No accepted claim ties Tensor Cores to CUDA, cuDNN, DGX-1, a named model, or frontier-model scale.

### The April 5, 2016 DGX-1 announcement

**What happened.** On April 5, 2016, NVIDIA announced the DGX-1. The announcement lists eight Tesla P100 GPU accelerators and an NVLink Hybrid Cube Mesh. Its software section names the NVIDIA CUDA Deep Neural Network library (cuDNN) version 5.

**Why it matters here.** This is a dated NVIDIA announcement of a system configuration. It is not proof that graphics hardware became frontier-AI infrastructure, and it is not an independent ranking of the machine.

**Reservation (keep visible).** The source proves that NVIDIA made this announcement, with this listed configuration. It does not prove broader historical significance. “World’s first,” throughput, and “fastest” language in NVIDIA’s materials are marketing or forecast wording, not Atlas’s verdict. The 2016 software section names CUDA-branded cuDNN version 5. It does not list standalone CUDA Toolkit or CUDA platform software.

**Transition.** The announcement lists those accelerators, that interconnect, and cuDNN version 5 (source wording; announced configuration only). No transition from the 2006 CUDA record. No transition from Tensor Cores. No transition onward to hyperscale systems.

### Later NVIDIA blog on DGX-1 (separate record)

**What happened.** NVIDIA’s later DGX-1 technical-blog article describes DGX-1 as an integrated system for deep learning. It states that DGX-1 features eight Tesla P100 GPU accelerators connected through NVLink. It identifies the NVIDIA CUDA Toolkit in the system’s software stack, and it identifies cuDNN in the system’s software stack.

**Why it matters here.** This is a second NVIDIA-authored description. It can corroborate configuration wording. It cannot rewrite the 2016 announcement’s software list.

**Reservation (keep visible).** Vendor product description, not independent historical significance, adoption, or performance. The CUDA Toolkit sentence is the later article’s software-stack statement. Do not back-project it into the 2016 announcement. cuDNN in this article does not establish an ecosystem-wide dependency or a typed relation.

**Transition.** None as a typed edge. None from this article to modern infrastructure. None that joins CUDA 2006 to this blog.

### Path 3 transitions not written

- graphics hardware to deep-learning adoption, or NVIDIA as the cause of deep learning
- CUDA to deep learning as enablement or causation
- CUDA to cuDNN as a typed dependency, successor, or enablement
- standalone CUDA Toolkit or CUDA platform as an item in the 2016 DGX-1 software list
- Tensor Cores to a named model, system, or frontier scale
- DGX-1 to hyperscale AI systems or present-day infrastructure
- DGX-1 as “world’s first” or as a performance ranking
- NVIDIA to AlexNet, a named framework, or general deep-learning adoption
- the required modern hyperscale AI-systems endpoint (an open research gap)

---

# Cross-pack gaps

Do not join Path 1, Path 2, and Path 3. In particular, do not write:

- CUDA Toolkit 1.1, or CUDA, as the reason the 2012 paper trained on GPUs
- NVIDIA as a party to the 2012 paper
- Transformer, GPT, or ChatGPT as users of DGX-1, CUDA, cuDNN, or Tensor Cores
- ImageNet or AlexNet as a step toward ChatGPT

Those sentences are not in the accepted packs.

## Technical notes (L3)

**Path 1.** The Transformer, as proposed in *Attention Is All You Need*, is a network architecture based solely on attention mechanisms, without recurrence and convolutions. The GPT paper describes its model as a Transformer. The GPT-3 paper describes GPT-3 as using the GPT-2 model and architecture except for alternating dense and locally banded sparse-attention patterns.

**Path 2.** ImageNet, in the 2009 paper’s wording, is a large-scale ontology of images built on WordNet. The 2012 paper reports a deep convolutional neural network trained on 1.2 million high-resolution LSVRC-2010 images across 1,000 classes, with GPUs and an optimized 2D-convolution implementation, taking five to six days on two GTX 580 3GB GPUs.

**Path 3.** CUDA, in NVIDIA’s wording, is a general-purpose parallel computing platform and programming model, introduced in November 2006. cuDNN, in NVIDIA’s wording, is a GPU-accelerated library of primitives for deep neural networks. NVIDIA describes Tensor Cores as enabling mixed-precision computing for AI and HPC workloads. The 2016 DGX-1 announcement lists eight Tesla P100 GPU accelerators, an NVLink Hybrid Cube Mesh, and cuDNN version 5.

No further account of attention, training scale, convolution, CUDA programming, interconnect performance, named adopters, or later data-center systems is included, because those statements are not in the accepted claims.

## What this assembly does not claim

- `sp01-c06` (unsupported as written): not used.
- `sp04-c10` and `sp04-r05` (unsupported as written): not used. The 2016 announcement is not treated as listing standalone CUDA Toolkit or CUDA platform software.
- “Transformer led to ChatGPT,” “ChatGPT was built from InstructGPT,” “GPT-3 became ChatGPT,” GPT-3 as Transformer-based, or GPT-3 as successor of GPT-2.
- “Sibling model” as successor, derived-from, same-family, or a mechanism.
- Years for the GPT, GPT-2, GPT-3, or InstructGPT papers. Those years are not in the accepted claim texts.
- Parameter counts, training-corpus size, free preview pricing, or “mass-market” as a fact about ChatGPT.
- CUDA Toolkit 1.1 as a dependency of the 2012 paper.
- An NVIDIA-to-paper, NVIDIA-to-author, or NVIDIA-to-GTX-580 relation.
- ImageNet as the cause of the 2012 result.
- A neural-network revival, a modern AI boom, or any claim that the 2012 result made later AI inevitable.
- SuperVision as the identity of the 2012 paper.
- “NVIDIA caused deep learning,” “CUDA made modern AI inevitable,” “every frontier model depends on NVIDIA,” “DGX created hyperscale AI.”
- “World’s first,” “fastest,” throughput, superiority, or vendor forecasts as Atlas’s own verdict.
- ChatGPT, InstructGPT, AlexNet, CUDA, cuDNN, Tensor Cores, DGX-1, Tesla P100, or NVLink as minted graph entities.
- Superlatives, rankings, or lab marketing taken as Atlas’s own verdict.

## Return to Research

Needed before connected path copy can be written:

1. Direct evidence for the missing Path 1 transitions, especially Transformer → GPT as a publishable relation, GPT-2 → GPT-3 as succession, GPT-3 architecture as Transformer if that is wanted, and the permitted reading of InstructGPT / ChatGPT.
2. Independent evidence for Path 2’s question: why a convergence point rather than another image classifier, without inferring CUDA, NVIDIA, or a field-wide revival.
3. Independent technical-history evidence for Path 3’s transition from GPU computing and CUDA to deep-learning adoption, plus a bounded modern-infrastructure endpoint.
4. Approved ontology identities and relation types before any reserved relation is treated as publishable data.
5. If reader copy needs paper years other than 2017, December 2007 (CUDA Toolkit 1.1 title), April 5, 2016, and November 30, 2022, those dates as separately accepted claims.

Until then, the Editor will not invent connecting sentences to make the flagship questions look answered.

## Evidence layer (L4)

### Path 1

| Reader passage | Claims / relations | Honesty class | Reservation |
| --- | --- | --- | --- |
| 2017; title *Attention Is All You Need*; Transformer proposed | `sp01-c01`, `sp01-c02` | 1 | Year precision only. |
| Architecture based solely on attention; no recurrence or convolutions | `sp01-c02` | 1 | None beyond the abstract’s wording. |
| Language model performs well on diverse tasks with minimal architecture changes | `sp01-c03` | 1, reserved | Not a zero-change claim. |
| GPT paper’s unsupervised pre-training passage describes that paper’s model as a Transformer | `sp01-hv-c01` | 1 | Architecture statement about that paper; not a typed edge or onward path. |
| GPT-2 called “a successor to GPT” | `sp01-c04`, `sp01-r01` | 2, reserved | Source wording; generic GPT endpoint not ontology-approved. |
| GPT-2 described as Transformer-based | `sp01-c05`, `sp01-r02` | 2, reserved | Does not prove later systems use the Transformer. |
| GPT-3 few-shot; no gradient updates or fine-tuning; tasks via text | `sp01-c07` | 1 | Do not substitute `sp01-c06`. |
| GPT-3 paper describes GPT-3 as using the GPT-2 model and architecture, with stated exceptions | `sp01-hv-c02` | 1, reserved | Keep the sparse-attention exception; not `successor_of` or `uses_architecture`. |
| Supervised fine-tuning of GPT-3 on labeler demonstrations | `sp01-c08`, `sp01-hv-c03` | 1 | Not a typed InstructGPT→GPT-3 edge. |
| Further fine-tuning with reinforcement learning from human feedback | `sp01-c09` | 1 | Same limit. |
| Resulting models called InstructGPT | `sp01-c10` | 1, reserved | Name only; no new entity. |
| ChatGPT introduced as a research preview on November 30, 2022 | `sp01-c11` | 1 | Day precision from the announcement page. |
| “ChatGPT is a sibling model to InstructGPT.” | `sp01-c12`, `sp01-r03` | 2, reserved | Attributed phrase only; no typed relation. |
| These records do not form a connected path | Original packet `needs_more`; harvest forbids typed edges | 3 | Editorial refusal, not a new historical claim. |

Sources (from the fact-check registers, not re-fetched here): `src-a01` *Attention Is All You Need*; `src-as01` *Improving Language Understanding by Generative Pre-Training*; `src-as02` *Better language models and their implications*; `src-a04` *Language Models are Few-Shot Learners*; `src-a08` *Training language models to follow instructions with human feedback*; `src-a15` *Introducing ChatGPT*.

### Path 2

| Reader passage | Claims / relations | Honesty class | Reservation |
| --- | --- | --- | --- |
| 2009; ImageNet described as a large-scale ontology of images built on WordNet | `SP02-C01` | 1 | Paper description only; not later releases. |
| 12 subtrees; 5,247 synsets; 3.2 million images | `SP02-C02` | 1 | 2009 analyzed state, not current statistics. |
| Deep CNN trained on 1.2 million high-resolution LSVRC-2010 images; 1,000 classes | `SP02-C03`, `SP02-R04` | 1; 2, reserved | Subset use only; not ImageNet-as-cause. |
| Paper lists Krizhevsky, Sutskever, and Hinton as authors | `SP02-R01`, `SP02-R02`, `SP02-R03` | 2, reserved | This paper only; not mentorship or influence. |
| Informal label “AlexNet” tied to the 2012 paper | Fact-check naming guardrail | 3 | Not a canonical entity. |
| Paper reports winning ILSVRC-2012 top-5 test error 15.3% vs 26.2% second-best | `SP02-C04` | 1, reserved | Paper attribution only. |
| Official table SuperVision `0.15315`, second SuperVision `0.16422`, ISI `0.26172` | `SP02-HV-C05` | 1 | Table contents and order only. |
| Table confirms best listed error `0.15315`; does not corroborate “second-best” for `0.26172` | `SP02-HV-C06`, `SP02-C04` reservation | 1, reserved | Not an Atlas ranking; SuperVision is not equated with the paper. |
| GPUs plus optimized 2D convolution facilitate training of “interestingly-large CNNs” | `SP02-C05`, `SP02-HV-C01`, `SP02-R05` | 1; 2, reserved | Reported work only; not field-wide GPU causation. |
| Five to six days on two GTX 580 3GB GPUs | `SP02-C06`, `SP02-HV-C02` | 1 | This training run only; product name is not an NVIDIA edge. |
| CUDA Toolkit 1.1 labeled December 2007 | `SP02-C07`, `SP02-HV-C03` | 1, reserved | Keep title month; URL slug is `june-2007`; no AlexNet link. |
| Release highlight “CUDA integrated into display driver” | `SP02-HV-C04` | 1, reserved | Vendor highlight only; not an AlexNet dependency. |
| Reported work combined a large labeled subset, a deep CNN, and GPU-optimized training | `SP02-C03`–`SP02-C06`; fact-check bounded reading | 3 | Interpretation of accepted claims; not a field-wide consequence. |
| These records do not form a connected path | Original packet `needs_more` | 3 | Editorial refusal. |

Sources: `SP02-S01` *ImageNet: A Large-Scale Hierarchical Image Database*; `SP02-S02` *ImageNet Classification with Deep Convolutional Neural Networks*; `SP02-S03` *CUDA Toolkit 1.1 (December 2007)*; `SP02-FC-S04` ILSVRC 2012 official results.

### Path 3

| Reader passage | Claims / relations | Honesty class | Reservation |
| --- | --- | --- | --- |
| NVIDIA introduced CUDA in November 2006 | `sp04-c01`, `sp04-r01` | 1, reserved; 2, reserved | NVIDIA’s own documentation; not independent corroboration. |
| CUDA described as a general-purpose parallel computing platform and programming model | `sp04-c02` | 1, reserved | Vendor characterization; not industry-infrastructure or causation. |
| cuDNN described as a GPU-accelerated library of primitives for deep neural networks | `sp04-c03` | 1, reserved | No release date; no named adopter. |
| CUDA-branded name NVIDIA CUDA Deep Neural Network library | `sp04-r02`, `sp04-c12` | 2, reserved | Source wording only; not a CUDA→cuDNN typed edge. |
| NVIDIA describes Tensor Cores as enabling mixed-precision computing for AI and HPC workloads | `sp04-c04` | 2, reserved | Current product page; no introduction date. |
| NVIDIA announced DGX-1 on April 5, 2016 | `sp04-c05` | 1, reserved | Proves the announcement, not historical significance or “world’s first.” |
| Announcement lists eight Tesla P100 GPU accelerators | `sp04-c08`, `sp04-r03` | 1, reserved; 2, reserved | Announced configuration. |
| Announcement lists NVLink Hybrid Cube Mesh | `sp04-c09`, `sp04-r04` | 1, reserved; 2, reserved | Announced configuration. |
| 2016 software section names NVIDIA CUDA Deep Neural Network library (cuDNN) version 5 | `sp04-c11`, `sp04-c12`, `sp04-r06` | 1, reserved; 2, reserved | CUDA-branded cuDNN v5, not standalone CUDA Toolkit. |
| Later blog describes DGX-1 as an integrated system for deep learning | `sp04-h-c01` | 1, reserved | NVIDIA-authored description. |
| Later blog: eight Tesla P100 GPU accelerators connected through NVLink | `sp04-h-c02` | 1, reserved | Configuration claim; not a typed component relation. |
| Later blog identifies NVIDIA CUDA Toolkit in the software stack | `sp04-h-c03` | 1, reserved | Later article only; do not back-project into 2016. |
| Later blog identifies cuDNN in the software stack | `sp04-h-c04` | 1, reserved | Vendor stack; not an ecosystem-wide dependency. |
| These records do not form a connected path | Original packet `needs_more`; harvest forbids typed edges | 3 | Editorial refusal. |

Sources: `sp04-s01` *CUDA C++ Programming Guide*, archived 11.4.0; `sp04-s02` *NVIDIA cuDNN*; `sp04-s03` *NVIDIA Tensor Cores*; `sp04-s04` *NVIDIA Launches World’s First Deep Learning Supercomputer*; `sp04-s05` *NVIDIA DGX-1: The Fastest Deep Learning System*.

## Handoff fields

| Field | Copy |
| --- | --- |
| Candidate titles | From Transformer to ChatGPT; ImageNet, AlexNet, and GPU; NVIDIA, CUDA, and AI infrastructure |
| Candidate subtitle (all three) | Documented records; the connecting path is not yet evidenced |
| Short summary | Three intended flagship questions have documented endpoint and method records, plus a few harvest sentences from already-read sources (GPT paper Transformer wording; GPT-3’s qualified GPT-2 architecture wording; ILSVRC table values; a CUDA Toolkit 1.1 highlight; a later DGX-1 blog’s configuration and software-stack wording). They do not form connected Story Paths. |
| Why it matters | Path-level consequence is omitted on all three questions. Record-level why-it-matters is limited to the mechanism or source wording each accepted claim actually carries. Gaps are part of the reading experience. |
| Transition copy | Path 1: GPT-2 → GPT (successor wording) and GPT-2 as Transformer-based; harvest architecture sentences are not transitions. Path 2: paper-reported LSVRC-2010 subset use, paper authorship, and paper-stated GPU / 2D-convolution facilitation. Path 3: NVIDIA→CUDA introduction wording, CUDA-branded cuDNN naming, and DGX-1 announced configuration; later blog kept separate. None are publishable graph edges. |
| Publication recommendation | Do not ship as connected Story Paths. Reuse record blurbs only after Research closes the gaps, ontology is decided, and Fact-check re-accepts the transitions. Designer work, if any, must treat gaps as content rather than draw a six-step spine. |

## Audit record

- Workspace: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_CLONE_2026-08-25`
- Git root: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_CLONE_2026-08-25`
- Branch: `v2-bootstrap`
- HEAD at assembly: `d256c2832e37e4a8bbf61317f9238fa0104d15e1`
- Project marker: `.hermes.md` contains `AI Evolution Atlas`.
- Governing inputs read: `docs/v2/06-research-evidence-methodology.md`, `docs/v2/05-content-editorial-system.md`, `docs/v2/CLAUDE-M1-CHECKPOINT-REVIEW.md`, `docs/v2/PROGRAM-ROADMAP.md`, `docs/v2/DEC-001.md`.
- Authored file boundary: only `docs/v2/story-packs/assembled-reader-brief.md`.
- Registry: `docs/reports/v2-card-ids.json` already contained `"V2-ED-ASSEMBLE": "t_cee52d30"`; it was not modified because it is outside this card’s assigned file boundary.
