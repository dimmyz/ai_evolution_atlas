import type { SearchRecord } from './searchIndex';

export type SelectedTarget =
  | { kind: 'entity'; id: string }
  | { kind: 'milestone'; id: string };

export type SelectionReconciliation = {
  selected?: SelectedTarget;
  announcement?: string;
};

export function toSelectedTarget(record: SearchRecord): SelectedTarget {
  return { kind: record.kind, id: record.id };
}

export function reconcileSelection(
  selected: SelectedTarget | undefined,
  visible: SearchRecord[],
): SelectionReconciliation {
  if (!selected) {
    return {};
  }
  const stillVisible = visible.some((record) => record.id === selected.id && record.kind === selected.kind);
  if (stillVisible) {
    return { selected };
  }
  return {
    announcement: 'The previous selection no longer matches the current filters.',
  };
}
