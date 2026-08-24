# ROLE ROUTING — recommended Hermes model map

The **role** is canonical; a model pin may change. Strateg records the actual mapping at kickoff.

| Factory role | Preferred model/profile | Purpose |
|---|---|---|
| Strateg | Grok 4.6 | turn project canon into execution strategy; stage decisions |
| Orchestrator | existing LUNA 900k orchestrator profile | DAG, status, handoff, rework, closure |
| Architect | Terra | data/app architecture, ADRs, ownership boundaries |
| Researcher | Terra or existing research profile | source discovery, evidence batches, fact synthesis |
| Coder | Grok 4.6 | implementation, tests, integration |
| Tester | existing tester (LUNA low/Terra medium) | deterministic/data/E2E evidence; no self-approval |
| **Critic** | **Claude Sonnet 5** | adversarial UX/content critique at explicit checkpoints |
| **Reviewer** | **Claude Sonnet 5, high effort** | independent same-card gate across research/architecture/code |
| Escalation reviewer | Claude Opus 5 | only disputed/high-complexity gate or failed convergence |

## Why Sonnet 5 is the default judge

As of the project date, Anthropic positions Claude Sonnet 5 as a strong agentic/coding model with lower cost than Opus-class models. It is a useful vendor/model-family counterweight to Grok/LUNA/Terra workers.

Use it to **disagree** when evidence warrants disagreement.
Do not prompt it to be a friendly rubber stamp.

## Opus 5 policy

Do not spend Opus 5 on routine review by default.
Escalate to it when:
- two Sonnet-review cycles fail to converge;
- a factual/architectural dispute remains material;
- final integration has high residual risk;
- Strateg explicitly wants an arbitration pass.

## Critic vs Reviewer

Critic:
- asks “what is weak, confusing, misleading or ugly?”;
- may propose alternatives;
- cannot approve a card.

Reviewer:
- checks exact card contract and evidence;
- approves / requests changes / blocks;
- must reject wrong-workspace evidence;
- must not redesign scope unless a contract flaw requires escalation.
