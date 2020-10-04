// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// using loop
// loop though all array by increasing the index of the given size
// make a new array to save the picked elements
// save it to a new array using push method
// after fininshing the looping, return the previous saved array
function chunk1(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i = i + size) {
    const arrayChunk = [];
    for (let j = 0; j < size; j++) {
      if (array[i + j]) {
        arrayChunk[j] = array[i + j];
      }
    }
    result.push(arrayChunk);
  }

  return result;
}
