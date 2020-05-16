import React, { Component } from "react";

import "./Tutorial.css";

export default class RandomizeObstacles extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tutorial">
        <h3 className="title">Generating Random Obstacles</h3>
        <h6 className="sub-title">
          Select the "Randomize Obstacles" button to randomly generate obstacles
          over the grid.
        </h6>
        <img
          className="button-image"
          src={require("./../../gifs/randomize.gif")}
          alt="Randomize obstacle example"
        ></img>
        <div className="page">11/12</div>
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
