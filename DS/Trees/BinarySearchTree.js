class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    find(value) {
        if (this.root === null) {
            return false;
        }

        let currentNode = this.root;

        while (currentNode !== null) {
            if (currentNode.value === value) {
                return true;
            }
            // check if greater than root, traverse right
            // else traverse left
            if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                currentNode = currentNode.left;
            }
        }

        return false;
    }

    insert(value) {
        var newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;
        while (true) {
            if (currentNode.value === value) {
                return this;
            }
            // If value less than root node, go left
            if (value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    return this;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                // If value greater than the root node, go right
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    return this;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }
}

var bst = new BinarySearchTree();

bst.insert(10);
bst.insert(2);
bst.insert(100);
bst.insert(9);

console.log(bst.find(100));
