// using split and slice
// make an empty string to store capitalized words
// split the given string into an array
// loop though the whole array and change each word's first charactor to the uppercase and concaterate the left word
// return the result without the last space
function capitalize(str) {
  let capitalized = "";

  for (const word of str.split(" ")) {
    capitalized += word[0].toUpperCase() + word.slice(1) + " ";
  }

  return capitalized.slice(0, capitalized.length - 1);
}
