import React, { Component } from "react";

import "./Tutorial.css";

export default class ClearSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tutorial">
        <h3 className="title">Clearing the Simulated Search</h3>
        <h6 className="sub-title">
          Select the "Reset Path" button to clear the path.
        </h6>
        <img
          className="button-image"
          src={require("./../../gifs/clear.gif")}
          alt="Clear example"
        ></img>
        <div className="page">9/12</div>
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
