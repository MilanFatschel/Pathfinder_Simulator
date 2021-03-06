import React, { Component } from "react";
import Navigationbar from "../NavigationBar/NavigationBar";
import Display from "../Display/Display";
import Tutorial from "../Tutorial/Tutorial";
import AboutAlgorithmsDialog from "../AboutAlgorithms/AboutAlgorithmsDialog";
import AboutStructuresDialog from "../AboutStructures/AboutStructuresDialog";

export default class Simulation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Defaults
      activeAlgorithm: "A*",
      aboutAlgorithm: "",
      aboutDataStructure: "",
      simulatorSpeed: 1.0,
      tutorialEnabled: true,
      mouseHold: false
    };

    this.onClickAlgorithm = this.onClickAlgorithm.bind(this);
    this.onClickSpeed = this.onClickSpeed.bind(this);
    this.onClickAboutAlgorithm = this.onClickAboutAlgorithm.bind(this);
    this.onClickAboutDataStructure = this.onClickAboutDataStructure.bind(this);
    this.createTutorialEvent = this.createTutorialEvent.bind(this);
    this.closeTutorial = this.closeTutorial.bind(this);
    this.closeAboutAlgorithm = this.closeAboutAlgorithm.bind(this);
    this.closeAboutDataStructure = this.closeAboutDataStructure.bind(this);
    this.mouseHoldOnEvent = this.mouseHoldOnEvent.bind(this);
    this.mouseHoldOffEvent = this.mouseHoldOffEvent.bind(this);
  }

  onComponentDidMount() {
  }

  // On Click Events
  createTutorialEvent() {
    this.setState({ tutorialEnabled: true });
  }

  // Item clicks for algorithms
  onClickAlgorithm(e, algorithm) {
    e.preventDefault();
    this.setState({ activeAlgorithm: algorithm });
  }

  // Item Clicks for Simulation Speed
  onClickSpeed(e, speed) {
    e.preventDefault();
    this.setState({ simulatorSpeed: speed });
  }

  // About Algorithms on Clicks
  onClickAboutAlgorithm(algorithm) {
    this.setState({ aboutAlgorithm: algorithm, aboutAlgorithmEnabled: true });
  }

  // About Data Structures on Clicks
  onClickAboutDataStructure(dataStructure) {
    this.setState({
      aboutDataStructure: dataStructure,
      aboutDataStructureEnabled: true,
    });
  }

  // Closing Events
  closeAboutAlgorithm() {
    this.setState({ aboutAlgorithm: "", aboutAlgorithmEnabled: false });
  }

  closeAboutDataStructure() {
    this.setState({
      aboutDataStructure: "",
      aboutDataStructureEnabled: false,
    });
  }

  closeTutorial() {
    this.setState({ tutorialEnabled: false });
  }

  // Mouse Holds
  mouseHoldOnEvent() {
    this.setState({ mouseHold: true})

  }

  mouseHoldOffEvent() {
    this.setState({ mouseHold: false})
  }

  render() {
    const {
      tutorialEnabled,
      mouseHold,
      aboutAlgorithmEnabled,
      aboutDataStructureEnabled,
      aboutAlgorithm,
      aboutDataStructure,
      activeAlgorithm,
      simulatorSpeed,
    } = this.state;

    return (
      <div>
        {tutorialEnabled ? (
          <Tutorial closeTutorial={this.closeTutorial}></Tutorial>
        ) : (
          <div></div>
        )}
        {aboutAlgorithm.length > 0 ? (
          <AboutAlgorithmsDialog
            algorithm={aboutAlgorithm}
            skip={this.closeAboutAlgorithm}
          ></AboutAlgorithmsDialog>
        ) : (
          <div></div>
        )}
        {aboutDataStructure.length > 0 ? (
          <AboutStructuresDialog
          structure={aboutDataStructure}
          skip={this.closeAboutDataStructure}
        ></AboutStructuresDialog>
        ) : (
          <div></div>
        )}
        <Navigationbar
          tutorialEnabled={tutorialEnabled}
          mouseHold={mouseHold}
          aboutAlgorithmEnabled={aboutAlgorithmEnabled}
          aboutDataStructureEnabled={aboutDataStructureEnabled}
          activeAlgorithm={activeAlgorithm}
          simulatorSpeed={simulatorSpeed}
          onClickAlgorithm={this.onClickAlgorithm}
          onClickSpeed={this.onClickSpeed}
          createTutorialEvent={this.createTutorialEvent}
          onClickAboutAlgorithm={this.onClickAboutAlgorithm}
          onClickAboutDataStructure={this.onClickAboutDataStructure}
        ></Navigationbar>
        <Display
          tutorialEnabled={tutorialEnabled}
          aboutAlgorithmEnabled={aboutAlgorithmEnabled}
          aboutDataStructureEnabled={aboutDataStructureEnabled}
          activeAlgorithm={activeAlgorithm}
          simulatorSpeed={simulatorSpeed}
          mouseHoldOnEvent={this.mouseHoldOnEvent}
          mouseHoldOffEvent={this.mouseHoldOffEvent}
        ></Display>
      </div>
    );
  }
}
