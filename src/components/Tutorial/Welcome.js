import React, { Component } from "react";

import "./Tutorial.css";

export default class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tutorial">
        <h3 className="title">Welcome to the Pathfinding Simulator</h3>
        <img
          className="welcome-image"
          src={require("./../../gifs//destination.gif")}
        ></img>
        <h6>This short tutorial will take you through the application.</h6>
        <p className="paragraph">
          If you want to skip the tutorial, feel free to press "Skip".
        </p>
        <div className="page">1/12</div>
        <button
          className="next"
          onClick={() => {
            this.props.incrementPage();
          }}
        >
          Next
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
