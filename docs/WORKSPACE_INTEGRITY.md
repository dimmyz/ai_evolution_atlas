# Workspace Integrity Protocol

This exists because Aquarium AQ-10 produced valid tests for the wrong repository.

## Card header requirement

Every card begins with:

```text
project_id: ai-evolution-atlas
workspace_expected: <absolute path chosen at kickoff>
canon: <paths>
```

## Worker preflight evidence

Record:

```text
cwd: ...
git_root: ...
head: ...
hermes_project_title_seen: AI Evolution Atlas
```

## Reviewer first question

“Is this evidence from the declared workspace and project?”

If no/unclear:
- do not accept any tests;
- request corrected evidence;
- mark prior evidence contaminated in the handoff/history rather than deleting it.

## Optional scaffold implementation

Coder should add a small command such as:

`npm run verify:workspace`

It should fail closed if a local project marker/package identifier does not match `ai-evolution-atlas`.

Exact mechanism is an implementation decision; the outcome is mandatory.
