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
}

let doublyList = new DoublyLinklist();

doublyList.push('Swagat');
doublyList.push('Samal');
doublyList.push(28);

doublyList.traverse();
