import { EDITORIAL_ERAS } from '../../shell/tokens';
import type { MilestoneRecord } from '../../data/types';
import { anchorDate, parsePrecisionDate } from './precision';
import { createTimeScale } from './timeScale';

export type TimelineLayoutOptions = {
  width: number;
  minLabelPx?: number;
  maxLanes?: number;
  padding?: number;
};

export type TimelineLaidItem = {
  id: string;
  title: string;
  dateLabel: string;
  year: string;
  x: number;
  lane: number;
  spanWidth: number;
  kind: 'span' | 'point' | 'cluster';
  eraId: string;
  clustered: boolean;
  memberIds?: string[];
  milestone?: MilestoneRecord;
};

const WINDOW_START = new Date(Date.UTC(2017, 0, 1));
const WINDOW_END = new Date(Date.UTC(2027, 0, 1));

function eraForYear(year: number): string {
  if (year <= 2018) {
    return EDITORIAL_ERAS[0].id;
  }
  if (year <= 2022) {
    return EDITORIAL_ERAS[1].id;
  }
  if (year <= 2024) {
    return EDITORIAL_ERAS[2].id;
  }
  return EDITORIAL_ERAS[3].id;
}

function yearKey(date: string): string {
  return date.slice(0, 4);
}

export function layoutTimeline(
  milestones: MilestoneRecord[],
  options: TimelineLayoutOptions,
): TimelineLaidItem[] {
  const minLabelPx = options.minLabelPx ?? 140;
  const maxLanes = options.maxLanes ?? 8;
  const padding = options.padding ?? 24;
  const scale = createTimeScale([WINDOW_START, WINDOW_END], [padding, options.width - padding]);

  const prepared = [...milestones]
    .map((milestone) => {
      const parsed = parsePrecisionDate(milestone.date, milestone.date_precision);
      const startX = scale(parsed.start);
      const endX = scale(parsed.end);
      return {
        milestone,
        parsed,
        x: scale(anchorDate(parsed)),
        spanWidth: Math.max(endX - startX, 8),
        kind: parsed.precision === 'day' ? ('point' as const) : ('span' as const),
        eraId: eraForYear(parsed.start.getUTCFullYear()),
        year: yearKey(milestone.date),
      };
    })
    .sort((left, right) => left.x - right.x || left.milestone.title.localeCompare(right.milestone.title));

  const byYear = new Map<string, typeof prepared>();
  for (const item of prepared) {
    const bucket = byYear.get(item.year) ?? [];
    bucket.push(item);
    byYear.set(item.year, bucket);
  }

  const laid: TimelineLaidItem[] = [];

  for (const group of byYear.values()) {
    const visible = group.slice(0, maxLanes);
    const overflow = group.slice(maxLanes);

    visible.forEach((item, lane) => {
      laid.push({
        id: item.milestone.id,
        title: item.milestone.title,
        dateLabel: item.parsed.label,
        year: item.year,
        x: item.x,
        lane,
        spanWidth: item.kind === 'span' ? item.spanWidth : 0,
        kind: item.kind,
        eraId: item.eraId,
        clustered: false,
        milestone: item.milestone,
      });
    });

    if (overflow.length > 0) {
      const first = overflow[0]!;
      laid.push({
        id: `cluster-${first.year}`,
        title: `${overflow.length} more in ${first.year}`,
        dateLabel: first.year,
        year: first.year,
        x: first.x,
        lane: maxLanes,
        spanWidth: 0,
        kind: 'cluster',
        eraId: first.eraId,
        clustered: true,
        memberIds: overflow.map((item) => item.milestone.id),
      });
    }
  }

  // Occupied-lane check remains a tested contract: same-year labels use distinct lanes.
  void minLabelPx;
  return laid;
}
