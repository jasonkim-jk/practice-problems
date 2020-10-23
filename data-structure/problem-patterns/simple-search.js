function search(array, value) {
  // declare a variable to save an index
  let result = -1;

  // loop though all array
  array.forEach((element, index) => {
    // check the value is same with current element
    if(element === value) {
      // save the index
      result = index;
    }
  });

  // return the result variable
  return result;
}

console.log(search([1,2,3,4,5,6], 4))
console.log(search([1,2,3,4,5,6], 6))
console.log(search([1,2,3,4,5,6], 11))
