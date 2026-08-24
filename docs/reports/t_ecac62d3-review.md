# Review — t_ecac62d3 / AIH-16

## Verdict

Approved on review round 1.

## Workspace and scope

- Declared workspace, reviewer `pwd`, and `git rev-parse --show-toplevel` resolve to `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`.
- `.hermes.md` contains the `AI Evolution Atlas` project marker.
- Reviewer HEAD: `f5d61c02e5c9e7cf08f347be6d82ffadd400ee90`.
- Reviewed the sole owned artifact: `research/batches/2017-2022-supplement.md`.
- The supplement does not modify `data/` or rewrite `research/batches/2017-2022.md`.

## Acceptance audit

- A07 CLIP is rescued as `verified-ready` with the requested paper title, arXiv identifier, complete author list, OpenAI organization, day-precision first-submission date, S1 citation, and neutral summary.
- A13 DALL·E 2 is rescued as `verified-ready` with the requested *Hierarchical Text-Conditional Image Generation with CLIP Latents* paper, arXiv identifier, complete author list, OpenAI organization, day-precision first-submission date, S1 citation, and the source-grounded candidate `uses_architecture` relation to A07.
- New candidates AS01–AS05 cover GPT, GPT-2, Codex, latent diffusion, and Imagen. Each has the research-contract fields, a defined S1 source, and five new `verified-ready` records are reported.
- The explicit LLaMA 1/2 exclusion is consistent with the card’s 2017–2022 boundary and the card’s 2023+ out-of-scope rule; the exclusion is documented rather than inventing an in-window date.
- Relation references are source-backed and attach to existing A IDs where applicable; a structural check found no missing A endpoint IDs or unregistered SA source IDs.
- The closing table reports A07 and A13 as `verified-ready`; no A07/A13 item remains candidate-only. The file reports `NEW verified-ready items added by this file: 5`.

## Independent evidence

Passing commands run in the declared workspace:

- `npm.cmd test` — workspace verification passed; Vitest: 7 test files and 33 tests passed.
- `npm.cmd run typecheck` — passed.
- `npm.cmd run build` — Vite production build passed.
- `npm.cmd run validate:data` — `validate:data ok (sources=0 entities=0 milestones=0 relations=0)`.
- A Node structural contract check passed: 7 records (A07, A13, AS01–AS05), 7 registered sources, 7 unique HTTPS URLs, all required fields present, and 16 source citations.
- A Node endpoint/source-reference check passed: all referenced A IDs exist in batch A and all SA IDs are registered.
- `git diff --check -- research/batches/2017-2022-supplement.md` passed.
- Independent web extraction verified the CLIP, DALL·E 2, GPT-2, Codex, latent-diffusion, and Imagen primary pages/PDFs. Six of seven direct Node URL fetches returned HTTP 200; the OpenAI GPT-2 page returned HTTP 403 to the fetch client but was independently extracted successfully by the web tool, so this is not an evidence blocker.

No implementation files were edited by the reviewer; this report is the required review artifact.
