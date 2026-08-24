import type { ReactNode } from 'react';

export type AtlasView = 'timeline' | 'lineage';

export type DetailRelated = {
  id: string;
  label: string;
  kind: string;
  targetKind?: 'entity' | 'milestone';
};

export type DetailSource = {
  id: string;
  title: string;
  url: string;
};

export type DetailModel = {
  title: string;
  dateLabel?: string;
  organization?: string;
  summary?: string;
  whyItMatters?: string;
  tags?: string[];
  related?: DetailRelated[];
  sources?: DetailSource[];
};

export type RelatedTarget = {
  kind: 'entity' | 'milestone';
  id: string;
};

export type AtlasShellProps = {
  activeView?: AtlasView;
  onViewChange?: (view: AtlasView) => void;
  timeline?: ReactNode;
  lineage?: ReactNode;
  discovery?: ReactNode;
  detail?: DetailModel | null;
  onRelatedSelect?: (target: RelatedTarget) => void;
  onStartExploring?: () => void;
};
