# AI Evolution Atlas v2

[![Quality gates](https://github.com/dimmyz/ai_evolution_atlas/actions/workflows/gates.yml/badge.svg)](https://github.com/dimmyz/ai_evolution_atlas/actions/workflows/gates.yml)

**Active program:** Atlas **v2** — story-path, evidence-first product.  
**v1 implementation** remains in this repository as **legacy / reference**. It is not the product target.

| Snapshot | Ref |
|---|---|
| Frozen v1 | tag `v1.0-legacy`, branch `archive/v1-final` |
| Integration | `main` (protected, PR-only) |

## What we are building now

An interactive, source-grounded map of how AI systems emerged — ideas, people, labs, models, compute, data, and capital — told as **Story Paths**, not as a disconnected encyclopedia.

First flagship paths (DEC-001 H4):

1. Transformer → ChatGPT  
2. ImageNet / Hinton / AlexNet / GPU  
3. NVIDIA → CUDA → Deep Learning → AI infrastructure  

## Operating gate

- **ALLOWED:** research, fact-check, editorial, audience/UX discovery, ontology pressure-tests, prototypes on *real* verified stories.  
- **BLOCKED:** broad site coding until UX + data + acceptance canon pass the Factory Build Gate (H5).

Do **not** run `prompts/START_HERE_FOR_STRATEG.md`. That file launches the **v1** seed DAG. Use `docs/v2/` and `docs/v2/HERMES-INTAKE-001.md`.

## Canon (v2)

Authority order:

1. `docs/v2/DEC-001.md` (H1–H5)  
2. `docs/v2/PG-01.md`  
3. `docs/v2/` (charter / vision / PRD / research program as added)  
4. accepted ADRs  
5. validated `data/`  

Legacy v1 specs live under `spec/ai-atlas/` and `prompts/START_HERE_FOR_STRATEG.md`. They are evidence and lessons, not active product law.

## Factory

`human → Operational Strateg → Orchestrator → Researcher → Fact-checker → Editor → Designer/Architect → Reviewer → Critic → Human`

Coder sleeps until the implementation gate.

PRs: nobody pushes `main`. See `docs/GITHUB_WORKFLOW.md`. Every agent comment starts with `role: <name>`.

## Local v1 site (legacy only)

```powershell
cd <this-repo>
npm.cmd install
npm.cmd run preview
```

That preview is the **v1** experiment, not v2.
