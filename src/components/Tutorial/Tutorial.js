import React, { Component } from "react";

import Welcome from "./Welcome";
import AboutPathFinding from "./AboutPathFinding";
import AboutObstacles from "./AboutObstacles";
import AboutMultipleObstacles from "./AboutMultipleObstacles";
import AboutEndPointsObstacles from "./AboutEndPoints";
import ChooseAlgorithm from "./ChooseAlgorithm";
import AdjustSpeed from "./AdjustSpeed";
import ClearSearch from "./ClearSearch";
import ClearObstacles from "./ClearObstacles";
import RandomizeObstacles from "./RandomizeObstacles";
import SimulateSearch from "./SimulateSearch";
import Conclusion from "./Conclusion";

export default class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 1,
    };
    this.incrementPage = this.incrementPage.bind(this);
    this.decrementPage = this.decrementPage.bind(this);
    this.skip = this.skip.bind(this);
  }

  componentDidMount() {}

  incrementPage() {
    const newPageIndex = this.state.pageIndex + 1;
    this.setState({ pageIndex: newPageIndex });
  }

  decrementPage() {
    const newPageIndex = this.state.pageIndex - 1;
    this.setState({ pageIndex: newPageIndex });
  }

  skip() {
    const newPageIndex = 1;
    this.setState({ pageIndex: newPageIndex });
    this.props.closeTutorial();
  }

  render() {
    var { pageIndex } = this.state;

    switch (pageIndex) {
      case 1:
        this.tutorialForm = (
          <Welcome incrementPage={this.incrementPage} skip={this.skip} />
        );
        break;
      case 2:
        this.tutorialForm = (
          <AboutPathFinding
            incrementPage={this.incrementPage}
            decrementPage={this.decrementPage}
            skip={this.skip}
          />
        );
        break;
      case 3:
        this.tutorialForm = (
          <AboutObstacles
            incrementPage={this.incrementPage}
            decrementPage={this.decrementPage}
            skip={this.skip}
          />
        );
        break;
      case 4:
        this.tutorialForm = (
          <AboutMultipleObstacles
            incrementPage={this.incrementPage}
            decrementPage={this.decrementPage}
            skip={this.skip}
          />
        );
        break;
      case 5:
        this.tutorialForm = (
          <AboutEndPointsObstacles
            incrementPage={this.incrementPage}
            decrementPage={this.decrementPage}
            skip={this.skip}
          />
        );
        break;
      case 6:
        this.tutorialForm = (
          <ChooseAlgorithm
            incrementPage={this.incrementPage}
            decrementPage={this.decrementPage}
            skip={this.skip}
          />
        );
        break;
      case 7:
        this.tutorialForm = (
          <AdjustSpeed
            incrementPage={this.incrementPage}
            decrementPage={this.decrementPage}
            skip={this.skip}
          />
        );
        break;
      case 8:
        this.tutorialForm = (
          <SimulateSearch
            incrementPage={this.incrementPage}
            decrementPage={this.decrementPage}
            skip={this.skip}
          />
        );
        break;
      case 9:
        this.tutorialForm = (
          <ClearSearch
            incrementPage={this.incrementPage}
            decrementPage={this.decrementPage}
            skip={this.skip}
          />
        );
        break;
      case 10:
        this.tutorialForm = (
          <ClearObstacles
            incrementPage={this.incrementPage}
            decrementPage={this.decrementPage}
            skip={this.skip}
          />
        );
        break;
      case 11:
        this.tutorialForm = (
          <RandomizeObstacles
            incrementPage={this.incrementPage}
            decrementPage={this.decrementPage}
            skip={this.skip}
          />
        );
        break;
      case 12:
        this.tutorialForm = (
          <Conclusion
            incrementPage={this.incrementPage}
            decrementPage={this.decrementPage}
            skip={this.skip}
          />
        );
        break;

      default:
        this.tutorialForm = null;
    }
    return this.tutorialForm;
  }
}
