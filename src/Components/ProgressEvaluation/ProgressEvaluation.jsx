import ProgressBars from './ProgressBars/ProgressBars';
import ProgressEvaluationCard from '../ProgressEvaluationCard/ProgressEvalationCard';
import "./ProgressEvaluation.scss";

const ProgressEvaluation = ({ data }) => {
  const evaluationTotal = data.map(exercise => JSON.parse(exercise.evaluation));

  // To do merge the reducers
  const completeExercises = evaluationTotal.reduce((previous, current) => {
    return previous + current.completed? 1 : 0;
  }, 0);

  const hoursExercises = evaluationTotal.reduce((previous, current) => {
    return previous + current.timeSpent;
  }, 0) / 3600;

  return (
    <div className='progressEvaluationRow'>
      <ProgressEvaluationCard amount={ hoursExercises.toFixed() } type={ 'Hours' } />
      <ProgressEvaluationCard amount={ completeExercises } type={ 'Exercises' }  />
      <ProgressBars data={ data } />
    </div>
  );
}

export default ProgressEvaluation;
