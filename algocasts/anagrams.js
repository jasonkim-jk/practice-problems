// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// check if the length of two strings are same or not
// remove all spaces or punctuation and make the string as lowercase
// save each character and count it using object
// compare each property and value are same with two objects
function anagrams(stringA, stringB) {
  const objStringA = getCharMap(stringA);
  const objStringB = getCharMap(stringB);

  if (Object.keys(objStringA).length !== Object.keys(objStringB).length) return false;

  for (const prop in objStringA) {
    if (objStringA[prop] !== objStringB[prop]) return false;
  }

  return true;
}

function getCharMap(string) {
  const newStr = string.replace(/[^\w]/g, "").toLowerCase();
  const charMap = {};

  for (const char of newStr) {
    charMap[char] = charMap[char]++ || 1;
  }

  return charMap;
}
