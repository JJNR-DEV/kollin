import * as React from "react";
import PropTypes from "prop-types";
import {
  darkBlue,
  kollinGrey,
  kollinBlue,
} from "../utilities/COLORS";

const ProgressBar = ({ progressRatio, style }) => {
  return (
    <div
      style={{
        ...style,
        boxSizing: "content-box",
        width: "100%",
        height: 8,
        backgroundColor: kollinGrey,
        borderRadius: 10,
        margin: "4px 0px",
      }}
    >
      <div
        style={{
          boxSizing: "content-box",
          transition: "width 0.5s ease-out",
          height: "100%",
          width: `${progressRatio * 100}%`,
          backgroundColor: (style && style.color) || kollinBlue,
          borderRadius: 10,
        }}
      ></div>
    </div>
  );
};

ProgressBar.propTypes = {
  progressRatio: PropTypes.number, // The ratio to fill e.g. 0.5 => 50%
  style: PropTypes.object,
};

export default ProgressBar;
