// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// make a new variable to store the matched vowel count
// make the given string to be lower cases
// iterate to check if the each character is vowel (a,e,i,o,u)
// if found vowels, incerase the vowelCount by 1
// return the saved count
function vowels(str) {
  let vowelCount = 0;
  const vowelCharters = "aeiou";

  for (const char of str.toLowerCase()) {
    if (vowelCharters.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}
