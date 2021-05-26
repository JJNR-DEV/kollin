import React from "react";
import { scoreToDifficultyIndex } from "../../utilities/formatScore";
import {
  difficultyColors,
  kollinBlack,
  chipDarkBlue,
} from "../../utilities/COLORS";
import PropTypes from "prop-types";
import "./DifficultyChip.css";

const difficultyNames = ["-", "Easy", "Medium", "Hard", "Nightmare"];


const DifficultyChip = ({ score, filled }) => {
  const difficultyIndex = scoreToDifficultyIndex(score);
  const difficultyName = difficultyNames[difficultyIndex];
  const difficultyColor = difficultyColors[difficultyIndex];

  let color = difficultyColor;
  let backgroundColor = "transparent";
  let borderWidth = 2;

  if (filled) {
    color = chipDarkBlue;
    backgroundColor = difficultyColor;
    borderWidth = 0;
  }

  let displayText = score;

  try {
    displayText = Number(score).toFixed(1)
  } catch (err) {

  }

  return (
    <div>
      <span
        className="difficulty-chip"
        style={{
          borderColor: difficultyColor,
          backgroundColor,
          color,
          borderWidth,
        }}
      >
        <b>{displayText}</b> {" " + difficultyName}
      </span>

      {/* <i className="fas fa-star"></i> */}
    </div>
  );
};

DifficultyChip.propTypes = {
  score: PropTypes.any.isRequired,
};

export default DifficultyChip;
