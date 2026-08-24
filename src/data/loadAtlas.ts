import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join } from 'node:path';
import { parse } from 'yaml';
import type { AtlasDocument, EntityRecord, MilestoneRecord, RelationRecord, SourceRecord } from './types';

const empty = (): AtlasDocument => ({
  sources: [],
  entities: [],
  milestones: [],
  relations: [],
});

function collectFiles(dir: string, found: string[] = []): string[] {
  if (!existsSync(dir)) {
    return found;
  }
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      collectFiles(full, found);
      continue;
    }
    const ext = extname(entry);
    if (ext === '.yaml' || ext === '.yml') {
      found.push(full);
    }
  }
  return found;
}

function asArray<T>(value: unknown): T[] {
  return Array.isArray(value) ? (value as T[]) : [];
}

function mergeFile(doc: AtlasDocument, parsed: unknown): void {
  if (Array.isArray(parsed)) {
    return;
  }
  if (!parsed || typeof parsed !== 'object') {
    return;
  }
  const record = parsed as Record<string, unknown>;
  if (record.sources) {
    doc.sources.push(...asArray<SourceRecord>(record.sources));
  }
  if (record.entities) {
    doc.entities.push(...asArray<EntityRecord>(record.entities));
  }
  if (record.milestones) {
    doc.milestones.push(...asArray<MilestoneRecord>(record.milestones));
  }
  if (record.relations) {
    doc.relations.push(...asArray<RelationRecord>(record.relations));
  }
}

export function loadCanonicalAtlas(root = process.cwd()): AtlasDocument {
  const dataRoot = join(root, 'data');
  const seedPrefix = join(dataRoot, 'seed');
  const doc = empty();
  for (const file of collectFiles(dataRoot)) {
    if (file.startsWith(seedPrefix)) {
      continue;
    }
    const parsed = parse(readFileSync(file, 'utf8'));
    mergeFile(doc, parsed);
  }
  return doc;
}
