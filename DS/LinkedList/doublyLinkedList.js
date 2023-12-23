// Facts about Doubly Linked List
// 1. It is a linear data structure
// 2. Elements are not stored at contiguous location
// 3. The elements are linked using pointers
// 4. The first node is called head
// 5. The last node points to null
// 6. Can be used to implement stack and queue
// 7. Insertion and deletion is easy
// 8. Random access is not allowed. We have to access elements sequentially starting from the first node
// 9. Extra memory space for a pointer is required with each element of the list
// 10. Not cache friendly. Since array elements are contiguous locations, there is locality of reference which is not there in case of linked list

// ! use only when insertion and deletion is more frequent than random access

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinklist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    traverse() {
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }

    push(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            console.log('Empty list, nothing to remove.');
            return;
        }

        const nodeToRemove = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = nodeToRemove.prev;
            this.tail.next = null;
        }

        this.length--;
        return nodeToRemove;
    }

    shift() {
        if (!this.head) {
            console.log('The list is empty, nothing to remove.');
            return;
        }

        const nodeToRemove = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }

        this.head = this.head.next;

        this.length--;
        return nodeToRemove;
    }

    unshift(val) {
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }

    get(position) {
        if (position < 0 || position > this.length - 1) {
            console.log('Position out of bound');
            return null;
        }

        const mid = Math.floor(this.length / 2);

        if (position >= mid) {
            let node = this.tail;
            // search from the end
            for (let index = this.length - 1; index >= mid; index--) {
                if (index === position) {
                    return node.data;
                }
                node = node.prev;
            }
        } else {
            let node = this.head;
            //search from the start
            for (let index = 0; index < mid; index++) {
                if (index === position) {
                    return node.data;
                }
                node = node.next;
            }
        }
    }

    set(val, position) {
        if (position < 0 || position > this.length) {
            console.log('Position out of bound');
            return false;
        }

        const mid = Math.floor(position / 2);

        if (position >= mid) {
            let node = this.tail;
            // search from the end
            for (let index = this.length - 1; index >= mid; index--) {
                if (index === position) {
                    node.data = val;
                    return true;
                }
                node = node.prev;
            }
        } else {
            let node = this.head;
            //search from the start
            for (let index = 0; index < mid; index++) {
                if (index === position) {
                    node.data = val;
                    return true;
                }
                node = node.next;
            }
        }
        return false;
    }
}

let doublyList = new DoublyLinklist();

doublyList.push('Swagat');
doublyList.push('Samal');
doublyList.push(28);

doublyList.set(2, 2);

doublyList.traverse();
