import { useState, type ReactNode } from 'react';
import { DetailSurface } from './DetailSurface';
import { EDITORIAL_ERAS } from './tokens';
import type { AtlasShellProps, AtlasView } from './types';
import './shell.css';

const YEAR_MARKS = [2017, 2018, 2020, 2022, 2024, 2026] as const;

function EmptyTimeline() {
  return (
    <div className="atlas-empty-stage" data-testid="timeline-empty">
      <p className="atlas-kicker">Chronology</p>
      <h2>A decade, read in order</h2>
      <p>
        The timeline will place verified milestones by the precision they actually
        have — year, month, or day — from 2017 through 2026.
      </p>
      <ol className="atlas-year-spine" aria-label="Narrative window 2017 to 2026">
        {YEAR_MARKS.map((year) => (
          <li key={year}>
            <span>{year}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function EmptyLineage() {
  return (
    <div className="atlas-empty-stage" data-testid="lineage-empty">
      <p className="atlas-kicker">Relationships</p>
      <h2>Lineage, not a hairball</h2>
      <p>
        When an entity is selected, this stage will show a small, sourced
        neighborhood — successor, architecture, authorship — never chronology
        dressed up as influence.
      </p>
      <div className="atlas-lineage-hint" aria-hidden="true">
        <span />
        <i />
        <span />
      </div>
    </div>
  );
}

function StageCopy({
  view,
  timeline,
  lineage,
}: {
  view: AtlasView;
  timeline?: ReactNode;
  lineage?: ReactNode;
}) {
  if (view === 'lineage') {
    return lineage ?? <EmptyLineage />;
  }
  return timeline ?? <EmptyTimeline />;
}

export function AtlasShell({
  activeView,
  onViewChange,
  timeline,
  lineage,
  discovery,
  detail,
  onRelatedSelect,
  onStartExploring,
}: AtlasShellProps) {
  const [uncontrolledView, setUncontrolledView] = useState<AtlasView>('timeline');
  const view = activeView ?? uncontrolledView;

  function selectView(next: AtlasView) {
    if (activeView === undefined) {
      setUncontrolledView(next);
    }
    onViewChange?.(next);
  }

  return (
    <div className="atlas-shell" data-testid="atlas-root">
      <a className="atlas-skip" href="#atlas-stage">
        Skip to stage
      </a>
      <header className="atlas-masthead">
        <div className="atlas-masthead-top">
          <p className="atlas-kicker">An editorial atlas · 2017–2026</p>
          <nav className="atlas-view-switch" aria-label="Primary views">
            <button
              type="button"
              aria-pressed={view === 'timeline'}
              onClick={() => {
                selectView('timeline');
              }}
            >
              Timeline
            </button>
            <button
              type="button"
              aria-pressed={view === 'lineage'}
              onClick={() => {
                selectView('lineage');
              }}
            >
              Lineage
            </button>
          </nav>
        </div>
        <div className="atlas-identity">
          <h1>AI Evolution Atlas</h1>
          <p className="atlas-purpose">
            A source-grounded explainer of foundation-model history from 2017 to
            2026 — how time and lineage meet, without inventing either.
          </p>
        </div>
      </header>
      <div className="atlas-workspace">
        <aside className="atlas-eras" aria-label="Editorial era bands">
          <p className="atlas-kicker">Editorial navigation</p>
          <p className="atlas-era-note">
            These bands help you scan the decade. They are not scientific periods.
          </p>
          <ol>
            {EDITORIAL_ERAS.map((era) => (
              <li key={era.id} style={{ ['--era-mark' as string]: era.mark }}>
                <span className="atlas-era-period">{era.period}</span>
                <span className="atlas-era-label">{era.label}</span>
              </li>
            ))}
          </ol>
        </aside>
        <main className="atlas-stage" id="atlas-stage" tabIndex={-1}>
          {discovery ? <div className="atlas-discovery">{discovery}</div> : null}
          <StageCopy view={view} timeline={timeline} lineage={lineage} />
        </main>
        <DetailSurface
          detail={detail}
          onRelatedSelect={onRelatedSelect}
          onStartExploring={onStartExploring}
        />
      </div>
    </div>
  );
}
