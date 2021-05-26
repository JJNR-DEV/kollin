import ExerciseCard from '../ExerciseCard/ExerciseCard';
import './Exercises.scss';

const Exercises = ({ data }) => {
  console.log(data)
  const bookmarkedExercises = data.filter(exercise => exercise.bookmarked);
  const notedExercises = data.filter(exercise => exercise.hasNote);

  return (
    <div>
      <div className="row">
        <h2>Bookmarked</h2>
        <div className="exercises">
          { bookmarkedExercises.map((exercise, i) => <ExerciseCard
            key={ i }
            exercise={ exercise }
            difficultyAssessment={ JSON.parse(exercise.evaluation).difficultyAssessment }  />) }
        </div>
      </div>

      <div className="row">
        <h2>Notes</h2>
        <div className="exercises">
          { notedExercises.map((exercise, i) => <ExerciseCard
            key={ i }
            exercise={ exercise }
            difficultyAssessment={ JSON.parse(exercise.evaluation).difficultyAssessment } />) }
        </div>
      </div>

      <div className="row">
        <h2>All Exercises</h2>
        <div className="exercises">
          { data.map((exercise, i) => <ExerciseCard
            key={ i }
            exercise={ exercise }
            difficultyAssessment={ JSON.parse(exercise.evaluation).difficultyAssessment } />) }
        </div>
      </div>
    </div>
  )
}

export default Exercises;
