function SumSquares(array) {
  // declare a result variable which saves sumbs of numbers
  let total = 0;

  // declare a recursive helper function
  function helper(newArray) {
    // check the length of the input array whether it is 0 or not, if so, just return
    if (newArray.length === 0 ) return;

    // get the first element of the array
    const firstElement = newArray[0];
    // check the data type wheter it is object(array) or number
    // if object, call the recursive function, and passing it again
    // if number, get a square and sum it to the result
    if(typeof firstElement === 'object') {
      helper(firstElement);
    } else if (typeof firstElement === 'number') {
      total += Math.pow(firstElement, 2);
    }

    // call the recursive function, and passing array from index 1
    helper(newArray.slice(1))
  }

  // call the helper function
  helper(array);

  // return the result
  return total;
}



let l = [1, 2, 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1, 2], 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]];
console.log(SumSquares(l)); // 1 = 1

l = [10, [[10], 10], [10]];
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400
