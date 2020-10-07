// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
  }

  size() {
    let currentNode = this.head;
    let count = 0;

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    if (!node) return null;

    while (node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    let currNode = this.head;
    if (!currNode) return;
    if (!currNode.next) {
      this.head = null;
      return;
    }

    while (currNode.next) {
      if (currNode.next.next) {
        currNode = currNode.next;
      } else {
        currNode.next = null;
        return;
      }
    }
  }

  insertLast(data) {
    const lastNode = this.getLast();
    if (lastNode) {
      const newNode = new Node(data);
      lastNode.next = newNode;
    } else {
      this.insertFirst(data);
    }
  }

  removeAt(index) {
    if (index > this.size() - 1 || !this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const prevNode = this.getAt(index - 1);
    prevNode.next = prevNode.next.next;
  }

  insertAt(data, index) {
    let prevNode;
    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    } else if (index > this.size() - 1) {
      prevNode = this.getAt(this.size() - 1);
    } else {
      prevNode = this.getAt(index - 1);
    }
    newNode.next = prevNode.next;
    prevNode.next = newNode;
  }
}
