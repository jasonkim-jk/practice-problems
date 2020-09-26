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
      // assign the first node to be the new node and the first next to be the current first
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    // increase the size by 1 and return list
    this.size++
    return this;
  }

  pop() {
    // check if lists are empty, if so, return null
    if(!this.first) return null;

    // declare a new variable to save the first node
    const firstNode = this.first;

    // if the size is 1, set the first and last to be null
    if (this.first === this.last) {
      this.last = null;
    }

    // if not, set the previous node to be the first
    this.first = this.first.next;

    // decrease the size by 1 and return the saved first
    this.size--;
    return firstNode.value;
  }
}

const stack = new Stack();
console.log(stack.push(Math.floor(Math.random() * 100)));
console.log(stack.push(Math.floor(Math.random() * 100)));
console.log(stack.push(Math.floor(Math.random() * 100)));
console.log(stack.push(Math.floor(Math.random() * 100)));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
