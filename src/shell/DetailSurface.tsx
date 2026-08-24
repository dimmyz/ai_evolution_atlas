import type { DetailModel, RelatedTarget } from './types';

type DetailSurfaceProps = {
  detail?: DetailModel | null;
  onRelatedSelect?: (target: RelatedTarget) => void;
  onStartExploring?: () => void;
};

export function DetailSurface({ detail, onRelatedSelect, onStartExploring }: DetailSurfaceProps) {
  if (!detail) {
    return (
      <section className="atlas-detail" aria-labelledby="atlas-detail-title">
        <p className="atlas-kicker">Reading surface</p>
        <h2 id="atlas-detail-title">Nothing selected</h2>
        <p className="atlas-detail-empty">
          Select a milestone to read what happened, why it is in the atlas, and the
          sources that support it.
        </p>
        {onStartExploring ? (
          <button type="button" className="atlas-start" onClick={onStartExploring}>
            Start exploring
          </button>
        ) : null}
      </section>
    );
  }

  const hasMeta = Boolean(detail.dateLabel || detail.organization);
  const sourceCount = detail.sources?.length ?? 0;

  return (
    <article className="atlas-detail" aria-labelledby="atlas-detail-heading">
      <p className="atlas-kicker">Reading surface</p>
      <h2 id="atlas-detail-heading">{detail.title}</h2>
      {hasMeta ? (
        <p className="atlas-meta">
          {detail.dateLabel}
          {detail.dateLabel && detail.organization ? ' · ' : ''}
          {detail.organization}
        </p>
      ) : null}
      {sourceCount > 0 ? (
        <p className="atlas-source-strip">
          <a href="#atlas-sources">{sourceCount === 1 ? '1 source' : `${sourceCount} sources`}</a>
        </p>
      ) : null}
      {detail.summary ? <p className="atlas-detail-summary">{detail.summary}</p> : null}
      {detail.whyItMatters ? (
        <>
          <h3>Why it matters</h3>
          <p>{detail.whyItMatters}</p>
        </>
      ) : null}
      {detail.tags && detail.tags.length > 0 ? (
        <ul className="atlas-tags">
          {detail.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      ) : null}
      {detail.sources && detail.sources.length > 0 ? (
        <section className="atlas-sources" id="atlas-sources" data-testid="atlas-sources">
          <h3>Sources</h3>
          <ol>
            {detail.sources.map((source) => (
              <li key={source.id}>
                <a href={source.url} rel="noopener noreferrer">
                  {source.title}
                </a>
              </li>
            ))}
          </ol>
        </section>
      ) : null}
      {detail.related && detail.related.length > 0 ? (
        <section className="atlas-related">
          <h3>Related</h3>
          <ul>
            {detail.related.map((item) => {
              const targetKind = item.targetKind ?? 'entity';
              return (
                <li key={`${targetKind}:${item.id}`}>
                  <span className="atlas-related-kind">{item.kind}</span>
                  <button
                    type="button"
                    className="atlas-related-link"
                    onClick={() => {
                      onRelatedSelect?.({ kind: targetKind, id: item.id });
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
