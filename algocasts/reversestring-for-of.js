function reverse(str) {
  let result = "";
  for (let charater of str) {
    result = charater + result;
  }
  return result;
}
