import React, { Component } from "react";

import "./Tutorial.css";

export default class SimulateSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tutorial">
        <h3 className="title">Simulating the Pathfinding Search</h3>
        <h6 className="sub-title">
          Select the "Simulate" button to start the pathfinding search. The blue
          cells represent nodes that were checked for a path while the yellow
          cells represent the final result path from the algorithm.
        </h6>
        <img
          className="button-image"
          src={require("./../../gifs/simulate.gif")}
          alt="Simulate example"
        ></img>
        <div className="page">8/12</div>
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
