const array1 = ["a", "b", "c", "d"];
const array2 = ["z", "y", "i"];
const array3 = ["z", "y", "d"];

function containCommonItem(arr1 = [], arr2 = []) {
  if(!arr1 || !arr2) return false;

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
console.log(containCommonItem(array1, null));
console.log(containCommonItem(null, array2));
console.log(containCommonItem(undefined, "342323"));
