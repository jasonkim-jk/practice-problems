const array1 = ["a", "b", "c", "d"];
const array2 = ["z", "y", "i"];
const array3 = ["z", "y", "d"];

function containCommonItem(arr1, arr2) {
  const mySet = new Set();

  for (let element of arr1) {
    mySet.add(element);
  }

  for (let value of arr2) {
    if (mySet.has(value)) return true;
  }

  return false;
}

console.log(containCommonItem(array1, array2));
console.log(containCommonItem(array1, array3));
