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

const depthFirstPrint = ({ graph, startNode }) => {
  console.log('DFS Graph Traversal - As far as possible.')
    // Brute force solution:
    // 1. start the stack with startNode as default and only item in it
    // 2. pop an item, print it, that would be the current item
    // 3. push the adjacent nodes of the current item into the stack.
    // 4. pop again and repeat step 2 until the stack is empty.

    const stack = [startNode];

    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);

        for (let node of graph[current]) {
            stack.push(node);
        }
    }
};

// This method takes a graph and a starting point.
depthFirstPrint({ graph: graph, startNode: 'a' });
