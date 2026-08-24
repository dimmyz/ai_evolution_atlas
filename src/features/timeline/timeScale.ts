import { scaleUtc } from 'd3-scale';
import { utcYear } from 'd3-time';

export type TimeScale = {
  (date: Date): number;
  ticks(count: number): Date[];
  invert(x: number): Date;
};

export function createTimeScale(domain: [Date, Date], range: [number, number]): TimeScale {
  const scale = scaleUtc<number, number>().domain(domain).range(range);
  const [start, end] = domain;

  const mapped = ((date: Date) => scale(date) as number) as TimeScale;

  mapped.ticks = (count: number): Date[] => {
    const spanYears = Math.max(1, utcYear.count(start, end));
    const step = Math.max(1, Math.ceil(spanYears / Math.max(count, 1)));
    return (utcYear.every(step) ?? utcYear).range(start, end);
  };

  mapped.invert = (x: number): Date => scale.invert(x);

  return mapped;
}
