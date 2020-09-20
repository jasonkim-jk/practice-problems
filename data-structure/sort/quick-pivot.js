function pivot(array, start = 0, end = array.length + 1) {
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

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
