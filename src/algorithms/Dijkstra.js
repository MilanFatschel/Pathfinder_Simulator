import Heap from "heap-js";
// Dijkstra's Algorithm
// Returns list of nodes that have been visited, and
// each of the nodes' parent node which will be used
// for creating our final shortest path

export function dijkstra(grid, startNode, endNode) {
  // Inital check on our parameters
  if (!startNode || !endNode || startNode === endNode) {
    return false;
  }

  // Add each nodes' neighbors before
  // starting
  addNeighborNodes(grid);

  // Create visited array for visualization
  const visitedNodes = [];

  // Start by adding our start Node
  // Set the initial g and f
  startNode.g = 0;
  startNode.f = startNode.g;

  // Push in startNode as first in our min heap
  const customPriorityComparator = (a, b) => a.f - b.f;
  const nodeHeap = new Heap(customPriorityComparator);
  nodeHeap.push(startNode);

  // Dijkstra's algorithm starts here....
  while (nodeHeap.length > 0) {
    // Check to see if the next node in the list is visited or the end node.
    // If so remove it, we do not need to check it
    while (nodeHeap.length > 0 && nodeHeap.peek().isVisited) {
      nodeHeap.pop();
    }

    // Make sure our list is not empty
    if (nodeHeap.length > 0) {
      // Mark current node as visited, add to visited array
      const currentNode = nodeHeap.peek();
      currentNode.isVisited = true;

      // push nodes visited into array for rendering
      // keep start and end nodes out of list
      if (currentNode !== startNode && currentNode !== endNode)
        visitedNodes.push(currentNode);

      for (var i = 0; i < currentNode.neighborNodes.length; i++) {
        // Get current neighbor being scanned
        var nodeNeighbor = currentNode.neighborNodes[i];

        // Calculate possible lower g value
        var possibleLowerG =
          currentNode.g + getEuclideanDistance(currentNode, nodeNeighbor);

        // If lower, update the current g and the parent.
        if (possibleLowerG < nodeNeighbor.g) {
          nodeNeighbor.parentNode = currentNode;
          nodeNeighbor.g = possibleLowerG;

          // f(n) = g(n)
          nodeNeighbor.f = nodeNeighbor.g;
        }

        // If the node neighbor has not been visited and is not an
        // obstacle add it to the node list
        if (!nodeNeighbor.isVisited && !nodeNeighbor.isObstacle)
          nodeHeap.push(nodeNeighbor);

        // If a node neighbor is the end node
        // we are finished
        if (nodeNeighbor == endNode) return visitedNodes;
      }
    } else {
      // No solution, show the visited nodes
      return visitedNodes;
    }
  }
}

// Euclidean hueristic function
const getEuclideanDistance = (nodeA, nodeB) => {
  return Math.sqrt(
    (nodeA.col - nodeB.col) * (nodeA.col - nodeB.col) +
      (nodeA.row - nodeB.row) * (nodeA.row - nodeB.row)
  );
};

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
