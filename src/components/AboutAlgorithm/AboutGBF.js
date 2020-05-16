import React, { Component } from "react";

import "./AboutAlgorithm.css";

export default class AboutGBF extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tutorial">
        <h3 className="title">Greedy-Best-First</h3>
        <img
          className="algorithm-image"
          src={require("./../../gifs/gbfslow.gif")}
        ></img>
        <p className="paragraph">
          Greedy-Best-First aims to find a path from the start node to the end
          node. It is extemely aggressive and speedy, but at the cost that it
          won't find the shortest path everytime. It explores each node starting
          with the ones with the smallest heuristic cost and updates them with
          their parent node (where it came from) if a lower hueristic distance
          is found. The huerstic function for the implemented algorithm was
          simply the euclidean distance h(n) from the current explored node
          (which starts at 0) to the end node. This formula f(n) = h(n), gives
          us an estimation of how close we are to the end node at the current
          explored node (marked in blue). A min heap is used to efficiently sort
          each one of the nodes by their smallest hueristic function which are
          removed when all of the nodes' neighbors have been visited.
          Greedy-Best-First can be considerably faster than other algorithms if
          a path (not always the shortest) is desired.
          <br /> The code for the implementation of Greedy-Best-First can be
          found here:&nbsp;
          <a
            href="https://github.com/MilanFatschel/Pathfinder_Simulator/blob/master/src/algorithms/GreedyBestFirst.js"
            target="_blank"
          >
            Greedy-Best-First
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
