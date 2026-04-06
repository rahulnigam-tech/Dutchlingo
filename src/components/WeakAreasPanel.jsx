function WeakAreasPanel({ items }) {
  return (
    <section className="weak-panel">
      <div className="section-heading compact">
        <span className="eyebrow">Weak topics</span>
        <h2>Retry these first</h2>
      </div>
      <div className="review-grid">
        {items.length ? (
          items.map((item) => (
            <article className="review-card" key={`${item.level}-${item.lessonTitle}`}>
              <span className="eyebrow">{item.level || 'Review'}</span>
              <h3>{item.lessonTitle}</h3>
              <p>
                <strong>Grammar:</strong> {item.grammar || 'Mixed topic'}
              </p>
              <p>
                <strong>Misses:</strong> {item.misses}
              </p>
            </article>
          ))
        ) : (
          <article className="review-card">
            <h3>No weak topics yet</h3>
            <p>Once the learner misses exercises, this panel will prioritize them for review.</p>
          </article>
        )}
      </div>
    </section>
  );
}

export default WeakAreasPanel;
