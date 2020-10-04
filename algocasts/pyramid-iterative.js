// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let level = "";
    for (let j = 1; j <= n * 2 - 1; j++) {
      if (j >= n - i + 1 && j <= n + i - 1) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}
