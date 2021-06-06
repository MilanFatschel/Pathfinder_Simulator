import React, { Component } from "react";
import Node from "./../Node/Node";
import "./Display.css";
import { astar } from "../../algorithms/Astar";
import { dijkstra } from "../../algorithms/Dijkstra";
import { greedybestfirst } from "../../algorithms/GreedyBestFirst";
import { bfs } from "../../algorithms/BFS";
import { dfs } from "../../algorithms/DFS";
import ActionBar from "../ActionBar/ActionBar";

// Constants
const GRID_ROW_LENGTH_LARGE = 25;
const GRID_COL_LENGTH_LARGE = 50;
const GRID_ROW_LENGTH_MEDIUM = 25;
const GRID_COL_LENGTH_MEDIUM =  30;
const GRID_ROW_LENGTH_SMALL = 10;
const GRID_COL_LENGTH_SMALL = 10;
const GRID_ROW_LENGTH_MOBILE = 18;
const GRID_COL_LENGTH_MOBILE = 7;
const SIMULATION_SPEED = 50;

// Break Points 
const LARGE_BREAK_POINT = 1600;
const MEDIUM_BREAK_POINT = 1000;
const SMALL_BREAK_POINT = 425;
var timeouts = [];

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      startNode: {},
      endNode: {},
      startCancelPos: {},
      endCancelPos: {},
      mouseIsPressed: false,
      mouseHoldsStart: false,
      mouseHoldsEnd: false,
      disableClicking: false,
      tutorialEnabled: false,
    };
  }

  componentDidMount() {
    // For checking window size
    window.addEventListener("resize", this.onWindowResize.bind(this));
    const grid = this.createGridBasedOnWindowSize(window.innerWidth);
    this.setState({ 
      grid
     });
  }

  onWindowResize() {
    // Check Break Points and create a new grid if so 
    this.resetGridStyles(this.state.grid);
    this.cancelTimeouts();
    const grid = this.createGridBasedOnWindowSize(window.innerWidth);
    this.setState({ 
      grid,
      mouseIsPressed: false,
      mouseHoldsStart: false,
      mouseHoldsEnd: false,
      disableClicking: false,
     });
  }

  onTutorialEnabled() {
    this.setState({ disableClicking: true });
  }

  onTutorialDisabled() {
    this.setState({ disableClicking: false });
  }

  handleMouseDown(row, col, windowIsOpened) {
    const {
      grid,
      startNode,
      endNode,
      disableClicking,
      mouseHoldsStart,
      mouseHoldsEnd,
    } = this.state;

    // Alogrithm/tutorial in progress don't allow clicking
    if (disableClicking || windowIsOpened || mouseHoldsStart || mouseHoldsEnd) return;
    // Check to see if the mouse clicked on the start
    // or end point
    if (row === startNode.row && col === startNode.col) {
      this.setState({
        mouseIsPressed: true,
        mouseHoldsStart: true,
        savedGrid: grid,
        startCancelPos: { row: row, col: col },
      });
      this.props.mouseHoldOnEvent();
    } else if (row === endNode.row && col === endNode.col) {
      this.setState({
        mouseIsPressed: true,
        mouseHoldsEnd: true,
        endCancelPos: { row: row, col: col },
      });
      this.props.mouseHoldOnEvent();
    } else {
      const newGrid = getNewGridWithToggledObstacle(this.state.grid, row, col);
      this.setState({ grid: newGrid, mouseIsPressed: true });
    }
  }

  handleMouseUp(row, col) {
    // Check to see if the grid spot is already occupied
    // if so cancel

    // If the user releases the start or end on a grid
    // set the start on that grid
    const { grid, mouseHoldsStart, mouseHoldsEnd, startCancelPos, endCancelPos} = this.state;
    const {
      tutorialEnabled,
      aboutAlgorithmEnabled,
      aboutDataStructureEnabled,
    } = this.props;
    const currentNode = grid[row][col];

    // Dont allow dropping on tutorial - edge case
    if(tutorialEnabled || aboutAlgorithmEnabled || aboutDataStructureEnabled) return;

    if (mouseHoldsStart) {
      // Check to see if the grid spot is already occupied
      // if so cancel
      if (currentNode.isEndNode || currentNode.isObstacle) {
        const newGrid = getNewGridWithNewStart(
          grid,
          startCancelPos.row,
          startCancelPos.col
        );
        this.setState({
          mouseHoldsStart: false,
          mouseHoldsEnd: false,
          mouseIsPressed: false,
          grid: newGrid,
          startNode: grid[startCancelPos.row][startCancelPos.col],
        });
        this.props.mouseHoldOffEvent();
        return;
      }
      this.setState({ startNode: currentNode });
    } else if (mouseHoldsEnd) {
      if (currentNode.isStartNode || currentNode.isObstacle) {
        const newGrid = getNewGridWithNewEnd(
          this.state.grid,
          endCancelPos.row,
          endCancelPos.col
        );
        this.setState({
          mouseHoldsStart: false,
          mouseHoldsEnd: false,
          mouseIsPressed: false,
          grid: newGrid,
          endNode: grid[endCancelPos.row][endCancelPos.col],
        });
        this.props.mouseHoldOffEvent();
        return;
      }
      this.setState({ endNode: currentNode });
    }

    this.setState({
      mouseHoldsStart: false,
      mouseHoldsEnd: false,
      mouseIsPressed: false,
    });
    this.props.mouseHoldOffEvent();
  }

  handleMouseOut(row, col) {
    // If the mouse isn't held down do not do anything here
    if (!this.state.mouseIsPressed) return;

    const { grid } = this.state;

    if (this.state.mouseHoldsStart) {
      if (grid[row][col].isEndNode || grid[row][col].isObstacle) return;
      const newGrid = getNewGridWithNewStart(this.state.grid, row, col);
      this.setState({ grid: newGrid });
    }
    if (this.state.mouseHoldsEnd) {
      if (grid[row][col].isStartNode || grid[row][col].isObstacle) return;
      const newGrid = getNewGridWithNewEnd(this.state.grid, row, col);
      this.setState({ grid: newGrid });
    }
  }

  handleMouseEnter(row, col) {
    // If the mouse isn't held down do not do anything here
    if (!this.state.mouseIsPressed) return;

    const { grid } = this.state;

    // If we enter a new grid with the start held, generate a new start
    if (this.state.mouseHoldsStart) {
      if (grid[row][col].isEndNode || grid[row][col].isObstacle) return;
      const newGrid = getNewGridWithNewStart(this.state.grid, row, col);
      this.setState({ grid: newGrid });
    }
    // If we enter a new grid with the end held, generate a new end
    else if (this.state.mouseHoldsEnd) {
      if (grid[row][col].isStartNode || grid[row][col].isObstacle) return;
      const newGrid = getNewGridWithNewEnd(this.state.grid, row, col);
      this.setState({ grid: newGrid });
    }
    // Toogle the obstacles
    else {
      if (grid[row][col].isStartNode || grid[row][col].isEndNode) return;
      const newGrid = getNewGridWithToggledObstacle(this.state.grid, row, col);
      this.setState({ grid: newGrid });
    }
  }

  animateNodeList(visitedNodesInOrder, shortestPathInOrder) {
    const speed = SIMULATION_SPEED / (this.props.simulatorSpeed * 5);

    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      // If there is a solution, animate it
      // If not skip it and just animate the visited nodes
      if (i === visitedNodesInOrder.length) {
        timeouts.push(
          setTimeout(() => {
            this.animateShortestPath(shortestPathInOrder);
          }, speed * i)
        );
        return;
      }
      timeouts.push(
        setTimeout(() => {
          const node = visitedNodesInOrder[i];
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-visited";
        }, speed * i)
      );
    }
  }

  animateShortestPath(shortestPathInOrder) {
    for (let i = 0; i < shortestPathInOrder.length; i++) {
      timeouts.push(
        setTimeout(() => {
          const node = shortestPathInOrder[i];
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-shortest-path";
        }, 40 * i)
      );
    }
  }

  cancelTimeouts() {
    for (let i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
    timeouts = [];
  }

  resetGridStyles(grid) {
    const rowLength = grid.length;
    const colLength = grid[0].length

    this.setState({ cancelSearch: true });

    for (let row = 0; row < rowLength; row++) {
      for (let col = 0; col < colLength; col++) {
        const node = grid[row][col];
        if (!node.isStartNode && !node.isEndNode) {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node";
        }
      }
    }
  }

  createGridBasedOnWindowSize(width) {
    const startPos = { row: 0, col: 0 };
  
    if(width >= LARGE_BREAK_POINT) {
      const endPos = { row: GRID_ROW_LENGTH_LARGE - 1, col: GRID_COL_LENGTH_LARGE - 1};
      return this.createGrid(startPos, endPos, GRID_ROW_LENGTH_LARGE, GRID_COL_LENGTH_LARGE);
    } else if(width < LARGE_BREAK_POINT && width >= MEDIUM_BREAK_POINT) {
      const endPos = { row: GRID_ROW_LENGTH_MEDIUM - 1, col: GRID_COL_LENGTH_MEDIUM - 1};
      return this.createGrid(startPos, endPos, GRID_ROW_LENGTH_MEDIUM, GRID_COL_LENGTH_MEDIUM);
    } else if(width < MEDIUM_BREAK_POINT && width >= SMALL_BREAK_POINT) {
      const endPos = { row: GRID_ROW_LENGTH_SMALL - 1, col: GRID_COL_LENGTH_SMALL - 1};
      return this.createGrid(startPos, endPos, GRID_ROW_LENGTH_SMALL, GRID_COL_LENGTH_SMALL);
    } else {
      const endPos = { row: GRID_ROW_LENGTH_MOBILE - 1, col: GRID_COL_LENGTH_MOBILE - 1};
        return this.createGrid(startPos, endPos, GRID_ROW_LENGTH_MOBILE, GRID_COL_LENGTH_MOBILE);
    }
  }

  createGrid(startPos, endPos, rowLength, colLength) {
    // Create a new grid which holds nodes
    const grid = [];
    for (let row = 0; row < rowLength; row++) {
      const currentRow = [];
      for (let col = 0; col < colLength; col++) {
        const newNode = createNewNode(row, col);
        // If the position is at the designated start
        // or end, add the start and node to that cell
        if (row === startPos.row && col === startPos.col) {
          newNode.isStartNode = true;
          this.setState({ startNode: newNode });
        }
        if (row === endPos.row && col === endPos.col) {
          newNode.isEndNode = true;
          this.setState({ endNode: newNode });
        }

        currentRow.push(newNode);
      }
      grid.push(currentRow);
    }

    return grid;
  }

  randomizeObstacles() {
    const { startNode, endNode, grid } = this.state;

    const startPos = {
      row: startNode.row,
      col: startNode.col,
    };
    const endPos = {
      row: endNode.row,
      col: endNode.col,
    };

    const rowLength = grid.length;
    const colLength = grid[0].length

    const newGrid = this.createGrid(startPos, endPos, rowLength, colLength);

    for (let row = 0; row < rowLength; row++) {
      for (let col = 0; col < colLength; col++) {
        if (
          (startPos.row === row && startPos.col === col) ||
          (endPos.row === row && endPos.col === col)
        ) {
          continue;
        }
        var randomNum = Math.floor(Math.random() * 10 + 1);
        if (randomNum <= 3) {
          const node = newGrid[row][col];
          node.isObstacle = true;
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-obstacle";
        }
      }
    }
    this.setState({ grid: newGrid, disableClicking: false });
  }

  resetPath() {
    const { grid, startNode, endNode } = this.state;
    const startPos = {
      row: startNode.row,
      col: startNode.col,
    };
    const endPos = {
      row: endNode.row,
      col: endNode.col,
    };

    const rowLength = grid.length;
    const colLength = grid[0].length

    const newGrid = this.createGrid(startPos, endPos, rowLength, colLength);

    for (let row = 0; row < rowLength; row++) {
      for (let col = 0; col < colLength; col++) {
        const node = newGrid[row][col];
        node.isObstacle = grid[row][col].isObstacle;
        if (node.isObstacle) {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-obstacle";
        }
      }
    }

    this.setState({ grid: newGrid, disableClicking: false });
  }

  visualizeAlgorithm(grid, startNode, endNode) {
    this.setState({ disableClicking: true, cancelSearch: false });
    // Grab our values and call the animate function for visualization
    const { activeAlgorithm } = this.props;
    var visitedNodesInOrder = []

    if (activeAlgorithm === "A*")
      visitedNodesInOrder = astar(grid, startNode, endNode);
    else if (activeAlgorithm === "Dijkstra")
      visitedNodesInOrder = dijkstra(grid, startNode, endNode);
    else if (activeAlgorithm === "GBF")
      visitedNodesInOrder = greedybestfirst(grid, startNode, endNode);
    else if (activeAlgorithm === "BFS")
      visitedNodesInOrder = bfs(grid, startNode, endNode);
    else if (activeAlgorithm === "DFS")
      visitedNodesInOrder = dfs(grid, startNode, endNode);

    const shortestPathInOrder = getResultPath(endNode);
    this.animateNodeList(visitedNodesInOrder, shortestPathInOrder);
  }

  resetObstacles() {
    this.setState({ cancelSearch: true });
    const { startNode, endNode, grid } = this.state;

    const newGrid = this.createGrid(startNode, endNode, grid.length, grid[0].length);
    const newStart = newGrid[startNode.row][startNode.col];
    const newEnd = newGrid[endNode.row][endNode.col];
    newStart.isStartNode = true;
    newEnd.isEndNode = true;
    this.setState({
      startNode: newStart,
      endNode: newEnd,
      grid: newGrid,
      disableClicking: false,
    });
    this.resetGridStyles(newGrid);
  }

  render() {
    const {
      grid,
      mouseIsPressed,
      startNode,
      endNode,
      disableClicking,
      mouseHoldsStart,
      mouseHoldsEnd
    } = this.state;

    const {
      tutorialEnabled,
      aboutAlgorithmEnabled,
      aboutDataStructureEnabled,
    } = this.props;

    const windowIsOpened =
      tutorialEnabled || aboutAlgorithmEnabled || aboutDataStructureEnabled;
   
    
    return (
      <>
        <ActionBar 
        onPlayClick={() => this.visualizeAlgorithm(grid, startNode, endNode)}
        onResetPathClick={() => {
          this.cancelTimeouts();
          this.resetGridStyles(grid); 
          this.resetPath();
        }}
        onResetObstaclesClick={() => {
          this.cancelTimeouts();
          this.resetGridStyles(grid);
          this.resetObstacles()
        }}
        onRandomizeClick={() => {
          this.cancelTimeouts();
          this.resetGridStyles(grid);
          this.randomizeObstacles();
        }}
        disablePlay={disableClicking || windowIsOpened || mouseHoldsStart || mouseHoldsEnd}
        disableOthers = {windowIsOpened || mouseHoldsStart || mouseHoldsEnd}
        > 
        </ActionBar>
        <div className="grid">
          {grid.map((row, rowId) => {
            return (
              <div key={rowId}>
                {row.map((node, nodeId) => {
                  const { row, col, isStartNode, isEndNode, isObstacle } = node;
                  return (
                    <Node
                      key={nodeId}
                      row={row}
                      col={col}
                      isStartNode={isStartNode}
                      isEndNode={isEndNode}
                      isObstacle={isObstacle}
                      mouseIsPressed={mouseIsPressed}
                      onMouseOut={(row, col) => this.handleMouseOut(row, col)}
                      onMouseDown={(row, col) =>
                        this.handleMouseDown(row, col, windowIsOpened)
                      }
                      onMouseEnter={(row, col) =>
                        this.handleMouseEnter(row, col)
                      }
                      onMouseUp={(row, col) => this.handleMouseUp(row, col)}
                    ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

const createNewNode = (row, col) => {
  // Create a new node
  const newNode = {
    row,
    col,
    g: Infinity,
    h: Infinity,
    isStartNode: false,
    isEndNode: false,
    isVisited: false,
    isObstacle: false,
    neighborNodes: [],
    parentNode: null,
  };

  return newNode;
};

const getNewGridWithToggledObstacle = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isObstacle: !node.isObstacle,
  };
  newGrid[row][col] = newNode;

  return newGrid;
};

const getNewGridWithNewStart = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isStartNode: !node.isStartNode,
  };
  newGrid[row][col] = newNode;

  return newGrid;
};

const getNewGridWithNewEnd = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isEndNode: !node.isEndNode,
  };
  newGrid[row][col] = newNode;

  return newGrid;
};

const getResultPath = (endNode) => {
  // Check to see if there is a path
  // if not just return an empty array
  if (endNode.parentNode === null) return [];

  // Get the shortest path by backtracking
  // each node
  const shortestPathInOrder = [];
  let scanningNode = endNode.parentNode;

  while (scanningNode.parentNode) {
    shortestPathInOrder.push(scanningNode);
    scanningNode = scanningNode.parentNode;
  }

  return shortestPathInOrder;
};

