class Node {
  constructor(value, priority) {
    this.val = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    // make a new node
    const newNode = new Node(value, priority);
    // push the value into the values property on the heap
    this.values.push(newNode);
    const result = this.values;

    // declare a helper function to bubble the value up to its currect spot
    function bubbleUp(index) {
      // get the parent index and check it whether less than 0 or not
      const parentIndex = Math.floor((index - 1) / 2);
      if (parentIndex < 0) return;

      // check if the current value is less than the parent
      if (result[index].priority < result[parentIndex].priority) {
        // if so, swap two values
        [result[parentIndex], result[index]] = [result[index], result[parentIndex]];

        // repeat starting with the parent node
        bubbleUp(parentIndex);
      }
    }

    // invoke the helper function passing the last index as an argument
    bubbleUp(result.length - 1);

    // return the heap array
    return this.values;
  }

  dequeue() {
    // get the min priority
    const min = this.values[0];
    // get the last node of the list
    const last = this.values.pop();
    // check if the length of the array is 0 or not, if so, return
    if (!this.values.length) return min;

    // set the first index to be the node of the last
    this.values[0] = last;
    const temp = this.values;

    // declare a helper function to sink the value down to its currect spot
    function sinkDown(index) {
      // get each index
      const currentIndex = index;
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      if (leftChildIndex > temp.length - 1 || rightChildIndex > temp.length - 1) return;

      // get the child element which is smaller
      const smallerChildIndex =
        temp[leftChildIndex].priority - temp[rightChildIndex].priority < 0 ? leftChildIndex : rightChildIndex;

      // check if the child priority is smaller than the parent priority
      if (temp[currentIndex].priority > temp[smallerChildIndex].priority) {
        // if so, swap two values
        [temp[currentIndex], temp[smallerChildIndex]] = [temp[smallerChildIndex], temp[currentIndex]];
        // keep going
        sinkDown(smallerChildIndex);
      }
    }
    // invoke the helper function and return the min
    sinkDown(0);
    return min;
  }

  print() {
    return this.values;
  }
}

const pq = new PriorityQueue();
pq.enqueue(100, 10);
pq.enqueue(200, 5);
pq.enqueue(250, 1);
pq.enqueue(78, 3);
pq.enqueue(74534, 6);
pq.enqueue(2344, 9);
console.log(pq.enqueue(75757, 15));
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.print());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
