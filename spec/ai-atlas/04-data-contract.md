# 04 — Data Contract

## Principle

The dataset is part of the product and part of the test harness. It must be reviewable, versioned and machine-validatable.

## Canonical structures

Recommended content layout after Architect confirmation:

```text
/data
  /sources
    sources.yaml
  /entities
    models.yaml
    organizations.yaml
    people.yaml
    papers.yaml
    technologies.yaml
  milestones.yaml
  relations.yaml
  /schema
    atlas.schema.json
```

A different layout is allowed only through ADR if it preserves the contracts below.

## Source record minimum

- stable `id`;
- title;
- publisher/authoring organization;
- URL;
- source class (`primary`, `research_dataset`, `independent_report`, `credible_reporting`, `discovery_only`);
- publication date when known;
- accessed date;
- optional license/reuse note.

## Milestone minimum

- stable slug `id`;
- title;
- event date;
- `date_precision`: `day | month | year`;
- category;
- concise neutral summary;
- `why_it_matters` editorial field;
- related entity IDs;
- source IDs supporting the displayed claim;
- publish status (`candidate | verified | rejected | needs_review`).

## Relation minimum

- `from` ID;
- `to` ID;
- relation type from vocabulary;
- evidence source IDs;
- confidence (`high | medium | low`);
- optional rationale;
- publish status.

## Validation invariants — MUST

Automated validator rejects:
- duplicate IDs;
- relation endpoints that do not exist;
- publishable milestones without sources;
- strong relations without evidence;
- invalid dates/date precision;
- unknown relation types;
- dangling entity references;
- unsupported `verified` status where source rules fail.

## Historical precision

Never invent day-level precision when only month/year is supported.
The UI should respect `date_precision` rather than fabricating `01` dates as if exact.

## Benchmark claims

Sprint 1 should avoid dense benchmark score comparisons.
If included, metric name/version/test conditions and source are mandatory.
Do not compare unlike benchmark versions as a single ranking.
