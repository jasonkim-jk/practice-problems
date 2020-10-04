// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// using regular expression
// make a new regular expression to check this are vowels(a,e,i,o,u)
// check the given string is including vowels using match method
// if the returned array exists, return the length of the array, if not, just return 0
function vowels(str) {
  const regex = /[aeiou]/gi;
  const vowel = str.match(regex);
  return vowel ? vowel.length : 0;
}
