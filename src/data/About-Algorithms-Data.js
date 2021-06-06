export default class AboutStructuresData {

    static data = {
        "A*":
        {
            title: "A*",
            gifPath: "astarslow",
            gifAlt: "A* example",
            text: `A* aims to find the shortest path from the start node to the end node. 
            It explores each node starting with the ones with the smallest heuristic cost. 
            The huerstic function for the implemented algorithmwas simply the known distance g(n) 
            from the start node to the current explored node (which starts at 0) in addition to the 
            the euclide an distance h(n) from the current explored node to the end node. This formula 
            f(n) = g(n) + h(n), gives us an estimation of how short the path f(n) is if we were to use 
            that explored node (marked in blue above). A min heap is used to efficiently sort each one 
            of the nodesby their smallest hueristic function which are then removed after all of the 
            nodes' neighbors have been visited. A* is considered a balance between Dijkstra and Greedy.
            \n The code for the implementation of A* can be found here:`, 
            link: "https://github.com/MilanFatschel/Pathfinder_Simulator/blob/master/src/algorithms/Astar.js"
        },
        "Dijkstra":
        {
            title: "Dijkstra",
            gifPath: "dijkstraslow",
            gifAlt: "Dijkstra example",
            text: `Dijkstra aims to find the shortest path from the start node to the end
            node. It explores each node starting with the ones with the smallest
            heuristic cost and will find the shortest path to each node. The
            huerstic function for the implemented algorithm was simply the known
            distance g(n) from the start node to the current explored node (which
            starts at 0). This formula f(n) = h(n), gives us an estimation of how
            close the path of the explored node (marked in blue above) is to the
            start node. Dijkstra will visit each unvisted node and update it if it
            has smaller f(n). As a result, Dijkstra tries to cover as many cells
            as it can until it reaches the end node, staying as close as it can to
            the start node. A min heap is used to efficiently sort each one of the
            nodes by their smallest hueristic function which are removed when the
            nodes' neighbors have all been visited. Dijkstra is regarded as one of
            the most commonly used pathfinding algorithms.
            \nThe code for the implementation of Dijkstra can be found here:`,
            link: "https://github.com/MilanFatschel/Pathfinder_Simulator/blob/master/src/algorithms/Dijkstra.js"
        },
        "GBF":
        {
            title: "Greedy-Best-First",
            gifPath: "gbfslow",
            gifAlt: "GBF example",
            text: `Greedy-Best-First aims to find a path from the start node to the end
            node. It is extemely aggressive and speedy, but at the cost that it
            won't find the shortest path everytime. It explores each node starting
            with the ones with the smallest heuristic cost and updates them with
            their parent node (where it came from) if a lower hueristic distance
            is found. The huerstic function for the implemented algorithm was
            simply the euclidean distance h(n) from the current explored node
            (which starts at 0) to the end node. This formula f(n) = h(n), gives
            us an estimation of how close we are to the end node at the current
            explored node (marked in blue). A min heap is used to efficiently sort
            each one of the nodes by their smallest hueristic function which are
            removed when all of the nodes' neighbors have been visited.
            Greedy-Best-First can be considerably faster than other algorithms if
            a path (not always the shortest) is desired.
            \nThe code for the implementation of Greedy-Best-First can be found here:`,
            link: "https://github.com/MilanFatschel/Pathfinder_Simulator/blob/master/src/algorithms/GreedyBestFirst.js"
        },
        "BFS":
        {
            title: "Breadth-First-Search",
            gifPath: "bfsslow",
            gifAlt: "BFS example",
            text: `Breadth-First-Search aims to find the shortest path from the start
            node to the end node. The BFS expores nodes level by level, and
            updates each node with their parent (where they came from) with each
            new visit. Levels are defined as multiple nodes with the same exact
            distance to the start node. Expanding level by level forces the
            algorithm to return the shortest path when it finally hits the end
            node, since the level distances are the same. The BFS uses a queue to
            keep track of this level ordering of nodes. When all of the nodes'
            neighbors have been visited it will be removed from the queue. BFS may
            be slower than others with heuristics but it is easier to implement.
            However, it is still fully effective in producing an accurate shortest
            path.
            \nThe code for the implementation of BFS can be found here:`,
            link:"https://github.com/MilanFatschel/Pathfinder_Simulator/blob/master/src/algorithms/BFS.js"
        },
        "DFS":
        {
            title: "Depth-First-Search",
            gifPath: "dfsslow",
            gifAlt: "DFS example",
            text: `The Depth-First-Search, while very applicable and useful in many
            situations, is not a great algorithm for pathfinding. The DFS has the
            characteristic of exploring whatever it sees first. This produces no
            real direction and a guess of where the end node is. The result is a
            random path as the DFS will eventually reach the end as it seaches all
            nodes and updates its parents. A stack or recursion is used to keep
            track of these nodes to keep the "first-come first-serve" order. When
            all of the nodes' neighbors have been visited it will be removed from
            the stack. The DFS would not be used in pathfinding but this still
            provides a nice visual of how the algorithm searches graphs.
            \nThe code for the implementation of DFS can be found here:`,
            link: "https://github.com/MilanFatschel/Pathfinder_Simulator/blob/master/src/algorithms/DFS.js",
        }
    }

    static getData(algo) {
        return this.data[algo];
    }
}