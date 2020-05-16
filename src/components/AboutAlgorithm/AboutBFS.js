import React, { Component } from "react";

import "./AboutAlgorithm.css";

export default class AboutBFS extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tutorial">
        <h3 className="title">Breadth-First-Search</h3>
        <img
          className="algorithm-image"
          src={require("./../../gifs/bfsslow.gif")}
        ></img>
        <p className="paragraph">
          Breadth-First-Search aims to find the shortest path from the start
          node to the end node. The BFS expores nodes level by level, and
          updates each node with their parent (where they came from) with each
          new visit. Levels are defined as multiple nodes with the same exact
          distance to the start node. Expanding level by level forces the
          algorithm to return the shortest path when it finally hits the end
          node, since the level distances are the same. The BFS uses a queue to
          keep track of this level ordering of nodes. When all of the nodes'
          neighbors have been visited it will be removed from the queue. BFS may
          be slower than others with heuristics but it is easier to implement.
          However, it is still fully effective in producing an accurate shortest
          path.
          <br /> The code for the implementation of BFS can be found here:&nbsp;
          <a
            href="https://github.com/MilanFatschel/Pathfinder_Algorithm_Simulator/blob/master/src/algorithms/BFS.js"
            target="_blank"
          >
            Breath-First-Search
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
