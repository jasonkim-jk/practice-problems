function power(base, exponent) {
  if(exponent === 0) return 1

  return base * power(base, exponent - 1);
}

console.log(power(5, 0));
console.log(power(7, 1));
console.log(power(6, 2));
console.log(power(9, 3));
console.log(power(2, 4));
console.log(power(3, 5));
