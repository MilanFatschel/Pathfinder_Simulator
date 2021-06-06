import React, { Component } from "react";
import AboutStructuresData from "../../data/About-Structures-Data";
import SimpleDialog from "../SimpleDialog/SimpleDialog";

export default class AboutStructuresDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const dialogData = AboutStructuresData.getData(this.props.structure);
   
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
