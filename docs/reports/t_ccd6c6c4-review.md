# Review — t_ccd6c6c4 / AIH-03 Research batch A (2017–2022)

## Verdict

APPROVED

The raw evidence batch satisfies the card scope and the research-contract requirements for a candidate evidence report. This review does not promote candidates into canonical `data/` records.

## Workspace integrity

- Declared workspace: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- Observed cwd: `/d/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- Observed Git root: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- Observed HEAD: `f5d61c02e5c9e7cf08f347be6d82ffadd400ee90`
- `.hermes.md` contains `AI Evolution Atlas`.

The implementation handoff provenance matches the live workspace and repository. No canonical `data/` files are modified in the working tree.

## Acceptance mapping

- Scope: `research/batches/2017-2022.md` is the delivered research artifact; no canonical data files were changed.
- Candidate coverage: 15 records, A01–A15, covering the requested 2017–2022 batch.
- Required candidate fields: every record has date plus precision, category, organization(s), neutral summary, historical-significance rationale, supporting source IDs, relation-candidate notes, unresolved questions, and confidence.
- Source grounding: 15 source-register entries and 15 unique HTTPS URLs are present; each candidate has at least one registered source ID. Sources are primary arXiv records, official lab/company release pages, or an official product announcement.
- Relationship safety: five edges are explicitly labelled candidate-only. The report does not publish them as verified relations and preserves evidence notes, confidence, and unresolved consolidation questions. Chronology-only connections are explicitly left unresolved.
- Historical precision: all declared precisions are from the allowed `year | month | day` vocabulary; the report avoids inventing a day where it intentionally retains year precision.
- Anti-hype and consolidation boundary: summaries are neutral enough for raw evidence, and the report explicitly says candidates are not canonical assertions. Source access dates, normalized authors/organizations, and entity mapping are correctly deferred to consolidation.

## Independent verification evidence

Commands run from the declared workspace:

1. `pwd && git rev-parse --show-toplevel && git rev-parse HEAD && grep -n 'AI Evolution Atlas' .hermes.md`
   - Passed; workspace, Git root, HEAD, and project marker matched the card.
2. A Python structural checker over `research/batches/2017-2022.md`
   - Passed: 15 candidate records; all required fields; all candidate source references resolve to the 15 registered IDs; 15 unique HTTPS source URLs; all date precisions valid.
3. `git diff --check`
   - Passed.
4. Concurrent URL probes against all 15 listed source URLs
   - Passed: all returned HTTP 200, with expected official/arXiv redirects where applicable.
5. arXiv API metadata query for the 10 arXiv-backed records
   - Passed: all 10 IDs returned matching titles and publication timestamps, including the Chinchilla/compute-optimal record (`2203.15556`, 2022-03-29) and FlashAttention (`2205.14135`, 2022-05-27).
6. Direct source-content checks
   - Confirmed the BERT official release describes the Transformer-based release; the official AlphaFold announcement is dated 2020-11-30; the InstructGPT paper summary explicitly mentions GPT-3, supervised fine-tuning, RLHF, and InstructGPT; the PaLM abstract describes a Transformer language model; and the OpenAI ChatGPT announcement calls ChatGPT a sibling model to InstructGPT.

## Bounded follow-up for consolidation

These are not blockers for this raw batch: add accessed dates and normalized authors/organizations during canonical consolidation; retrieve the associated DALL·E 2 technical publication before asserting technical lineage; and retain the candidate-only status until canonical endpoint IDs and evidence are available.
