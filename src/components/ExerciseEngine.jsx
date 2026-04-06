import { useMemo, useState } from 'react';
import ActionFooter from './ActionFooter';
import PanelHeader from './PanelHeader';

function normalizeText(value) {
  return value.trim().replace(/\s+/g, ' ').toLowerCase();
}

function countWords(value) {
  return value.trim() ? value.trim().split(/\s+/).length : 0;
}

function ExerciseEngine({ lessonId, title, exercises, progress, onMarkExercise, exerciseMeta = {} }) {
  const [activeExercise, setActiveExercise] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [orderedTokens, setOrderedTokens] = useState([]);
  const [matchingAnswers, setMatchingAnswers] = useState({});
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [textAnswer, setTextAnswer] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [lastResult, setLastResult] = useState(null);

  const currentExercise = exercises[activeExercise];
  const exerciseKey = `${lessonId}:${currentExercise.id}`;
  const completedCount = Object.keys(progress.completed).filter((key) => key.startsWith(`${lessonId}:`)).length;

  const availableTokens = useMemo(() => {
    if (currentExercise.type !== 'order') {
      return [];
    }

    return currentExercise.tokens.filter((token, index) => {
      const usedCount = orderedTokens.filter((used) => used === token).length;
      const tokenCount = currentExercise.tokens
        .slice(0, index + 1)
        .filter((candidate) => candidate === token).length;

      return usedCount < tokenCount;
    });
  }, [currentExercise, orderedTokens]);

  const availableMatches = useMemo(() => {
    if (currentExercise.type !== 'matching') {
      return [];
    }

    return currentExercise.pairs.map(([, right]) => right);
  }, [currentExercise]);

  const resetLocalState = () => {
    setSelectedOption(null);
    setOrderedTokens([]);
    setMatchingAnswers({});
    setSelectedLeft(null);
    setTextAnswer('');
    setRevealed(false);
    setLastResult(null);
  };

  const goToExercise = (index) => {
    setActiveExercise(index);
    resetLocalState();
  };

  const goToNextExercise = () => {
    if (activeExercise < exercises.length - 1) {
      goToExercise(activeExercise + 1);
    }
  };

  const submitCurrent = () => {
    let isCorrect = false;

    if (currentExercise.type === 'choice' || currentExercise.type === 'fillBlank') {
      isCorrect = selectedOption === currentExercise.answer;
    }

    if (currentExercise.type === 'order') {
      isCorrect =
        normalizeText(orderedTokens.join(' ')) === normalizeText(currentExercise.answer.join(' '));
    }

    if (currentExercise.type === 'matching') {
      isCorrect = currentExercise.pairs.every(
        ([left, right]) => normalizeText(matchingAnswers[left] ?? '') === normalizeText(right)
      );
    }

    if (currentExercise.type === 'transform') {
      isCorrect = normalizeText(textAnswer) === normalizeText(currentExercise.expected);
    }

    if (currentExercise.type === 'writing') {
      const normalized = normalizeText(textAnswer);
      const hasKeywords = currentExercise.keywords.every((keyword) =>
        normalized.includes(normalizeText(keyword))
      );
      isCorrect = hasKeywords && countWords(textAnswer) >= (currentExercise.minWords ?? 1);
    }

    onMarkExercise(exerciseKey, isCorrect, exerciseMeta);
    setLastResult(isCorrect);
    setRevealed(true);
  };

  const assignMatch = (rightValue) => {
    if (!selectedLeft) {
      return;
    }

    setMatchingAnswers((current) => ({
      ...current,
      [selectedLeft]: rightValue
    }));
    setSelectedLeft(null);
  };

  return (
    <article className="exercise-card">
      <PanelHeader
        eyebrow="Practice"
        meta={
          <div className="exercise-summary">
            <strong>{activeExercise + 1}</strong>
            <span>of {exercises.length} tasks</span>
          </div>
        }
        title={title}
      />

      <div className="exercise-body">
        <p className="panel-label">{currentExercise.prompt}</p>
        <h4>{currentExercise.question}</h4>

        {(currentExercise.type === 'choice' || currentExercise.type === 'fillBlank') && (
          <div className="options">
            {currentExercise.options.map((option, index) => (
              <button
                key={option}
                className={selectedOption === index ? 'option-button selected' : 'option-button'}
                onClick={() => setSelectedOption(index)}
                type="button"
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {currentExercise.type === 'order' && (
          <div className="order-builder">
            <div className="builder-output">{orderedTokens.join(' ') || 'Tap the tokens in order.'}</div>
            <div className="word-cloud">
              {availableTokens.map((token, index) => (
                <button
                  key={`${token}-${index}`}
                  className="word-token"
                  onClick={() => setOrderedTokens((current) => [...current, token])}
                  type="button"
                >
                  {token}
                </button>
              ))}
            </div>
            <button className="builder-reset" onClick={() => setOrderedTokens([])} type="button">
              Reset order
            </button>
          </div>
        )}

        {currentExercise.type === 'matching' && (
          <div className="matching-layout">
            <div className="matching-column">
              {currentExercise.pairs.map(([left]) => (
                <button
                  key={left}
                  className={selectedLeft === left ? 'match-chip active' : 'match-chip'}
                  onClick={() => setSelectedLeft(left)}
                  type="button"
                >
                  <span>{left}</span>
                  <small>{matchingAnswers[left] ?? 'Choose a match'}</small>
                </button>
              ))}
            </div>
            <div className="matching-column">
              {availableMatches.map((right) => (
                <button key={right} className="match-choice" onClick={() => assignMatch(right)} type="button">
                  {right}
                </button>
              ))}
            </div>
          </div>
        )}

        {currentExercise.type === 'transform' && (
          <div className="writing-layout">
            <div className="pattern-box">{currentExercise.source}</div>
            <textarea
              className="writing-input"
              onChange={(event) => setTextAnswer(event.target.value)}
              placeholder="Type the transformed sentence in Dutch"
              value={textAnswer}
            />
          </div>
        )}

        {currentExercise.type === 'writing' && (
          <div className="writing-layout">
            <textarea
              className="writing-input"
              onChange={(event) => setTextAnswer(event.target.value)}
              placeholder="Write your answer in Dutch"
              value={textAnswer}
            />
            <p className="writing-meta">
              Minimum words: {currentExercise.minWords}. Required ideas: {currentExercise.keywords.join(', ')}.
            </p>
          </div>
        )}

        <ActionFooter>
          <div className="exercise-actions">
          {revealed ? (
            <button
              className="primary-button exercise-submit"
              onClick={goToNextExercise}
              type="button"
              disabled={activeExercise === exercises.length - 1}
            >
              {activeExercise === exercises.length - 1 ? 'Last task complete' : 'Next task'}
            </button>
          ) : (
            <button
              className="primary-button exercise-submit"
              disabled={
                ((currentExercise.type === 'choice' || currentExercise.type === 'fillBlank') &&
                  selectedOption === null) ||
                ((currentExercise.type === 'transform' || currentExercise.type === 'writing') &&
                  !textAnswer.trim()) ||
                (currentExercise.type === 'matching' &&
                  Object.keys(matchingAnswers).length !== currentExercise.pairs.length)
              }
              onClick={submitCurrent}
              type="button"
            >
              Check answer
            </button>
          )}
          </div>
        </ActionFooter>

        <div className={revealed ? 'exercise-feedback visible' : 'exercise-feedback'}>
          {revealed ? (
            <>
              <strong>{lastResult ? 'Correct.' : 'Not correct yet.'}</strong>
              <p>{currentExercise.explanation}</p>
              {(currentExercise.type === 'transform' || currentExercise.type === 'writing') &&
              !lastResult &&
              currentExercise.expected ? (
                <p>Model answer: {currentExercise.expected}</p>
              ) : null}
              <p className="exercise-hint">Hint: {currentExercise.hint}</p>
            </>
          ) : (
            <p className="exercise-hint">Hint: {currentExercise.hint}</p>
          )}
        </div>

        <p className="exercise-progress-note">
          Completed in this unit: {completedCount}/{exercises.length}
        </p>
      </div>
    </article>
  );
}

export default ExerciseEngine;
