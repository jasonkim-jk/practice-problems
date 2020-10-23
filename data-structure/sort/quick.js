function pivot(array, start = 0, end = array.length - 1) {
  let pivot = array[start];
  let swapIndex = start;

  for (let i = start + 1; i < array.length; i++) {
    if (pivot > array[i]) {
      swapIndex++;
      [array[swapIndex], array[i]] = [array[i], array[swapIndex]];
    }
  }

  [array[swapIndex], array[start]] = [array[start], array[swapIndex]];
  return swapIndex;
}

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}

const nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(quickSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
console.log(quickSort([])); // []
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
