// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

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


class Queue {
  constructor() {
    this.data = new Stack();
    this.temp = new Stack();
  }

  add(value) {
    this.data.push(value);
  }

  remove() {
    while (this.data.peek()) {
      this.temp.push(this.data.pop());
    }

    const removed = this.temp.pop();

    while (this.temp.peek()) {
      this.data.push(this.temp.pop());
    }

    return removed;
  }

  peek() {
    while (this.data.peek()) {
      this.temp.push(this.data.pop());
    }

    const peeked = this.temp.peek();

    while (this.temp.peek()) {
      this.data.push(this.temp.pop());
    }

    return peeked;
  }
}
