import React, { Component } from "react";

import "./AboutAlgorithm.css";

export default class AboutDijkstra extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tutorial">
        <h3 className="title">Dijkstra</h3>
        <img
          className="algorithm-image"
          src={require("./../../gifs/dijkstraslow.gif")}
          alt="Dijkstra example"
        ></img>
        <p className="paragraph">
          Dijkstra aims to find the shortest path from the start node to the end
          node. It explores each node starting with the ones with the smallest
          heuristic cost and will find the shortest path to each node. The
          huerstic function for the implemented algorithm was simply the known
          distance g(n) from the start node to the current explored node (which
          starts at 0). This formula f(n) = h(n), gives us an estimation of how
          close the path of the explored node (marked in blue above) is to the
          start node. Dijkstra will visit each unvisted node and update it if it
          has smaller f(n). As a result, Dijkstra tries to cover as many cells
          as it can until it reaches the end node, staying as close as it can to
          the start node. A min heap is used to efficiently sort each one of the
          nodes by their smallest hueristic function which are removed when the
          nodes' neighbors have all been visited. Dijkstra is regarded as one of
          the most commonly used pathfinding algorithms.
          <br /> The code for the implementation of Dijkstra can be found
          here:&nbsp;
          <a
            href="https://github.com/MilanFatschel/Pathfinder_Simulator/blob/master/src/algorithms/Dijkstra.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dijkstra
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
