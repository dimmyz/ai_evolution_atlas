import { utcFormat } from 'd3-time-format';
import type { DatePrecision } from '../../data/types';

const formatYear = utcFormat('%Y');
const formatMonth = utcFormat('%b %Y');
const formatDay = utcFormat('%-d %b %Y');

export type PrecisionDate = {
  precision: DatePrecision;
  start: Date;
  end: Date;
  label: string;
};

function utcDate(year: number, month = 0, day = 1): Date {
  return new Date(Date.UTC(year, month, day));
}

export function parsePrecisionDate(value: string, precision: DatePrecision): PrecisionDate {
  const yearMatch = /^(\d{4})$/.exec(value);
  const monthMatch = /^(\d{4})-(\d{2})$/.exec(value);
  const dayMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);

  if (precision === 'year') {
    const year = yearMatch ? Number(yearMatch[1]) : Number(value.slice(0, 4));
    const start = utcDate(year);
    const end = utcDate(year + 1);
    return { precision, start, end, label: formatYear(start) };
  }

  if (precision === 'month') {
    const year = Number((monthMatch ?? dayMatch)?.[1] ?? value.slice(0, 4));
    const month = Number((monthMatch ?? dayMatch)?.[2] ?? '01') - 1;
    const start = utcDate(year, month);
    const end = utcDate(year, month + 1);
    return { precision, start, end, label: formatMonth(start) };
  }

  const year = Number(dayMatch?.[1] ?? value.slice(0, 4));
  const month = Number(dayMatch?.[2] ?? '01') - 1;
  const day = Number(dayMatch?.[3] ?? '01');
  const start = utcDate(year, month, day);
  const end = utcDate(year, month, day + 1);
  return { precision, start, end, label: formatDay(start) };
}

export function formatDateLabel(parsed: PrecisionDate): string {
  return parsed.label;
}

export function anchorDate(parsed: PrecisionDate): Date {
  if (parsed.precision === 'day') {
    return parsed.start;
  }
  return new Date((parsed.start.getTime() + parsed.end.getTime()) / 2);
}
