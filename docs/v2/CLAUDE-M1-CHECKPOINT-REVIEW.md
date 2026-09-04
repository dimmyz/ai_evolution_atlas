# Claude — M1 checkpoint review (external critic)

- Critic: Claude Opus 5, external independent reviewer. Not a Hermes profile, not a merge stamp.
- Date: 2026-08-26
- Workspace inspected: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_CLONE_2026-08-25`
- Branch: `v2-bootstrap`, HEAD `3bc5db0`
- Status of this document: **context and correction, not orders.** Canon order in `.hermes.md` still applies; `docs/v2/` and DEC-001 outrank this file.

---

## 1. Verdict

**The Done column is close to honest, and the layer that closed is the right one.** "Collect and verify facts" is finished. The site is absent, and at this stage it should be.

The single most important thing this M1 produced is a **documented negative result**: three flagship story paths were researched, independently fact-checked, and all three came back `needs_more` because the connecting transitions are not evidenced. That is a real finding about the public record, not a failure of the team.

One correction to the current reading of the situation: **the V2-UX block was not primarily a dispatcher fault.** The reviewer-routing failure is real, but it is the second thing that went wrong. The first is that the card was launched through a gate the Operational Strateg had himself written and which had not opened. Details in §4.

---

## 2. What I verified independently

Not taken from any report.

| Check | Result |
|---|---|
| GitHub default branch | `main` |
| Remote branches | `main` (protected), `v2-bootstrap`, `archive/v1-final` |
| `origin/master` | **Does not exist on GitHub.** The local `origin/HEAD -> origin/master` is a stale tracking ref |
| PR #3 | OPEN, `v2-bootstrap → main`, MERGEABLE, label `human:approved` only |
| PR #3 CI | `Gate A/B/C` **pass** (52s) |
| PR #3 auto-merge | correctly **skipping** — `reviewed:approved` absent |
| PR #3 contents | 26 files: canon wiring, `docs/v2/`, RM0, three research packets, 7 review reports, START_HERE quarantine |
| `.hermes.md` canon order | correctly rewired — `docs/v2/` + DEC-001 rank 1, `spec/ai-atlas/` demoted to legacy |
| Untracked files in working tree | **13** |
| Packet verdicts | SP01 `needs_more`, SP02 `needs_more`, SP04 `needs_more` — **zero accepted** |
| V2-UX card `t_17278b86` in `v2-card-ids.json` | **absent** |
| V2-ED-SP01/02/04 in `v2-card-ids.json` | **absent** |

### The stale ref, resolved

The intake report listed `origin/HEAD -> origin/master` as a contradiction needing investigation before the first PR. It is not a repository problem. GitHub has no `master` branch; the local clone is carrying a stale symbolic ref and a stale remote-tracking branch. Fix and close the item:

```bash
git remote set-head origin -a
git remote prune origin
git branch -D master   # local leftover, if present
```

---

## 3. Quality of the four roles

My scores, assigned independently before reading the current assessment. Where I differ, I say so.

| Role | Score | Assessment |
|---|---:|---|
| **Fact-checker** | **9/10** | The best work in the project so far, v1 included. Re-read every source rather than trusting the packet. Rejected `sp01-c06` as `unsupported` on a genuine entailment failure. Narrowed `sp04-c10` → `c12` on the exact CUDA-vs-cuDNN wording and **preserved the rejected row for audit**. Caught that the ILSVRC results page does not corroborate the paper's literal "second-best entry" wording — that is a level of care most human reviewers skip. §5 "Explicitly unproven transitions" is exactly the artifact this project needed. |
| **Researcher** | **8/10** | Evidence packs, not essays. Flagged HTTP 403 honestly instead of paraphrasing around it. Did not invent edges to fill the graph. Weakness confirmed downstream: several propositions were written broader than their source, and `sp01-c06` duly failed. |
| **Editor** | **8/10** | Refused to write attractive falsehood. `sp01-editorial.md` states "**Transition onward. None.**" under record after record, and puts the reservation on the surface rather than in a footnote. That is the correct product of a `needs_more` packet. It is a catalogue rather than a narrative — which at this verdict is the only honest form. |
| **Designer** | **4/10** | Lower than the current assessment's 5/10, and the reason matters: see §5. The direction (Story Path, focus state, four disclosure layers, first action is historical not filters) is sound and worth keeping. The artifact contains at least four distinct canon violations, one of which is a factual error about which model the evidence covers. |

**The chain worked.** Researcher → Fact-checker → Editor held the line under pressure. The break is at the Designer, and the Designer was set up to fail.

---

## 4. Root cause of the V2-UX block

Three failures stacked, in this order.

### 4.1 A gate was skipped (primary)

The Operational Strateg's own intake report, §7, states:

> UX prototypes **after** at least one FC-accepted pack (Designer needs real story, not lorem).

`PG-01` M1 exit requires "critical transitions verified" and "designer has real content".

`06-research-evidence-methodology.md` §"Packet-level gate" states:

> Any critical `unsupported`, `disputed`, or `needs_more` item blocks the relevant Story Path transition and must be returned to Research.

All three packets are `needs_more`. **Zero packs are FC-accepted.** The gate had not opened.

DEC-001 H5 does permit "UX prototyping" in general, and that permission is probably what the card leaned on. But H5 grants a *class* of work; the intake gate governs *when* this specific card may run. The card ran anyway.

### 4.2 The brief made fabrication the only exit (consequence)

The card asked the Designer to wireframe a Story Path. The fact-check had already ruled that no connected Story Path exists:

> The packet therefore cannot answer its reader question as a connected historical path.

An agent asked to draw "Step 1 of 6" for a path with zero accepted transitions has two options: invent the transitions, or fail to produce the deliverable. It invented them. **This is a brief defect, not a care defect.** Re-running the same brief with a stricter designer will reproduce the same output.

### 4.3 The reviewer did not arrive (symptom)

`request_review` dispatched with `reviewer: None`, the dispatcher re-raised `designer` into the review lane, two process deaths, then `blocked`. Real, and worth fixing as a harness bug. But it surfaced *after* the card had already produced a canon-violating artifact. Fixing only the routing would have merged the violation faster.

**The lesson to record: the block was the process finally catching an error the gate should have prevented.** Unblocking without changing the brief removes the only control that worked.

---

## 5. Defects the reviewer must reject in `10-interaction-story-path-spec.md`

Four, not one. Each cites the exact canon it violates.

**D1 — Prohibited causal copy.**
Spec §2 wireframe: *"This architecture provided the underlying engine that allowed language models to scale to the size required for ChatGPT."*
`sp01-factcheck.md` §6: *"Do not write 'Transformer led to ChatGPT' … or equivalent causal/lineage copy."*
This is that sentence with different words. **Strike.**

**D2 — A transition asserted for the wrong model.** *(not previously flagged)*
Spec §4.3: *"The connector says: **'GPT used the Transformer architecture.'** (Restating the `uses_architecture` relation)."*
It restates no such relation. §5 of the fact-check lists `model-gpt → tech-transformer` under **explicitly unproven transitions**. The accepted relation is `sp01-r02`: `model-gpt-2 → tech-transformer` — **GPT-2, not GPT**.
This is more serious than D1. D1 is over-claiming; D2 is a factual error about which entity the evidence covers, presented as a citation. **Strike, and correct the endpoint.**

**D3 — "Step 1 of 6" presumes a path that does not exist.**
SP01 has two relations, both `accepted_with_reservations`, and they share an endpoint: `GPT-2 → GPT` and `GPT-2 → Transformer`. That is one local neighbourhood, not a six-step chain. The wireframe's spine is unevidenced. **Restructure, do not patch the copy.**

**D4 — "developed in parallel" exceeds the source.** *(not previously flagged)*
Spec §4.4 copy: *"ChatGPT and InstructGPT are sibling models developed in parallel."*
The source says only *"ChatGPT is a sibling model to InstructGPT."* `sp01-c12` reservation: *"'sibling model' does not by itself specify a permitted typed relation, direction, derivation, succession, causation, or implementation dependency."*
"Developed in parallel" adds a process and timing claim the source does not make. The spec was right to mark this connector dashed; the copy then undoes the honesty. **Narrow to the attributed sentence.**

**Internal contradiction worth quoting back to the Designer.** The spec's own §5 requires: *"Must NOT use dummy text; use the fact-checked claims from `docs/v2/story-packs/sp01-factcheck.md`."* The Designer wrote the correct rule and then did not follow it. The instinct is right; only the discipline failed — which is further evidence that the brief, not the profile, is the problem.

---

## 6. The rework is smaller than it looks

This is my highest-value finding, and it changes the shape of the next research wave.

`sp01-factcheck.md` §5 lists `model-gpt → tech-transformer` as unproven. But §2 of the **same report**, in the independently-read excerpts, states:

> `src-as01`, PDF abstract: … *"the paper later identifies the model architecture as the Transformer."*

And the source-read row for `src-as01` records: *"PDF text independently retrieved and checked at the abstract **and model-architecture passages**."*

So the fact-checker read the passage that identifies the Transformer as GPT's architecture, and still recorded the edge as unproven.

That is not an error. It is **scope discipline**: a fact-checker renders verdicts on the claims the Researcher submitted. No atomic claim was submitted for `model-gpt → uses_architecture → tech-transformer`, so no verdict exists, and §5 correctly reports that *this packet* does not establish it.

The consequence is important:

> **Part of the missing evidence is already inside sources the team has read. It was never proposed as a claim.**

The next research wave is therefore mostly a **claim-authoring pass over already-read sources**, not a new expedition for new material. Concretely, for SP01: the GPT paper's architecture section, the GPT-3 paper's model section, and the InstructGPT paper's explicit statement that it fine-tunes GPT-3 are all in sources already retrieved and read.

This is the same pattern I found in v1, where 12 of 20 models lacked `released_by` while their already-cited sources named the lab. **The Factory keeps under-harvesting sources it has already paid to read.** Worth making a standing rule: before commissioning new research, run a claim-authoring pass over the existing corpus.

Caution, so this is not misread as a licence: authoring a claim is not accepting it. Every new claim goes back through fact-check normally, and some will still fail. The point is only that the *cost* of the next wave is much lower than "research three story paths again."

---

## 7. Corrections for the Operational Strateg

### C1 — Do not restart V2-UX on the same brief

Re-issue the card with an inverted premise. Instead of *"design the path"*:

> Design the reading experience for SP01 **as the evidence actually stands**: strong independent records, two locally-accepted relations, and explicitly documented gaps between them. The gaps are content, not absence. A reader must finish knowing both what is established and where the popular account outruns the record.

Same Designer, same direction, honest input. This is a better design problem than the original and it is buildable today.

### C2 — Send it to `reviewer`, and fix the routing bug separately

Agreed with the current plan: same-card review on the `reviewer` profile, not a redesign from scratch — **provided C1 lands first.** Reviewing the current artifact against the current brief can only produce "delete most of it."

The `reviewer: None` dispatch is a harness defect. Log it as its own card with the reproduction; do not let a product card carry an infrastructure fix.

### C3 — Register every card before it runs

`v2-card-ids.json` stops at fact-check. V2-UX and the three editorial cards exist only inside their own output files. A card that is not in the registry cannot be audited, and the duty log cannot see it — which is part of why the block was noticed late. **No card starts until it has a registry entry.**

### C4 — Commit the 13 untracked files now

13 files are untracked in the working tree, including all three fact-checks, all three editorial drafts, the design spec and five review reports. This is the same exposure that Sprint 1 carried for its entire duration.

They belong in a PR — the Reviewer's own outputs are evidence, and the workflow requires it. **This is the highest-urgency item in this document**, because it is the only one where the failure mode is permanent loss rather than rework.

Note the routing: `docs/v2/**` is canon under the merge gate, so that PR will correctly require `human:approved` alongside `reviewed:approved`.

### C5 — Land PR #3

CI is green, `human:approved` is on, auto-merge is correctly withholding pending `reviewed:approved`. The gate is behaving exactly as designed. It needs the Reviewer to state a verdict, not a configuration change.

### C6 — Ontology before the next design pass

The fact-check blocked on ontology at least five times: whether `model-gpt` is a valid `successor_of` endpoint, whether InstructGPT and ChatGPT are entities at all, and what type — if any — carries "sibling model". The Architect's `08` cannot wait behind the research rework; the research rework keeps stalling on it.

### C7 — Close the `gh` PATH gap

The intake reported `gh: command not found` for agents. It is installed at `C:\Users\User\AppData\Local\Programs\gh\bin\gh.exe` and is on the **user** PATH — but a Hermes process started before that change will not see it. Restart the Hermes host, or have workers call the full path. Verify with `gh auth status` from an agent shell before the next PR card, not during it.

---

## 8. On the strategic question

The current framing is: keep researching until the three paths connect, then design.

That may not be reachable, and it is worth deciding deliberately rather than discovering it after another wave.

The fact-check has demonstrated something specific and unusual: the popular account of AI history — *Transformer → GPT → ChatGPT as a smooth causal chain* — is **not supported by the primary public record as a chain of typed, sourced transitions**. Endpoint facts are solid. The connective tissue is largely absent, and where it exists it is vendor-authored or ambiguous ("sibling model").

Most AI-history content asserts that chain confidently. This project has rigorously shown it cannot be asserted from primary sources. That is a genuinely distinctive result.

So there are two products available:

**(a) Keep drilling for the connected path.** Honest, and the current plan. Risk: some transitions may be unprovable from primary sources at any budget, and the team discovers this after two more waves.

**(b) Make the gaps the product.** Show what is established, and show precisely where the received story outruns the evidence. The reader leaves with a calibrated map instead of a tidy myth. Buildable **today**, with material already fact-checked, and it converts the Fact-checker's rigor from a blocker into the differentiator.

These are not exclusive — (b) is the honest presentation of whatever (a) achieves at any moment, and it degrades gracefully as evidence arrives. My recommendation is to adopt (b) as the presentation contract now, and continue (a) as content work.

**This is a product decision for the human curator, not for me and not for the Operational Strateg.** I raise it because M1's exit criteria assume the path connects, and if the human wants (b), the exit criteria and the Designer's brief both change — cheaper to decide before the next wave than after.

---

## 9. What I did not do

- **Did not commit or push anything.** The 13 untracked files are other agents' outputs; committing them would misattribute authorship and bypass the review workflow. Flagged in C4 instead.
- **Did not label PR #3.** `reviewed:approved` is the Reviewer's signature. I am an external critic, not the Reviewer, and applying it would corrupt the one control the merge gate has.
- **Did not edit the Designer's spec.** The reviewer owns that verdict.
- **Did not add, narrow or re-verdict any claim or relation.** Not my role, and doing it outside fact-check would be the exact failure mode this project exists to prevent.
- **Did not touch v1 code, data or `spec/ai-atlas/`.**

---

## 10. Summary for the Strateg

1. The Done column is honest. The right layer closed.
2. Fact-checker 9/10 — protect this standard; it is the project's main asset.
3. V2-UX broke because a gate was skipped, not because the dispatcher lost the reviewer. Fix the brief before re-running the card.
4. The design spec has four canon violations, including one factual error about GPT vs GPT-2 that is worse than the copy problem.
5. The next research wave is mostly claim-authoring over sources already read — much cheaper than it looks.
6. Commit the 13 untracked files today. That is the only item here whose failure mode is permanent.
7. Ask the human whether the gaps are a blocker or the product. M1's exit criteria depend on the answer.
