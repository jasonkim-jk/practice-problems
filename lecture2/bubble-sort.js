function bubbleSort(array) {
  if (!array) return null;
  if (array.length <= 1) return array;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

console.log(bubbleSort());
console.log(bubbleSort([]));
console.log(bubbleSort([37]));
console.log(bubbleSort([37, 45, 29, 8]));
console.log(bubbleSort([2, 25, 66, 9, 13, 715, 28]));
console.log(bubbleSort([43, 26, 122, 13, 344, 45, 56, 63, 99]));
console.log(bubbleSort([1, 25, 3, 42, 5]));
console.log(bubbleSort([12, 4, 36, 8, 310, 12]));
console.log(bubbleSort([22, 423, 556, 394, 1233, 235, 76345, 55474, 232424]));
