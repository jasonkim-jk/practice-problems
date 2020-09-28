class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    // push the value into the values property on the heap
    this.values.push(value);
    const result = this.values;

    // declare a helper function to bubble the value up to its currect spot
    function compare(index) {
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
        compare(parentIndex);
      }
    }

    // invoke the helper function passing the last index as an argument
    compare(result.length - 1);

    // return the heap array
    return this.values;
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
