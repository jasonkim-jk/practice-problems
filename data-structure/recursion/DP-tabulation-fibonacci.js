function fibonacci(num) {
  if (num <= 2) return 1;

  const fiboNum = [0, 1, 1];
  // fiboNum[num] = fiboNum[num - 1] + fiboNum[num - 2];
  for (let i = 3; i <= num; i++) {
    fiboNum[i] = fiboNum[i - 1] + fiboNum[i - 2];
  }

  return fiboNum[num];
}

console.log(fibonacci(40));
