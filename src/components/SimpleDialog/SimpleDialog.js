import React, { Component } from "react";

import "./SimpleDialog.css";
import { MdClear } from "react-icons/md"; 

const SMALL_ICON_SIZE = 25;
const MEDIUM_ICON_SIZE = 30;
const LARGE_ICON_SIZE = 40;
const LARGE_BREAK_POINT = 1200;
const MEDIUM_BREAK_POINT = 600;
const LARGE_IMG_SIZE = 200;
const MEDIUM_IMG_SIZE = 150;
const SMALL_IMG_SIZE = 100;

export default class SimpleDialog extends Component {
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
    const {title, gifPath, gifAlt, text, link } = this.props;
    const {windowWidth} = this.state;
    const iconSize = windowWidth > LARGE_BREAK_POINT 
    ? LARGE_ICON_SIZE : windowWidth > MEDIUM_BREAK_POINT 
    ? MEDIUM_ICON_SIZE : SMALL_ICON_SIZE;

    const imgSize = windowWidth > LARGE_BREAK_POINT 
    ? LARGE_IMG_SIZE : windowWidth > MEDIUM_BREAK_POINT  
    ? MEDIUM_IMG_SIZE : SMALL_IMG_SIZE;

    const imgRender = gifPath ? 
    <img
            src={require(`./../../gifs/${gifPath}.gif`)}
            alt={gifAlt}
            width={imgSize}
            height={imgSize}
    ></img> : ''
    
    return (
      <div className="simple">
        <div className="header">
          <div className="title">{title}</div>
          <div id="exit" onClick={this.props.skip}><MdClear size={iconSize}></MdClear></div>
        </div>
        <div className="body">
          {imgRender}
          <p>{text}</p> 
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >Github Link</a>
        </div>
      </div>
    );
  }
}
 