import { UPDATE_SCORE } from "./actionType.js";

export const updateScore = score => {
  console.log("creating action...");
  return {
    type: UPDATE_SCORE,
    payload: score
  };
};
