// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// make a nested loop to make a N level step
// in a inner loop, as the index grows,
// assign the index element to be # when the index of the inner loop is less than the index of the outer loop
// otherwise to be " " and save them to a string
// after finishing the inner loop, print the saved string
function steps(n) {
  for (let i = 1; i <= n; i++) {
    let step = "";
    for (let j = 1; j <= n; j++) {
      if (j <= i) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
}
