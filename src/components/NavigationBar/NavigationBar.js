import React, { Component } from "react";

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.addEventListener("click", this.handleNavBarClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleNavBarClick, false);
  }

  handleNavBarClick = (e) => {
    if (!this.node.contains(e.target)) {
      this.setState({ activeDropDown: null });
    }
  };

  // Drop Down Menu Toggles
  showDropdown(e, dropdown) {
    e.preventDefault();
    if (dropdown === "algorithm") this.setState({ activeDropDown: "algorithm" });
    else if (dropdown === "speed") this.setState({ activeDropDown: "speed" });
    else if (dropdown === "aboutAlgo")
      this.setState({ activeDropDown: "aboutAlgo" });
    else if (dropdown === "aboutStruct")
      this.setState({ activeDropDown: "aboutStruct" });
  }

  render() {
    const {
      tutorialEnabled,
      mouseHold,
      aboutAlgorithmEnabled,
      aboutDataStructureEnabled,
    } = this.props;

    // Navbar enababled/disabled
    const classNavBarLink =
      tutorialEnabled || mouseHold || aboutAlgorithmEnabled || aboutDataStructureEnabled
        ? "nav-link disabled dropdown-toggle"
        : "nav-link dropdown-toggle";

    const classNavButton =
      tutorialEnabled || mouseHold || aboutAlgorithmEnabled || aboutDataStructureEnabled
        ? "nav-link disabled"
        : "nav-link";

    // Algorithm Drop Down
    const classAlgoDropdownMenu =
      "dropdown-menu" +
      (this.state.activeDropDown === "algorithm" ? " show" : "");
    const classAstarActive =
      "dropdown-item" + (this.props.activeAlgorithm === "A*" ? " active" : "");
    const classDijkstraActive =
      "dropdown-item" +
      (this.props.activeAlgorithm === "Dijkstra" ? " active" : "");
    const classGBFActive =
      "dropdown-item" + (this.props.activeAlgorithm === "GBF" ? " active" : "");
    const classBFSActive =
      "dropdown-item" + (this.props.activeAlgorithm === "BFS" ? " active" : "");
    const classDFSActive =
      "dropdown-item" + (this.props.activeAlgorithm === "DFS" ? " active" : "");

    // Speed Adjustment Dropdown
    const classSpeedDropdownMenu =
      "dropdown-menu" + (this.state.activeDropDown === "speed" ? " show" : "");
    const classSpeed25Active =
      "dropdown-item" + (this.props.simulatorSpeed === 0.25 ? " active" : "");
    const classSpeed50Active =
      "dropdown-item" + (this.props.simulatorSpeed === 0.5 ? " active" : "");
    const classSpeed75Active =
      "dropdown-item" + (this.props.simulatorSpeed === 0.75 ? " active" : "");
    const classSpeed100Active =
      "dropdown-item" + (this.props.simulatorSpeed === 1.0 ? " active" : "");
    const classSpeed200Active =
      "dropdown-item" + (this.props.simulatorSpeed === 2.0 ? " active" : "");
    const classSpeed400Active =
      "dropdown-item" + (this.props.simulatorSpeed === 4.0 ? " active" : "");
    // End Speed Dropdown

    // About Algorithms Dropdown
    const classAboutAlgoDropdownMenu =
      "dropdown-menu" +
      (this.state.activeDropDown === "aboutAlgo" ? " show" : "");

    // About Data Structures Structures DropDown
    const classAboutStructDropdownMenu =
      "dropdown-menu" +
      (this.state.activeDropDown === "aboutStruct" ? " show" : "");

    return (
      <div ref={(node) => (this.node = node)}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark"  style={{userSelect: 'none'}}>
          <a className="navbar-brand" href="/Pathfinder_Simulator">
            Pathfinder Simulator
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a
                  className={classNavBarLink}
                  href="/#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={(e) => {
                    this.showDropdown(e, "algorithm");
                  }}
                >
                  Choose Algorithm: {this.props.activeAlgorithm}
                </a>
                <div
                  className={classAlgoDropdownMenu}
                  style={{cursor: "pointer"}}
                  aria-labelledby="navbarDropdown"
                >
                  <a
                    className={classAstarActive}
                    style={{cursor: "pointer"}}
                    onClick={(e) => {
                      this.props.onClickAlgorithm(e, "A*");
                      this.setState({ activeDropDown: null });
                    }}
                  >
                    A*
                  </a>
                  <a
                    className={classDijkstraActive}
                    style={{cursor: "pointer"}}
                    onClick={(e) => {
                      this.props.onClickAlgorithm(e, "Dijkstra");
                      this.setState({ activeDropDown: null });
                    }}
                  >
                    Dijkstra
                  </a>
                  <a
                    className={classGBFActive}
                    style={{cursor: "pointer"}}
                    onClick={(e) => {
                      this.props.onClickAlgorithm(e, "GBF");
                      this.setState({ activeDropDown: null });
                    }}
                  >
                    Greedy-Best-First
                  </a>
                  <a
                    className={classBFSActive}
                    style={{cursor: "pointer"}}
                    onClick={(e) => {
                      this.props.onClickAlgorithm(e, "BFS");
                      this.setState({ activeDropDown: null });
                    }}
                  >
                    Breadth-First-Search
                  </a>
                  <a
                    className={classDFSActive}
                    style={{cursor: "pointer"}}
                    onClick={(e) => {
                      this.props.onClickAlgorithm(e, "DFS");
                      this.setState({ activeDropDown: null });
                    }}
                  >
                    Depth-First-Search
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={classNavBarLink}
                  style={{cursor: "pointer"}}
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={(e) => {
                    this.showDropdown(e, "speed");
                  }}
                >
                  Adjust Simulation Speed: {this.props.simulatorSpeed * 100}%
                </a>
                <div
                  className={classSpeedDropdownMenu}
                  aria-labelledby="navbarDropdown"
                >
                  <a
                    className={classSpeed25Active}
                    style={{cursor: "pointer"}}
                    onClick={(e) => {
                      this.props.onClickSpeed(e, 0.25);
                      this.setState({ activeDropDown: null });
                    }}
                  >
                    25%
                  </a>
                  <a
                    className={classSpeed50Active}
                    style={{cursor: "pointer"}}
                    onClick={(e) => {
                      this.props.onClickSpeed(e, 0.5);
                      this.setState({ activeDropDown: null });
                    }}
                  >
                    50%
                  </a>
                  <a
                    className={classSpeed75Active}
                    style={{cursor: "pointer"}}
                    onClick={(e) => {
                      this.props.onClickSpeed(e, 0.75);
                      this.setState({ activeDropDown: null });
                    }}
                  >
                    75%
                  </a>
                  <a
                    className={classSpeed100Active}
                    style={{cursor: "pointer"}}
                    onClick={(e) => {
                      this.props.onClickSpeed(e, 1.0);
                      this.setState({ activeDropDown: null });
                    }}
                  >
                    100%
                  </a>
                  <a
                    className={classSpeed200Active}
                    style={{cursor: "pointer"}}
                    onClick={(e) => {
                      this.props.onClickSpeed(e, 2.0);
                      this.setState({ activeDropDown: null });
                    }}
                  >
                    200%
                  </a>
                  <a
                    className={classSpeed400Active}
                    style={{cursor: "pointer"}}
                    onClick={(e) => {
                      this.props.onClickSpeed(e, 4.0);
                      this.setState({ activeDropDown: null });
                    }}
                  >
                    400%
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={classNavBarLink}
                  style={{cursor: "pointer"}}
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={(e) => {
                    this.showDropdown(e, "aboutAlgo");
                  }}
                >
                  About Pathfinding Algorithms
                </a>
                <div
                  className={classAboutAlgoDropdownMenu}
                  aria-labelledby="navbarDropdown"
                >
                  <a
                    className="dropdown-item"
                    style={{cursor: "pointer"}}
                    onClick={() => {
                      this.props.onClickAboutAlgorithm("A*");
                      this.setState({ activeDropDown: null });
                    }}
                  >
                    A*
                  </a>
                  <a
                    className="dropdown-item"
                    style={{cursor: "pointer"}}
                    onClick={() => {
                      this.props.onClickAboutAlgorithm("Dijkstra");
                      this.setState({ activeDropDown: null });
                    }}
                  >
                    Dijkstra
                  </a>
                  <a
                    className="dropdown-item"
                    style={{cursor: "pointer"}}
                    onClick={() => {
                      this.props.onClickAboutAlgorithm("GBF");
                      this.setState({ activeDropDown: null });
                    }}
                  >
                    Greedy-Best-First
                  </a>
                  <a
                    className="dropdown-item"
                    style={{cursor: "pointer"}}
                    onClick={() => {
                      this.props.onClickAboutAlgorithm("BFS");
                      this.setState({ activeDropDown: null });
                    }}
                  >
                    Breadth-First-Search
                  </a>
                  <a
                    className="dropdown-item"
                    style={{cursor: "pointer"}}
                    onClick={() => {
                      this.props.onClickAboutAlgorithm("DFS");
                      this.setState({ activeDropDown: null });
                    }}
                  >
                    Depth-First-Search
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={classNavBarLink}
                  style={{cursor: "pointer"}}
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={(e) => {
                    this.showDropdown(e, "aboutStruct");
                  }}
                >
                  About Pathfinding Data Structures
                </a>
                <div
                  className={classAboutStructDropdownMenu}
                  aria-labelledby="navbarDropdown"
                >
                  <a
                    className="dropdown-item"
                    style={{cursor: "pointer"}}
                    onClick={() => {
                      this.props.onClickAboutDataStructure("Stack");
                      this.setState({ activeDropDown: null });
                    }}
                  >
                    Stack
                  </a>
                  <a
                    className="dropdown-item"
                    style={{cursor: "pointer"}}
                    onClick={() => {
                      this.props.onClickAboutDataStructure("Queue");
                      this.setState({ activeDropDown: null });
                    }}
                  >
                    Queue
                  </a>
                  <a
                    className="dropdown-item"
                    style={{cursor: "pointer"}}
                    onClick={() => {
                      this.props.onClickAboutDataStructure("Heap");
                      this.setState({ activeDropDown: null });
                    }}
                  >
                    Heap
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className={classNavButton}
                  style={{cursor: "pointer"}}
                  onClick={(e) => {
                    this.props.createTutorialEvent();
                    this.setState({ activeDropDown: null });
                  }}
                >
                  Instructions <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
