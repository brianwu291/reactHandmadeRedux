import React from "react";
import { dispatch } from "../GlobalState.js";
import { updateScore } from "../actions/actions.js";

class Button extends React.Component {
  changeScore() {
    dispatch(updateScore(Math.random()));
  }

  render() {
    return (
      <div>
        <button className="ui primary button" onClick={this.changeScore}>
          Click
        </button>
      </div>
    );
  }
}
export default Button;