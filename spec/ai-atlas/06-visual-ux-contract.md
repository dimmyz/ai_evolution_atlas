# 06 — Visual and UX Contract

## Quality bar

The final vertical slice must read as a **designed editorial product**, not a component-library demo, graph sandbox or admin dashboard.

## Visual direction

Desired:
- modern dark or near-dark editorial base with excellent text contrast;
- restrained luminous accents used to encode categories/eras;
- clear typographic hierarchy;
- generous spatial rhythm;
- subtle motion that explains state, not decoration for its own sake;
- timeline and graph feel related but not identical;
- detail reading surface is calm and legible.

Avoid:
- generic neon-on-black “AI cyberpunk” clutter;
- excessive glassmorphism;
- tiny dense labels;
- default React Flow/Cytoscape styling left essentially untouched;
- dozens of company logos as visual noise;
- decorative 3D effects that harm reading.

## Required viewport evidence

Before visual acceptance, Tester/Critic captures at minimum:

- `evidence/home-1440x900.png`
- `evidence/timeline-selected-1440x900.png`
- `evidence/lineage-1440x900.png`
- `evidence/mobile-390x844.png`

If the actual browser harness uses slightly different stable dimensions, record them.

## Critic rubric (Sonnet 5)

Score 1–5 and give actionable findings for:
1. first-impression clarity;
2. hierarchy;
3. typography/readability;
4. spacing/density;
5. timeline comprehension;
6. graph comprehension;
7. relationship between views;
8. interaction affordances;
9. citation visibility;
10. mobile fallback;
11. accessibility cues/focus;
12. visual distinctiveness / absence of “developer demo” feel.

Any dimension <=2 is blocking for final visual acceptance.
Average target >=4.0 with no blocker.

## Human visual MUST

After automated and Critic/Reviewer gates are green, the human receives the screenshot pack and a local preview URL.

Final visual acceptance requires one human decision:
- `accepted`
- `rework_required` with concise reason

The human should not need to run test commands.
