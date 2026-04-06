import ExerciseEngine from './ExerciseEngine';

function AssessmentCenter({ assessment, progress, onMarkExercise, onSaveAssessment }) {
  const result = progress.assessments[assessment.id];
  const completedKeys = assessment.items.map((item) => `${assessment.id}:${item.id}`);
  const correctCount = completedKeys.filter((key) => progress.completed[key] === true).length;
  const attemptedCount = completedKeys.filter((key) => progress.completed[key] !== undefined).length;
  const isReady = attemptedCount === assessment.items.length;

  const completeAssessment = () => {
    onSaveAssessment(assessment.id, {
      score: correctCount,
      total: assessment.items.length,
      passed: correctCount >= assessment.passScore
    });
  };

  return (
    <article className="assessment-shell">
      <div className="assessment-header">
        <div>
          <span className="eyebrow">{assessment.level} checkpoint</span>
          <h3>{assessment.title}</h3>
          <p>{assessment.description}</p>
        </div>
        <div className="assessment-badge">
          <strong>
            {correctCount}/{assessment.items.length}
          </strong>
          <span>current score</span>
        </div>
      </div>

      <ExerciseEngine
        exerciseMeta={{
          grammar: `${assessment.level} checkpoint`,
          lessonId: assessment.id,
          lessonTitle: assessment.title,
          level: assessment.level
        }}
        exercises={assessment.items}
        lessonId={assessment.id}
        onMarkExercise={onMarkExercise}
        progress={progress}
        title={assessment.title}
      />

      <div className="assessment-footer">
        <p>
          Pass target: {assessment.passScore}/{assessment.items.length}
        </p>
        <button
          className="primary-button assessment-complete"
          disabled={!isReady}
          onClick={completeAssessment}
          type="button"
        >
          Save checkpoint result
        </button>
        {result ? (
          <p className="assessment-result">
            Latest result: {result.score}/{result.total} {result.passed ? 'passed' : 'not passed'}
          </p>
        ) : null}
      </div>
    </article>
  );
}

export default AssessmentCenter;
