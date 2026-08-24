import type { SourceRecord } from '../../data/types';

export type FormattedCitation = {
  id: string;
  title: string;
  url: string;
  label: string;
};

function publishedYear(publishedAt?: string | null): string | undefined {
  if (!publishedAt) {
    return undefined;
  }
  const match = publishedAt.match(/^(\d{4})/);
  return match?.[1];
}

export function formatCitation(source: SourceRecord): FormattedCitation {
  const year = publishedYear(source.published_at);
  const parts = [source.title.replace(/\.$/, ''), source.publisher];
  const body = `${parts[0]}. ${parts[1]}`;
  return {
    id: source.id,
    title: source.title,
    url: source.url,
    label: year ? `${body}, ${year}.` : `${body}.`,
  };
}

export function citationsForRecord(
  record: { sourceIds: string[] },
  sourcesById: Record<string, SourceRecord>,
): FormattedCitation[] {
  return record.sourceIds
    .map((id) => sourcesById[id])
    .filter((source): source is SourceRecord => Boolean(source))
    .map(formatCitation);
}
