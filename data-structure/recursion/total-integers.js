function totalIntegers(array) {
  if(array.length === 0) return 0;

  let count = 0
  let firstElement = array[0];

  if(Array.isArray(firstElement)) {
    count += totalIntegers(firstElement)
  }
  if(Number.isInteger(firstElement)) {
    count++;
  }

  return count + totalIntegers(array.slice(1));
}

const seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7
console.log(seven);
