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

    if(this.length) {
      newHead.next = this.head;
      this.head = newHead;
    } else {
      this.head = newHead;
      this.tail = this.head;
    }

    this.length++;
    return this;
  }
}

const list = new SinglyLinkedList();
console.log(list.push("HI"));
console.log(list.push("There"));
console.log(list.push("good"));
console.log(list.push("morning"));
console.log(list.unshift("UNSHIFT"));
