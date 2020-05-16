import React, { Component } from "react";

import "./Tutorial.css";

export default class Conclusion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tutorial">
        <h3 className="title">That's it!</h3>
        <h6 className="sub-title">
          Find more information about the algorithms and data structures behind
          the simulator in the "About Pathfinding Algorithms" and "About Data
          Structures" dropdowns.
        </h6>
        <p className="paragraph">
          This repo can be found at:&nbsp;
          <a
            href="https://github.com/MilanFatschel/Pathfinder_Simulator/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Link
          </a>
          <br></br> Contact: Milan.Fatschel@gmail.com
        </p>
        <div className="page">12/12</div>
        <button
          className="next"
          onClick={() => {
            this.props.skip();
          }}
        >
          Finish
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
