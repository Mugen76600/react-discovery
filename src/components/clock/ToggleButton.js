import React from "react";
import { Clock } from "./Clock";

export class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "Hide clock" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let text = this.state.text === "Hide clock" ? "Show clock" : "Hide clock";

    this.setState({ text: text });
  }

  render() {
    let clock = this.state.text === "Hide clock" && <Clock />;
    
    return (
      <div>
        <button className="button success hollow" onClick={this.handleClick}>
          {this.state.text}
        </button>
        {clock}
      </div>
    );
  }
}
