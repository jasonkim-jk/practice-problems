function sockMerchant(n, ar) {
  const socks = {};

  for (let i = 0; i < n; i++) {
    if (!socks[ar[i]]) {
      socks[ar[i]] = 1;
    } else {
      socks[ar[i]]++;
    }
  }

  const pairedNum = Object.values(socks).reduce((acc, cur) => {
    return acc + Math.floor(cur / 2);
  }, 0);

  return pairedNum;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
