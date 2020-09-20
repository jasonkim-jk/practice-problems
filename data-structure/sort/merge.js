function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  let middle = Math.floor(array.length / 2);
  let leftArray = mergeSort(array.slice(0, middle));
  let rightArray = mergeSort(array.slice(middle));

  return merge(leftArray, rightArray);
}

console.log(mergeSort([10, 24, 76, 73]));
console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));
console.log(mergeSort([1, 10, 50, 2, 14, 99, 100]));
