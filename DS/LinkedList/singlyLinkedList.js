// Some facts about singly linked list
// 1. Linked list is a linear data structure
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
    }
}

class SinglyLinklist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    traverse() {
        let current = this.head;
        while (current?.data) {
            console.log(current.data);
            current = current.next;
        }
    }

    push(val) {
        const nexNode = new Node(val);
        if (!this.head) {
            // if list is empty, initialize it
            this.head = nexNode;
            this.tail = this.head;
        } else {
            // update the address of the tail to point to the new node
            this.tail.next = nexNode;
            this.tail = nexNode;
        }
        this.length++;
        return this;
    }

    pop() {
        // Check if the linked list is empty
        if (!this.length) {
            console.log('List is empty.');
            return undefined;
        }

        // Initialize pointers to traverse the list
        let newTail = this.head;
        let currentLink = this.head;

        // Traverse the list until reaching the last node
        while (currentLink.next) {
            // Update newTail to be the current node before moving forward
            newTail = currentLink;
            // Move to the next node
            currentLink = currentLink.next;
        }

        // Update the tail reference to the newTail
        this.tail = newTail;
        // Decrement the length of the list
        this.length -= 1;

        // If the list becomes empty after popping, update head and tail to null
        if (!this.length) {
            this.head = null;
            this.tail = null;
        }

        // Prevent potential memory leaks by disconnecting the popped node
        currentLink.next = null;

        // Return the popped value
        return this;
    }

    shift() {
        // if list is empty, do nothing
        if (!this.head) {
            console.log('No items to delete in the list');
            return undefined;
        }

        // update the head to the next element
        let current = { ...this.head };
        this.head = current.next;
        this.length--;

        return this;
    }

    unshift(val) {
        const newHead = new Node(val);
        // point the next of new head to the existing head
        newHead.next = { ...this.head };
        this.head = { ...newHead };
        this.length++;
        return this;
    }

    get(position) {
        if (position > this.length || position < 0) return null;
        // get item at a position from left
        let counter = 0;
        let current = this.head;
        while (current) {
            if (counter === position) {
                return current;
            }
            counter++;
            current = current.next;
        }
        return null;
    }

    set(position, value) {
        // update value at position
        const toUpdate = this.get(position);
        if (toUpdate) {
            toUpdate.data = value;
            return true;
        } else {
            return false;
        }
    }

    insert(position, value) {
        if (position < 0 || position > this.length) {
            console.log('invalid position');
            return false;
        }
        const newNode = new Node(value);
        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            return true;
        }
        const prevNode = this.get(position - 1);
        const oldNode = prevNode.next;

        prevNode.next = newNode;
        newNode.next = oldNode;
        this.length++;

        return true;
    }

    remove(position) {
        if (position < 0 || position > this.length) {
            return false;
        }

        if (position === 0) {
            this.head = this.head.next;
            this.length--;
            return true;
        }
        // update the address of previous node
        const prevNode = this.get(position - 1);
        const nextNode = prevNode.next.next;
        prevNode.next = nextNode;
        this.length--;

        return false;
    }
}

var list = new SinglyLinklist();
list.push(5);
list.push('swagat');
list.push('hi there');
list.push(Array.from({ length: 5 }, () => 0));

list.remove(3);

console.log(list.traverse());
