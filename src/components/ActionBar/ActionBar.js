import React, { Component } from "react";
import { FiPlay } from "react-icons/fi"
import { BiReset } from "react-icons/bi"
import { FaRandom } from "react-icons/fa"
import { VscDebugRestartFrame } from "react-icons/vsc"

import "./ActionBar.css";

export default class ActionBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  playClickedHandler = () => {
    if(this.props.disablePlay) return;
    this.props.onPlayClick();
  }

  resetPathClickHandler = () => {
    if(this.props.disableOthers) return;
    this.props.onResetPathClick();
  }

  resetObstaclesClickHandler = () => {
    if(this.props.disableOthers) return;
    this.props.onResetObstaclesClick();
  }

  randomizeClickHandler = () => {
    if(this.props.disableOthers) return;
    this.props.onRandomizeClick();
  }


  render() {

    const {disablePlay, disableOthers} = this.props;

    // Conditional Renders
    const disableClass = disablePlay ? "disable" : "";
    const disableOthersClass = disableOthers ? "disable" : "";

    return (
      <div className="action-bar-container">
          <div className={disableClass} onClick={this.playClickedHandler}> <FiPlay size={32}></FiPlay> <span>Simulate</span></div>
          <div className={disableOthersClass}onClick={this.resetPathClickHandler}><VscDebugRestartFrame size={32}></VscDebugRestartFrame><span>Reset Path</span></div>
          <div className={disableOthersClass} onClick={this.resetObstaclesClickHandler}><BiReset size={32}></BiReset><span>Reset Obstacles</span></div>
          <div className={disableOthersClass} style={{'borderRight': 'none'}} onClick={this.randomizeClickHandler}><FaRandom size={32}></FaRandom><span>Randomize</span></div>
      </div>
    );
  }
}