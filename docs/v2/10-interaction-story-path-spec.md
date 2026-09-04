# V2-UX Story Path Spec: Story Path / Focus Path Mechanic

Status: Draft v0.1 · M1 UX/Interaction Spec
Owner: Designer
Canon: docs/v2/DEC-001.md, docs/v2/05-content-editorial-system.md
Task ID: t_17278b86

## 1. Product Unit: The Story Path

The "Story Path" (also referred to as Focus Path) is the primary lens for consuming the Atlas. Unlike a flat timeline or a global graph, a Story Path is a **curated, linear narrative through the graph** that answers a specific historical question.

### Core Mechanic: "The Thread"
A Story Path is visualized as a physical thread or path connecting specific nodes.
- **Path Nodes:** Discrete historical milestones (papers, releases, events).
- **Transitions:** Explanatory connections between nodes, supported by accepted relations.
- **Narrative Depth:** Story-specific "Why it matters" copy that changes based on which path you are currently following.

## 2. Wireframe: Focus Path View

```text
+--------------------------------------------------------------------------+
|  [ SEARCH ]                                         [ FILTERS ] [ ABOUT ]|
+--------------------------------------------------------------------------+
|                                                                          |
|  PATH: From Transformer to ChatGPT (2017-2022)                           |
|  "How did a 2017 architecture become the basis of a mass-market AI?"     |
|                                                                          |
|  [ Step 1 of 6 ]                                                         |
|  ----------------------------------------------------------------------  |
|  [ MILESTONE CARD ]                                                      |
|  | June 2017                                                           | |
|  | THE TRANSFORMER (Attention Is All You Need)                         | |
|  |                                                                     | |
|  | WHAT HAPPENED: Google researchers introduced a new architecture     | |
|  | based solely on attention mechanisms, removing the need for         | |
|  | recurrence or convolutions.                                         | |
|  |                                                                     | |
|  | WHY IT MATTERS IN THIS PATH: This architecture provided the        | |
|  | underlying engine that allowed language models to scale to the       | |
|  | size required for ChatGPT.                                          | |
|  |                                                                     | |
|  | [ View Evidence ] [ Technical Note ]                                | |
|  ----------------------------------------------------------------------  |
|                                                                          |
|          |                                                               |
|      [ TRANSITION: Architecture used by ]                                |
|          |                                                               |
|          v                                                               |
|                                                                          |
|  [ MILESTONE CARD (Partial/Preview) ]                                    |
|  | June 2018                                                           | |
|  | GPT: IMPROVING LANGUAGE UNDERSTANDING...                            | |
|  +---------------------------------------------------------------------+ |
|                                                                          |
+--------------------------------------------------------------------------+
|  [ < PREVIOUS STEP ] [ STEP 2: GPT-1 > ]          [ EXIT PATH TO GLOBAL ]|
+--------------------------------------------------------------------------+
```

## 3. Interaction Mechanics

### A. First Screen Action
The first screen for a Story Path must contain a meaningful **historical action**, not just filters.
- **Action:** "Start Journey" or "Explore First Milestone".
- **Visual:** The first node is active and fully expanded; the second node is visible but dimmed/partial.
- **Interaction:** Scrolling or clicking "Next" moves the "Focus" to the next node.

### B. Progressive Disclosure (The 4 Layers)
1. **L1 (Entry):** Milestone Title + Date + Header.
2. **L2 (Path):** Summary + "Why it matters in this path" + Transition Copy. (Visible by default).
3. **L3 (Entity):** "Technical Note" or "Actor Bio" popup/expandable. (On demand).
4. **L4 (Evidence):** "View Evidence" sidebar. Shows specific claims, verdicts, and sources. (On demand).

### C. The Focus State
When a milestone is in "Focus":
- The map/background dims.
- The "Thread" connecting the previous and next milestones is highlighted.
- The sidebar or central card displays the L2 narrative.

## 4. Acceptance Scenario: Naive User Journey (SP01)

**User Profile:** Technology professional who knows "ChatGPT" but not "Transformer".

1. **Discovery:** User lands on the Atlas and sees "flagship stories". They click **"From Transformer to ChatGPT"**.
2. **First Screen:**
   - They see "June 2017: The Transformer".
   - They read: "This architecture provided the underlying engine that allowed language models to scale..."
   - **Historical Action:** They click "View Technical Note" to see a one-paragraph explanation of "Attention".
3. **Transition:**
   - They click "Next Step".
   - The interface smooth-scrolls or transitions to "June 2018: GPT".
   - The connector says: **"GPT used the Transformer architecture."** (Restating the `uses_architecture` relation).
4. **Encountering a Gap:**
   - They reach "InstructGPT (2022)".
   - They see "ChatGPT (2022)".
   - The connector is **dashed or marked with a '?'**.
   - Copy: "ChatGPT and InstructGPT are sibling models developed in parallel." (Honest preservation of the "sibling" reservation).
5. **Evidence Check:**
   - Curious, the user clicks "View Evidence".
   - They see: `Source: Introducing ChatGPT (OpenAI, 2022)`.
   - They see: `Verdict: Accepted with reservations`.
   - They see: `Note: 'Sibling model' does not establish direct derivation.`

## 5. M1 Prototype Requirements (Harness)
- Must render the SP01 milestones in order.
- Must display "Why it matters" copy for each milestone.
- Must clearly distinguish between "Accepted" and "Accepted with Reservations" edges.
- Must NOT use dummy text; use the fact-checked claims from `docs/v2/story-packs/sp01-factcheck.md`.
