function binarySearch(array, input) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    const middleValue = array[middle];
    if (middleValue === input) {
      return middle;
    } else if (input < middleValue) {
      end = middle - 1;
    } else if (middleValue < input) {
      start = middle + 1;
    }
  }

  return -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28], 15));
console.log(binarySearch([4, 6, 12, 13, 34, 45, 56, 63, 99], 63));
console.log(binarySearch([1, 2, 3, 4, 5], 4));
console.log(binarySearch([2, 4, 6, 8, 10, 12], -14));
console.log(binarySearch([2, 43, 56, 94, 123, 235, 6345, 55474, 232424], 43));
