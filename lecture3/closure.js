const test = (() => {
  const stacked = [];

  return function (str) {
    stacked.push(str);
    return stacked;
  };
})();

console.log(test("abc"));
console.log(test("def"));
console.log(test("123"));
console.log(test("456"));
