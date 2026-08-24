# AIH-14 browser / accessibility / visual evidence

## Workspace integrity

- Project ID: `ai-evolution-atlas`
- Working directory: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- Git root: `D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1`
- HEAD at test start: `f5d61c02e5c9e7cf08f347be6d82ffadd400ee90`
- `.hermes.md` contains `AI Evolution Atlas`: confirmed.

## Automated browser gate

Command: `npm.cmd run test:e2e`

Result: PASS — 3 Chromium tests passed in 17.0 seconds.

Coverage exercised:

- home boot and purpose copy, with no `pageerror`;
- editorial shell at 1440x900 and visible keyboard focus on the Lineage button;
- Start exploring selection and source-link visibility;
- search for GPT-4 and source-link visibility;
- Lineage selection, detail heading synchronization, SVG arrow marker presence;
- return to Timeline, entity highlight and selected milestone state;
- no fatal page errors during the integrated flow.

## Screenshot pack

| Artifact | Viewport | Capture result |
|---|---:|---|
| `evidence/home-1440x900.png` | 1440x900 | Existing Playwright evidence; home shell test passed |
| `evidence/timeline-selected-1440x900.png` | 1440x900 | Existing Playwright evidence; selected timeline state |
| `evidence/lineage-1440x900.png` | 1440x900 | Existing Playwright evidence; lineage view |
| `evidence/mobile-390x844.png` | 390x844 | Captured with Playwright Chromium screenshot CLI against local Vite preview |

The mobile artifact was verified as 390x844 pixels. The attempted iPhone 13 device preset was not used because it requested an unavailable WebKit executable; the required mobile dimensions were captured with Chromium's explicit `--viewport-size=390,844` instead.

## Visual / interaction observations

The 390x844 capture shows a coherent near-dark editorial surface, clear title and introductory hierarchy, restrained accent colors, readable timeline bands, and a usable stacked mobile layout. Timeline and Lineage remain native tab-like buttons; the existing 1440x900 browser test verifies keyboard focus visibility on Lineage. The mobile capture reaches the beginning of the Find section below the timeline without horizontal overflow visible in the viewport.

This is automated/evidence output only. Per the visual contract, final visual acceptance remains a human decision (`accepted` or `rework_required`) after any independent Critic review.

## Gate status

- Engineering/browser gate: PASS.
- Screenshot evidence gate: PASS; all four required artifacts are present.
- Accessibility-oriented browser checks: PASS for the declared keyboard focus and native control assertions in the e2e suite.
- Human visual acceptance: PENDING human decision.
