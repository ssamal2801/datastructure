// Facts about Graphs:
// 1. Graphs are collections of vertices and edges
// 2. Edge: connection between two vertices
// 3. Vertex: node in a graph
// 4. Graphs can be directed or undirected
// 5. Graphs can be weighted or unweighted
// 6. Graphs can be cyclic or acyclic
// 7. Cyclic graphs can be detected using DFS
// 8. Acyclic graphs can be detected using BFS
// 9. Cyclic graphs posses the risk of infinite loops
// 10. Acyclic graphs are finite
// 11. Graphs can be represented using adjacency lists or adjacency matrices
// 12. Adjacency lists are more space-efficient than adjacency matrices
// 13. Adjacency matrices are more time-efficient than adjacency lists
// 14. Graphs can be traversed using BFS or DFS
// 15. BFS is better for finding the shortest path
// 16. DFS is better for finding the path that is as far as possible
// 17. BFS is better for finding the path that is as far as possible in an acyclic graph
// 18. DFS is better for finding the path that is as far as possible in a cyclic graph
// 19. BFS is better for finding the shortest path in an unweighted graph
// 20. DFS is better for finding the shortest path in a weighted graph
// 21. Graphs can be used to create trees
// 22. Trees are special types of graphs
// 23. Trees are acyclic graphs
// 24. Trees have a root node
// 25. Trees have parent-child relationships
// 26. Trees have a single path between any two vertices
// 27. Trees can be traversed using BFS or DFS

// #########################################
// Graphs in JavaScript can be represented using objects and arrays.
// The following is an example of an undirected, unweighted graph:
const undirected_unweighted = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
};
// Explanation why the above is an undirected, unweighted graph:
// 1. The keys of the object are the vertices
// 2. The values of the object are the edges
// 3. The edges are represented as arrays
// 4. The arrays contain the vertices that the key vertex is connected to
// 5. The graph is undirected because the edges are bidirectional
// 6. The graph is unweighted because the edges do not have a weight
// #########################################

// #########################################
// The following is an example of an undirected, weighted graph:
const undirected_weighted = {
    a: [
        { vertex: 'b', weight: 1 },
        { vertex: 'c', weight: 2 },
    ],
    b: [{ vertex: 'd', weight: 3 }],
    c: [{ vertex: 'e', weight: 4 }],
    d: [{ vertex: 'f', weight: 5 }],
    e: [],
    f: [],
};
// The above is an undirected because the edges are bidirectional.
// Ex a: [{ vertex: "b", weight: 1 }, { vertex: "c", weight: 2 }]
// The above is a weighted graph because the edges have a weight.
// Ex a: [{ vertex: "b", weight: 1 }, { vertex: "c", weight: 2 }]
// #########################################

// #########################################
// The following is an example of a directed, unweighted graph:
const directed_unweighted = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
};

// The graph is directed because the edges are unidirectional
// ex: a: ["b", "c"],
// The graph is unweighted because the edges do not have a weight
// ex: a: ["b", "c"],
// #########################################

// #########################################
// The following is an example of a directed, weighted graph:
const directed_weighted = {
    a: [
        { vertex: 'b', weight: 1 },
        { vertex: 'c', weight: 2 },
    ],
    b: [{ vertex: 'd', weight: 3 }],
    c: [{ vertex: 'e', weight: 4 }],
    d: [{ vertex: 'f', weight: 5 }],
    e: [],
    f: [],
};
// The graph is directed because the edges are unidirectional
// ex: a: [{ vertex: "b", weight: 1 }, { vertex: "c", weight: 2 }]
// The graph is weighted because the edges have a weight
// ex: a: [{ vertex: "b", weight: 1 }, { vertex: "c", weight: 2 }]
// #########################################
