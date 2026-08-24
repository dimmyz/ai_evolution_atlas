# Review — t_cf5bf555 / AIH-17

Verdict: APPROVED
Review round: 2 (execution lens)

## Workspace and scope

- `pwd`: `/d/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- `git rev-parse --show-toplevel`: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- `git rev-parse HEAD`: `f5d61c02e5c9e7cf08f347be6d82ffadd400ee90`
- `.hermes.md` contains the required `AI Evolution Atlas` marker.
- The sole claimed implementation artifact is `research/batches/2023-2026-supplement.md`; canonical `data/`, `research/batches/2023-2026.md`, and UI files were not modified by this card.

## Contract and correction audit

- The supplement has 10 candidate records: rescued B-05, B-06, B-10, B-11 plus BS01–BS06.
- The source register has 13 unique SB17 source IDs; 12 are cited and all cited IDs are registered.
- Every record contains the required raw-evidence fields from the research contract, including date/precision, category, organization, neutral summary, significance, relation notes, unresolved questions, confidence, and verification status.
- The requested round-1 corrections are present: BS05 uses `2023-11-03` day precision and `verified-ready`; B-11 records the official page’s visible `2025/01/20` label with a provenance qualification; unsupported BS01→A10, BS02→B-03, BS06→B-06, and B-11→B-10 edges are absent.
- The remaining existing-ID relation candidates are source-qualified: B-05→B-01, B-06→B-03, and BS03→B-01. No chronology-only edge is proposed.
- Summary counts are internally consistent: 4 rescued verified-ready + 6 new verified-ready = 10 verified-ready from this supplement.

## Independent execution evidence

The following commands were run in the declared workspace and passed:

- Structural Node check: `records=10`, `sourceIds=13`, `citedIds=12`, `missing=[]`.
- `npm.cmd run test`: `7` test files and `33` tests passed; workspace verification passed.
- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: Vite production build passed; emitted `dist/index.html`, CSS, and JS bundles.
- `npm.cmd run validate:data`: passed (`sources=0 entities=0 milestones=0 relations=0`), consistent with this raw-evidence-only card not writing canonical `data/`.
- `git diff --check`: passed; only an existing CRLF warning for `docs/adr/ADR-001-application-baseline.md` was emitted.
- Primary date spot check via `curl`: the official xAI page contains visible `Nov 3, 2023` and JSON-LD `datePublished=2023-11-03T00:00:00Z`; the official DeepSeek page contains `DeepSeek-R1 Release 2025/01/20`.
- Live URL probe found 11/13 cited URLs returning HTTP 200 and 2 OpenAI URLs returning HTTP 403; the latter are access restrictions, not broken URL syntax. The prior review’s independent extraction of the OpenAI pages remains the source-content evidence, and the current correction-specific date/source checks passed.

## Scope verdict

The supplement stays within the card’s ownership and preserves the primary-first/raw-evidence boundary. It supplies the four requested rescues and six additional S1-backed candidates without padding unsupported lineage. Approved for release to the dependent canonical-consolidation task; that task must still independently validate candidates before promotion into `data/`.
