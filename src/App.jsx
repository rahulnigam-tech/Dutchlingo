import { useMemo, useState } from 'react';
import ExerciseEngine from './components/ExerciseEngine';
import FocusCard from './components/FocusCard';
import LessonWorkbench from './components/LessonWorkbench';
import MetricRow from './components/MetricRow';
import OnboardingJourney from './components/OnboardingJourney';
import ScreenShell from './components/ScreenShell';
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
    <ScreenShell
      copy={
        isOnboarding
          ? 'Start slowly with a few words and first sentences. The course will open up only after that.'
          : 'You only need to do one thing now: complete the next lesson in the guided loop.'
      }
      eyebrow="Today"
      title={isOnboarding ? 'Start with your first Dutch words and sentences.' : 'Today you have one clear next lesson.'}
    >
      <FocusCard
        body={currentStage.tip}
        eyebrow={isOnboarding ? 'Start here' : `${currentStage.level} next`}
        title={currentUnit.theme ?? currentUnit.module}
      />
      <MetricRow
        items={[
          { value: completedStages, label: 'stages complete' },
          { value: `${accuracy}%`, label: 'exercise accuracy' },
          { value: syncLabel, label: 'progress state' }
        ]}
      />
      <MetricRow
        items={skillReadiness.map((item) => ({
          value: `${item.percent}%`,
          label: item.skill
        }))}
      />
      <button className="primary-button single-cta" onClick={() => navigate('learn')} type="button">
        {isOnboarding ? 'Start onboarding' : 'Start today’s lesson'}
      </button>
    </ScreenShell>
  );

  const renderLearn = () => (
    <ScreenShell
      eyebrow="Learn"
      title={currentUnit.theme ?? currentUnit.module}
      copy="Learn one sentence pattern first. Say it, hear it, and build one Dutch sentence before moving on."
    >
      <FocusCard body={currentStage.tip} eyebrow="Tip" title="Keep this in mind" />
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
    </ScreenShell>
  );

  const renderDrill = () => (
    <ScreenShell
      eyebrow="Drill"
      title="Practice the pattern until it sticks."
      copy="Work through the drills one by one. When you finish them, move to one exam-style task."
    >
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
    </ScreenShell>
  );

  const renderExam = () => (
    <ScreenShell
      eyebrow="Exam task"
      title="Use the lesson in a practical exam-style prompt."
      copy="The goal here is simple: produce one useful answer like you would in a beginner Dutch exam."
    >
      <FocusCard
        body={currentUnit.winCondition ?? currentUnit.sentenceGoal}
        eyebrow="Prompt"
        title={currentUnit.inburgeringExample ?? currentUnit.examLink}
        tone="dark"
      />
      <div className="writing-layout exam-card fade-in">
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
    </ScreenShell>
  );

  const renderReview = () => (
    <ScreenShell
      eyebrow="Review"
      title="Review mistakes, then continue tomorrow."
      copy="Only look at weak points. If there are no weak points yet, the session is done and the next lesson is ready."
    >
      <MetricRow
        items={[
          { value: `${accuracy}%`, label: 'accuracy' },
          { value: isUnitComplete(currentUnit) ? 'Done' : 'In progress', label: 'today’s unit' },
          { value: syncLabel, label: 'save state' }
        ]}
      />
      <WeakAreasPanel items={weakAreaList} />
      <button className="primary-button single-cta" onClick={() => navigate('today')} type="button">
        Continue course
      </button>
    </ScreenShell>
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
