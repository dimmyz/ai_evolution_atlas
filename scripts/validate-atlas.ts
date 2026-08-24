import { pathToFileURL } from 'node:url';
import { loadCanonicalAtlas } from '../src/data/loadAtlas.ts';
import { validateAtlas } from '../src/data/validateAtlas.ts';

export function main(root = process.cwd()): number {
  const doc = loadCanonicalAtlas(root);
  const result = validateAtlas(doc);
  if (!result.ok) {
    for (const issue of result.issues) {
      process.stderr.write(`${issue.code}: ${issue.message}\n`);
    }
    return 1;
  }
  process.stdout.write(
    `validate:data ok (sources=${doc.sources.length} entities=${doc.entities.length} milestones=${doc.milestones.length} relations=${doc.relations.length})\n`,
  );
  return 0;
}

const invoked = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (invoked) {
  process.exit(main());
}
