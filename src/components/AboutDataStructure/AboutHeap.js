import React, { Component } from "react";

import "./AboutDataStructure.css";

export default class AboutHeap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tutorial">
        <h3 className="title">The Heap</h3>
        <img
          className="heap-image"
          src={require("./../../gifs/heap.gif")}
          alt="Heap example"
        ></img>
        <p className="paragraph">
          The heap can be thought of as an efficient structure that keeps track
          of a minimum or maximum element in a list or array. Heaps are useful
          when quick and constant access is needed to this minimum or maximum
          element. Heaps use trees as seen above, to either "bubble up" or
          "bubble down" an element when it is inserted or removed. The binary
          tree allows us to remove and insert items in log(n) time and access
          the minimum or maximum element in constant time. This can be much more
          efficent than having to sort every element. A*, Dijkstra, and
          Greedy-Best-First all use the heap to keep track of their minimum
          heuristic element or the best path at that time!
          <br /> The code for the implemented heap can be found here (heap-js
          library):&nbsp;
          <a
            href="https://github.com/ignlg/heap-js/blob/master/dist/heap-js.es5.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Heap
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
