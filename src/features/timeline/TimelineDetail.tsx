import { DetailSurface } from '../../shell/DetailSurface';
import type { MilestoneRecord, PublishedAtlas } from '../../data/types';
import { toDetailModel } from './detailModel';

export type TimelineDetailProps = {
  atlas: PublishedAtlas;
  milestone?: MilestoneRecord | null;
};

export function TimelineDetail({ atlas, milestone }: TimelineDetailProps) {
  const detail = milestone ? toDetailModel(milestone, atlas) : null;
  return <DetailSurface detail={detail} />;
}
