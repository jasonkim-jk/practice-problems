function totalIntegers(array) {
  let count = 0;

  function helper(newArray) {
    if (newArray.length === 0) return;

    const element = newArray[0];

    if (typeof element === "object") {
      helper(element);
    } else if (typeof element === "number") {
      count++;
    }

    helper(newArray.slice(1));
  }

  helper(array);

  return count;
}

const seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7
const eight = totalIntegers([[[5], 3], 0, 2, ["foo"], [100], [4, [5, 6]]]); // 8
console.log(seven, eight);
