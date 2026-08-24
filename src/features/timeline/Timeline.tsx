import { utcFormat } from 'd3-time-format';
import { EDITORIAL_ERAS } from '../../shell/tokens';
import type { MilestoneRecord } from '../../data/types';
import { layoutTimeline, type TimelineLaidItem } from './layout';
import { parsePrecisionDate } from './precision';
import { createTimeScale } from './timeScale';
import './timeline.css';

const formatTickYear = utcFormat('%Y');

export type TimelineSelection = {
  kind: 'milestone' | 'entity';
  id: string;
};

export type TimelineProps = {
  milestones: MilestoneRecord[];
  selected?: TimelineSelection | null;
  onSelect?: (target: { kind: 'milestone'; id: string }) => void;
  width?: number;
};

const AXIS_START = new Date(Date.UTC(2017, 0, 1));
const AXIS_END = new Date(Date.UTC(2027, 0, 1));

function isSelected(milestone: MilestoneRecord | undefined, selected?: TimelineSelection | null): boolean {
  if (!selected || !milestone) {
    return false;
  }
  if (selected.kind === 'milestone') {
    return selected.id === milestone.id;
  }
  return (milestone.entity_ids ?? []).includes(selected.id);
}

function eraMark(eraId: string): string {
  return EDITORIAL_ERAS.find((era) => era.id === eraId)?.mark ?? 'var(--atlas-accent)';
}

export function Timeline({ milestones, selected, onSelect, width = 720 }: TimelineProps) {
  const laid = layoutTimeline(milestones, { width, maxLanes: 8 });
  const byId = new Map(milestones.map((milestone) => [milestone.id, milestone]));
  const scale = createTimeScale([AXIS_START, AXIS_END], [0, 100]);
  const yearTicks = scale.ticks(10);

  return (
    <section className="atlas-timeline" data-testid="atlas-timeline" aria-label="Canonical milestone timeline">
      <p className="atlas-kicker">Chronology</p>
      <h2>A decade, read in order</h2>
      <p className="atlas-timeline-lede">
        Milestones sit on the years they actually claim. Year-only records occupy the year;
        they are not pinned to the first of January.
      </p>
      <p className="atlas-timeline-axis-note">
        Colored bands are editorial navigation. Marks on the axis match the event list below.
      </p>
      {selected?.kind === 'entity' ? (
        <p className="atlas-timeline-axis-note" data-testid="timeline-entity-highlight" aria-live="polite">
          Highlighting milestones linked to the selected entity.
        </p>
      ) : null}
      <div className="atlas-timeline-axis">
        {EDITORIAL_ERAS.map((era) => {
          const startYear = Number(era.period.slice(0, 4));
          const endYear = Number(era.period.slice(-4)) + 1;
          const left = scale(new Date(Date.UTC(startYear, 0, 1)));
          const right = scale(new Date(Date.UTC(endYear, 0, 1)));
          return (
            <span
              key={era.id}
              className="atlas-timeline-era-band"
              style={{
                left: `${left}%`,
                width: `${right - left}%`,
                ['--era-mark' as string]: era.mark,
              }}
            />
          );
        })}
        <ol className="atlas-timeline-ticks">
          {yearTicks.map((tick) => (
            <li key={tick.toISOString()} style={{ left: `${scale(tick)}%` }}>
              {formatTickYear(tick)}
            </li>
          ))}
        </ol>
        {laid
          .filter((item) => item.kind !== 'cluster')
          .map((item) => {
            const milestone = item.milestone ?? byId.get(item.id);
            const pressed = isSelected(milestone, selected);
            return (
              <button
                key={`mark-${item.id}`}
                type="button"
                className={`${item.kind === 'span' ? 'atlas-timeline-span' : 'atlas-timeline-point'}${
                  pressed ? ' is-selected' : ''
                }`}
                aria-label={milestone?.title ?? item.id}
                aria-pressed={pressed}
                onClick={() => {
                  if (milestone) {
                    onSelect?.({ kind: 'milestone', id: milestone.id });
                  }
                }}
                style={{
                  left: `${(item.x / width) * 100}%`,
                  width: item.kind === 'span' ? `${(item.spanWidth / width) * 100}%` : undefined,
                  background: eraMark(item.eraId),
                }}
              />
            );
          })}
      </div>
      <ol className="atlas-timeline-years">
        {groupByYear(laid).map(([year, items]) => (
          <li key={year} className="atlas-timeline-year">
            <h3>{year}</h3>
            <ol>
              {items.flatMap((item) => {
                if (item.kind === 'cluster') {
                  return (item.memberIds ?? []).flatMap((memberId) => {
                    const milestone = byId.get(memberId);
                    if (!milestone) {
                      return [];
                    }
                    return [
                      <li key={memberId}>
                        {renderButton(milestone, item, selected, onSelect, true)}
                      </li>,
                    ];
                  });
                }
                return [
                  <li key={item.id}>
                    {renderButton(item.milestone ?? byId.get(item.id), item, selected, onSelect, false)}
                  </li>,
                ];
              })}
            </ol>
          </li>
        ))}
      </ol>
    </section>
  );
}

function groupByYear(items: TimelineLaidItem[]): Array<[string, TimelineLaidItem[]]> {
  const groups = new Map<string, TimelineLaidItem[]>();
  for (const item of items) {
    const bucket = groups.get(item.year) ?? [];
    bucket.push(item);
    groups.set(item.year, bucket);
  }
  return [...groups.entries()].sort(([left], [right]) => left.localeCompare(right));
}

function renderButton(
  milestone: MilestoneRecord | undefined,
  item: TimelineLaidItem,
  selected: TimelineSelection | null | undefined,
  onSelect: TimelineProps['onSelect'],
  clustered: boolean,
) {
  if (!milestone) {
    return null;
  }
  const pressed = isSelected(milestone, selected);
  return (
    <button
      type="button"
      className={pressed ? 'is-selected' : undefined}
      aria-pressed={pressed}
      data-clustered={clustered ? 'true' : undefined}
      onPointerEnter={(event) => {
        event.currentTarget.dataset.hover = 'true';
      }}
      onPointerLeave={(event) => {
        delete event.currentTarget.dataset.hover;
      }}
      onClick={() => {
        onSelect?.({ kind: 'milestone', id: milestone.id });
      }}
    >
      <span className="atlas-timeline-date">
        {item.kind === 'cluster'
          ? parsePrecisionDate(milestone.date, milestone.date_precision).label
          : item.dateLabel}
      </span>
      <span className="atlas-timeline-title">{milestone.title}</span>
    </button>
  );
}

