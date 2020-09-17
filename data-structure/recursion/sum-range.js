function sumRange(number) {
  // check if the input number is greater than 0, if so, just return 0
  if(number < 1) return 0;

  // call this recursive function again passing a number is subtracted by 1
  // add the return value of calling the function with the input current number
  // return them
  return number + sumRange(number - 1);
}

console.log(sumRange(6));
console.log(sumRange(10));
console.log(sumRange(36));
