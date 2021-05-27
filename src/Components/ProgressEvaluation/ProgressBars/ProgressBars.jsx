import ProgressBar from "../../ProgressBar";
import "./ProgressBars.scss";

const ProgressBars = ({ data }) => {
  const categoryExercises = {};

  const categories = data.map(exercise => {
    return {
      categoryName: exercise.category,
      completed: JSON.parse(exercise.evaluation).completed
    }
  });

  for(let exercise of categories) {
    if(categoryExercises[exercise.categoryName] === undefined) {
      categoryExercises[exercise.categoryName] = 1;
    } else {
      categoryExercises[exercise.categoryName] = categoryExercises[exercise.categoryName] + 1;
    }
  }

  return (
    <div className="allProgressBars">
      { Object.keys(categoryExercises).map((category, i) => {

        return (
          <div className="progressEvaluationBars" key={ i }>
            <span className='categoryName'>{ category }</span>
            <ProgressBar progressRatio={ categoryExercises[category] / data.length } />
          </div>
        )
      }) }
    </div>
  )
}

export default ProgressBars;
