class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  push(val) {
    // create a new node
    const newNode = new Node(val);

    // check if there is a node or not
    if (!this.first) {
      // if there isn't a node, assign the new node to be the first and last
      this.first = newNode;
      this.last = newNode;
    } else {
      // assign the last node to be the new node and the current next to be the current first
      this.first.next = this.first;
      this.first = newNode;
    }

    // increase the size by 1 and return list
    return ++this.size;
  }
}

const stack = new Stack();
console.log(stack.push(0));
console.log(stack.push(1));
console.log(stack.push(3));
console.log(stack.push(6));
