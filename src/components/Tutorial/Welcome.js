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
          alt="Welcome"
        ></img>
        <p className="paragraph">
          If you want to skip the tutorial, feel free to press "Skip". Press "Next" to continue!
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
