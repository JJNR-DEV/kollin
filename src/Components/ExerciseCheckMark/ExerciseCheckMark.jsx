import React from "react";
import { difficultyColorsSelfEvaluation } from "../../utilities/COLORS";

const ExerciseCheckMark = ({ difficultyAssessment }) => {

  // const difficultyIndex = scoreToDifficultyIndex(difficultyAssessment);
  const difficultyColor = difficultyColorsSelfEvaluation[difficultyAssessment - 1];


  let checkIcon = "far fa-null";

  if (difficultyAssessment > 0) {
    checkIcon = "fas fa-check-circle";
  }


  return <i className={checkIcon} style={{ color: difficultyColor }} />;
};

export default ExerciseCheckMark;
