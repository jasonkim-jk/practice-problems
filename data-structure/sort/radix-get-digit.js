function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place) % 10)
}

console.log(getDigit(12345, 0))
console.log(getDigit(12345, 1))
console.log(getDigit(12345, 2))
console.log(getDigit(12345, 3))
console.log(getDigit(12345, 4))
console.log(getDigit(12345, 5))
console.log(getDigit(-12345, 0))
console.log(getDigit(-12345, 1))
console.log(getDigit(-12345, 2))
console.log(getDigit(-12345, 3))
console.log(getDigit(-12345, 4))
console.log(getDigit(-12345, 5))
