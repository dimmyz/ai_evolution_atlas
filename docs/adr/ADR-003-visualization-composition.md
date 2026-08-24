# ADR-003 — Editorial visualization composition

**Status:** accepted
**Date:** 2026-08-24

## Context

The product must explain chronology and supported relationships as an editorial experience. The visual contract forbids default graph-library chrome, dense dashboard framing, and a giant lineage hairball. Timeline and lineage must open the same detail model and must share selection/filter semantics.

## Decision

### Timeline

- Render the timeline as React-owned SVG/HTML layers using D3 time-scale/tick/date-format utilities.
- Use a date-to-position adapter that honors `day | month | year` precision. A year-precision record is represented as a year span/anchor treatment, never as a fabricated exact day.
- Keep visual label placement, clustering/condensing behavior, and milestone cards in product-owned components rather than in a charting library.
- Treat editorial eras as labeled navigation bands, not as scientific classifications.

### Lineage

- Use React Flow for a selected entity or milestone's bounded relationship neighborhood.
- Derive graph nodes and edges only from validated, publishable records and relations. Preserve relation type, confidence, and evidence availability in edge data so it can be inspected.
- Use product-owned custom nodes, custom edge treatments, legend, controls, and a deterministic layout adapter. Do not expose workflow-editor affordances or ship React Flow defaults.
- Limit the default neighborhood to a small, readable depth/count budget. When more related records exist, offer explicit expansion or a related-items path rather than automatically producing a hairball.

### Shared interaction

- A canonical selection is one discriminated target: `{ kind: 'entity' | 'milestone', id }`. It avoids parallel timeline-only and graph-only selected-node models.
- A selected milestone may offer an explicit entity focus choice for lineage; it may not silently infer lineage from chronology or overwrite the milestone selection.
- Filter state is shared and pure: it constrains timeline visibility, search results, related-item lists, and graph inclusion consistently.
- Timeline selection, graph node selection, search result selection, and detail links dispatch into the same selection controller.

## Rationale

This composition makes the two visualizations related through data and interaction while allowing each to retain an appropriate visual language: chronological editorial rhythm for the timeline and inspectable directed relationships for lineage. It directly supports the product's promise that a reader can select a milestone, understand why it matters, follow a relation, and open its source.

## Consequences

- Timeline and graph components cannot read raw YAML independently; both consume the same normalized, validated atlas view model.
- Layout must be deterministic for stable Playwright screenshots and test assertions.
- Keyboard support is a product responsibility around timeline items, controls, and graph selection; pan/zoom alone is not an accessibility substitute.
- A later need for full-network exploration is a new product decision and must be evaluated independently, not enabled by quietly removing the neighborhood budget.

## Rejected alternatives

- **Cytoscape.js:** rejected by ADR-001 for this bounded, React-native editorial graph.
- **One combined timeline/graph canvas:** rejected because it conflates chronology with causality/influence and would make labels, focus, and mobile fallback harder to understand.
- **A default library theme:** rejected by the visual contract.
