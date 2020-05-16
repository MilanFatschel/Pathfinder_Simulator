import React, { Component } from "react";

import "./Description.css";

export default class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getAlgorithmDescription(algorithm) {
    if (algorithm == "A*")
      return "A*: a balance of Greedy and Dijkstra. Uses both the start and end node to expand based on a heuristic. Returns the shortest path.";
    else if (algorithm == "Dijkstra")
      return "Dijkstra: stays as close as possible to the start node and expands outwards. Returns the shortest path.";
    else if (algorithm == "GBF")
      return "Greedy-Best-First: an aggressive algorithm that expands to the node closest to the end node. Will not always return the shortest path.";
    else if (algorithm == "BFS")
      return "Breadth-First-Search: doesn't use the start or end node for expansion, but rather grows level by level. Returns the shortest path.";
    else if (algorithm == "DFS")
      return "Depth-First-Search: a very bad algorithm for pathfinding since it has no sense of direction. Will not return the shortest path unless you are lucky.";
    else return "";
  }

  render() {
    const { activeAlgorithm } = this.props;

    const description = this.getAlgorithmDescription(activeAlgorithm);

    return (
      <div className="descriptionContainer">
        <b>{description}</b>
      </div>
    );
  }
}
