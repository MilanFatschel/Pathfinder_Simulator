import Queue from "../structures/Queue";

// BFS Algorithm
// Returns list of nodes that have been visited, and
// each of the nodes' parent node which will be used
// for creating our final shortest path

export function bfs(grid, startNode, endNode) {
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
  var nodeQueue = new Queue();
  nodeQueue.push(startNode);

  // BFS algorithm starts here....
  while (!nodeQueue.isEmpty()) {
    // Check to see if the next node in the queue is visited or the end node.
    // If so remove it, we do not need to check it
    while (!nodeQueue.isEmpty() && nodeQueue.front().isVisited) {
      nodeQueue.pop();
    }

    // Make sure our queue is not empty
    if (!nodeQueue.isEmpty()) {
      // Mark current node as visited, add to visited array
      const currentNode = nodeQueue.front();
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
          // Only update the parent if is has no parent yet, since
          // BFS works in wave frontes we do not want to update
          if (!nodeNeighbor.parentNode) nodeNeighbor.parentNode = currentNode;
          nodeQueue.push(nodeNeighbor);

          // If a node neighbor is the end node
          // we are finished
          if (nodeNeighbor === endNode) return visitedNodes;
        }
      }
    } else {
      // No solution, show the visited nodes
      return visitedNodes;
    }
  }
}

const addNeighborNodes = (grid) => {
  // Adds each neighbor node in the grid.
  // Have to make sure we do not run out of bounds

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i < grid.length - 1) {
        grid[i][j].neighborNodes.push(grid[i + 1][j]);
      }
      if (i > 0) {
        grid[i][j].neighborNodes.push(grid[i - 1][j]);
      }
      if (j < grid[i].length - 1) {
        grid[i][j].neighborNodes.push(grid[i][j + 1]);
      }
      if (j > 0) {
        grid[i][j].neighborNodes.push(grid[i][j - 1]);
      }
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
    }
  }
};
