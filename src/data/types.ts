export const SOURCE_CLASSES = [
  'primary',
  'research_dataset',
  'independent_report',
  'credible_reporting',
  'discovery_only',
] as const;

export const ENTITY_TYPES = [
  'model',
  'paper',
  'technology',
  'organization',
  'person',
] as const;

export const DATE_PRECISIONS = ['day', 'month', 'year'] as const;

export const PUBLISH_STATUSES = [
  'candidate',
  'verified',
  'rejected',
  'needs_review',
] as const;

export const RELATION_TYPES = [
  'released_by',
  'authored_by',
  'successor_of',
  'same_family_as',
  'uses_architecture',
  'introduced_concept',
  'influenced_by',
  'integrated_into',
  'enabled_by',
  'contemporary_with',
] as const;

export const STRONG_RELATION_TYPES = [
  'released_by',
  'authored_by',
  'successor_of',
  'uses_architecture',
  'introduced_concept',
  'influenced_by',
  'integrated_into',
  'enabled_by',
] as const;

export const CONFIDENCE_LEVELS = ['high', 'medium', 'low'] as const;

export type SourceClass = (typeof SOURCE_CLASSES)[number];
export type EntityType = (typeof ENTITY_TYPES)[number];
export type DatePrecision = (typeof DATE_PRECISIONS)[number];
export type PublishStatus = (typeof PUBLISH_STATUSES)[number];
export type RelationType = (typeof RELATION_TYPES)[number];
export type StrongRelationType = (typeof STRONG_RELATION_TYPES)[number];
export type Confidence = (typeof CONFIDENCE_LEVELS)[number];

export type SourceRecord = {
  id: string;
  title: string;
  publisher: string;
  url: string;
  source_class: SourceClass;
  published_at?: string | null;
  accessed_at?: string | null;
  license_note?: string | null;
};

export type EntityRecord = {
  id: string;
  entity_type: EntityType;
  name: string;
  source_ids?: string[];
};

export type MilestoneRecord = {
  id: string;
  title: string;
  date: string;
  date_precision: DatePrecision;
  category: string;
  summary: string;
  why_it_matters?: string;
  entity_ids?: string[];
  source_ids: string[];
  status: PublishStatus;
};

export type RelationRecord = {
  from: string;
  to: string;
  type: RelationType;
  confidence: Confidence;
  evidence_source_ids: string[];
  rationale?: string;
  status: PublishStatus;
};

export type AtlasDocument = {
  sources: SourceRecord[];
  entities: EntityRecord[];
  milestones: MilestoneRecord[];
  relations: RelationRecord[];
};

export type ValidationIssue = {
  code: string;
  message: string;
  path?: string;
};

export type ValidationResult = {
  ok: boolean;
  issues: ValidationIssue[];
};

export type PublishedAtlas = {
  sourcesById: Record<string, SourceRecord>;
  entitiesById: Record<string, EntityRecord>;
  milestonesById: Record<string, MilestoneRecord>;
  publishedMilestones: MilestoneRecord[];
  publishedRelations: RelationRecord[];
};

export type Neighborhood = {
  centerId: string;
  nodes: EntityRecord[];
  edges: RelationRecord[];
};

export type MilestoneFilters = {
  query?: string;
  types?: string[];
  organizationIds?: string[];
};

export type AtlasRepository = {
  getEntity(id: string): EntityRecord | undefined;
  getMilestone(id: string): MilestoneRecord | undefined;
  listMilestones(): MilestoneRecord[];
  filterMilestones(filters: MilestoneFilters): MilestoneRecord[];
  neighborhood(entityId: string): Neighborhood;
};
