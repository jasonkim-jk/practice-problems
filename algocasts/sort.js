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

// loop from index i = 0 to the end of the array
//   save the index of the i as the indexOfMin
//   loop from index j = i + 1 to end of the array
//     if the value of any index j is less than arr[indexOfMin],
//       save the index as the new value of the indexOfMin
//   after finishing the inner loop, swap arr[indexOfMin] and arr[i] if two index are not same
// return arr
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (i !== indexOfMin) {
      [arr[indexOfMin], arr[i]] = [arr[i], arr[indexOfMin]];
    }
  }

  return arr;
}

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
