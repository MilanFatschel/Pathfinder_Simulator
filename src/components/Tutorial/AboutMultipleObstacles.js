import React, { Component } from "react";

import "./Tutorial.css";

export default class AboutMultipleObstacles extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tutorial">
        <h3 className="title">Placing Multiple Obstacles</h3>
        <h6 className="sub-title">
          Press and drag on empty cells to continously activate obstacles.
          Pressing and dragging over obstacles will continously deactivate them.
        </h6>
        <img
          className="tutorial-image"
          src={require("./../../gifs/dragobstacle.gif")}
        ></img>
        <div className="page">4/12</div>
        <button
          className="next"
          onClick={() => {
            this.props.incrementPage();
          }}
        >
          Next
        </button>
        <button
          className="previous"
          onClick={() => {
            this.props.decrementPage();
          }}
        >
          Previous
        </button>
        <button
          className="skip"
          onClick={() => {
            this.props.skip();
          }}
        >
          Skip
        </button>
      </div>
    );
  }
}
