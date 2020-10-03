// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// change the given integer to string and reverse it
// if the interger is negative, multiply -1 and return it to string format
// if not, just return it with string format
function reverseInt(n) {
  const revStr = n.toString.split("").reverse.join("");

  return n < 0 ? parseInt(revStr) * -1 : parseInt(revStr);
}
