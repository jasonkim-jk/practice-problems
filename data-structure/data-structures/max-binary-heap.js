class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    // push the value into the values property on the heap
    this.values.push(value);
    const result = this.values;

    // declare a helper function to bubble the value up to its currect spot
    function bubbleUp(index) {
      // get the parent index
      const parentIndex = Math.floor((index - 1) / 2);
      let currentValue = result[index];
      let parentValue = result[parentIndex];
      // check if the current value is larger than the parent
      if (currentValue > parentValue) {
        // if so, swap two values
        result[index] = parentValue;
        result[parentIndex] = currentValue;
        // repeat starting with the parent node
        bubbleUp(parentIndex);
      }
    }

    // invoke the helper function passing the last index as an argument
    bubbleUp(result.length - 1);

    // return the heap array
    return this.values;
  }

  extractMax() {
    // get the max value
    const max = this.values[0];
    // get the last element of the list
    const last = this.values.pop();
    // check if the length of the array is 0 or not, if so, return
    if (!this.values.length) return max;

    // set the first index to be the value of the last
    this.values[0] = last;
    const temp = this.values;

    // declare a helper function to sink the value down to its currect spot
    function sinkDown(index) {
      // get each index
      const currentIndex = index;
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      // get the child element which is bigger
      const biggerChildIndex = temp[leftChildIndex] - temp[rightChildIndex] > 0 ? leftChildIndex : rightChildIndex;

      // check if the child is bigger than the parent element
      if (temp[currentIndex] < temp[biggerChildIndex]) {
        // if so, swap two values
        [temp[currentIndex], temp[biggerChildIndex]] = [temp[biggerChildIndex], temp[currentIndex]];
        // keep going
        sinkDown(biggerChildIndex);
      }
    }
    // invoke the helper function and return the max
    sinkDown(0);
    return max;
  }
}

const heap = new MaxBinaryHeap();
console.log(heap.insert(90));
console.log(heap.insert(100));
console.log(heap.insert(80));
console.log(heap.insert(70));
console.log(heap.insert(72));
console.log(heap.insert(172));
console.log(heap.insert(272));
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
