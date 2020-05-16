import React, { Component } from "react";

import "./AboutDataStructure.css";

export default class AboutStack extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tutorial">
        <h3 className="title">The Stack</h3>
        <img
          className="stack-image"
          src={require("./../../gifs/stack.gif")}
          alt="Stack example"
        ></img>
        <p className="paragraph">
          The stack can be thought of a physical stack of books. As you place
          books on top of each other you can only take off the top book in order
          to remove things from the stack. This allows us to keep the Last-In
          First-Out ordering and also makes removing and inserting from the
          stack very efficient (constant, since we only need to keep track of
          the top item). Here, push adds an item and pop removes an item. The
          peek method returns the current top item in the stack. In our case,
          the red items in the above image can be thought of each grid cell in
          the search. The stack can be seen in action with Depth-First-Search
          algorithm.
          <br /> The code for the implemented stack can be found here:&nbsp;
          <a
            href="https://github.com/MilanFatschel/Pathfinder_Simulator/blob/master/src/structures/Stack.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stack
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
