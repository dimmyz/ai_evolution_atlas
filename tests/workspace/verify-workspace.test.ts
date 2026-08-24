import { spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const script = join(process.cwd(), 'scripts', 'verify-workspace.mjs');

function run(cwd: string) {
  return spawnSync(process.execPath, [script], {
    cwd,
    encoding: 'utf8',
  });
}

function writeWorkspace(options: {
  projectId?: string | null;
  packageName?: string | null;
  hermesTitle?: string | null;
  omitSeed?: boolean;
  omitPackage?: boolean;
  omitHermes?: boolean;
}) {
  const dir = mkdtempSync(join(tmpdir(), 'atlas-workspace-'));
  if (!options.omitSeed) {
    const id = options.projectId === undefined ? 'ai-evolution-atlas' : options.projectId;
    writeFileSync(
      join(dir, 'PROJECT_SEED.yaml'),
      id === null ? 'version: 0.1\n' : `project_id: ${id}\nversion: 0.1\n`,
      'utf8',
    );
  }
  if (!options.omitPackage) {
    const name = options.packageName === undefined ? 'ai-evolution-atlas' : options.packageName;
    writeFileSync(
      join(dir, 'package.json'),
      JSON.stringify({ name, private: true, version: '0.1.0' }, null, 2),
      'utf8',
    );
  }
  if (!options.omitHermes) {
    const title = options.hermesTitle === undefined ? 'AI Evolution Atlas' : options.hermesTitle;
    writeFileSync(
      join(dir, '.hermes.md'),
      title === null ? '# Unrelated project\n' : `# Hermes project rules — ${title}\n`,
      'utf8',
    );
  }
  mkdirSync(join(dir, 'spec', 'ai-atlas'), { recursive: true });
  return dir;
}

describe('verify:workspace', () => {
  it('accepts this repository when project_id is ai-evolution-atlas', () => {
    const result = run(process.cwd());
    expect(result.status, result.stderr + result.stdout).toBe(0);
    expect(result.stdout).toMatch(/ai-evolution-atlas/);
  });

  it('fails closed when project_id is missing', () => {
    const cwd = writeWorkspace({ projectId: null });
    const result = run(cwd);
    expect(result.status).not.toBe(0);
  });

  it('fails closed when project_id is a different product', () => {
    const cwd = writeWorkspace({ projectId: 'multi-agent-test' });
    const result = run(cwd);
    expect(result.status).not.toBe(0);
    expect(`${result.stdout}${result.stderr}`).not.toMatch(/MultiAgentTest defaults/i);
  });

  it('fails closed when package name does not match', () => {
    const cwd = writeWorkspace({ packageName: 'wrong-app' });
    const result = run(cwd);
    expect(result.status).not.toBe(0);
  });

  it('fails closed when PROJECT_SEED.yaml is absent', () => {
    const cwd = writeWorkspace({ omitSeed: true });
    const result = run(cwd);
    expect(result.status).not.toBe(0);
  });

  it('fails closed when .hermes.md does not name AI Evolution Atlas', () => {
    const cwd = writeWorkspace({ hermesTitle: 'Some Other Product' });
    const result = run(cwd);
    expect(result.status).not.toBe(0);
  });
});
