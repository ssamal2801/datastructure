// facts about directional graphs:
// 1. directional graphs have unidirectional edges
// 2. directional graphs can have cycles
// 3. directional graphs can have self-loops
// 4. directional graphs can have parallel edges
// 5. directional graphs can be weighted or unweighted
// 6. directional graphs can be sparse or dense
// 7. directional graphs can be connected or disconnected
// 8. directional graphs can be directed acyclic graphs (DAGs) or not
// 9. directional graphs can be trees or not
// 10. directional graphs can be complete or not
// 11. directional graphs can be bipartite or not
// 12. directional graphs can be Eulerian or not
// 13. directional graphs can be Hamiltonian or not
// 14. directional graphs can be planar or not
// 15. directional graphs can be series-parallel or not
// 16. directional graphs can be outerplanar or not
// 17. directional graphs can be chordal or not
// 18. directional graphs can be split or not
// 19. directional graphs can be threshold or not
// 20. directional graphs can be interval or not
// 21. directional graphs can be permutation or not
// 22. directional graphs can be comparability or not
// 23. directional graphs can be cocomparability or not
// 24. directional graphs can be circle or not
// 25. directional graphs can be circular-arc or not

//* Bipartite meaning - A graph is bipartite if its vertices can be divided into two disjoint sets U and V such that
//*  Complete meaning - A graph is complete if every pair of distinct vertices is connected by a unique edge.
//*  Eulerian meaning - A graph is Eulerian if it has an Eulerian cycle.
//*  Hamiltonian meaning - A graph is Hamiltonian if it has a Hamiltonian cycle.
//*  Planar meaning - A graph is planar if it can be drawn on a plane without any edges crossing.
//*  Series-parallel meaning - A graph is series-parallel if it can be constructed from single edges by two operations:
    //? 1. Parallel composition: G1 and G2 are series-parallel graphs. The parallel composition of G1 and G2 is the graph G with two vertices v and w, where v is the start vertex of G1 and w is the end vertex of G2, and the edges of G are the union of the edges of G1 and G2.
    //? 2. Series composition: G1 and G2 are series-parallel graphs. The series composition of G1 and G2 is the graph G with the vertices and edges of G1 and G2.
//*  Outerplanar meaning - A graph is outerplanar if it can be drawn on a plane so that all vertices are on the outer face.
//*  Chordal meaning - A graph is chordal if every cycle of length at least four has a chord, which is an edge connecting two nonconsecutive vertices of the cycle.
//*  Split meaning - A graph is split if its vertices can be divided into two disjoint sets U and V such that every edge connects a vertex in U to a vertex in V.
//*  Threshold meaning - A graph is threshold if it can be constructed from a single vertex by repeatedly adding either a new vertex with one edge connecting it to a vertex in the graph or a new vertex with two edges connecting it to vertices in the graph.
//*  Interval meaning - A graph is interval if it can be constructed from a single vertex by repeatedly adding either a new vertex with one edge connecting it to a vertex in the graph or a new vertex with two edges connecting it to vertices in the graph, and then removing the original vertex.
//*  Permutation meaning - A graph is permutation if it can be constructed from a single vertex by repeatedly adding either a new vertex with one edge connecting it to a vertex in the graph or a new vertex with two edges connecting it to vertices in the graph, and then removing the original vertex, and then adding a new vertex with one edge connecting it to a vertex in the graph.
//*  Comparability meaning - A graph is comparability if its vertices can be ordered in such a way that every cycle has length three.
//*  Cocomparability meaning - A graph is cocomparability if its complement is comparability.
//*  Circle meaning - A graph is circle if it can be constructed from a single vertex by repeatedly adding either a new vertex with one edge connecting it to a vertex in the graph or a new vertex with two edges connecting it to vertices in the graph, and then removing the original vertex, and then adding a new vertex with two edges connecting it to vertices in the graph.
//*  Circular-arc meaning - A graph is circular-arc if it can be constructed from a single vertex by repeatedly adding either a new vertex with one edge connecting it to a vertex in the graph or a new vertex with two edges connecting it to vertices in the graph, and then removing the original vertex, and then adding a new vertex with one edge connecting it to a vertex in the graph.