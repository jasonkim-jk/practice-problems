function naiveSearch(long, short) {
  let matchCount = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }

      if (j === short.length - 1) matchCount++;
    }
  }

  return matchCount;
}

console.log(naiveSearch("lorie loled", "lo"));
console.log(naiveSearch("javascript", "asc"));
console.log(naiveSearch("javascript java", "ja"));
console.log(naiveSearch("HTML CSS5 React", "ML C"));
console.log(naiveSearch("HTML CSS5 React", "S5"));
console.log(naiveSearch("HTML CSS5 React", "S3"));
