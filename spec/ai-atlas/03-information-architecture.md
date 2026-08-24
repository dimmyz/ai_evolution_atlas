# 03 — Information Architecture

## Core entity classes

The content model should distinguish at least:

- `milestone` — dated event/release/publication;
- `model` — model or model family entity;
- `paper` — research publication;
- `technology` — architectural/technical concept;
- `organization` — lab/company/institution;
- `person` — individual where relevant.

A milestone may reference one or more entities. Do not duplicate the same fact as unrelated copies across the UI.

## Relationship vocabulary

Allowed initial relation types:

- `released_by`
- `authored_by`
- `successor_of`
- `same_family_as`
- `uses_architecture`
- `introduced_concept`
- `influenced_by`
- `integrated_into`
- `enabled_by`
- `contemporary_with` (use sparingly; weak semantic value)

## Semantics rule

Chronological order alone is not evidence for `influenced_by` or `enabled_by`.
A strong directional edge requires explicit source support or a documented editorial rationale marked with confidence.

## Navigation model

One selected entity drives:
- timeline highlight;
- detail panel;
- lineage neighborhood;
- URL state if implemented.

Filters should not create separate conflicting state models per view.

## URL model — SHOULD

Prefer a shareable state such as:
- `?entity=gpt-4`
- `?view=lineage&entity=transformer`

Do not block Sprint 1 if URL state creates disproportionate complexity.
