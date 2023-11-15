//? Write a function hasPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB).
//? The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.

//? test case:
//? const edges = [
//?   ['i', 'j'],
//?   ['k', 'i'],
//?   ['m', 'k'],
//?   ['k', 'l'],
//?   ['o', 'n']
//? ]
//? hasPath(edges, 'j', 'm') // -> false

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
];

const generateGraph = (edges) => {
    const graph = {};
    // Plan:
    // 1) iterate through each item of the matrix
    // 2) if add the item to the graph if not exists and make sure each item you add has a bi-directional path with it's neighbor.
    for (let edge of edges) {
        const [leftNode, rightNode] = edge;
        if (!graph[leftNode]) {
            graph[leftNode] = [];
        }
        if (!graph[rightNode]) {
            graph[rightNode] = [];
        }

        // making sure there is a bi-directional path between the edges
        graph[leftNode].push(rightNode);
        graph[rightNode].push(leftNode);
    }
    return graph;
};

const hasPath = (graph, source, destination, visitedSet) => {
    // Plan:
    // 1) create a graph out of the edges
    // 2) DFS through the graph to find if there is a path between source and destination
    //* 3) have a fail save to see if a node is already visited, do not visit it again - makes cyclic safe

    if (source === destination) {
        return true;
    }

    if (visitedSet.has(source)) {
        return false;
    }

    visitedSet.add(source);

    for (let currentEdge of graph[source]) {
        if (currentEdge === destination) {
            return true;
        }
    }
    return false;
};

const generatedGraph = generateGraph(edges);
console.log(hasPath(generatedGraph, 'j', 'm', new Set())); // -> should return false
