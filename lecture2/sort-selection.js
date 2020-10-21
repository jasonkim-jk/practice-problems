function selectionSort(array) {
  if(!array) return null;

  const length = array.length;
  if(length <= 1) return array;

  for(let i = 0; i < length; i++) {
    let smallestIndex = i;
    for(let j = i; j < length; j++) {

      if (array[j] < array[smallestIndex]) {
        smallestIndex = j;
      }
    }
    [array[i], array[smallestIndex]] = [array[smallestIndex], array[i]];
  }

  return array;
}

console.log(selectionSort());
console.log(selectionSort([]));
console.log(selectionSort([37]));
console.log(selectionSort([37, 45, 29, 8]));
console.log(selectionSort([2, 25, 66, 9, 13, 715, 28]));
console.log(selectionSort([43, 26, 122, 13, 344, 45, 56, 63, 99]));
console.log(selectionSort([1, 25, 3, 42, 5]));
console.log(selectionSort([12, 4, 36, 8, 310, 12]));
console.log(selectionSort([22, 423, 556, 394, 1233, 235, 76345, 55474, 232424]));
