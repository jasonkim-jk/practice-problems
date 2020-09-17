function factorial(number) {
  if (number === 1) return 1;

  return number * factorial(number - 1);
}

console.log(factorial(5));
console.log(factorial(9));
console.log(factorial(13));
console.log(factorial(15));
