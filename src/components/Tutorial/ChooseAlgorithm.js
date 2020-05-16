import React, { Component } from "react";

import "./Tutorial.css";

export default class ChooseAlgorithm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tutorial">
        <h3 className="title">Choosing an Algorithm</h3>
        <h6 className="sub-title">
          Select the "Choose Algorithm" dropdown to choose which pathfinding
          algorithm you would like to simulate.
        </h6>
        <img
          className="dropdown-image-algorithm"
          src={require("./../../gifs/choosealgorithm.gif")}
        ></img>
        <div className="page">6/12</div>
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
