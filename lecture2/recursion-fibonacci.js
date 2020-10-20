function fibonacciInterative(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  const fibonacci = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }

  return fibonacci[n];
}

function fibonacciRecursive(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
}

console.log(fibonacciInterative(5));
console.log(fibonacciRecursive(5));
console.log(fibonacciInterative(10));
console.log(fibonacciRecursive(10));
