class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    // add a new input value with priority
    this.values.push({ value, priority });
    // re-sort all the array element
    this.values.sort((a, b) => a.priority - b.priority); // Time complextity: O(nlogn)
  }

  dequeue() {
    // return the first element of the queue array and remove it from the array
    return this.values.shift();
  }

  print() {
    console.log(this.values);
  }
}

const pq = new PriorityQueue();
pq.enqueue("B", 2);
pq.enqueue("C", 4);
pq.enqueue("D", 5);
pq.enqueue("E", 4);
pq.enqueue("F", 3);
pq.enqueue("G", 7);
pq.enqueue("A", 1);
pq.print();
