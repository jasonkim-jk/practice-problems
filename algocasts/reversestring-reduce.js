function reverse(str) {
  return str.split("").reduce((reversed, charater) => {
    return charater + reversed;
  }, "");
}
