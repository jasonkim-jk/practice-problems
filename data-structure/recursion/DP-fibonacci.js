function fibonacci(num, memo = []) {
  if (memo[num] !== undefined) return memo[num];
  if (num <= 2) return 1;
  memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  return memo[num];
}

console.log(fibonacci(45));
