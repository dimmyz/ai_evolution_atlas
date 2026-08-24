import { StrictMode, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { parse } from 'yaml';
import { createAtlasRepository } from '../../data/atlasRepository';
import { normalizeAtlas } from '../../data/normalizeAtlas';
import type { AtlasDocument } from '../../data/types';
import { validateAtlas } from '../../data/validateAtlas';
import '../../styles/tokens.css';
import { LineageView } from './LineageView';
import type { SelectedTarget } from './resolveFocus';
import atlasYaml from '../../../data/atlas.yaml?raw';

const parsed = parse(atlasYaml) as AtlasDocument;
const validation = validateAtlas(parsed);
if (!validation.ok) {
  throw new Error(validation.issues.map((issue) => issue.message).join('; '));
}

const repo = createAtlasRepository(normalizeAtlas(parsed));

function Preview() {
  const [selected, setSelected] = useState<SelectedTarget>({ kind: 'entity', id: 'tech-transformer' });
  const [entityFocusId, setEntityFocusId] = useState<string | undefined>();

  const neighborhoodFor = useMemo(() => (id: string) => repo.neighborhood(id), []);

  return (
    <main className="lineage-preview-frame">
      <LineageView
        selected={selected}
        entityFocusId={entityFocusId}
        getEntity={(id) => repo.getEntity(id)}
        getMilestone={(id) => repo.getMilestone(id)}
        neighborhoodFor={neighborhoodFor}
        onSelect={(target) => {
          setSelected(target);
          if (target.kind === 'entity') {
            setEntityFocusId(target.id);
          }
        }}
        onEntityFocus={(id) => {
          setEntityFocusId(id);
        }}
      />
    </main>
  );
}

const root = document.getElementById('lineage-preview');
if (!root) {
  throw new Error('Missing lineage preview root');
}

createRoot(root).render(
  <StrictMode>
    <Preview />
  </StrictMode>,
);
