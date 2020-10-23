class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    if (!this.top) {
      return null;
    } else {
      return this.top.value;
    }
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.bottom) return null;
    const popedNode = this.top;

    if (this.top === this.bottom) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }

    popedNode.next = null;
    this.length--;
    return popedNode;
  }

  isEmpty() {
    return !this.length;
  }
}

const myStack = new Stack();
console.log(myStack.isEmpty());
console.log(myStack.peek());
console.log(myStack.push("Discord"));
console.log(myStack.push("Udemy"));
console.log(myStack.push("Google"));
console.log(myStack.peek());
console.log(myStack.isEmpty());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.isEmpty());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.isEmpty());
