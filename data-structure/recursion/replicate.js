function replicate(num1, num2) {
  const result = [];

  function helper(repeat, element) {
    if (repeat < 1) return;

    result.push(element);
    helper(--repeat, element);
  }

  helper(num1, num2);

  return result;
}

console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(9, '*')); // [ '*', '*', '*', '*', '*', '*', '*', '*', '*' ]
console.log(replicate(6, '##')); // [ '##', '##', '##', '##', '##', '##' ]
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []
