function steps(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    console.log(result.padStart(i, "#").padEnd(n));
  }
}
