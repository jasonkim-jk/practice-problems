class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.initialize();
  }

  initialize() {
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (!this.length) this.initialize();

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (!this.length) this.initialize();

    return currentHead;
  }

  unshift(val) {
    const newHead = new Node(val);

    if (this.length) {
      newHead.next = this.head;
      this.head = newHead;
    } else {
      this.head = newHead;
      this.tail = this.head;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let loopCount = index;
    let currentNode = this.head;

    while (loopCount) {
      currentNode = currentNode.next;
      loopCount--;
    }

    return currentNode;
  }

  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      const prevNode = this.get(index - 1);
      const newNode = new Node(val);

      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++;
    }

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      const prevNode = this.get(index - 1);
      const removedNode = prevNode.next;

      prevNode.next = removedNode.next;
      this.length--;
      return removedNode;
    }
  }
}

const list = new SinglyLinkedList();
console.log(list.push(100));
console.log(list.push(200));
console.log(list.push(300));
console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));
console.log(list.remove(2));
console.log(list.get(0));
console.log(list.get(1));
