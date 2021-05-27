import ProgressBars from './ProgressBars/ProgressBars';
import ProgressEvaluationCard from '../ProgressEvaluationCard/ProgressEvalationCard';
import "./ProgressEvaluation.scss";

const ProgressEvaluation = ({ data }) => {
  const evaluationTotal = data.map(exercise => JSON.parse(exercise.evaluation));

  // If more cards would be required then more properties need to be added
  const exercisesTotalProgress = {
    Exercises: 0,
    Hours: 0
  };

  evaluationTotal.map((current) => {
    if(current.completed) {
      exercisesTotalProgress.Exercises = exercisesTotalProgress.Exercises + 1;
    }
    exercisesTotalProgress.Hours = exercisesTotalProgress.Hours + current.timeSpent;
    return current;
  });

  return (
    <div className='progressEvaluationRow'>
      <div className="progressEvaluationCards">
        {
          Object.keys(exercisesTotalProgress).map((type, i) => {
            if(type === 'Hours') {
              return <ProgressEvaluationCard
                key={ i }
                amount={ (exercisesTotalProgress[type] / 3600).toFixed() }
                type={ type } />
            } else {
              return <ProgressEvaluationCard
              key={ i }
              amount={ exercisesTotalProgress[type] }
              type={ type } />
            }
          })
        }
      </div>

      <ProgressBars data={ data } />
    </div>
  );
}

export default ProgressEvaluation;
