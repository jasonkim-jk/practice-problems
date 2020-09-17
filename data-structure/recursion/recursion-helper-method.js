function collecOddValue(array) {
  // declare a result array;
  const result = [];

  // declare a new recursion helper function
  function helper(input) {
    // check the input array's length is greater than 0, otherwise return
    if(input.length === 0) {
      return;
    }

    // check the first element of the array is odd or not
    if(input[0] % 2 !== 0) {
      // if so, save the value to the result array
      result.push(input[0])
    }

    // call the recursion again and pass the other array element
    helper(input.slice(1))
  }

  // call the recursion function and pass the input array
  helper(array)

  // return the result
  return result;
}

console.log(collecOddValue([1,2,3,4,5,7,8,9]))
