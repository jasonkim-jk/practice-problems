function collecOddValue(array) {
  // declare a result array;
  let result = [];

  // check the array length to make a end condition
  if(array.length === 0) {
    return result;
  }

  // check the first element of the input array is odd or not, and save it to the result array
  if(array[0] % 2 !== 0) {
    result.push(array[0])
  }

  // call the recursion function again and pass the left element
  // concatenate the return of the function and assign it to the result
  result = result.concat(collecOddValue(array.slice(1)));

  // return the result
  return result;
}

console.log(collecOddValue([1, 2, 3, 4, 5, 7, 8, 9]));
