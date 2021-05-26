import { difficultyColors } from "./COLORS";

export const scoreToDifficultyIndex = (score) => {
  if (score == null) {
    return 0;
  }
  let diff = 1;
  if (score > 0.99) {
    diff = 1;
  }
  if (score > 1.69) {
    diff = 2;
  }
  if (score > 2.69) {
    diff = 3;
  }
  if (score > 3.29) {
    diff = 4;
  }

  return diff;
};

export const scoreToDifficultyColor = (score) =>
  difficultyColors[scoreToDifficultyIndex(score)];
