// Q. Traverse this Graph as far as possible and print the node as you go. Using DFS.
// Hint - DFS Uses a Stack.
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
};

const depthFirstPrint = ({graph, startNode}) => {
  // Brute force solution:
  // 1. 
}

// This method takes a graph and a starting point.
depthFirstPrint({graph: graph, startNode: 'a'})