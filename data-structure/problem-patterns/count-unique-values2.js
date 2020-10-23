function countUniqueValues2(array) {
  let firstPointer = 0;

  for (let i = 0; i < array.length; i++) {
    let secondPointer = i + 1;
    if(array[firstPointer] !== array[secondPointer]) {
      firstPointer++;
      array[firstPointer] = array[secondPointer];
    }
  }

  return firstPointer;
}

console.log(countUniqueValues2([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues2([]));
console.log(countUniqueValues2([1]));
console.log(countUniqueValues2([1, 1]));
console.log(countUniqueValues2([-2, -1, -1, 0, 1]));
