import Stack from "../structures/Stack";

// DFS Algorithm
// Returns list of nodes that have been visited, and
// each of the nodes' parent node which will be used
// for creating our final path (Not necessarly shortest)

export function dfs(grid, startNode, endNode) {
  // Inital check on our parameters
  if (!startNode || !endNode || startNode === endNode) {
    return false;
  }

  // Add each nodes' neighbors before
  // starting
  addNeighborNodes(grid);

  // Create visited array for visualization
  const visitedNodes = [];

  // Create a new queue to keep track of BFS
  var nodeStack = new Stack();
  nodeStack.push(startNode);

  // DFS algorithm starts here....
  while (!nodeStack.isEmpty()) {
    // Check to see if the next node in the queue is visited or the end node.
    // If so remove it, we do not need to check it
    while (!nodeStack.isEmpty() && nodeStack.top().isVisited) {
      nodeStack.pop();
    }

    // Make sure our queue is not empty
    if (!nodeStack.isEmpty()) {
      // Mark current node as visited, add to visited array
      const currentNode = nodeStack.top();
      currentNode.isVisited = true;

      // push nodes visited into list for rendering
      // keep start and end nodes out of list
      if (currentNode !== startNode && currentNode !== endNode)
        visitedNodes.push(currentNode);

      for (var i = 0; i < currentNode.neighborNodes.length; i++) {
        // Get current neighbor being scanned
        var nodeNeighbor = currentNode.neighborNodes[i];

        // If the node neighbor has not been visited and is not an
        // obstacle, add the current node as a parent
        // and  add it to the node list
        if (!nodeNeighbor.isVisited && !nodeNeighbor.isObstacle) {
          // Only update the parent if is has no parent yet
          nodeNeighbor.parentNode = currentNode;
          nodeStack.push(nodeNeighbor);

          // If a node neighbor is the end node
          // we are finished
          if (nodeNeighbor === endNode) return visitedNodes;
        }
      }
    } else {
      // No solution, show the visted nodes
      return visitedNodes;
    }
  }
}

const addNeighborNodes = (grid) => {
  // Adds each neighbor node in the grid.
  // Have to make sure we do not run out of bounds

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i > 0 && j > 0) {
        grid[i][j].neighborNodes.push(grid[i - 1][j - 1]);
      }
      if (i < grid.length - 1 && j > 0) {
        grid[i][j].neighborNodes.push(grid[i + 1][j - 1]);
      }
      if (i > 0 && j < grid[i].length - 1) {
        grid[i][j].neighborNodes.push(grid[i - 1][j + 1]);
      }
      if (i < grid.length - 1 && j < grid[i].length - 1) {
        grid[i][j].neighborNodes.push(grid[i + 1][j + 1]);
      }
      if (i < grid.length - 1) {
        grid[i][j].neighborNodes.push(grid[i + 1][j]);
      }
      if (j < grid[i].length - 1) {
        grid[i][j].neighborNodes.push(grid[i][j + 1]);
      }
      if (i > 0) {
        grid[i][j].neighborNodes.push(grid[i - 1][j]);
      }
      if (j > 0) {
        grid[i][j].neighborNodes.push(grid[i][j - 1]);
      }
    }
  }
};
