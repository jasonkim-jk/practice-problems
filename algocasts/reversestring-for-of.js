function reverse(str) {
  let reversed = "";
  for (let charater of str) {
    reversed = charater + reversed;
  }
  return reversed;
}
