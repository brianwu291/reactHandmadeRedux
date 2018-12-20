import React from "react";
import Button from "./components/Button.js";
import TextBar from "./components/TextBar.js";

class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <div className="ui visible message">
          <TextBar />
        </div>
        <Button />
      </div>
    );
  }
}

export default App;