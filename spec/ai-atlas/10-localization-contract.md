# 10 — Localization Contract (RU/EN)

Status: proposed canon for Sprint 2. Implementation is staged; only Stage 1 is required in Sprint 2.

## Goal

The atlas becomes **bilingual Russian / English**, with Russian as a first-class reading language rather than a machine-translated afterthought. English remains the source-of-record language because the cited primary sources are overwhelmingly English.

## Staging

| Stage | Scope | Sprint |
|---|---|---|
| **Stage 1** | Architecture only: extract all UI strings, add a locale layer, add the RU/EN switcher, ship with `en` complete and `ru` partial | Sprint 2 |
| Stage 2 | Full RU interface + RU editorial content (`summary`, `why_it_matters`, era intros) | Sprint 3 |
| Stage 3 | RU-first polish: typography, date formats, sorting, terminology glossary | Sprint 4 |

**Do the architecture before the translation.** Retrofitting i18n into a shipped UI is the expensive path, and the interface strings are still changing under `08-interaction-contract.md`.

## Rules

### R1 — Content and interface localize separately

Two distinct string populations:

- **Interface chrome** — buttons, labels, headings, microcopy. Lives in locale files.
- **Editorial content** — `summary`, `why_it_matters`, era introductions, relation `rationale`. Lives in `data/atlas.yaml` alongside the facts.

They have different owners, different review gates and different failure modes. Do not put them in one bucket.

### R2 — Data model for localized content

Localized editorial fields become maps, not strings:

```yaml
summary:
  en: "The paper describes image-text pre-training..."
  ru: "В статье описано предобучение на парах изображение-текст..."
```

The validator MUST accept a milestone whose `ru` value is absent and MUST fall back to `en` at render time. A missing translation is a degraded experience, never a broken page.

### R3 — What is never translated

- Source titles, publishers and URLs — a citation must remain findable as published.
- Model, organization and technology proper names (GPT-4, Anthropic, Transformer).
- `date_precision`, IDs, relation type identifiers.

Publisher and source title stay in the original language even in the Russian interface. A reader following a citation must be able to recognise the document.

### R4 — Translation is grounded, not generative

Russian editorial text is a **translation of the approved English text**, which is itself grounded in a cited source. A translator may not add facts, sharpen claims, or resolve ambiguity that the English text deliberately left open. The anti-hype policy in `05-research-contract.md` applies in both languages.

Translated text goes through the same factual review gate as the original.

### R5 — Terminology glossary is canon

Before translating content, produce `spec/ai-atlas/glossary-ru.md` fixing the Russian rendering of recurring terms. At minimum:

`lineage`, `milestone`, `entity`, `relation`, `successor`, `architecture`, `foundation model`, `reasoning model`, `release`, `technical report`, `model card`, `primary source`, `confidence`, `era`, `thread`.

Inconsistent terminology across 36 records reads as machine output. The glossary is a review gate, not a suggestion.

### R6 — Locale is URL state

Locale joins the existing URL state (`src/app/urlState.ts`), so a Russian view is shareable. Detect from `navigator.language` on first visit; an explicit choice always wins and persists.

### R7 — Layout must survive Russian

Russian UI strings run roughly 10–30% longer than English. Every control that gets a translated label MUST be verified at 390×844, where the current layout is already 5,215px tall. Add RU screenshots to the required evidence pack once Stage 2 lands.

## Acceptance — Stage 1

- [ ] No user-visible string is hard-coded in a component.
- [ ] Locale switcher is reachable by keyboard and reflected in the URL.
- [ ] Switching locale preserves current selection, filters and view.
- [ ] Missing `ru` values fall back to `en` without a visible error.
- [ ] `validate:data` accepts both plain-string and `{en, ru}` field shapes during migration.
- [ ] Glossary exists before any content translation begins.
