function findFactorialRecursive(number) {
  if (number < 1 || typeof number !== "number") return null;
  if (number === 1) return 1;

  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  if (number < 1 || typeof number !== "number") return null;
  let result = 1;

  for (let i = number; i > 1; i--) {
    result *= i;
  }
  return result;
}

console.log(findFactorialRecursive(-10));
console.log(findFactorialIterative(-10));
console.log(findFactorialRecursive("3"));
console.log(findFactorialIterative("3"));
console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(10));
console.log(findFactorialIterative(10));
