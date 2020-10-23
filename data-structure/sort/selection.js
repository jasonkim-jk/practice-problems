function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let currentLowest = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[currentLowest]) {
        currentLowest = j;
      }
    }

    if (currentLowest !== i) {
      [array[currentLowest], array[i]] = [array[i], array[currentLowest]];
    }
  }

  return array;
}

console.log(selectionSort([37, 45, 29, 8]));
console.log(selectionSort([2, 25, 66, 9, 13, 715, 28]));
console.log(selectionSort([43, 26, 122, 13, 344, 45, 56, 63, 99]));
console.log(selectionSort([1, 25, 3, 42, 5]));
console.log(selectionSort([12, 4, 36, 8, 310, 12]));
console.log(selectionSort([22, 423, 556, 394, 1233, 235, 76345, 55474, 232424]));
