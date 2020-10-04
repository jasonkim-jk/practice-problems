// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  const fibValue = [0, 1, 1];

  function fibHelper(number) {
    if (fibValue[number]) return fibValue[number];
    return (fibValue[number] = fibHelper(number - 1) + fibHelper(number - 2));
  }

  fibHelper(n);

  return fibValue[n];
}

module.exports = fib;
