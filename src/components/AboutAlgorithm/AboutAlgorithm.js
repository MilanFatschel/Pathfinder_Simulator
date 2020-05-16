import React, { Component } from "react";

import AboutAstar from "./AboutAstar";
import AboutDijkstra from "./AboutDijkstra";
import AboutGBF from "./AboutGBF";
import AboutBFS from "./AboutBFS";
import AboutDFS from "./AboutDFS";

export default class AboutAlgorithm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.close = this.close.bind(this);
  }

  componentDidMount() {}

  close() {
    this.props.closeAboutAlgorithm();
  }

  render() {
    var { aboutAlgorithm } = this.props;

    switch (aboutAlgorithm) {
      case "A*":
        this.algorithmForm = <AboutAstar close={this.close} />;
        break;
      case "Dijkstra":
        this.algorithmForm = <AboutDijkstra close={this.close} />;
        break;
      case "GBF":
        this.algorithmForm = <AboutGBF close={this.close} />;
        break;
      case "BFS":
        this.algorithmForm = <AboutBFS close={this.close} />;
        break;
      case "DFS":
        this.algorithmForm = <AboutDFS close={this.close} />;
        break;
      default:
        this.algorithmForm = null;
    }
    return this.algorithmForm;
  }
}
