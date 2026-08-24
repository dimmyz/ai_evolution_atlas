import {
  DATE_PRECISIONS,
  RELATION_TYPES,
  STRONG_RELATION_TYPES,
  type AtlasDocument,
  type ValidationIssue,
  type ValidationResult,
} from './types';

const STRONG = new Set<string>(STRONG_RELATION_TYPES);
const RELATIONS = new Set<string>(RELATION_TYPES);
const PRECISIONS = new Set<string>(DATE_PRECISIONS);

function issue(code: string, message: string, path?: string): ValidationIssue {
  return { code, message, path };
}

function dateMatchesPrecision(date: string, precision: string): boolean {
  if (precision === 'year') {
    return /^\d{4}$/.test(date);
  }
  if (precision === 'month') {
    return /^\d{4}-(0[1-9]|1[0-2])$/.test(date);
  }
  if (precision === 'day') {
    return /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(date);
  }
  return false;
}

export function validateAtlas(doc: AtlasDocument): ValidationResult {
  const issues: ValidationIssue[] = [];
  const seen = new Map<string, string>();

  const remember = (id: string, kind: string, path: string) => {
    const existing = seen.get(id);
    if (existing) {
      issues.push(issue('duplicate_id', `Duplicate id '${id}' (${existing} and ${kind})`, path));
      return;
    }
    seen.set(id, kind);
  };

  for (const source of doc.sources ?? []) {
    remember(source.id, 'source', `sources.${source.id}`);
  }
  for (const entity of doc.entities ?? []) {
    remember(entity.id, 'entity', `entities.${entity.id}`);
  }
  for (const milestone of doc.milestones ?? []) {
    remember(milestone.id, 'milestone', `milestones.${milestone.id}`);
  }

  const entityIds = new Set((doc.entities ?? []).map((item) => item.id));
  const sourceIds = new Set((doc.sources ?? []).map((item) => item.id));

  for (const entity of doc.entities ?? []) {
    for (const sourceId of entity.source_ids ?? []) {
      if (!sourceIds.has(sourceId)) {
        issues.push(
          issue(
            'dangling_reference',
            `Entity '${entity.id}' references missing source '${sourceId}'`,
            `entities.${entity.id}.source_ids`,
          ),
        );
      }
    }
  }

  for (const milestone of doc.milestones ?? []) {
    if (!PRECISIONS.has(milestone.date_precision) || !dateMatchesPrecision(milestone.date, milestone.date_precision)) {
      issues.push(
        issue(
          'invalid_date_precision',
          `Milestone '${milestone.id}' date '${milestone.date}' does not match precision '${milestone.date_precision}'`,
          `milestones.${milestone.id}.date`,
        ),
      );
    }

    if (milestone.status === 'verified' && (!milestone.source_ids || milestone.source_ids.length === 0)) {
      issues.push(
        issue(
          'verified_without_sources',
          `Verified milestone '${milestone.id}' has no sources`,
          `milestones.${milestone.id}.source_ids`,
        ),
      );
    }

    for (const sourceId of milestone.source_ids ?? []) {
      if (!sourceIds.has(sourceId)) {
        issues.push(
          issue(
            'dangling_reference',
            `Milestone '${milestone.id}' references missing source '${sourceId}'`,
            `milestones.${milestone.id}.source_ids`,
          ),
        );
      }
    }

    for (const entityId of milestone.entity_ids ?? []) {
      if (!entityIds.has(entityId)) {
        issues.push(
          issue(
            'dangling_reference',
            `Milestone '${milestone.id}' references missing entity '${entityId}'`,
            `milestones.${milestone.id}.entity_ids`,
          ),
        );
      }
    }
  }

  (doc.relations ?? []).forEach((relation, index) => {
    const path = `relations[${index}]`;
    if (!RELATIONS.has(relation.type)) {
      issues.push(issue('unknown_relation_type', `Unknown relation type '${relation.type}'`, path));
    }

    if (!entityIds.has(relation.from) || !entityIds.has(relation.to)) {
      issues.push(
        issue(
          'dangling_endpoint',
          `Relation ${relation.from} -> ${relation.to} has an unknown endpoint`,
          path,
        ),
      );
    }

    for (const sourceId of relation.evidence_source_ids ?? []) {
      if (!sourceIds.has(sourceId)) {
        issues.push(
          issue(
            'dangling_reference',
            `Relation ${relation.from} -> ${relation.to} references missing source '${sourceId}'`,
            `${path}.evidence_source_ids`,
          ),
        );
      }
    }

    const isStrong = STRONG.has(relation.type);
    const evidenceMissing = !relation.evidence_source_ids || relation.evidence_source_ids.length === 0;
    if (isStrong && relation.status === 'verified' && evidenceMissing) {
      issues.push(
        issue(
          'strong_relation_without_evidence',
          `Verified strong relation ${relation.from} -[${relation.type}]-> ${relation.to} has no evidence`,
          path,
        ),
      );
    }
  });

  return { ok: issues.length === 0, issues };
}
