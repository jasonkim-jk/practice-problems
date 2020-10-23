function sumZero(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let sum = array[left] + array[right];

    if(sum === 0) {
      return [array[left], array[right]];
    } else if(sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
console.log(sumZero([-23, -11, -3, -2, -1, 0, 1, 2, 5, 23, 59]));
console.log(sumZero([-7, -5, -4, -3, -2, -1, 0, 1, 2, 5, 8, 9, 11, 12]));
