import { useMemo, useState } from 'react';
import OnboardingIcon from './OnboardingIcon';

const wordDetails = {
  ik: {
    meaning: 'I',
    hook: 'This is your starting word. Many beginner Dutch sentences begin with `ik`.'
  },
  jij: {
    meaning: 'you',
    hook: 'Use this for one person in an informal situation.'
  },
  ben: {
    meaning: 'am',
    hook: 'This is the `ik` form of `zijn`: `ik ben`.'
  },
  heb: {
    meaning: 'have',
    hook: 'Use this when you possess something: `ik heb`.'
  },
  woon: {
    meaning: 'live',
    hook: 'This is the key word for saying where you live: `ik woon in ...`.'
  },
  huis: {
    meaning: 'house',
    hook: 'A core A1 noun. Learn it as a full chunk in sentences.'
  },
  naam: {
    meaning: 'name',
    hook: 'Use this in basic introductions and forms.'
  },
  Nederlands: {
    meaning: 'Dutch',
    hook: 'This is the language. You can say `ik spreek Nederlands`.'
  }
};

function OnboardingJourney({ unit, onSpeak, onContinue }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [popupOpen, setPopupOpen] = useState(true);
  const [wordRepeatCount, setWordRepeatCount] = useState(0);
  const [sentenceRepeatCount, setSentenceRepeatCount] = useState(0);

  const words = unit.words ?? [];
  const sentenceSteps = useMemo(
    () => ['Ik ben Ana.', 'Ik heb een huis.', 'Ik woon in Amsterdam.'],
    []
  );
  const currentWord = words[wordIndex];
  const currentSentence = sentenceSteps[sentenceIndex];
  const currentWordDetail = wordDetails[currentWord] ?? {
    meaning: currentWord,
    hook: 'Learn this as a whole chunk.'
  };
  const finishedWords = wordIndex >= words.length;
  const finishedSentences = sentenceIndex >= sentenceSteps.length;

  const nextWord = () => {
    if (wordIndex < words.length - 1) {
      setWordIndex((current) => current + 1);
      setPopupOpen(true);
      setWordRepeatCount(0);
      return;
    }

    setWordIndex(words.length);
    setPopupOpen(false);
  };

  const nextSentence = () => {
    if (sentenceIndex < sentenceSteps.length - 1) {
      setSentenceIndex((current) => current + 1);
      setSentenceRepeatCount(0);
      return;
    }

    setSentenceIndex(sentenceSteps.length);
  };

  const repeatWord = () => {
    onSpeak(currentWord);
    setWordRepeatCount((current) => current + 1);
  };

  const repeatSentence = () => {
    onSpeak(currentSentence);
    setSentenceRepeatCount((current) => current + 1);
  };

  return (
    <article className="workbench-card onboarding-card">
      <div className="workbench-header">
        <div>
          <span className="eyebrow">Onboarding</span>
          <h3>{unit.theme}</h3>
        </div>
        <div className="grammar-chip">{unit.grammar}</div>
      </div>

      {!finishedWords ? (
        <section className="onboarding-panel">
          <p className="panel-label">One word at a time</p>
          <div className="onboarding-word-wrap">
            <div className="word-icon">
              <OnboardingIcon word={currentWord} />
            </div>
            <div className="onboarding-word-block">
              <div className="onboarding-word">{currentWord}</div>
              <p className="word-meaning">{currentWordDetail.meaning}</p>
            </div>
          </div>
          <button className="secondary-button speech-button" onClick={repeatWord} type="button">
            Hear this word
          </button>
          <p className="repeat-counter">Repeat count: {wordRepeatCount}/2</p>
          <button
            className="primary-button single-cta"
            disabled={wordRepeatCount < 2}
            onClick={nextWord}
            type="button"
          >
            Next word
          </button>

          {popupOpen ? (
            <div className="surprise-popup">
              <span className="eyebrow">Quick tip</span>
              <h4>{currentWord}</h4>
              <p>{currentWordDetail.hook}</p>
            </div>
          ) : null}
        </section>
      ) : !finishedSentences ? (
        <section className="onboarding-panel">
          <p className="panel-label">One sentence at a time</p>
          <div className="pattern-box onboarding-sentence">{currentSentence}</div>
          <div className="speech-actions">
            <button className="secondary-button speech-button" onClick={repeatSentence} type="button">
              Hear this sentence
            </button>
          </div>
          <p className="workbench-note">
            Repeat it aloud before moving on. The goal is comfort, not speed.
          </p>
          <p className="repeat-counter">Repeat count: {sentenceRepeatCount}/1</p>
          <button
            className="primary-button single-cta"
            disabled={sentenceRepeatCount < 1}
            onClick={nextSentence}
            type="button"
          >
            Next sentence
          </button>
        </section>
      ) : (
        <section className="onboarding-panel">
          <p className="panel-label">Ready</p>
          <div className="pattern-box onboarding-sentence">{unit.sentenceFrame}</div>
          <p className="workbench-note">
            You have seen the first words and first sentence patterns. Now move into the guided drills.
          </p>
          <button className="primary-button single-cta" onClick={onContinue} type="button">
            Start drills
          </button>
        </section>
      )}
    </article>
  );
}

export default OnboardingJourney;
