import { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'dutchlingo-course-progress';

const defaultProgress = {
  completed: {},
  scores: {},
  lessons: {},
  weakPoints: {},
  assessments: {}
};

function useCourseProgress() {
  const [progress, setProgress] = useState(defaultProgress);
  const [syncStatus, setSyncStatus] = useState('loading');
  const hasLoadedRef = useRef(false);

  useEffect(() => {
    let cancelled = false;

    async function loadProgress() {
      try {
        const response = await fetch('/api/progress');
        if (!response.ok) {
          throw new Error('progress-load-failed');
        }

        const stored = await response.json();
        if (!cancelled) {
          setProgress(stored);
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
          setSyncStatus('synced');
          hasLoadedRef.current = true;
        }
      } catch {
        try {
          const stored = window.localStorage.getItem(STORAGE_KEY);
          const parsed = stored ? JSON.parse(stored) : defaultProgress;
          if (!cancelled) {
            setProgress(parsed);
            setSyncStatus('local-only');
            hasLoadedRef.current = true;
          }
        } catch {
          if (!cancelled) {
            setProgress(defaultProgress);
            setSyncStatus('local-only');
            hasLoadedRef.current = true;
          }
        }
      }
    }

    loadProgress();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!hasLoadedRef.current) {
      return undefined;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    setSyncStatus((current) => (current === 'loading' ? 'saving' : 'saving'));

    const timeout = window.setTimeout(async () => {
      try {
        const response = await fetch('/api/progress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(progress)
        });

        if (!response.ok) {
          throw new Error('progress-save-failed');
        }

        setSyncStatus('synced');
      } catch {
        setSyncStatus('local-only');
      }
    }, 250);

    return () => window.clearTimeout(timeout);
  }, [progress]);

  const markExercise = (exerciseKey, isCorrect, meta = {}) => {
    setProgress((current) => ({
      ...current,
      completed: {
        ...current.completed,
        [exerciseKey]: isCorrect
      },
      scores: {
        ...current.scores,
        total: (current.scores.total ?? 0) + 1,
        correct: (current.scores.correct ?? 0) + (isCorrect ? 1 : 0)
      },
      lessons: {
        ...current.lessons,
        [meta.lessonId ?? 'unknown']: {
          attempts: (current.lessons[meta.lessonId ?? 'unknown']?.attempts ?? 0) + 1,
          correct:
            (current.lessons[meta.lessonId ?? 'unknown']?.correct ?? 0) + (isCorrect ? 1 : 0),
          level: meta.level ?? current.lessons[meta.lessonId ?? 'unknown']?.level ?? '',
          lessonTitle:
            meta.lessonTitle ?? current.lessons[meta.lessonId ?? 'unknown']?.lessonTitle ?? ''
        }
      },
      weakPoints: {
        ...current.weakPoints,
        ...(isCorrect
          ? {}
          : {
              [meta.lessonId ?? exerciseKey]: {
                lessonTitle: meta.lessonTitle ?? meta.lessonId ?? exerciseKey,
                grammar: meta.grammar ?? '',
                level: meta.level ?? '',
                misses: (current.weakPoints[meta.lessonId ?? exerciseKey]?.misses ?? 0) + 1
              }
            })
      }
    }));
  };

  const saveAssessment = (assessmentId, result) => {
    setProgress((current) => ({
      ...current,
      assessments: {
        ...current.assessments,
        [assessmentId]: result
      }
    }));
  };

  const resetProgress = () => {
    setProgress(defaultProgress);
  };

  return {
    progress,
    syncStatus,
    markExercise,
    saveAssessment,
    resetProgress
  };
}

export default useCourseProgress;
