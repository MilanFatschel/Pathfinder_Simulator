export default class AboutStructuresData {

    static data = {
        "Heap":
        {
            title: "The Heap",
            gifPath: "heap",
            gifAlt: "Heap example",
            text: `The heap can be thought of as an efficient structure that keeps track
            of a minimum or maximum element in a list or array. Heaps are useful
            when quick and constant access is needed to this minimum or maximum
            element. Heaps use trees as seen above, to either "bubble up" or
            "bubble down" an element when it is inserted or removed. The binary
            tree allows us to remove and insert items in log(n) time and access
            the minimum or maximum element in constant time. This can be much more
            efficent than having to sort every element. A*, Dijkstra, and
            Greedy-Best-First all use the heap to keep track of their minimum
            heuristic element or the best path at that time!
            \nThe code for the implemented heap can be found here (heap-js-library):`, 
            link: "https://github.com/ignlg/heap-js/blob/master/dist/heap-js.es5.js"
        },
        "Queue":
        {
            title: "The Queue",
            gifPath: "queue",
            gifAlt: "Queue example",
            text: `The queue resembles that of the "first-come, first-serve" or a line of
            people waiting to purchase something. This allows us to keep the
            First-In First-Out ordering and also makes removing and inserting from
            the queue very efficient (constant, since we only need to keep track
            of the front item). Here, enqueue (push) adds an item to the back of
            the queue and deqeue (pop) removes an item from the front of the
            queue. The peek (front) method returns the current front item in the
            queue. In our case, the items in the above image can be thought of
            each grid cell in the search. The queue can be seen in action with the
            Breadth-First-Search algorithm.
            \nThe code for the implemented queue can be found here:`,
            link: "https://github.com/MilanFatschel/Pathfinder_Simulator/blob/master/src/structures/Queue.js"
        },
        "Stack":
        {
            title: "The Stack",
            gifPath: "stack",
            gifAlt: "Stack example",
            text: `The stack can be thought of a physical stack of books. As you place
            books on top of each other you can only take off the top book in order
            to remove things from the stack. This allows us to keep the Last-In
            First-Out ordering and also makes removing and inserting from the
            stack very efficient (constant, since we only need to keep track of
            the top item). Here, push adds an item and pop removes an item. The
            peek method returns the current top item in the stack. In our case,
            the red items in the above image can be thought of each grid cell in
            the search. The stack can be seen in action with Depth-First-Search
            algorithm.
            \nThe code for the implemented stack can be found here:`,
            link: "https://github.com/MilanFatschel/Pathfinder_Simulator/blob/master/src/structures/Stack.js"
        }
    }

    static getData(structure) {
        return this.data[structure];
    }
}