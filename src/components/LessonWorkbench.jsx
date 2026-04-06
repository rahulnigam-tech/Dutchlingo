function LessonWorkbench({
  item,
  level,
  builtSentence,
  onAddWord,
  onResetSentence,
  onSpeak,
  wordsKey = 'words',
  titleKey = 'theme',
  drillsKey = 'drills',
  examKey = 'inburgeringExample',
  goalKey = 'winCondition'
}) {
  const words = item[wordsKey] ?? [];
  const drills = item[drillsKey] ?? [];

  return (
    <article className="workbench-card">
      <div className="workbench-header">
        <div>
          <span className="eyebrow">{level} lesson</span>
          <h3>{item[titleKey]}</h3>
        </div>
        <div className="grammar-chip">{item.grammar}</div>
      </div>

      <section className="workbench-panel workbench-single">
        <p className="panel-label">Focus pattern</p>
        <div className="pattern-box">{item.sentenceFrame}</div>
        <p className="workbench-note">{item[examKey]}</p>
        <div className="speech-actions">
          <button className="secondary-button speech-button" onClick={() => onSpeak(item.sentenceFrame)} type="button">
            Hear the pattern
          </button>
        </div>
        <div className="word-cloud">
          {words.map((word) => (
            <button key={word} className="word-token" onClick={() => onAddWord(word)} type="button">
              {word}
            </button>
          ))}
        </div>
        <div className="builder-card">
          <div className="builder-output">{builtSentence || 'Build one Dutch sentence from the lesson words.'}</div>
          <button className="builder-reset" onClick={onResetSentence} type="button">
            Clear sentence
          </button>
        </div>
        <div className="drill-list">
          {drills.slice(0, 2).map((drill) => (
            <p key={drill}>{drill}</p>
          ))}
        </div>
        <p className="workbench-target">
          <strong>Goal:</strong> {item[goalKey]}
        </p>
      </section>
    </article>
  );
}

export default LessonWorkbench;
