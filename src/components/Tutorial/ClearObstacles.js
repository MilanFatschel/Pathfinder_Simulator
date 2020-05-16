import React, { Component } from "react";

import "./Tutorial.css";

export default class ClearObstacles extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tutorial">
        <h3 className="title">Clearing All Obstacles</h3>
        <h6 className="sub-title">
          Select the "Reset Obstacles" button to clear all placed obstacles.
        </h6>
        <img
          className="button-image"
          src={require("./../../gifs/reset.gif")}
        ></img>
        <div className="page">10/12</div>
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
