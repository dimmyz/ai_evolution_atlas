# 02 — Product Contract

## Experience goal

The site should feel like a modern interactive editorial explainer, not a developer graph demo.

## Home / orientation

The first screen must communicate:
- title and one-sentence purpose;
- date range;
- obvious way to start exploring;
- visual hint that both time and lineage matter.

Avoid a dense dashboard as the first impression.

## Timeline

MUST:
- chronology from 2017 to 2026;
- milestones positioned by date with sensible precision;
- hover/focus/selection state;
- readable labels without total overlap;
- filters affect visible milestones predictably;
- selecting an item opens detail content without losing context;
- keyboard path for selecting/filtering core controls.

SHOULD:
- zoom/condense behavior or intelligent clustering;
- era bands;
- selected item remains visible after filtering when valid.

## Detail panel

For each publishable milestone/entity show only supported fields, for example:
- name/title;
- date or date precision;
- organization/lab;
- short “what happened” summary;
- “why it matters” editorial summary;
- category/tags;
- related people/organizations/technologies;
- typed related nodes;
- citations/source list.

Do not show empty decorative metadata.

## Lineage / relationship graph

MUST:
- visually distinguish node types;
- visually distinguish relation types or make them inspectable;
- support pan/zoom/selection;
- clicking a node can open the same detail model as timeline;
- avoid pretending every relation is direct descent;
- ambiguous “influence” edges are only published with evidence and confidence metadata.

A clean focused subgraph is preferred over a giant hairball.

## Search / filters

MUST support at least:
- text search by entity/milestone title;
- category/type;
- organization/lab;
- time/era or year range.

## Source experience

Every publishable milestone has visible sources.
Source links must be associated with the relevant item/claim, not hidden in one global bibliography.

## Interaction state

The app should have one coherent selected-entity state shared by timeline, detail panel and lineage view.

## Runtime

- static/local data in Sprint 1;
- no required backend;
- no runtime dependency on a third-party CDN for core UI/data;
- external source links open only when user chooses them.
