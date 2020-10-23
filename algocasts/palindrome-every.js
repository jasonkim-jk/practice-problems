function palindrome(str) {
  return str.split("").every((character, index) => character === str[str.length - 1 - index]);
}
