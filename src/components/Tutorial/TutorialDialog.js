import React, { Component } from "react";

import "./TutorialDialog.css";
import { MdClear } from "react-icons/md"; 
import { IoMdArrowForward } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";

const SMALL_ICON_SIZE = 25;
const MEDIUM_ICON_SIZE = 30;
const LARGE_ICON_SIZE = 40;
const LARGE_BREAK_POINT = 1200;
const MEDIUM_BREAK_POINT = 600;
const LARGE_IMG_SIZE = 200;
const MEDIUM_IMG_SIZE = 150;
const SMALL_IMG_SIZE = 100;

export default class TutorialDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({windowWidth: window.innerWidth});
    });
  }

  onWindowResize() {

  }

  render() {
    const {title, gifPath, gifAlt, text, curPageNumber, totalPageNumber, showPrev, showNext} = this.props;
    const {windowWidth} = this.state;
    const iconSize = windowWidth > LARGE_BREAK_POINT 
    ? LARGE_ICON_SIZE : windowWidth > MEDIUM_BREAK_POINT 
    ? MEDIUM_ICON_SIZE : SMALL_ICON_SIZE;

    const imgSize = windowWidth > LARGE_BREAK_POINT 
    ? LARGE_IMG_SIZE : windowWidth > MEDIUM_BREAK_POINT  
    ? MEDIUM_IMG_SIZE : SMALL_IMG_SIZE;


    const prevButtonRender = showPrev ?  
    <div id="back" onClick={this.props.decrementPage}><IoMdArrowBack size={iconSize}></IoMdArrowBack></div>
    : '';

    const nextButtonRender = showNext ?  
    <div id="next" onClick={this.props.incrementPage}><IoMdArrowForward size={iconSize}></IoMdArrowForward></div>
    : '';

    const imgRender = gifPath ? 
    <img
            src={require(`./../../gifs/${gifPath}.gif`)}
            alt={gifAlt}
            width={imgSize}
            height={imgSize}
    ></img> : ''

    const extraRender = curPageNumber === 12 ? 
    <p className="paragraph">
          This repo can be found at:&nbsp;
          <a
            href="https://github.com/MilanFatschel/Pathfinder_Simulator/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Link
          </a>
          <br></br> Contact: Milan.Fatschel@gmail.com
    </p>
    : '';


    return (
      <div className="tutorial">
        <div className="header">
          <div className="title">{title}</div>
          <div id="exit" onClick={this.props.skip}><MdClear size={iconSize}></MdClear></div>
        </div>
        <div className="body">
          {imgRender}
          <p>{text}</p> 
          {extraRender}
        </div>
        <div className="footer">
        {prevButtonRender}
        <div id="pages">{curPageNumber}/{totalPageNumber}</div>
        {nextButtonRender}
        </div>
      </div>
    );
  }
}
