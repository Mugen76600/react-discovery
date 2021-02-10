import React from "react";

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  startInterval() {
    let delay = 1000;

    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, delay);
  }

  componentDidMount() {
    this.startInterval();
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}
