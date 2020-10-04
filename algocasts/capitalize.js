// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// using regular expression
// make a RegEx to find the first letter of each word and the first character of the given sentence
// change them to the uppercase and return the result string
function capitalize(str) {
  return str.replace(/^\w|(\s[a-z])/g, (match) => match.toUpperCase());
}
