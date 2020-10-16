class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  insert(index, value) {
    if (index <= 0) {
      return this.prepend(value);
    }

    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const prevNode = this.traverseToIndex(index - 1);
    newNode.next = prevNode.next;
    prevNode.next.prev = newNode;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    this.length++;

    return this;
  }

  remove(index) {
    let removedNode;

    if (index <= 0) {
      removedNode = this.head;
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    } else if (index >= this.length - 1) {
      removedNode = this.tail;
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    } else {
      const prevNode = this.traverseToIndex(index - 1);
      removedNode = prevNode.next;
      prevNode.next = removedNode.next;
      removedNode.next.prev = prevNode;
      removedNode.prev = null;
      removedNode.next = null;
    }
    this.length--;

    return removedNode;
  }

  traverseToIndex(index) {
    if (index < 0 || index > this.length - 1) return undefined;

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }
}

const myLinkedList = new LinkList();
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(10));
console.log(myLinkedList.append(15));
console.log(myLinkedList.prepend(0));
console.log(myLinkedList.prepend(-5));
console.log(myLinkedList.insert(0, -10));
console.log(myLinkedList.insert(-3, -20));
console.log(myLinkedList.insert(5, 20));
console.log(`size: ${myLinkedList.length}, `, myLinkedList.printList());
console.log(myLinkedList.insert(1, 100));
console.log(`size: ${myLinkedList.length}, `, myLinkedList.printList());
console.log(myLinkedList.remove(-10));
console.log(myLinkedList.remove(0));
console.log(myLinkedList.remove(20));
console.log(myLinkedList.remove(2));
console.log(myLinkedList.remove(4));
console.log(`size: ${myLinkedList.length}, `, myLinkedList.printList());
