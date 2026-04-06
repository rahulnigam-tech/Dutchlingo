import ActionFooter from './ActionFooter';
import PanelHeader from './PanelHeader';

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
      <PanelHeader eyebrow={`${level} lesson`} meta={item.grammar} title={item[titleKey]} />

      <section className="workbench-panel workbench-single">
        <p className="panel-label">Focus pattern</p>
        <div className="pattern-box">{item.sentenceFrame}</div>
        <p className="workbench-note">{item[examKey]}</p>
        <div className="word-cloud">
          {words.slice(0, 6).map((word) => (
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
          {drills.slice(0, 1).map((drill) => (
            <p key={drill}>{drill}</p>
          ))}
        </div>
        <p className="workbench-target">
          <strong>Goal:</strong> {item[goalKey]}
        </p>
        <ActionFooter>
          <div className="speech-actions">
            <button className="secondary-button speech-button" onClick={() => onSpeak(item.sentenceFrame)} type="button">
              Hear the pattern
            </button>
          </div>
        </ActionFooter>
      </section>
    </article>
  );
}

export default LessonWorkbench;
