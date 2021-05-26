import ProgressBar from "../../ProgressBar";

const ProgressBars = ({ data }) => {
  /*
  const categories = data.map(exercise => exercise.category);
  const categoryExercises = {};

  for(let name of categories.sort()) {
    if(Object.keys(categoryExercises).includes(name)) {
      categoryExercises[name] = {
        total: categoryExercises[name] + 1
      };
    } else {
      categoryExercises[name] = {
        total: 1
      };;
    }
  }

  { Object.keys(categoryExercises).map(category => {
    return (
      <>
        <span className='categoryName'>{ category }</span>
        <ProgressBar />
      </>
    )
  }) }
  */

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

  console.log(data.length);

  return (
    <div className="allProgressBars">
      { Object.keys(categoryExercises).map((category, i) => {

        return (
          <>
            <span className='categoryName'>{ category }</span>
            <ProgressBar key={ i } progressRatio={ categoryExercises[category] / data.length } />
          </>
        )
      }) }
    </div>
  )
}

export default ProgressBars;
