import React, { Component } from "react";

import "./Tutorial.css";

export default class AboutEndPoints extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tutorial">
        <h3 className="title">Positioning the Start and End Nodes</h3>
        <h6 className="sub-title">
          Drag and drop either the start (green) or end (red) node on an empty
          cell to reposition the node.
        </h6>
        <img
          className="tutorial-image"
          src={require("./../../gifs/dragstartend.gif")}
          alt="Start and end points example"
        ></img>
        <div className="page">5/12</div>
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
