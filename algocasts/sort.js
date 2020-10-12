// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// loop though from index i = 0 to the length of the array
//   loop though from index j = 0 to the lenght of the array - i - 1
//     if the value of the index j is greater than the value of an index of j + 1
//       swap two values
// return array
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }

  return arr;
}

function selectionSort(arr) {}

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
