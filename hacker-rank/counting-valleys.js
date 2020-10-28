/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
  let count = 0;
  let currentLevel = 0;
  const valley = [];

  for (let step of path) {
    if (step === "D") {
      if (currentLevel <= 0) {
        valley.push(step);
      }
      currentLevel--;
    }

    if (step === "U") {
      currentLevel++;
      if (currentLevel <= 0) {
        valley.pop();
        if (currentLevel === 0 && valley.length === 0) {
          count++;
        }
      }
    }
  }

  return count;
}

console.log(countingValleys(8, "UDDDUDUU"));  // 1
console.log(countingValleys(12, "DDUUDDUDUUUD"));  // 2
