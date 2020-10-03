// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// loop though from the end of the string
// declare a new string to save the reversed string
// get an element of the index and add it to a new string
// return the reversed string
function reverse(str) {
  let result = "";
  for (let i = str.length - 1; i > -1; i--) {
    result = result + str[i];
  }
  return result;
}
