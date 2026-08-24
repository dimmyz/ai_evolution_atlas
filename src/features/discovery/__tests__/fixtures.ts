import type {
  EntityRecord,
  MilestoneRecord,
  PublishedAtlas,
  SourceRecord,
} from '../../../data/types';

const srcAttention: SourceRecord = {
  id: 'src-attention',
  title: 'Attention Is All You Need',
  publisher: 'NeurIPS',
  url: 'https://papers.nips.cc/paper/7181-attention-is-all-you-need',
  source_class: 'primary',
  published_at: '2017-12-04',
};

const srcGpt4: SourceRecord = {
  id: 'src-gpt4',
  title: 'GPT-4 Technical Report',
  publisher: 'OpenAI',
  url: 'https://arxiv.org/abs/2303.08774',
  source_class: 'primary',
  published_at: '2023-03-15',
};

const orgGoogle: EntityRecord = {
  id: 'org-google',
  entity_type: 'organization',
  name: 'Google Research',
  source_ids: ['src-attention'],
};

const orgOpenai: EntityRecord = {
  id: 'org-openai',
  entity_type: 'organization',
  name: 'OpenAI',
  source_ids: ['src-gpt4'],
};

const techTransformer: EntityRecord = {
  id: 'tech-transformer',
  entity_type: 'technology',
  name: 'Transformer',
  source_ids: ['src-attention'],
};

const msTransformer: MilestoneRecord = {
  id: 'ms-transformer',
  title: 'Transformer paper',
  date: '2017',
  date_precision: 'year',
  category: 'paper',
  summary: 'Attention-only sequence models.',
  why_it_matters: 'Architectural starting point.',
  entity_ids: ['tech-transformer', 'org-google'],
  source_ids: ['src-attention'],
  status: 'verified',
};

const msGpt4: MilestoneRecord = {
  id: 'ms-gpt4',
  title: 'GPT-4 technical report',
  date: '2023-03-15',
  date_precision: 'day',
  category: 'technical_report',
  summary: 'A multimodal model family described in a technical report.',
  entity_ids: ['org-openai'],
  source_ids: ['src-gpt4'],
  status: 'verified',
};

const msCandidate: MilestoneRecord = {
  id: 'ms-rumor',
  title: 'Unverified rumor',
  date: '2024',
  date_precision: 'year',
  category: 'release',
  summary: 'Must not enter the search index.',
  entity_ids: ['org-openai'],
  source_ids: ['src-gpt4'],
  status: 'candidate',
};

export function discoveryAtlas(): PublishedAtlas {
  return {
    sourcesById: {
      [srcAttention.id]: srcAttention,
      [srcGpt4.id]: srcGpt4,
    },
    entitiesById: {
      [orgGoogle.id]: orgGoogle,
      [orgOpenai.id]: orgOpenai,
      [techTransformer.id]: techTransformer,
    },
    milestonesById: {
      [msTransformer.id]: msTransformer,
      [msGpt4.id]: msGpt4,
    },
    publishedMilestones: [msTransformer, msGpt4],
    publishedRelations: [],
  };
}

export { srcAttention, srcGpt4, orgGoogle, orgOpenai, techTransformer, msTransformer, msGpt4, msCandidate };
