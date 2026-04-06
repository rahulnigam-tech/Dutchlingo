function LevelOverview({ title, items, titleKey, summary, badge }) {
  return (
    <section className="section">
      <div className="section-heading">
        <span className="eyebrow">{badge}</span>
        <h2>{title}</h2>
        <p>{summary}</p>
      </div>
      <div className="curriculum-grid">
        {items.map((item) => (
          <article className="curriculum-card" key={item[titleKey]}>
            <h3>{item[titleKey]}</h3>
            <p>
              <strong>Grammar:</strong> {item.grammar}
            </p>
            <div className="word-cloud">
              {(item.words ?? item.vocabulary ?? []).map((word) => (
                <span key={word}>{word}</span>
              ))}
            </div>
            <p>
              <strong>Sentence frame:</strong> {item.sentenceFrame}
            </p>
            <p>
              <strong>Goal:</strong> {item.winCondition ?? item.sentenceGoal}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default LevelOverview;
