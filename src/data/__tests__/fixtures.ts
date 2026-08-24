import type { AtlasDocument } from '../types';

const source = {
  id: 'src-attention',
  title: 'Attention Is All You Need',
  publisher: 'NeurIPS',
  url: 'https://papers.nips.cc/paper/7181-attention-is-all-you-need',
  source_class: 'primary' as const,
  published_at: '2017-12-04',
  accessed_at: '2026-08-24',
};

const org = {
  id: 'org-google-brain',
  entity_type: 'organization' as const,
  name: 'Google Brain',
  source_ids: ['src-attention'],
};

const model = {
  id: 'model-transformer',
  entity_type: 'model' as const,
  name: 'Transformer',
  source_ids: ['src-attention'],
};

const milestone = {
  id: 'ms-attention-is-all-you-need',
  title: 'Transformer architecture published',
  date: '2017-06-12',
  date_precision: 'day' as const,
  category: 'paper',
  summary: 'The Transformer paper introduced attention-only sequence models.',
  why_it_matters: 'It became the architectural starting point for later foundation models.',
  entity_ids: ['model-transformer', 'org-google-brain'],
  source_ids: ['src-attention'],
  status: 'verified' as const,
};

const relation = {
  from: 'model-transformer',
  to: 'org-google-brain',
  type: 'released_by' as const,
  confidence: 'high' as const,
  evidence_source_ids: ['src-attention'],
  status: 'verified' as const,
};

export function validAtlas(overrides: Partial<AtlasDocument> = {}): AtlasDocument {
  return {
    sources: [source],
    entities: [org, model],
    milestones: [milestone],
    relations: [relation],
    ...overrides,
  };
}

export { source, org, model, milestone, relation };
