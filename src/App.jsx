import { useState } from 'react';
import ExerciseEngine from './components/ExerciseEngine';
import LessonWorkbench from './components/LessonWorkbench';
import useCourseProgress from './hooks/useCourseProgress';
import useHashRoute from './hooks/useHashRoute';
import useSpeech from './hooks/useSpeech';
import { a1DailyFlow, a2Curriculum, onboardingUnit } from './data/curriculum';

const allUnits = [onboardingUnit, ...a1DailyFlow, ...a2Curriculum];

const stagePath = [
  {
    id: 'a1-onboarding-stage',
    level: 'A1',
    order: 0,
    title: 'Onboarding',
    unitIds: ['a1-onboarding'],
    tip: 'Do not rush. Learn a few words, say one sentence, and let Dutch feel easy before grammar gets bigger.'
  },
  {
    id: 'a1-stage-1',
    level: 'A1',
    order: 1,
    title: 'Introductions and home',
    unitIds: ['a1-day-1', 'a1-day-2'],
    tip: 'Use fixed chunks first. Beginners learn faster when they repeat whole patterns instead of isolated words.'
  },
  {
    id: 'a1-stage-2',
    level: 'A1',
    order: 2,
    title: 'Routine and shopping',
    unitIds: ['a1-day-3', 'a1-day-4'],
    tip: 'Keep subject first and verb second. That one habit removes a lot of beginner confusion.'
  },
  {
    id: 'a1-stage-3',
    level: 'A1',
    order: 3,
    title: 'Time and negation',
    unitIds: ['a1-day-5', 'a1-day-6'],
    tip: 'Dates, times, and negation are high-value exam material. Drill them until they become automatic.'
  },
  {
    id: 'a1-stage-4',
    level: 'A1',
    order: 4,
    title: 'Transport, health, work, and forms',
    unitIds: ['a1-day-7', 'a1-day-8', 'a1-day-9', 'a1-day-10'],
    tip: 'This is where Dutch becomes practical: routes, forms, doctor visits, and work situations.'
  },
  {
    id: 'a1-stage-5',
    level: 'A1',
    order: 5,
    title: 'Social contact, hobbies, and weather',
    unitIds: ['a1-day-11', 'a1-day-12'],
    tip: 'Finish A1 by making the language personal. Small talk and preferences make Dutch feel alive.'
  },
  {
    id: 'a2-stage-1',
    level: 'A2',
    order: 1,
    title: 'Appointments and past events',
    unitIds: ['a2-work', 'a2-past'],
    tip: 'At A2, practical situations and tense control start working together.'
  },
  {
    id: 'a2-stage-2',
    level: 'A2',
    order: 2,
    title: 'Health and housing',
    unitIds: ['a2-health', 'a2-housing'],
    tip: 'Useful Dutch is the target. Explain a problem, a place, or a comparison clearly.'
  },
  {
    id: 'a2-stage-3',
    level: 'A2',
    order: 3,
    title: 'Travel and writing',
    unitIds: ['a2-travel', 'a2-writing'],
    tip: 'Fixed phrases save time. Train transport and writing formulas until they feel automatic.'
  },
  {
    id: 'a2-stage-4',
    level: 'A2',
    order: 4,
    title: 'Municipality, listening, and reading',
    unitIds: ['a2-municipality', 'a2-listening', 'a2-reading'],
    tip: 'Focus on key details, not every word. That is how practical A2 tasks are cracked faster.'
  },
  {
    id: 'a2-stage-5',
    level: 'A2',
    order: 5,
    title: 'Opinions, phone calls, and instructions',
    unitIds: ['a2-opinions', 'a2-phone', 'a2-services'],
    tip: 'This final A2 stage brings in more natural conversation and practical service interaction.'
  }
];

function App() {
  const [sentenceBuilder, setSentenceBuilder] = useState({ a1: '', a2: '' });
  const { progress, syncStatus, markExercise } = useCourseProgress();
  const { route, navigate } = useHashRoute();
  const { speak } = useSpeech();

  const isUnitComplete = (unit) =>
    unit.exercises.every((exercise) => progress.completed[`${unit.id}:${exercise.id}`] === true);

  const stages = stagePath.map((stage, index) => {
    const units = stage.unitIds
      .map((unitId) => allUnits.find((unit) => unit.id === unitId))
      .filter(Boolean);
    const complete = units.every((unit) => isUnitComplete(unit));
    const unlocked =
      index === 0 ||
      stagePath.slice(0, index).every((earlierStage) =>
        earlierStage.unitIds
          .map((unitId) => allUnits.find((unit) => unit.id === unitId))
          .filter(Boolean)
          .every((unit) => isUnitComplete(unit))
      );

    return { ...stage, units, complete, unlocked };
  });

  const currentStage = stages.find((stage) => stage.unlocked && !stage.complete) ?? stages[stages.length - 1];
  const currentUnit = currentStage.units.find((unit) => !isUnitComplete(unit)) ?? currentStage.units[0];
  const currentTrackKey = currentStage.level === 'A2' ? 'a2' : 'a1';
  const currentBuilder = sentenceBuilder[currentTrackKey];
  const totalAttempts = progress.scores.total ?? 0;
  const totalCorrect = progress.scores.correct ?? 0;
  const accuracy = totalAttempts ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
  const completedStages = stages.filter((stage) => stage.complete).length;
  const syncLabel =
    syncStatus === 'loading'
      ? 'Loading progress'
      : syncStatus === 'saving'
        ? 'Saving progress'
        : syncStatus === 'synced'
          ? 'Saved locally'
          : 'Saved in browser only';
  const isOnboarding = currentStage.id === 'a1-onboarding-stage';

  const appendWord = (word) => {
    setSentenceBuilder((current) => ({
      ...current,
      [currentTrackKey]: current[currentTrackKey]
        ? `${current[currentTrackKey]} ${word}`
        : word
    }));
  };

  const resetSentence = () => {
    setSentenceBuilder((current) => ({ ...current, [currentTrackKey]: '' }));
  };

  const renderHome = () => (
    <section className="screen-card hero-screen">
      <span className="eyebrow">Dutchlingo</span>
      <h1>Start with simple Dutch, then move level by level.</h1>
      <p className="screen-copy">
        The course begins with onboarding for absolute beginners, then walks through A1 and A2 in
        a fixed logical order. You only ever have one next step.
      </p>
      <div className="screen-stats">
        <article>
          <strong>{completedStages}</strong>
          <span>stages completed</span>
        </article>
        <article>
          <strong>{accuracy}%</strong>
          <span>current accuracy</span>
        </article>
        <article>
          <strong>{syncLabel}</strong>
          <span>save state</span>
        </article>
      </div>
      <article className="selection-card current-stage-card">
        <span className="eyebrow">{isOnboarding ? 'Start here' : `${currentStage.level} next`}</span>
        <h2>{currentStage.title}</h2>
        <p>{currentStage.tip}</p>
      </article>
      <button className="primary-button single-cta" onClick={() => navigate('course')} type="button">
        {isOnboarding ? 'Start onboarding' : 'Continue course'}
      </button>
    </section>
  );

  const renderCourse = () => (
    <section className="screen-card practice-screen">
      <span className="eyebrow">{isOnboarding ? 'Onboarding' : `${currentStage.level} Stage ${currentStage.order}`}</span>
      <h1>{currentUnit.theme ?? currentUnit.module}</h1>
      <p className="screen-copy">
        {isOnboarding
          ? 'Learn a few core words and build your first Dutch sentences. This is designed for complete beginners.'
          : 'Finish this unit and the course will unlock the next one automatically.'}
      </p>

      <article className="selection-card current-stage-card">
        <span className="eyebrow">Tip</span>
        <p>{currentStage.tip}</p>
      </article>

      <LessonWorkbench
        builtSentence={currentBuilder}
        examKey={currentStage.level === 'A2' ? 'examLink' : 'inburgeringExample'}
        goalKey={currentStage.level === 'A2' ? 'sentenceGoal' : 'winCondition'}
        item={currentUnit}
        level={isOnboarding ? 'Start' : currentStage.level}
        onAddWord={appendWord}
        onResetSentence={resetSentence}
        onSpeak={speak}
        titleKey={currentUnit.theme ? 'theme' : 'module'}
        wordsKey={currentUnit.words ? 'words' : 'vocabulary'}
        drillsKey={currentUnit.drills ? 'drills' : 'practiceSteps'}
      />

      <ExerciseEngine
        exerciseMeta={{
          grammar: currentUnit.grammar,
          lessonId: currentUnit.id,
          lessonTitle: currentUnit.theme ?? currentUnit.module,
          level: isOnboarding ? 'A1' : currentStage.level
        }}
        exercises={currentUnit.exercises}
        lessonId={currentUnit.id}
        onMarkExercise={markExercise}
        progress={progress}
        title={isOnboarding ? 'First Dutch practice' : `${currentStage.level} guided practice`}
      />

      <button className="primary-button single-cta" onClick={() => navigate('home')} type="button">
        Continue
      </button>
    </section>
  );

  return (
    <div className="simple-shell">
      <header className="simple-header">
        <div className="brand">
          <span className="brand-mark">DL</span>
          <div>
            <p>Dutchlingo</p>
            <span>{isOnboarding ? 'Beginner onboarding' : `${currentStage.level} course path`}</span>
          </div>
        </div>
      </header>

      <main className="screen-wrap">
        {route === 'home' ? renderHome() : null}
        {route === 'course' ? renderCourse() : null}
      </main>
    </div>
  );
}

export default App;
