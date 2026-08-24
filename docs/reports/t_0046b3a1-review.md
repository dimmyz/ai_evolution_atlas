# Review — t_0046b3a1 / AIH-05 Canonical dataset v1 consolidation

## Verdict

**approved**

The canonical dataset satisfies the card's data-consolidation scope. Independent execution in the declared workspace passed the validator, full test suite, typecheck, production build, reference-integrity checks, and factual spot checks. No implementation files were modified by this review.

## Workspace provenance

- `cwd`: `/d/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- `git_root`: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- `HEAD`: `f5d61c02e5c9e7cf08f347be6d82ffadd400ee90`
- `.hermes.md` contains the `AI Evolution Atlas` project marker.
- The declared workspace and Git root match the task card exactly.

## Artifact inspected

- `data/atlas.yaml`
- Supporting validator/load/types implementation used by the existing project harness
- Canonical data contract: `spec/ai-atlas/04-data-contract.md`
- Research contract: `spec/ai-atlas/05-research-contract.md`
- Sprint acceptance: `spec/ai-atlas/07-acceptance.md`

The artifact contains 36 sources, 36 entities, 36 milestones, and 16 relations. All 36 milestones and all 16 relations are `verified`; all milestone source references resolve to primary sources. The 36 milestones fall within 2017–2025, inside the required 2017–2026 narrative window, and meet the required minimum of 30 without a scope-narrowing decision.

## Acceptance mapping and independent evidence

### Data and validator

- `npm.cmd run validate:data` passed:
  `validate:data ok (sources=36 entities=36 milestones=36 relations=16)`.
- `npm.cmd exec vitest run src/data/__tests__/validateAtlas.test.ts` passed: 1 file, 8 tests.
- The validator test suite exercises duplicate IDs, dangling endpoints/references, missing verified milestone sources, missing strong-relation evidence, invalid date precision, and unknown relation types.
- A direct Node audit of `data/atlas.yaml` reported:
  - `sources=36`, `entities=36`, `milestones=36`, `verifiedMilestones=36`, `relations=16`, `verifiedRelations=16`;
  - `badRefs=[]`;
  - verified published relation types: `successor_of`, `same_family_as`, `uses_architecture`, `authored_by`, `released_by`.
- A second direct audit reported entity types of 13 organizations, 20 models, and 3 technologies; all verified milestone sources were primary; verified relations without evidence: `0`.

### Engineering gates

- `npm.cmd test` passed: workspace guard passed; 7 test files and 33 tests passed.
- `npm.cmd run typecheck` passed with exit code 0.
- `npm.cmd run build` passed with Vite production output generated.
- `git diff --check` passed.

### Factual milestone sample

Ten milestones were sampled across the early, middle, and late portions of the timeline. Direct fetches returned HTTP 200 and source-page title/content matches for each sampled source:

| Milestone | Date / precision | Source checked |
|---|---|---|
| `ms-attention-is-all-you-need` | 2017 / year | arXiv 1706.03762 — “Attention Is All You Need” |
| `ms-bert-release` | 2018-11-02 / day | Google Research — “Open Sourcing BERT” |
| `ms-t5-paper` | 2019 / year | arXiv 1910.10683 — unified text-to-text Transformer |
| `ms-gpt-3-paper` | 2020 / year | arXiv 2005.14165 — “Language Models are Few-Shot Learners” |
| `ms-alphafold-casp14` | 2020-11-30 / day | Google DeepMind — AlphaFold announcement |
| `ms-clip-paper` | 2021-02-26 / day | arXiv 2103.00020 — CLIP paper |
| `ms-instructgpt-paper` | 2022 / year | arXiv 2203.02155 — instruction following with human feedback |
| `ms-gpt-4-report` | 2023-03-15 / day | arXiv 2303.08774 — GPT-4 Technical Report |
| `ms-llama-3-release` | 2024-04-18 / day | Meta — Introducing Meta Llama 3 |
| `ms-deepseek-r1-release` | 2025-01-20 / day | DeepSeek API Docs — DeepSeek-R1 Release |

The source registers and raw evidence batches were also checked for the retained neutral claims and date-precision decisions, including the supplement rescue records.

### Relation sample

Ten of the 16 published relations were sampled, covering every relation type actually published. Every sampled relation has existing entity endpoints, a registered evidence source, and a source-specific rationale:

- `model-gpt-2 -> model-gpt` — `successor_of`
- `model-codex -> model-gpt-3` — `same_family_as`
- `model-dall-e-2 -> model-clip` — `uses_architecture`
- `model-palm -> tech-transformer` — `uses_architecture`
- `model-t5 -> tech-transformer` — `uses_architecture`
- `model-t5 -> org-google` — `authored_by`
- `model-gpt-4 -> tech-transformer` — `uses_architecture`
- `model-deepseek-v3 -> tech-mixture-of-experts` — `uses_architecture`
- `model-gpt-4 -> org-openai` — `released_by`
- `model-claude-3 -> org-anthropic` — `released_by`

The published relation set intentionally omits candidate-only chronology/family edges from the raw batches; this is consistent with the research contract's requirement for explicit evidence rather than chronology alone.

## Network caveat

A live URL probe returned HTTP 200 for 31 of 36 registered sources. Five OpenAI pages returned HTTP 403 from the live probe (`src-a15`, `src-as02`, `src-b05`, `src-b09`, `src-bs03`). This is a source-server access limitation, not a validator failure; the affected claims are retained from the reviewed raw evidence/supplement records, and the URLs remain syntactically valid primary-source URLs. The sample used for the factual gate did not rely on those blocked pages.

## Scope and routing

- Canonical ownership stayed within `data/` for the implementation artifact.
- No UI changes are part of this card.
- The implementer supplied workspace preflight and real validation/test/typecheck/build evidence.
- This review report is the only file written by the reviewer.

## Reviewer checks

- [x] Correct workspace and repository verified.
- [x] Original data/research/acceptance contracts read.
- [x] Canonical artifact inspected cold.
- [x] At least 30 verified milestones confirmed.
- [x] All verified milestones have primary source references.
- [x] Ten milestones sampled across early/mid/late periods.
- [x] Ten relations sampled across every published relation type.
- [x] Validator and negative validator tests passed.
- [x] Full test, typecheck, build, and diff checks passed.
- [x] No implementation files edited by reviewer.
