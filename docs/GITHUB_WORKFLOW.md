# GitHub workflow — how Factory cards reach `main`

Canon: this document is subordinate to `.hermes.md`. Where they disagree, `.hermes.md` wins.

## The rule

**Nobody pushes to `main`. Not agents, not the human.** Every change arrives as a pull request that passed the quality gates.

`main` is protected by a ruleset with no bypass actors, so this is enforced by GitHub rather than by discipline.

## The flow

```
worker agent          Reviewer agent           GitHub
     │                       │                    │
  branch + push              │                    │
     │                       │                    │
  open PR ──────────────────►│                    │
     │                       │              Quality gates run
     │                  same-card review          │
     │                       │                    │
     │              label reviewed:approved ──────►│
     │                       │              Reviewer merge arms auto-merge
     │                       │                    │
     │                       │              CI green → squash-merge by bot
     │                       │              branch deleted
```

## For the worker agent

```bash
git switch -c s2-01-relation-harvest
# ... do the card ...
git add -A && git commit -m "..."
git push -u origin s2-01-relation-harvest

gh pr create --base main \
  --title "S2-01 Relation harvest from existing sources" \
  --body "card: t_xxxxxxxx
project_id: ai-evolution-atlas
workspace: D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1

<what changed, what evidence was produced, which gates were run locally>"
```

Branch naming: `<card-id>-<short-slug>`, e.g. `s2-03-thread-interaction-spec`.

The worker **never** applies `reviewed:approved` to its own PR. That label is the Reviewer's signature.

## For the Reviewer agent

The review itself is unchanged — the same same-card review defined in `.hermes.md` §6, against the gates in `docs/QUALITY_GATES.md`. What changes is where the verdict is recorded.

**Approve:**

```bash
gh pr review <n> --comment --body "<the review report>"
gh pr edit <n> --add-label "reviewed:approved"
```

Applying the label is the merge instruction. Auto-merge arms immediately and the PR merges by itself when CI turns green — the Reviewer does not wait for it and does not merge manually.

**Request changes:**

```bash
gh pr review <n> --comment --body "<findings, one per required change>"
# do not apply reviewed:approved
```

**Withdraw an approval** (new commits arrived, or a finding surfaced late):

```bash
gh pr edit <n> --remove-label "reviewed:approved"
```

## For the Critic

A Critic checkpoint is adversarial analysis, not an acceptance gate (`.hermes.md` §6). But a Critic may **stop** a merge:

```bash
gh pr edit <n> --add-label "critic:blocking"
```

`Reviewer merge` refuses while that label is present, even with `reviewed:approved`. Only the Critic that raised it removes it.

## The canon gate

PRs touching `spec/**`, `data/**` or `.hermes.md` **cannot be merged by agents at all**, regardless of Reviewer approval. The workflow labels them `canon:human-required` and refuses.

A human must review and apply `human:approved`.

This is the most important rule here. It is what prevents an agent from quietly weakening the source contract, lowering an acceptance criterion, or adding relations that no source supports — the exact failure mode the research contract exists to prevent, and the one thing green CI can never detect.

## What is enforced, and what is only recorded

Be honest about this when reasoning about trust:

| Control | Enforced by GitHub | Notes |
|---|---|---|
| No direct push to `main` | **Yes** | ruleset, no bypass actors |
| PR required | **Yes** | ruleset |
| CI must pass before merge | **Yes** | required status check `Gate A/B/C` |
| Merge performed by bot, not author | **Yes** | `github-actions[bot]` squash-merges |
| Canon changes need a human | **Partly** | the workflow refuses, but an agent holding the same token *could* apply `human:approved` |
| `reviewed:approved` means the Reviewer reviewed | **No** | it means *someone with the token* applied a label |

**Every agent currently authenticates as the same GitHub user (`dimmyz`).** GitHub does not allow approving your own pull request, which is why approval is expressed as a label rather than a review. The consequence: labels are a process signal with an audit trail, not a security boundary.

### Making it a real boundary

To get genuine independence, the Reviewer needs a **separate GitHub identity**:

1. **Machine user** — a second GitHub account added as a collaborator, with its own token used only by the Reviewer profile. Simplest option. The Reviewer can then submit an actual `gh pr review --approve`, and the ruleset can require 1 approval.
2. **GitHub App** — an App installation is a distinct actor and can approve PRs. Cleaner permissions, more setup.

Either upgrade turns `required_approving_review_count` from `0` into `1` and makes reviewer independence structural rather than procedural. Until then, independence lives where it already lives: in Hermes routing the Reviewer to a different model and profile than the worker.

## Emergency

The ruleset has no bypass actors, so even the repository owner cannot push to `main` directly. To make an emergency change, either open a PR, or temporarily set the ruleset to `evaluate`/`disabled` in **Settings → Rules**, and set it back to `active` afterwards.

Prefer the PR. The whole point of Sprint 1's retrospective is that the exception path is where evidence goes missing.
