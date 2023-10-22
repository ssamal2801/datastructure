// ! Can be solved using BFS as well

// Given a graph, source and destination, check if there is a path between them

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
};
// Diagram:
// a -> c -> e
// |
// b -> d -> f

const pathExists = ({ graph, source, destination }) => {
    if (source === destination) {
        return true;
    }
    const callStack = [source];
    while (callStack.length > 0) {
        const current = callStack.pop();
        if (current === destination) {
            return true;
        }
        for (let neighbor of graph[current]) {
            callStack.push(neighbor);
        }
    }
    return false;
};

console.log(
    pathExists({
        graph: graph,
        source: 'b',
        destination: 'f',
    })
        ? 'Path found!'
        : 'No path found.'
);
