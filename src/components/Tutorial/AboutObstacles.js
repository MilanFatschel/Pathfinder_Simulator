import React, { Component } from "react";

import "./Tutorial.css";

export default class AboutToggleObstacles extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tutorial">
        <h3 className="title">Placing Obstacles</h3>
        <h6 className="sub-title">
          Activate any obstacle by simply clicking on an empty grid cell.
          Clicking on the obstacle again will deactivate it.
        </h6>
        <img
          className="tutorial-image"
          src={require("./../../gifs/toggleobstacle.gif")}
          alt="Toggle obstacle example"
        ></img>
        <div className="page">3/12</div>
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
