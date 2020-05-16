import React, { Component } from "react";

import "./AboutAlgorithm.css";

export default class AboutAstar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tutorial">
        <h3 className="title">A*</h3>
        <img
          className="algorithm-image"
          src={require("./../../gifs/astarslow.gif")}
        ></img>
        <p className="paragraph">
          A* aims to find the shortest path from the start node to the end node.
          It explores each node starting with the ones with the smallest
          heuristic cost. The huerstic function for the implemented algorithm
          was simply the known distance g(n) from the start node to the current
          explored node (which starts at 0) in addition to the the euclidean
          distance h(n) from the current explored node to the end node. This
          formula f(n) = g(n) + h(n), gives us an estimation of how short the
          path f(n) is if we were to use that explored node (marked in blue
          above). A min heap is used to efficiently sort each one of the nodes
          by their smallest hueristic function which are then removed after all
          of the nodes' neighbors have been visited. A* is considered a balance
          between Dijkstra and Greedy.
          <br /> The code for the implementation of A* can be found here:&nbsp;
          <a
            href="https://github.com/MilanFatschel/Pathfinder_Algorithm_Simulator/blob/master/src/algorithms/Astar.js"
            target="_blank"
          >
            A*
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
