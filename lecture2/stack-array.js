class Stack {
  constructor() {
    this.data = [];
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  push(value) {
    this.data.push(value);
    return this.data;
  }

  pop() {
    if (!this.data.length) return null;
    return this.data.pop();
  }

  isEmpty() {
    return !this.data.length;
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
console.log(myStack.pop());
console.log(myStack.isEmpty());
