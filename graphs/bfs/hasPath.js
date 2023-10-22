// ! Can be solved using DFS as well
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

const pathExists = ({ graph, origin, destination }) => {
    if (origin === destination) {
        return true;
    }
    const executionQueue = [origin];

    while (executionQueue.length > 0) {
        const current = executionQueue.shift();
        if (current === destination) {
            return true;
        }

        for (let neighbor of graph[current]) {
            executionQueue.push(neighbor);
        }
    }

    return false;
};

console.log(
    pathExists({
        graph: graph,
        origin: 'c',
        destination: 'f',
    })
        ? 'A path was found!'
        : 'No path found.'
);
