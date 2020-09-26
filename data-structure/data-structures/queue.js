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
    this.size = 0;
  }

  enqueue(val) {
    // create a new node
    const newNode = new Node(val);

    // check if there is a node or not, if not, set the first and last to be the new node
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // if so, set the next of the lat to be the new node and the last to be the new node
      this.last.next = newNode;
      this.last = newNode;
    }

    // increase the size and return list
    this.size++;
    return this;
  }
}

const queue = new Queue();
console.log(queue.enqueue(Math.floor(Math.random() * 100)));
console.log(queue.enqueue(Math.floor(Math.random() * 100)));
console.log(queue.enqueue(Math.floor(Math.random() * 100)));
console.log(queue.enqueue(Math.floor(Math.random() * 100)));
