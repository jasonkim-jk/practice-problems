function countUniqueValues(array) {
  const result = {};

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    element in result ? (result[element] += 1) : (result[element] = 1);
  }

  return Object.keys(result).length;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
