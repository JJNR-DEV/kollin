import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import Card from "../Card/Card";
import DifficultyChip from "../DifficultyChip/DifficultyChip";

import ExerciseCheckMark from "../ExerciseCheckMark/ExerciseCheckMark";

import "./ExerciseCard.scss";

const ExerciseCard = ({
  exercise,
  difficultyAssessment,
  hasNote,
  bookmarked
}) => {

  let author = "Unknown author";
  if (exercise.author) {
    author = "by " + exercise.author;
  }

  return (
    <Card
      className={classnames("exercise-card")}
    >
      <div className="exercise-card-difficulty">
        <div>
          <DifficultyChip score={exercise.score} filled height={36} />
          {bookmarked && <i className="info fas fa-bookmark" />}
          {hasNote ? (
            <i className="info fas fa-file-alt" />
          ) : null}
          <ExerciseCheckMark difficultyAssessment={difficultyAssessment} />
        </div>

      </div>
      <div className="exercise-card-metadata">
        <div className="exercise-card-date-container">
          <span className="">{exercise.date}</span>
          <span>#{exercise.number}</span>
        </div>

        <div className="exercise-card-author">
          <span>{author}</span>
        </div>
      </div>
    </Card>
  );
};

ExerciseCard.propTypes = {
  exercise: PropTypes.shape({
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    author: PropTypes.string,
    score: PropTypes.number.isRequired,
  }),
  bookmarked: PropTypes.bool,
  hasNote: PropTypes.bool,
  difficultyAssessment: PropTypes.number
};

export default ExerciseCard;
