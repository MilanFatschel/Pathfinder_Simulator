import React, { Component } from "react";
import TutorialDialog from "./TutorialDialog";
import TutorialData from "./../../data/Tutorial-Data"

export default class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curPageNumber: 1,
      totalPageNumber: 12
    };
    this.incrementPage = this.incrementPage.bind(this);
    this.decrementPage = this.decrementPage.bind(this);
    this.skip = this.skip.bind(this);
  }

  incrementPage() {
    const newPageNumber = this.state.curPageNumber + 1;
    this.setState({ curPageNumber: newPageNumber });
  }

  decrementPage() {
    const newPageNumber = this.state.curPageNumber - 1;
    this.setState({ curPageNumber: newPageNumber });
  }

  skip() {
    const newPageNumber = 1;
    this.setState({ curPageNumber: newPageNumber });
    this.props.closeTutorial();
  }

  render() {
    var { curPageNumber, totalPageNumber } = this.state;;
    const {title, gifPath, gifAlt, text, showNext, showPrev} = TutorialData.dataMap[curPageNumber - 1];

    return (
      <TutorialDialog
        title={title}
        gifPath={gifPath}
        gifAlt={gifAlt}
        text={text}
        showNext={showNext}
        showPrev={showPrev}
        curPageNumber={curPageNumber}
        totalPageNumber={totalPageNumber}
        incrementPage={this.incrementPage}
        decrementPage={this.decrementPage}
        skip={this.skip}>
      </TutorialDialog>
    );
  }
}
