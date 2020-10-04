// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const result = [];
  let counter = 1;
  let startColumn = 0;
  let startRow = 0;
  let endColumn = n - 1;
  let endRow = n - 1;

  for (let i = 0; i < n; i++) {
    result.push([]);
  }

  while (startColumn <= endColumn && startRow <= endRow) {
    for (let a = startColumn; a <= endColumn; a++) {
      result[startRow][a] = counter;
      counter++;
    }

    startRow++;

    for (let b = startRow; b <= endRow; b++) {
      result[b][endColumn] = counter;
      counter++;
    }

    endColumn--;

    for (let c = endColumn; c >= startColumn; c--) {
      result[endRow][c] = counter;
      counter++;
    }

    endRow--;

    for (let d = endRow; d >= startRow; d--) {
      result[d][startColumn] = counter;
      counter++;
    }

    startColumn++;
  }

  console.log(result);
  return result;
}
