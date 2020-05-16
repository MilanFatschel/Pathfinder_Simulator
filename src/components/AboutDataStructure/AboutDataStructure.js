import React, { Component } from "react";

import AboutStack from "./AboutStack";
import AboutQueue from "./AboutQueue";
import AboutHeap from "./AboutHeap";

export default class AboutDataStructure extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.close = this.close.bind(this);
  }

  componentDidMount() {}

  close() {
    this.props.closeAboutDataStructure();
  }

  render() {
    var { aboutDataStructure } = this.props;

    switch (aboutDataStructure) {
      case "Stack":
        this.dataStructureForm = <AboutStack close={this.close} />;
        break;
      case "Queue":
        this.dataStructureForm = <AboutQueue close={this.close} />;
        break;
      case "Heap":
        this.dataStructureForm = <AboutHeap close={this.close} />;
        break;
      default:
        this.dataStructureForm = null;
    }
    return this.dataStructureForm;
  }
}
