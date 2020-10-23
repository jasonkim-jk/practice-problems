function digitCount(num) {
  return num ? Math.floor(Math.log10(Math.abs(num))) + 1 : 1;
}

function mostDigits(array) {
  const digits = array.map(element => digitCount(element))
  return Math.max(...digits)
}

console.log(mostDigits([7, 45, 29, 128]));
console.log(mostDigits([-2, 25, -66, 9122, 1333, 731335, 228]));
console.log(mostDigits([43, 261, 111122, 133, 6664344, 445645645, 546, 63, 99]));
console.log(mostDigits([1, 25, 333, 42453, -5455]));
console.log(mostDigits([22, 423, 556, 394, 1233, 235, 76345, 55474, 232424]));
