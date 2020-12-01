values = [4, 6, 5, 7, 8, 2, 2, 5];
values1 = [4, 6, 5, 7, 0, 2, 2, 5];
values2 = [];

// check if the input array is null, undefined or empty, if so, return 0
// loop through the given array to get a total value multiplied by each element
//   check if each element is equal to zero, if so, return 0
//   if not, multiply it with the total and save it into total again
// loop through the given array again
//   divide the total value by the current element value and save it into the result array
// return the result

// Time complexity: O(2n)
// Space complexity: O(n)

function multiplyArray(array) {
  if (!array || !array.length) return 0;

  const result = [];
  let total = 1;

  for (let element of array) {
    if (element === 0) return 0;

    total *= element;
  }

  for (let elem of array) {
    result.push(total / elem);
  }

  return result;
}

console.log(multiplyArray(values));
console.log(multiplyArray(values1));
console.log(multiplyArray(values2));
