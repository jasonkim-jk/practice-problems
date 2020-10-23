function maxSubarraySum(array, num) {
  // declare variables to save maximum sum and temporary sum
  let maxSum = 0;
  let tempSum = 0;

  // check whether the length of the input array is shorter than the counting number
  if(array.length < num) {
    return null;
  }

  // once, get a sum of the first window(count of num)
  for (let i = 0; i < num; i++) {
    tempSum += array[i]
  }

  // assign the tempSum to maxSum
  maxSum = tempSum;

  // loop though the whole array starting index of the num
  for(let j = num; j < array.length; j++) {
    // add the current element to the tempSum, subtract the previous starting element
    tempSum += array[j] - array[j - num];
    // compare and get the max value
    maxSum = Math.max(maxSum, tempSum)
  }

  // return the result
  return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
