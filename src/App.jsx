import { useMemo, useState } from 'react';
import ExerciseEngine from './components/ExerciseEngine';
import LessonWorkbench from './components/LessonWorkbench';
import OnboardingJourney from './components/OnboardingJourney';
import WeakAreasPanel from './components/WeakAreasPanel';
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
    tip: 'Start with a few safe Dutch words and tiny sentence patterns. The first win should feel easy.'
  },
  {
    id: 'a1-stage-1',
    level: 'A1',
    order: 1,
    title: 'Introductions and home',
    unitIds: ['a1-day-1', 'a1-day-2'],
    tip: 'Repeat full chunks first. `Ik ben`, `ik woon`, and article+noun blocks make A1 much easier.'
  },
  {
    id: 'a1-stage-2',
    level: 'A1',
    order: 2,
    title: 'Routine and shopping',
    unitIds: ['a1-day-3', 'a1-day-4'],
    tip: 'Keep Dutch sentence order simple: subject first, verb second. That habit carries a lot of A1.'
  },
  {
    id: 'a1-stage-3',
    level: 'A1',
    order: 3,
    title: 'Time and negation',
    unitIds: ['a1-day-5', 'a1-day-6'],
    tip: 'Dates, times, and `geen / niet` are easy exam marks once they become automatic.'
  },
  {
    id: 'a1-stage-4',
    level: 'A1',
    order: 4,
    title: 'Transport, health, work, and forms',
    unitIds: ['a1-day-7', 'a1-day-8', 'a1-day-9', 'a1-day-10'],
    tip: 'This is practical A1 Dutch: routes, forms, doctor visits, and work situations.'
  },
  {
    id: 'a1-stage-5',
    level: 'A1',
    order: 5,
    title: 'Social contact, hobbies, and weather',
    unitIds: ['a1-day-11', 'a1-day-12'],
    tip: 'Finish A1 by making the language personal. Invitations and preferences make Dutch feel usable.'
  },
  {
    id: 'a2-stage-1',
    level: 'A2',
    order: 1,
    title: 'Appointments and past events',
    unitIds: ['a2-work', 'a2-past'],
    tip: 'At A2, practical communication and tense control start working together.'
  },
  {
    id: 'a2-stage-2',
    level: 'A2',
    order: 2,
    title: 'Health and housing',
    unitIds: ['a2-health', 'a2-housing'],
    tip: 'Useful Dutch wins here. Explain problems, locations, and comparisons clearly.'
  },
  {
    id: 'a2-stage-3',
    level: 'A2',
    order: 3,
    title: 'Travel and writing',
    unitIds: ['a2-travel', 'a2-writing'],
    tip: 'Train fixed writing and transport phrases until they come out without effort.'
  },
  {
    id: 'a2-stage-4',
    level: 'A2',
    order: 4,
    title: 'Municipality, listening, and reading',
    unitIds: ['a2-municipality', 'a2-listening', 'a2-reading'],
    tip: 'Do not chase every word. Catch the key detail the task actually asks for.'
  },
  {
    id: 'a2-stage-5',
    level: 'A2',
    order: 5,
    title: 'Opinions, phone calls, and instructions',
    unitIds: ['a2-opinions', 'a2-phone', 'a2-services'],
    tip: 'This final stretch adds more natural conversation and practical service interaction.'
  }
];

const skillMap = {
  'a1-onboarding': ['speaking', 'writing'],
  'a1-day-1': ['speaking', 'writing'],
  'a1-day-2': ['reading', 'speaking'],
  'a1-day-3': ['speaking', 'listening'],
  'a1-day-4': ['speaking', 'listening'],
  'a1-day-5': ['reading', 'writing'],
  'a1-day-6': ['reading', 'writing'],
  'a1-day-7': ['listening', 'speaking'],
  'a1-day-8': ['speaking', 'listening'],
  'a1-day-9': ['reading', 'speaking'],
  'a1-day-10': ['reading', 'writing'],
  'a1-day-11': ['speaking', 'listening'],
  'a1-day-12': ['speaking', 'writing'],
  'a2-work': ['speaking', 'writing'],
  'a2-past': ['speaking', 'writing'],
  'a2-health': ['speaking', 'listening'],
  'a2-housing': ['reading', 'speaking'],
  'a2-travel': ['listening', 'reading'],
  'a2-writing': ['writing'],
  'a2-municipality': ['reading', 'speaking'],
  'a2-listening': ['listening'],
  'a2-reading': ['reading'],
  'a2-opinions': ['speaking', 'writing'],
  'a2-phone': ['listening', 'speaking'],
  'a2-services': ['reading', 'listening']
};

function App() {
  const [sentenceBuilder, setSentenceBuilder] = useState({ a1: '', a2: '' });
  const [examResponse, setExamResponse] = useState('');
  const { progress, syncStatus, markExercise } = useCourseProgress();
  const { route, navigate } = useHashRoute();
  const { speak } = useSpeech();

  const isUnitCoreComplete = (unit) =>
    unit.exercises.every((exercise) => progress.completed[`${unit.id}:${exercise.id}`] === true);

  const isExamTaskComplete = (unit) => progress.completed[`${unit.id}:exam-task`] === true;

  const isUnitComplete = (unit) => isUnitCoreComplete(unit) && isExamTaskComplete(unit);

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
  const weakAreaList = Object.values(progress.weakPoints)
    .sort((a, b) => b.misses - a.misses)
    .slice(0, 3);
  const isOnboarding = currentStage.id === 'a1-onboarding-stage';
  const syncLabel =
    syncStatus === 'loading'
      ? 'Loading progress'
      : syncStatus === 'saving'
        ? 'Saving progress'
        : syncStatus === 'synced'
          ? 'Saved locally'
          : 'Saved in browser only';

  const skillReadiness = useMemo(() => {
    const skills = ['reading', 'listening', 'speaking', 'writing'];

    return skills.map((skill) => {
      const taggedUnits = allUnits.filter((unit) => (skillMap[unit.id] ?? []).includes(skill));
      const completed = taggedUnits.filter((unit) => isUnitComplete(unit)).length;
      const total = taggedUnits.length;
      const percent = total ? Math.round((completed / total) * 100) : 0;

      return { skill, completed, total, percent };
    });
  }, [progress]);

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

  const completeExamTask = () => {
    markExercise(`${currentUnit.id}:exam-task`, true, {
      grammar: currentUnit.grammar,
      lessonId: currentUnit.id,
      lessonTitle: currentUnit.theme ?? currentUnit.module,
      level: currentStage.level
    });
    setExamResponse('');
  };

  const renderToday = () => (
    <section className="screen-card hero-screen">
      <span className="eyebrow">Today</span>
      <h1>{isOnboarding ? 'Start with your first Dutch words and sentences.' : 'Today you have one clear next lesson.'}</h1>
      <p className="screen-copy">
        {isOnboarding
          ? 'This onboarding step is for complete beginners. Learn a few core words, build tiny sentences, and get comfortable before A1 opens up.'
          : 'The app now follows a guided exam-prep loop: learn one pattern, drill it, do one exam-style task, then review mistakes.'}
      </p>

      <article className="selection-card current-stage-card">
        <span className="eyebrow">{isOnboarding ? 'Start here' : `${currentStage.level} next`}</span>
        <h2>{currentUnit.theme ?? currentUnit.module}</h2>
        <p>{currentStage.tip}</p>
      </article>

      <div className="screen-stats">
        <article>
          <strong>{completedStages}</strong>
          <span>stages complete</span>
        </article>
        <article>
          <strong>{accuracy}%</strong>
          <span>exercise accuracy</span>
        </article>
        <article>
          <strong>{syncLabel}</strong>
          <span>progress state</span>
        </article>
      </div>

      <div className="skill-grid">
        {skillReadiness.map((item) => (
          <article className="summary-card" key={item.skill}>
            <strong>{item.percent}%</strong>
            <span>{item.skill}</span>
          </article>
        ))}
      </div>

      <button className="primary-button single-cta" onClick={() => navigate('learn')} type="button">
        {isOnboarding ? 'Start onboarding' : 'Start today’s lesson'}
      </button>
    </section>
  );

  const renderLearn = () => (
    <section className="screen-card practice-screen">
      <span className="eyebrow">Learn</span>
      <h1>{currentUnit.theme ?? currentUnit.module}</h1>
      <p className="screen-copy">
        Learn one sentence pattern first. Say it, hear it, and build one Dutch sentence before moving on.
      </p>

      <article className="selection-card current-stage-card">
        <span className="eyebrow">Tip</span>
        <p>{currentStage.tip}</p>
      </article>

      {isOnboarding ? (
        <OnboardingJourney onContinue={() => navigate('drill')} onSpeak={speak} unit={currentUnit} />
      ) : (
        <>
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

          <button className="primary-button single-cta" onClick={() => navigate('drill')} type="button">
            Start drills
          </button>
        </>
      )}
    </section>
  );

  const renderDrill = () => (
    <section className="screen-card practice-screen">
      <span className="eyebrow">Drill</span>
      <h1>Practice the pattern until it sticks.</h1>
      <p className="screen-copy">
        Work through the drills one by one. When you finish them, move to one exam-style task.
      </p>

      <ExerciseEngine
        exerciseMeta={{
          grammar: currentUnit.grammar,
          lessonId: currentUnit.id,
          lessonTitle: currentUnit.theme ?? currentUnit.module,
          level: currentStage.level
        }}
        exercises={currentUnit.exercises}
        lessonId={currentUnit.id}
        onMarkExercise={markExercise}
        progress={progress}
        title={`${currentStage.level} drill set`}
      />

      <button className="primary-button single-cta" onClick={() => navigate('exam')} type="button">
        Do exam task
      </button>
    </section>
  );

  const renderExam = () => (
    <section className="screen-card practice-screen">
      <span className="eyebrow">Exam task</span>
      <h1>Use the lesson in a practical exam-style prompt.</h1>
      <p className="screen-copy">
        The goal here is simple: produce one useful answer like you would in a beginner Dutch exam.
      </p>

      <article className="selection-card current-stage-card">
        <span className="eyebrow">Prompt</span>
        <h2>{currentUnit.inburgeringExample ?? currentUnit.examLink}</h2>
        <p>{currentUnit.winCondition ?? currentUnit.sentenceGoal}</p>
      </article>

      <div className="writing-layout exam-card">
        <textarea
          className="writing-input"
          onChange={(event) => setExamResponse(event.target.value)}
          placeholder="Write or plan your Dutch answer here"
          value={examResponse}
        />
        <button className="secondary-button speech-button" onClick={() => speak(currentUnit.sentenceFrame)} type="button">
          Hear the model pattern
        </button>
      </div>

      <button
        className="primary-button single-cta"
        disabled={!examResponse.trim()}
        onClick={() => {
          completeExamTask();
          navigate('review');
        }}
        type="button"
      >
        Finish exam task
      </button>
    </section>
  );

  const renderReview = () => (
    <section className="screen-card">
      <span className="eyebrow">Review</span>
      <h1>Review mistakes, then continue tomorrow.</h1>
      <p className="screen-copy">
        Only look at weak points. If there are no weak points yet, the session is done and the next lesson is ready.
      </p>

      <div className="review-summary-grid">
        <article className="summary-card">
          <strong>{accuracy}%</strong>
          <span>accuracy</span>
        </article>
        <article className="summary-card">
          <strong>{isUnitComplete(currentUnit) ? 'Done' : 'In progress'}</strong>
          <span>today’s unit</span>
        </article>
        <article className="summary-card">
          <strong>{syncLabel}</strong>
          <span>save state</span>
        </article>
      </div>

      <WeakAreasPanel items={weakAreaList} />

      <button className="primary-button single-cta" onClick={() => navigate('today')} type="button">
        Continue course
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
            <span>{isOnboarding ? 'Beginner onboarding' : `${currentStage.level} daily exam-prep flow`}</span>
          </div>
        </div>
      </header>

      <main className="screen-wrap">
        {route === 'today' ? renderToday() : null}
        {route === 'learn' ? renderLearn() : null}
        {route === 'drill' ? renderDrill() : null}
        {route === 'exam' ? renderExam() : null}
        {route === 'review' ? renderReview() : null}
      </main>
    </div>
  );
}

export default App;
