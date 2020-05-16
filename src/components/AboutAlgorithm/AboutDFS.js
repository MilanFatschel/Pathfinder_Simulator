import React, { Component } from "react";

import "./AboutAlgorithm.css";

export default class AboutDFS extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tutorial">
        <h3 className="title">Depth-First-Search</h3>
        <img
          className="algorithm-image"
          src={require("./../../gifs/dfsslow.gif")}
        ></img>
        <p className="paragraph">
          The Depth-First-Search, while very applicable and useful in many
          situations, is not a great algorithm for pathfinding. The DFS has the
          characteristic of exploring whatever it sees first. This results in no
          real direction and a guess of where the end node is. The result is a
          random path as the DFS will eventually reach the end as it seaches all
          nodes and updates its parents. A stack or recursion is used to keep
          track of these nodes to keep the "first-come first-serve" order. When
          all of the nodes' neighbors have been visited it will be removed from
          the stack. The DFS would not be used in pathfinding but this still
          provides a nice visual of how the algorithm searches graphs.
          <br /> The code for the implementation of DFS can be found here:&nbsp;
          <a
            href="https://github.com/MilanFatschel/Pathfinder_Algorithm_Simulator/blob/master/src/algorithms/DFS.js"
            target="_blank"
          >
            Depth-First-Search
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
