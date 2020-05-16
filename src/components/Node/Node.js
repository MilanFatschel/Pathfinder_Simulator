import React, { Component } from "react";

import "./Node.css";

export default class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      row,
      col,
      isStartNode,
      isEndNode,
      isVisited,
      isObstacle,
      onMouseDown,
      onMouseEnter,
      onMouseOut,
      onMouseUp,
    } = this.props;

    const getNodeClass = isStartNode
      ? "node-start"
      : isEndNode
      ? "node-end"
      : isVisited
      ? "node-visited"
      : isObstacle
      ? "node-obstacle"
      : "";

    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${getNodeClass}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseOut={() => onMouseOut(row, col)}
        onMouseUp={() => onMouseUp(row, col)}
      ></div>
    );
  }
}
