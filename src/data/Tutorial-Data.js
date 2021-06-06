export default class TutorialData {

    static get dataMap() {
        return [
            // 1
            {
                title: "Welcome to the Pathfinding Simulator",
                gifPath: "destination",
                gifAlt: "Welcome GIF",
                text: "If you want to skip the tutorial, feel free to exit. Press the next button to continue!", 
                showNext: true,
                showPrev: false
            },
            // 2
            {
                title: "What is Pathfinding?",
                gifPath: "bfs",
                gifAlt: "Pathfinding Example",
                text: "Pathfinding algorithms seek to find a path from a starting point to an end point. Some path algorithms are tuned to find the shortest path while others just find an available path. You can click on the 'About Pathfinding Algorithms' dropdown to learn more about each algorithmand how they individually work. Some of these algorithms are used by routing apps such as Uber, Lyft, and Google Maps. Their search algorithms will quickly search the area and use roads as an agent to expand to the destination. In our case, we will just use grid cells as our 'available roads' to keep things simple. Click next to learn about the controls of the simulator!", 
                showNext: true,
                showPrev: true
            },
            // 3
            {
                title: "Placing Obstacles",
                gifPath: "toggleobstacle",
                gifAlt: "Toggle obstacle example",
                text: "Activate any obstacle by simply clicking on an empty grid cell. Clicking on the obstacle again will deactivate it.", 
                showNext: true,
                showPrev: true
            },
            // 4
            {
                title: "Placing Multiple Obstacles",
                gifPath: "dragobstacle",
                gifAlt: "Mutliple obstacles example",
                text: "Press and drag on empty cells to continously activate obstacles. Pressing and dragging over obstacles will continously deactivate them.", 
                showNext: true,
                showPrev: true
            },
            // 5
            {
                title: "Positioning the Start and End Nodes",
                gifPath: "dragstartend",
                gifAlt: "drag",
                text: "Drag and drop either the start (green) or end (red) node on an empty cell to reposition the node.", 
                showNext: true,
                showPrev: true
            },
            // 6
            {
                title: "Choosing an Algorithm",
                gifPath: "choosealgorithm",
                gifAlt: "Choose algorithm example",
                text: "Select the 'Choose Algorithm' dropdown to choose which pathfinding algorithm you would like to simulate.", 
                showNext: true,
                showPrev: true
            },
            // 7
            {
                title: "Adjusting Simulation Speed",
                gifPath: "adjustspeed",
                gifAlt: "Adjust speed example",
                text: "Select the 'Adjust Simulation Speed' dropdown to adjust the animation search speed of the simulator.", 
                showNext: true,
                showPrev: true
            },
            // 8
            {
                title: "Simulating the Pathfinding Search",
                gifPath: "simulate",
                gifAlt: "Welcome",
                text: "Select the 'Simulate' button to start the pathfinding search. The blue cells represent nodes that were checked for a path while the yellow cells represent the final result path from the algorithm.", 
                showNext: true,
                showPrev: true
            },
            // 9
            {
                title: "Clearing the Simulated Search",
                gifPath: "clear",
                gifAlt: "Clear example",
                text: "Select the 'Reset Path' button to clear the path.", 
                showNext: true,
                showPrev: true
            },
            // 10
            {
                title: "Clearing All Obstacles",
                gifPath: "reset",
                gifAlt: "Clear example",
                text: "Select the 'Reset Obstacles' button to clear all placed obstacles.", 
                showNext: true,
                showPrev: true
            },
            // 11
            {
                title: "Generating Random Obstacles",
                gifPath: "randomize",
                gifAlt: "Randomize obstacle example",
                text: "Select the 'Randomize Obstacles' button to randomly generate obstacles over the grid.", 
                showNext: true,
                showPrev: true
            },
            // 12
            {
                title: "That's it!",
                gifAlt: "Welcome",
                text: "Find more information about the algorithms and data structures behind the simulator in the 'About Pathfinding Algorithms' and 'About DataStructures' dropdowns.", 
                showNext: false,
                showPrev: true
            }
        ]
    }
}