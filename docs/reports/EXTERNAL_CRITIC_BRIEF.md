# Briefing for an external critic — AI Evolution Atlas v0.1

Not a product acceptance. This is the packet a third-party critic should use.

## What to open

Workspace: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`

```powershell
cd D:\Projects\AI_Evolution_Atlas\AI_Evolution_Atlas_Project_Pack_v0.1
npm.cmd run preview
```

Then http://127.0.0.1:4173/  (use `npm.cmd`, not `npm`, on this Windows PowerShell).

Screenshot pack (already captured):

- `evidence/home-1440x900.png`
- `evidence/timeline-selected-1440x900.png`
- `evidence/lineage-1440x900.png`
- `evidence/mobile-390x844.png`

Canon to judge against (do not lower):

- `spec/ai-atlas/02-product-contract.md`
- `spec/ai-atlas/05-research-contract.md`
- `spec/ai-atlas/06-visual-ux-contract.md`
- `spec/ai-atlas/07-acceptance.md`

Internal critic already filed `docs/reports/critic-aih11.md` (verdict `rework_required`, before full integration). AIH-12 claimed to address that. Re-judge the **live** app, not only that memo.

## What the factory claims

- 36 verified milestones, 36 entities, 36 sources, **16** relations
- Isolated features + later composition root
- Same-card review; no Coder reasoning in Reviewer context
- Sonnet 5 was **not** available (no Anthropic login). Critic/Reviewer were Luna in separate profiles.

## Please score independently (1–5)

1. First impression / would you show this to a colleague?
2. Timeline: can a newcomer follow 2017–2026?
3. Lineage: does the graph explain evolution, or only “uses Transformer”?
4. Citations: can you open a real source from the UI?
5. Honesty: any invented or over-strong historical claim?
6. Mobile / keyboard
7. Distinctiveness vs generic dark dashboard

Also mark: `accepted` / `accepted_with_reservations` / `rework_required`.

## Known residual issues (do not hide)

- Relation graph is thin (16 edges, mostly `uses_architecture` / org ownership). Below 40–70 target.
- Home state starts empty (“Nothing selected”).
- Timeline axis vs list mapping is still weak.
- Graph arrows were flaky in one E2E run; follow-up `t_71869fb2` later approved after two green Chromium runs.
- Several OpenAI URLs 403’d in live probes.
- Almost the entire implementation is **uncommitted** (only the seed commit is in git).
- Orchestrator duty looped for hours after the DAG finished.

Human visual gate is still **pending**.
