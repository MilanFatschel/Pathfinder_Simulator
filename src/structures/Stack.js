// Custom stack implementation

import React, { Component } from "react";

export default class Stack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  push(element) {
    // adding element to the queue
    this.state.items.push(element);
  }

  pop() {
    // removing element from the queue
    // returns underflow when called
    // on empty queue
    if (this.isEmpty()) return "Underflow";
    return this.state.items.pop();
  }

  top() {
    // returns the Front element of
    // the queue without removing it.
    if (this.isEmpty()) return "No elements in Stack";
    return this.state.items[this.state.items.length - 1];
  }

  isEmpty() {
    // return true if the queue is empty.
    return this.state.items.length == 0;
  }

  render() {
    return;
  }
}
