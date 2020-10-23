const array1 = ["a", "b", "c", "d"];
const array2 = ["z", "y", "i"];
const array3 = ["z", "y", "d"];

function containCommonItem(arr1 = [], arr2 = []) {
  if (!arr1 || !arr2) return false;

  return arr1.some((item) => arr2.includes(item));
}

console.log(containCommonItem(array1, array2));
console.log(containCommonItem(array1, array3));
console.log(containCommonItem(array1, null));
console.log(containCommonItem(null, array2));
console.log(containCommonItem(undefined, "342323"));
