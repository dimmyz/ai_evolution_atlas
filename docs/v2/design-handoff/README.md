# External design handoff — Phase-1 Story Path slice

Use this folder if Hermes designer cannot run (Gemini API free-tier 429) or if you want **Google AI Studio / Gemini app** for visual design.

## What broke in Hermes

Card `t_f22a925f` blocked: designer profile = `gemini-3-flash-preview` via **API key on free tier**. Agent loops need many calls; quota 5–20/day. Consumer Google AI Pro in the Gemini **app/Studio chat** is a different pipe and still works for a human-pasted brief.

## What to do in AI Studio

1. Open [Google AI Studio](https://aistudio.google.com/).
2. New chat. Model: Gemini Pro / Flash in the **Studio UI** (your $20 plan), not the exhausted API key.
3. Paste `PROMPT-AI-STUDIO.md` as the first message.
4. Attach or paste `ALLOWED-BEADS.md` and `SCHEMA.md`.
5. Ask for: desktop 1440 wireframes + mobile 390, first screen, bead-to-bead, “not in this slice” state.
6. Save outputs back into this repo as `docs/v2/11-ux-phase1-story-slice.md` (and optional HTML mockups under `docs/v2/design-handoff/mocks/`).

## Do not

- Invent “Transformer led to ChatGPT.”
- Say generic GPT used Transformer (use GPT paper wording or GPT-2).
- Add “developed in parallel” to sibling.
- Draw Step 1 of 6 as a proven path.

## Hermes fallback

Designer profile can be pinned to Grok (`xai-oauth` / `grok-4.6`) with `tools.tool_search.enabled=off` so the same card can finish inside the factory.
