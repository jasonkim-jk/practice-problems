// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// loop though the given string to save each character to an object as a property and value
// check all of the value of the object and find the max count
// when checking the max count, if the value is the current max, save the property
// after finishing checking, return the saved property of the max count
function maxChar(str) {
  const charMap = {};
  let maxCount = -Infinity;
  let maxCharacter = "";

  for (const char of str) {
    charMap[char] = charMap[char]++ || 1;
  }

  for (const prop in charMap) {
    if (charMap[prop] > maxCount) {
      maxCount = charMap[prop];
      maxCharacter = prop;
    }
  }

  return maxCharacter;
}
