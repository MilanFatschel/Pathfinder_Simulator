import React, { Component } from "react";

import "./Tutorial.css";

export default class AdjustSpeed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tutorial">
        <h3 className="title">Adjusting Simulation Speed</h3>
        <h6 className="sub-title">
          Select the "Adjust Simulation Speed" dropdown to adjust the animation
          search speed of the simulator.
        </h6>
        <img
          className="dropdown-image-speed"
          src={require("./../../gifs/adjustspeed.gif")}
          alt="Adjust speed example"
        ></img>
        <div className="page">7/12</div>
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
