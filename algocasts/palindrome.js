function palindrome(str) {
  const reversed = str.split("").reduce((rev, char) => char + rev, "");
  return reversed === str;
}
