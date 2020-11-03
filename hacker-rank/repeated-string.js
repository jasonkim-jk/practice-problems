// Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length n in the infinitely repeating string.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider

// Complete the repeatedString function below.
// check if the given array has 'a' and count it
// save the value (n / length of the given string ) * count of 'a's
// loop though from index = 0 to n % length of the given string
//   check if each element is 'a', then increase the total count
// return the total count
function repeatedString(s, n) {
  const regex = /[a]/g;
  const count = s.match(regex);

  if (!count) return 0;

  let totalCount = Math.floor(n / s.length) * count.length;

  for (let i = 0; i < n % s.length; i++) {
    if (s[i] === "a") {
      totalCount++;
    }
  }

  return totalCount;
}

function repeatedString2(s, n) {
  let count = (s.match(/a/g) || []).length * Math.floor(n / s.length);
  let remainder = n % s.length;
  let remainderCount = (s.substring(0, remainder).match(/a/g) || []).length;

  return count + remainderCount;
}

console.log(repeatedString("aba", 10)); // 7
console.log(repeatedString("a", 1000000000000)); // 1000000000000
