# AIH-16 — Supplementary raw evidence: 2017–2022

## Provenance and scope

- `cwd`: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- `git_root`: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- `head`: `f5d61c02e5c9e7cf08f347be6d82ffadd400ee90`
- Workspace project marker: `AI Evolution Atlas`
- Status: raw research evidence only; this supplement does not create or modify canonical `data/` records.

This supplement applies the S1-primary policy in `spec/ai-atlas/05-research-contract.md`. It rescues A07 and A13 from the existing batch and adds five 2017–2022 candidates selected for their proximity to accepted A-records. Dates use day precision only where a retrieved source supplies a day.

LLaMA 1 and Llama 2 were not added: their primary records are dated 2023, outside this card’s stated 2017–2022 boundary. They remain appropriate candidates for the later-period supplement, not this file.

## Source register

| ID | Class | Publisher / authoring organization | Publication date visible in retrieved material | Title |
|---|---|---|---|---|
| SA01 | primary | OpenAI | 2021-02-26 | Learning Transferable Visual Models From Natural Language Supervision |
| SA02 | primary | OpenAI | 2022-04-13 | Hierarchical Text-Conditional Image Generation with CLIP Latents |
| SA03 | primary | OpenAI | 2018 (paper PDF; no day asserted) | Improving Language Understanding by Generative Pre-Training |
| SA04 | primary | OpenAI | 2019 (official release post; no day asserted in retrieved content) | Better language models and their implications |
| SA05 | primary | OpenAI | 2021-07-07 | Evaluating Large Language Models Trained on Code |
| SA06 | primary | CompVis / authors | 2021-12-20 | High-Resolution Image Synthesis with Latent Diffusion Models |
| SA07 | primary | Google Research / authors | 2022-05-23 | Photorealistic Text-to-Image Diffusion Models with Deep Language Understanding |

## Rescued existing candidates

### A07 — CLIP paper

- Date + precision: 2021-02-26 (`day`)
- Category: paper / model
- Organization(s): OpenAI
- Authors: Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh, Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, and Ilya Sutskever.
- Full paper metadata: *Learning Transferable Visual Models From Natural Language Supervision*, arXiv:2103.00020; primary preprint published February 26, 2021.[SA01]
- Neutral summary: The paper describes pre-training by predicting which caption goes with which image using 400 million image-text pairs collected from the internet.[SA01] It reports using natural language to reference learned visual concepts for zero-shot transfer to downstream tasks.[SA01]
- Why it might matter: It provides a dated, primary-source multimodal model record in the batch.
- Supporting source IDs: SA01
- Relation candidates: none asserted. The retrieved paper does not establish a relation to A01 or A15 under the project’s relationship rule.
- Unresolved questions: none for paper identity, author list, organization, or first-submission date; canonical consolidation should still normalize source/entity IDs.
- Confidence: high
- Verification status: verified-ready

### A13 — DALL·E 2 / CLIP-latent paper

- Date + precision: 2022-04-13 (`day`)
- Category: paper / system
- Organization(s): OpenAI
- Authors: Aditya Ramesh, Prafulla Dhariwal, Alex Nichol, Casey Chu, and Mark Chen.
- Full paper metadata: *Hierarchical Text-Conditional Image Generation with CLIP Latents*, arXiv:2204.06125; primary preprint published April 13, 2022.[SA02]
- Neutral summary: The paper proposes a two-stage text-conditional image-generation model: a prior generates a CLIP image embedding from a text caption, and a decoder generates an image conditioned on that embedding.[SA02] It states that the decoder is trained to invert the CLIP image encoder and that diffusion models are used for the decoder.[SA02]
- Why it might matter: It supplies the technical S1 record that the original A13 release entry lacked.
- Supporting source IDs: SA02; original A13 release source S13 in `research/batches/2017-2022.md`
- Relation candidates: `uses_architecture` A13 → A07, high confidence, evidence SA02. The paper explicitly describes generation conditioned on a CLIP image embedding and a decoder trained to invert the CLIP image encoder. No relation to A15 is asserted.
- Unresolved questions: canonical consolidation must map the paper/system representation consistently, but the paper identity, author list, organization, and first-submission date are supported.
- Confidence: high
- Verification status: verified-ready

## New candidate evidence records

### AS01 — GPT / Improving Language Understanding by Generative Pre-Training

- Date + precision: 2018 (`year`)
- Category: paper / model
- Organization(s): OpenAI
- Authors: Alec Radford, Karthik Narasimhan, Tim Salimans, and Ilya Sutskever.
- Neutral summary: The OpenAI paper presents generative pre-training of a language model on unlabeled text followed by discriminative fine-tuning for target tasks.[SA03] It reports that its model uses a Transformer architecture and describes task-aware input transformations during fine-tuning.[SA03]
- Why it might matter: This is primary predecessor context for A04’s GPT-3 paper, without claiming an unsupported direct succession edge to A04.
- Supporting source IDs: SA03
- Relation candidates: `uses_architecture` AS01 → A01, high confidence, evidence SA03; the paper states that its model uses a Transformer architecture. No relation to A04 is asserted because the retrieved source does not identify GPT-3.
- Unresolved questions: the retrieved PDF supports the 2018 year but does not supply a day in the retrieved metadata.
- Confidence: high
- Verification status: verified-ready

### AS02 — GPT-2 / Better language models and their implications

- Date + precision: 2019 (`year`)
- Category: model / release
- Organization(s): OpenAI
- Neutral summary: OpenAI’s release post calls GPT-2 “a successor to GPT” and describes it as a Transformer-based language model with 1.5 billion parameters.[SA04] The post says GPT-2 was trained to predict the next word in 40GB of Internet text and describes a staged release approach.[SA04]
- Why it might matter: It supplies primary predecessor context between AS01 and A04, and it makes the GPT-family connection explicit for its own predecessor.
- Supporting source IDs: SA04
- Relation candidates: `uses_architecture` AS02 → A01, high confidence, evidence SA04; the official post explicitly calls GPT-2 Transformer-based. No edge to A04 is asserted because this source does not make that relation.
- Unresolved questions: capture a dated archive or original release page if canonical publication needs day precision.
- Confidence: high
- Verification status: verified-ready

### AS03 — Codex / Evaluating Large Language Models Trained on Code

- Date + precision: 2021-07-07 (`day`)
- Category: paper / model
- Organization(s): OpenAI (paper affiliations also list some authors as Anthropic or Zipline; the paper says those Anthropic/Zipline authors performed the work while at OpenAI).
- Authors: Mark Chen, Jerry Tworek, Heewoo Jun, Qiming Yuan, Henrique Ponde de Oliveira Pinto, Jared Kaplan, Harri Edwards, Yuri Burda, Nicholas Joseph, Greg Brockman, Alex Ray, Raul Puri, Gretchen Krueger, Michael Petrov, Heidy Khlaaf, Girish Sastry, Pamela Mishkin, Brooke Chan, Scott Gray, Nick Ryder, Mikhail Pavlov, Alethea Power, Lukasz Kaiser, Mohammad Bavarian, Clemens Winter, Philippe Tillet, Felipe Petroski Such, Dave Cummings, Matthias Plappert, Fotios Chantzis, Elizabeth Barnes, Ariel Herbert-Voss, William Hebgen Guss, Alex Nichol, Alex Paino, Nikolas Tezak, Jie Tang, Igor Babuschkin, Suchir Balaji, Shantanu Jain, William Saunders, Christopher Hesse, Andrew N. Carr, Jan Leike, Josh Achiam, Vedant Misra, Evan Morikawa, Alec Radford, Matthew Knight, Miles Brundage, Mira Murati, Katie Mayer, Peter Welinder, Bob McGrew, Dario Amodei, Sam McCandlish, Ilya Sutskever, and Wojciech Zaremba.
- Neutral summary: The paper introduces Codex as a GPT language model fine-tuned on publicly available code from GitHub.[SA05] It states that a distinct production version of Codex powers GitHub Copilot.[SA05]
- Why it might matter: It provides the technical S1 neighbor that the existing A14 product-release record lacks.
- Supporting source IDs: SA05
- Relation candidates: `same_family_as` AS03 → A04, high confidence, evidence SA05; the paper identifies Codex as a GPT language model. `enabled_by` A14 → AS03, high confidence, evidence SA05; the paper explicitly says a distinct production version of Codex powers GitHub Copilot.
- Unresolved questions: canonical consolidation should decide whether the paper’s “distinct production version” warrants a separate production-model entity from the research Codex record.
- Confidence: high
- Verification status: verified-ready

### AS04 — Latent Diffusion Models paper

- Date + precision: 2021-12-20 (`day`)
- Category: paper / technology
- Organization(s): CompVis / authors (institutional normalization remains for consolidation).
- Authors: Robin Rombach, Andreas Blattmann, Dominik Lorenz, Patrick Esser, and Björn Ommer.
- Neutral summary: The paper applies diffusion models in the latent space of pretrained autoencoders and introduces cross-attention conditioning for inputs including text or bounding boxes.[SA06] Its arXiv record links code at the CompVis latent-diffusion repository.[SA06]
- Why it might matter: It is a primary, dated text-to-image technical candidate adjacent to the batch’s A07/A13 multimodal and image-generation material.
- Supporting source IDs: SA06
- Relation candidates: none asserted. The source does not make a project-supported direct relation to A07 or A13; adjacency in topic and chronology is not a relation.
- Unresolved questions: distinguish the paper/technology milestone from later Stable Diffusion product releases; this record deliberately represents the paper, not an unsourced product date.
- Confidence: high
- Verification status: verified-ready

### AS05 — Imagen paper

- Date + precision: 2022-05-23 (`day`)
- Category: paper / model
- Organization(s): Google Research / authors (institutional normalization remains for consolidation).
- Authors: Chitwan Saharia, William Chan, Saurabh Saxena, Lala Li, Jay Whang, Emily Denton, Seyed Kamyar Seyed Ghasemipour, Burcu Karagol Ayan, S. Sara Mahdavi, Rapha Gontijo Lopes, Tim Salimans, Jonathan Ho, David J. Fleet, and Mohammad Norouzi.
- Neutral summary: The paper presents Imagen as a text-to-image diffusion model and says it builds on large Transformer language models for understanding text and diffusion models for image generation.[SA07] Its abstract identifies T5 as an example of the large language model used to encode text for image synthesis.[SA07]
- Why it might matter: It is a dated primary text-to-image candidate adjacent to A13 and has an explicit technical connection to the existing T5 record.
- Supporting source IDs: SA07
- Relation candidates: `uses_architecture` AS05 → A03, high confidence, evidence SA07; the paper says Imagen builds on large Transformer language models and names T5 as an example used to encode text for image synthesis. No edge to A13 is asserted merely because the paper compares models.
- Unresolved questions: canonical consolidation should normalize Google Research affiliation from paper metadata before publishing.
- Confidence: high
- Verification status: verified-ready

## Relationship handoff

The following remain candidate-only until canonical endpoint/entity mapping and source retention are complete: A13→A07 (`uses_architecture`, high; SA02), AS01→A01 (`uses_architecture`, high; SA03), AS02→A01 (`uses_architecture`, high; SA04), AS03→A04 (`same_family_as`, high; SA05), A14→AS03 (`enabled_by`, high; SA05), and AS05→A03 (`uses_architecture`, high; SA07). No chronology-only relation is proposed.

## Rescue and addition summary

| Existing record | Status after this supplement | Basis / remaining limitation |
|---|---|---|
| A07 — CLIP | verified-ready | SA01 supplies the primary paper’s full author list, OpenAI affiliation, and 2021-02-26 first-submission date. |
| A13 — DALL·E 2 | verified-ready | SA02 supplies the requested CLIP-latents technical paper, full author list, OpenAI affiliation, and 2022-04-13 first-submission date; it also supports the A13→A07 candidate relation. |

NEW verified-ready items added by this file: 5 (AS01–AS05).

## Sources

- SA01 — arXiv / OpenAI: https://arxiv.org/abs/2103.00020
- SA02 — arXiv / OpenAI: https://arxiv.org/abs/2204.06125
- SA03 — OpenAI PDF: https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf
- SA04 — OpenAI: https://openai.com/index/better-language-models/
- SA05 — arXiv / OpenAI: https://arxiv.org/abs/2107.03374
- SA06 — arXiv: https://arxiv.org/abs/2112.10752
- SA07 — arXiv / Google Research: https://arxiv.org/abs/2205.11487
