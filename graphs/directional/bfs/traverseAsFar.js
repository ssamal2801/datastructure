// Q. Traverse this Graph as far as possible and print the node as you go. Using BFS.
// Hint: BFS uses a Queue.
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
};

const breadthFirstPrint = ({ graph, startingPoint }) => {
    // Brute force solution:
    // 1. Start a queue with starting point as the only item
    // 2. Delete from start and print it, that would be your current neighbor
    // 3. Push all the neighbors of current item into the queue
    // 4. Repeat step 2 and 3 until the queue is empty

    const processQueue = [startingPoint];
    console.log('Breadth First Traversal of Graph - As far as possible.');
    while (processQueue.length > 0) {
        const current = processQueue.splice(0, 1);
        console.log(current[0]);

        for (let neighbor of graph[current]) {
            processQueue.push(neighbor);
        }
    }
};

// This method takes a graph and a starting point
breadthFirstPrint({ graph: graph, startingPoint: 'a' });
