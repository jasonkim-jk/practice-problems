class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

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

  pop() {
    if (!this.head) return undefined;

    const currentTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentTail.prev;
      this.tail.next = null;
      currentTail.prev = null;
    }

    this.length--;
    return currentTail;
  }

  shift() {
    // check if length is 0, if so just return undefined
    if (!this.head) return undefined;

    // get the current head and save it to a new variable
    const oldHead = this.head;

    // check if length is 1,
    if (this.length === 1) {
      // if so, set the head and tail are null
      this.head = null;
      this.tail = null;
    } else {
      // if not,
      // update the head to next of the old head
      // update the prev of the new head to null
      // update the old head's next to null
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    // decrese the length by 1
    this.length--;

    // return the old head
    return oldHead;
  }

  unshift(val) {
    // create a new node with the input val
    const newHead = new Node(val);

    // check the length whether it is 0 or not
    if (this.length === 0) {
      // if 0, set the head and tail to the new node
      this.head = newHead;
      this.tail = newHead;
    } else {
      // if not,
      // set the prev prop of the head to the new node
      // set the next prop of the new node to the head prop
      // set the head to be the new node
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }

    // increase the length by 1
    this.length++;

    // return the list
    return this;
  }
}

const list = new DoublyLinkedList();
console.log(list.push(10));
console.log(list.push(20));
console.log(list.push(30));
console.log(list.unshift(0));
