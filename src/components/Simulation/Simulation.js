import React, { Component } from "react";
import Navigationbar from "../NavigationBar/NavigationBar";
import Display from "../Display/Display";
import Tutorial from "../Tutorial/Tutorial";
import Description from "../DescriptionText/Description";
import AboutAlgorithm from "../AboutAlgorithm/AboutAlgorithm";
import AboutDataStructure from "../AboutDataStructure/AboutDataStructure";

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
    };
    this.onClickAlgorithm = this.onClickAlgorithm.bind(this);
    this.onClickSpeed = this.onClickSpeed.bind(this);
    this.onClickAboutAlgorithm = this.onClickAboutAlgorithm.bind(this);
    this.onClickAboutDataStructure = this.onClickAboutDataStructure.bind(this);
    this.createTutorialEvent = this.createTutorialEvent.bind(this);
    this.closeTutorial = this.closeTutorial.bind(this);
    this.closeAboutAlgorithm = this.closeAboutAlgorithm.bind(this);
    this.closeAboutDataStructure = this.closeAboutDataStructure.bind(this);
  }

  onComponentDidMount() {}

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

  render() {
    const {
      tutorialEnabled,
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
          <AboutAlgorithm
            aboutAlgorithm={aboutAlgorithm}
            closeAboutAlgorithm={this.closeAboutAlgorithm}
          ></AboutAlgorithm>
        ) : (
          <div></div>
        )}
        {aboutDataStructure.length > 0 ? (
          <AboutDataStructure
            aboutDataStructure={aboutDataStructure}
            closeAboutDataStructure={this.closeAboutDataStructure}
          ></AboutDataStructure>
        ) : (
          <div></div>
        )}
        <Navigationbar
          tutorialEnabled={tutorialEnabled}
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
        <Description activeAlgorithm={activeAlgorithm}></Description>
        <Display
          tutorialEnabled={tutorialEnabled}
          aboutAlgorithmEnabled={aboutAlgorithmEnabled}
          aboutDataStructureEnabled={aboutDataStructureEnabled}
          activeAlgorithm={activeAlgorithm}
          simulatorSpeed={simulatorSpeed}
        ></Display>
      </div>
    );
  }
}
