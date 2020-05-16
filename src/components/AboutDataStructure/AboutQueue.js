import React, { Component } from "react";

import "./AboutDataStructure.css";

export default class AboutQueue extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tutorial">
        <h3 className="title">The Queue</h3>
        <img
          className="queue-image"
          src={require("./../../gifs/queue.gif")}
        ></img>
        <p className="paragraph">
          The queue resembles that of the "first-come, first-serve" or a line of
          people waiting to purchase something. This allows us to keep the
          First-In First-Out ordering and also makes removing and inserting from
          the queue very efficient (constant, since we only need to keep track
          of the front item). Here, enqueue (push) adds an item to the back of
          the queue and deqeue (pop) removes an item from the front of the
          queue. The peek (front) method returns the current front item in the
          queue. In our case, the items in the above image can be thought of
          each grid cell in the search. The queue can be seen in action with the
          Breadth-First-Search algorithm.
          <br /> The code for the implemented queue can be found here:&nbsp;
          <a
            href="https://github.com/MilanFatschel/Pathfinder_Simulator/blob/master/src/structures/Queue.js"
            target="_blank"
          >
            Queue
          </a>
        </p>
        <button
          className="next"
          onClick={() => {
            this.props.close();
          }}
        >
          Close
        </button>
      </div>
    );
  }
}
