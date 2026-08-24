#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const EXPECTED_PROJECT_ID = 'ai-evolution-atlas';
const EXPECTED_TITLE = 'AI Evolution Atlas';

function fail(message) {
  process.stderr.write(`${message}\n`);
  process.exit(1);
}

function readText(path) {
  try {
    return readFileSync(path, 'utf8');
  } catch {
    return null;
  }
}

const root = process.cwd();
const seedPath = join(root, 'PROJECT_SEED.yaml');
const packagePath = join(root, 'package.json');
const hermesPath = join(root, '.hermes.md');

if (!existsSync(seedPath)) {
  fail('verify:workspace failed: PROJECT_SEED.yaml is missing');
}

const seedText = readText(seedPath) ?? '';
const projectIdMatch = seedText.match(/^project_id:\s*([^\s#]+)/m);
const projectId = projectIdMatch?.[1];

if (!projectId) {
  fail('verify:workspace failed: project_id is missing from PROJECT_SEED.yaml');
}

if (projectId !== EXPECTED_PROJECT_ID) {
  fail(`verify:workspace failed: project_id is '${projectId}', expected '${EXPECTED_PROJECT_ID}'`);
}

if (!existsSync(packagePath)) {
  fail('verify:workspace failed: package.json is missing');
}

let packageName;
try {
  packageName = JSON.parse(readText(packagePath) ?? '{}').name;
} catch {
  fail('verify:workspace failed: package.json is not valid JSON');
}

if (packageName !== EXPECTED_PROJECT_ID) {
  fail(
    `verify:workspace failed: package.json name is '${packageName}', expected '${EXPECTED_PROJECT_ID}'`,
  );
}

const hermesText = readText(hermesPath);
if (hermesText === null) {
  fail('verify:workspace failed: .hermes.md is missing');
}

if (!hermesText.includes(EXPECTED_TITLE)) {
  fail(`verify:workspace failed: .hermes.md does not contain '${EXPECTED_TITLE}'`);
}

process.stdout.write(
  `verify:workspace ok\nproject_id: ${projectId}\npackage: ${packageName}\n`,
);
process.exit(0);
