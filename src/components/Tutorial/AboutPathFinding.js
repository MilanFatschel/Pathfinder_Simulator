import React, { Component } from "react";

import "./Tutorial.css";

export default class AboutPathFinding extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tutorial">
        <h3 className="title">What is Pathfinding?</h3>
        <img
          className="small-image"
          src={require("./../../gifs/bfs.gif")}
        ></img>
        <p className="paragraph">
          Pathfinding algorithms seek to find a path from a starting point to an
          end point. Some path algorithms are tuned to find the shortest path
          while others just find an available path. You can click on the "About
          Pathfinding Algorithms" dropdown to learn more about each algorithm
          and how they individually work. Some of these algorithms are used by
          routing apps such as Uber, Lyft, and Google Maps. Their search
          algorithms will quickly search the area and use roads as an agent to
          expand to the destination. In our case, we will just use grid cells as
          our "available roads" to keep things simple. Click next to learn about
          the controls of the simulator!
        </p>
        <div className="page">2/12</div>
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
