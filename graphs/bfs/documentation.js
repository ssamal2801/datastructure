// Aim - Traverse to the nearest node, then traverse to the nearest unvisited node, and so on.
// Uses a queue to keep track of the nodes to visit next.

// Some facts about BFS:
// 1. BFS is a graph traversal algorithm.
// 2. BFS is not a searching algorithm.
// 3. BFS is used to traverse a graph.
// 4. BFS is used to find connected components of a graph.
// 5. BFS is used to find strongly connected components of a graph.
// 6. BFS is used to find bridges and articulation points in a graph.

// ##### When to use BFS and when to use DFS? #####
// 1. If you know a solution is not far from the root of the tree, a breadth first search (BFS) might be better.
// 2. If the tree is very deep and solutions are rare, depth first search (DFS) might take an extremely long time,
// but BFS could be faster.
// 3. If the tree is very wide, a BFS might need too much memory, so it might be completely impractical.
// 4. If solutions are frequent but located deep in the tree, BFS could be impractical.
// 5. If the search tree is very deep you will need to restrict the search depth for depth first search (DFS),
// anyway (for example with iterative deepening).
// 6. BFS is generally faster than DFS.
// 7. DFS is space efficient than BFS.
// 8. DFS is easy to implement. BFS is difficult to implement.
// 9. DFS is used in topological sorting, scheduling problems, cycle detection in a graph, etc.
// 10. BFS is used in finding the shortest path between two nodes, finding all nodes within one connected component,
// finding the nodes that are at a distance k from a given node, (modified) breadth first search is used in
// Ford-Fulkerson algorithm to find maximum flow in a network, etc.
