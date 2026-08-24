# Quality Gates

## Gate A — Workspace/provenance

Before any substantive review:
- correct project ID;
- correct cwd/Git root;
- expected canon exists;
- relevant commit/hash recorded;
- no evidence copied from unrelated repo.

Fail this gate -> immediate `request_changes` or `blocked`; do not continue to semantic review.

## Gate B — Factual

Required checks:
- source tier acceptable;
- date precision honest;
- summary paraphrases source correctly;
- “why it matters” is editorially cautious;
- relationship type matches evidence;
- entity IDs and source IDs resolve;
- sample audit documented.

## Gate C — Engineering

- install path;
- data/schema tests;
- unit tests;
- typecheck;
- build;
- E2E smoke;
- no fatal page errors;
- no hidden network requirement for core runtime.

## Gate D — UX/Visual

- screenshot pack;
- Sonnet 5 Critic rubric;
- responsive sanity;
- keyboard core flow;
- graph/timeline readability;
- citations visible;
- no developer-demo appearance.

## Gate E — Factory

- one assignee/card;
- correct dependencies;
- same-card review;
- handoff metadata;
- bounded rework;
- orchestrator closure;
- human only at intended gates.
