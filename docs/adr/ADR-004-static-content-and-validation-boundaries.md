# ADR-004 — Static content and validation boundaries

**Status:** accepted
**Date:** 2026-08-24

## Context

The dataset is both editorial content and a product test fixture. The release is static and cannot rely on runtime backends or third-party core-data services. Multiple UI surfaces must not reinterpret source, date, relation, or publish-status rules differently.

## Decision

- Keep canonical authored records in the data layout defined by the data contract: sources, typed entity collections, milestones, relations, and a JSON Schema under `data/schema/`.
- Treat `verified` and other publish statuses as publication gates. The UI consumes only the normalized publishable projection produced after validation; candidate, rejected, and needs-review records remain unavailable to normal product views.
- Implement validation as a pure Node/TypeScript module with a CLI/script wrapper. It validates schema shape and cross-file invariants: unique IDs, references, relation vocabulary, source requirements, status rules, confidence/evidence rules, and date precision.
- Build a pure normalization/query boundary that supplies by-ID lookup, timeline ordering/precision, filtered collections, and bounded graph-neighborhood inputs. UI modules must not parse raw content files or duplicate publishing logic.
- Preserve source IDs and relation evidence IDs through normalization so the detail experience can display item-relevant citations and relation inspection can explain confidence/evidence.

## Rationale

A canonical authoring format preserves reviewability and clear research handoff. A validated in-memory projection prevents each feature from making its own publication and relationship decisions. Pure validation and query modules are easy to unit-test with small fixtures, including deliberately invalid records.

## Consequences

- The consolidation card owns `data/**` and must produce canonical records that satisfy the validator.
- The scaffold card owns validator infrastructure and test-script wiring, without changing canonical facts.
- Feature cards consume typed selectors/view models rather than owning data mutations.
- The integration card owns composition-root wiring and any cross-feature state integration.

## Rejected alternatives

- **Per-feature JSON copies:** rejected because facts, citations, and publish status would diverge.
- **Runtime remote fetches:** rejected because the release must work from local static data without a required third-party data dependency.
- **UI-only validation:** rejected because invalid data must fail tests/build workflows before a user reaches a surface.
