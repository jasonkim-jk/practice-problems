class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    if(this.first) {
      return this.first.value;
    } else {
      return null;
    }
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) return null;

    const dequeued = this.first;

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      dequeued.next = null;
    }

    this.length--;
    return dequeued;
  }

  isEmpty() {
    return !this.length;
  }
}

const myQueue = new Queue();
console.log(myQueue.isEmpty());
console.log(myQueue.peek());
console.log(myQueue.enqueue("Discord"));
console.log(myQueue.enqueue("Udemy"));
console.log(myQueue.enqueue("Google"));
console.log(myQueue.peek());
console.log(myQueue.isEmpty());
console.log(myQueue.dequeue());
console.log(myQueue.peek());
console.log(myQueue.isEmpty());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.peek());
console.log(myQueue.isEmpty());
