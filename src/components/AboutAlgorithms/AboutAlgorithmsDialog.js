import React, { Component } from "react";
import AboutAlorithmsData from "../../data/About-Algorithms-Data";
import SimpleDialog from "../SimpleDialog/SimpleDialog";

export default class AboutAlgorithmsDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const dialogData = AboutAlorithmsData.getData(this.props.algorithm);
   
    return (
      <SimpleDialog
      title={dialogData.title}
      gifPath={dialogData.gifPath}
      gifAlt={dialogData.gifAlt}
      text={dialogData.text}
      link={dialogData.link}
      skip={this.props.skip}
      ></SimpleDialog>
    );
  }
}
