function mergeSort(array) {
  if(!array) return null;
  if (array.length <= 1) return array;

  const half = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, half));
  const right = mergeSort(array.slice(half));

  return merge(left, right);
}

function merge(array1, array2) {
  const merged = [];
  while (array1.length && array2.length) {
    if (array1[0] > array2[0]) {
      merged.push(array2.shift());
    } else {
      merged.push(array1.shift());
    }
  }

  merged.push(...array1);
  merged.push(...array2);

  return merged;
}

console.log(mergeSort());
console.log(mergeSort([]));
console.log(mergeSort([37]));
console.log(mergeSort([37, 45, 29, 8]));
console.log(mergeSort([2, 25, 66, 9, 13, 715, 28]));
console.log(mergeSort([43, 26, 122, 13, 344, 45, 56, 63, 99]));
console.log(mergeSort([1, 25, 3, 42, 5]));
console.log(mergeSort([12, 4, 36, 8, 310, 12]));
console.log(mergeSort([22, 423, 556, 394, 1233, 235, 76345, 55474, 232424]));
