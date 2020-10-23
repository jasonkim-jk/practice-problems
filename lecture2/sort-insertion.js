function insertionSort(array) {
  if (!array) return null;

  const length = array.length;
  if (length <= 1) return array;

  for (let i = 1; i < length; i++) {
    let currentValue = array[i];
    let j = i - 1;

    for (j; j > -1 && array[j] > currentValue; j--) {
      array[j + 1] = array[j];
    }

    array[j + 1] = currentValue;
  }

  return array;
}

console.log(insertionSort());
console.log(insertionSort([]));
console.log(insertionSort([37]));
console.log(insertionSort([37, 45, 29, 8]));
console.log(insertionSort([2, 25, 66, 9, 13, 715, 28]));
console.log(insertionSort([43, 26, 122, 13, 344, 45, 56, 63, 99]));
console.log(insertionSort([1, 25, 3, 42, 5]));
console.log(insertionSort([12, 4, 36, 8, 310, 12]));
console.log(insertionSort([22, 423, 556, 394, 1233, 235, 76345, 55474, 232424]));
