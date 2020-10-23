function getDigit(num, place) {
  return Math.floor((Math.abs(num) / Math.pow(10, place)) % 10);
}

function digitCount(num) {
  return num ? Math.floor(Math.log10(Math.abs(num))) + 1 : 1;
}

function mostDigits(array) {
  const digits = array.map((element) => digitCount(element));
  return Math.max(...digits);
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    var digitBuckets = Array.from({ length: 10 }, () => []);
    nums.forEach((num) => {
      const eachDigit = getDigit(num, k);
      digitBuckets[eachDigit].push(num);
    });
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([7, 45, 29, 128]));
console.log(radixSort([-2, 25, -66, 9122, 1333, 731335, 228]));
console.log(radixSort([43, 261, 111122, 133, 6664344, 445645645, 546, 63, 99]));
console.log(radixSort([1, 25, 333, 42453, -5455]));
console.log(radixSort([22, 423, 556, 394, 1233, 235, 76345, 55474, 232424]));
