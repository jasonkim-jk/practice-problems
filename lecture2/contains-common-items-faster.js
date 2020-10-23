const array1 = ["a", "b", "c", "d"];
const array2 = ["z", "y", "i"];
const array3 = ["z", "y", "d"];

function containCommonItem(arr1, arr2) {
  const tempObj = {};

  for(let element of arr1) {
    tempObj[element] = true;
  }

  for(let value of arr2) {
    if(tempObj[value]) return true;
  }

  return false;
}

console.log(containCommonItem(array1, array2));
console.log(containCommonItem(array1, array3));
