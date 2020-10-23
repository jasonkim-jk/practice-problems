function digitCount2(num) {
  return Math.floor(Math.abs(num)).toString().length;
}

function digitCount(num) {
  return num ? Math.floor(Math.log10(Math.abs(num))) + 1 : 1;
}

console.log(digitCount(1));
console.log(digitCount(1.5));
console.log(digitCount(12));
console.log(digitCount(123));
console.log(digitCount(1234));
console.log(digitCount(12345));
console.log(digitCount(-12345));
console.log(digitCount(-145));
console.log(digitCount(-1));
console.log(digitCount(0));
