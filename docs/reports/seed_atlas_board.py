"""Strateg seeder for AI Evolution Atlas. Not product code."""
from __future__ import annotations

import json
import subprocess

WS = "dir:D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1"
BOARD = "ai-atlas"
HDR = """project_id: ai-evolution-atlas
workspace_expected: D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1
git_root_expected: D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1
logical_sprint: AIH-SPRINT-01
canon: .hermes.md, spec/ai-atlas/*, docs/ORCHESTRATION.md, docs/WORKSPACE_INTEGRITY.md

Preflight before work: record cwd, git rev-parse --show-toplevel, confirm .hermes.md says AI Evolution Atlas, record HEAD.
Reviewer first question: is evidence from this workspace? Wrong repo = reject.
Same-card review for significant deliverables: request_review(reviewer=reviewer). Reviewer does not receive Coder reasoning transcripts.
No chrome: links. Windows humans: npm.cmd. Playwright Chromium from scaffold onward.
Do not write project paths into SOUL/MEMORY.
"""


def create(title, assignee, body, parents=None):
    cmd = [
        "hermes", "kanban", "--board", BOARD, "create", title,
        "--assignee", assignee, "--workspace", WS, "--body", body, "--json",
    ]
    for p in parents or []:
        cmd.extend(["--parent", p])
    data = json.loads(subprocess.check_output(cmd, text=True))
    print(f"{data['id']}  {data['status']:8}  {assignee:14}  {title}")
    return data


def main():
    duty = create(
        "AIH-SPRINT-01 duty (bounded, no patrol loops)",
        "orchestrator",
        f"""{HDR}
Read prompts/ORCHESTRATOR_MISSION.md.

DAG AIH-01..15 is ALREADY created. Do not duplicate.

ONE sweep now:
- confirm identities/assignees/deps
- write docs/reports/orchestrator-duty.md (one short section)
- then kanban_block kind=dependency waiting for: any blocked/needs_input, 3rd rework, contaminated evidence, or AIH-13+AIH-14 both done (then do/monitor AIH-15)

FORBIDDEN: 30 still-waiting passes. No product code. No Sol. Do not treat aquarium/MultiAgentTest evidence as valid.
""",
    )

    a01 = create(
        "AIH-01 Source baseline + research plan",
        "researcher",
        f"""{HDR}
Objective: Write research/source-baseline.md — source hierarchy, Epoch/AI Index as orientation not sole truth, Transformer paper as origin, plan for 30–40 milestones 2017–2026.
Own: research/source-baseline.md only.
Out: plan for batches A/B; no canonical data/ yet.
Verify: file exists; cites primary-first policy from spec/05.
Then request_review.
""",
    )

    a02 = create(
        "AIH-02 Architecture + visualization ADRs",
        "architect",
        f"""{HDR}
Depends on AIH-01.
Objective: Module map + ADRs. Choose lineage viz (React Flow vs Cytoscape) and timeline (D3 or justified alternative). Design for editorial demo quality (spec/06), not default graph chrome.
Own: docs/adr/*, docs/architecture.md.
Do not implement the app.
Then request_review.
""",
        parents=[a01["id"]],
    )

    a03 = create(
        "AIH-03 Research batch A 2017–2022",
        "researcher",
        f"""{HDR}
Depends on AIH-01.
Own ONLY research/batches/2017-2022.* — raw evidence, not canonical data/.
Primary sources first. No invented lineage. Strong edges need evidence IDs.
Then request_review.
""",
        parents=[a01["id"]],
    )

    a04 = create(
        "AIH-04 Research batch B 2023–2026",
        "researcher",
        f"""{HDR}
Depends on AIH-01.
Own ONLY research/batches/2023-2026.*
Same research contract as AIH-03.
Then request_review.
""",
        parents=[a01["id"]],
    )

    a05 = create(
        "AIH-05 Canonical dataset v1 consolidation",
        "researcher",
        f"""{HDR}
Depends on AIH-02,03,04.
Own data/ only. Merge batches into schema-valid entities/milestones/relations (~30–40 milestones).
No UI. Validator should fail bad records.
Then request_review.
""",
        parents=[a02["id"], a03["id"], a04["id"]],
    )

    a06 = create(
        "AIH-06 Scaffold + workspace guard + Playwright",
        "coder",
        f"""{HDR}
Depends on AIH-02.
Own repo scaffold (package, Vite/TS or ADR stack), npm run verify:workspace (fail closed unless project_id ai-evolution-atlas), Playwright Chromium, docs/BROWSER_SMOKE.md, npm.cmd notes.
No feature UI yet. Green: npm.cmd test, test:e2e smoke that app boots.
Then request_review.
""",
        parents=[a02["id"]],
    )

    a07 = create(
        "AIH-07 Visual system + editorial shell",
        "coder",
        f"""{HDR}
Depends on AIH-06.
Own src/shell/** + tokens. Demo-quality dark editorial layout (spec/06). Not cyberpunk clutter, not default component demo.
Screenshot evidence/home-1440x900.png if harness allows.
Then request_review. Visual bar is a MUST not a later maybe.
""",
        parents=[a06["id"]],
    )

    a08 = create(
        "AIH-08 Timeline + detail panel",
        "coder",
        f"""{HDR}
Depends on AIH-05,07.
Own ONLY src/features/timeline/**. Do not rewrite shell composition root.
Timeline of canonical milestones + detail drawer + citations.
Then request_review + evidence/timeline-selected-1440x900.png if possible.
""",
        parents=[a05["id"], a07["id"]],
    )

    a09 = create(
        "AIH-09 Lineage graph",
        "coder",
        f"""{HDR}
Depends on AIH-05,07.
Own ONLY src/features/lineage/**. Custom styled graph, not stock React Flow/Cytoscape theme.
Then request_review + evidence/lineage-1440x900.png if possible.
""",
        parents=[a05["id"], a07["id"]],
    )

    a10 = create(
        "AIH-10 Search/filter + citation UX",
        "coder",
        f"""{HDR}
Depends on AIH-05,07.
Own ONLY src/features/discovery/**.
Search/filter + citation UX, keyboard reachable.
Then request_review.
""",
        parents=[a05["id"], a07["id"]],
    )

    a11 = create(
        "AIH-11 Adversarial UX/content critique",
        "critic",
        f"""{HDR}
Depends on AIH-08,09,10.
You are Critic not Reviewer. Write docs/reports/critic-aih11.md: what is weak, ugly, misleading. Severity. Screenshots if possible.
Cannot approve the product. Do not implement.
""",
        parents=[a08["id"], a09["id"], a10["id"]],
    )

    a12 = create(
        "AIH-12 Integrate slice + critic rework",
        "coder",
        f"""{HDR}
Depends on AIH-11.
Own shared composition root + critic-driven fixes. Wire timeline/lineage/discovery into one demo-quality site.
Then request_review.
""",
        parents=[a11["id"]],
    )

    a13 = create(
        "AIH-13 Factual/data acceptance evidence",
        "tester",
        f"""{HDR}
Depends on AIH-12.
Workspace MUST be this Atlas pack. Never MultiAgentTest or Aquarium.
Write docs/reports/factual-acceptance.md. Sample claims vs sources. Schema validator.
Honest fail allowed.
""",
        parents=[a12["id"]],
    )

    a14 = create(
        "AIH-14 Browser / a11y / visual evidence",
        "tester",
        f"""{HDR}
Depends on AIH-12.
npm.cmd run test:e2e. Capture required screenshots in evidence/. Write docs/reports/visual-acceptance.md.
Never chrome: / Store. Human visual accepted/rework is Strateg/human later.
""",
        parents=[a12["id"]],
    )

    a15 = create(
        "AIH-15 Sprint closure + factory scorecard",
        "orchestrator",
        f"""{HDR}
Depends on AIH-13,14.
Write docs/reports/sprint-01.md from template. Do not upgrade verdict without evidence. No product code.
""",
        parents=[a13["id"], a14["id"]],
    )

    mapping = {
        "duty": duty["id"],
        "AIH-01": a01["id"],
        "AIH-02": a02["id"],
        "AIH-03": a03["id"],
        "AIH-04": a04["id"],
        "AIH-05": a05["id"],
        "AIH-06": a06["id"],
        "AIH-07": a07["id"],
        "AIH-08": a08["id"],
        "AIH-09": a09["id"],
        "AIH-10": a10["id"],
        "AIH-11": a11["id"],
        "AIH-12": a12["id"],
        "AIH-13": a13["id"],
        "AIH-14": a14["id"],
        "AIH-15": a15["id"],
        "sonnet5": "unavailable_no_anthropic_key",
    }
    path = "D:/Projects/AI_Evolution_Atlas/AI_Evolution_Atlas_Project_Pack_v0.1/docs/reports/sprint-01-card-ids.json"
    with open(path, "w", encoding="utf-8") as f:
        json.dump(mapping, f, indent=2)
        f.write("\n")
    print(json.dumps(mapping, indent=2))


if __name__ == "__main__":
    main()
