const array1 = ["a", "b", "c", "d"];
const array2 = ["z", "y", "i"];
const array3 = ["z", "y", "d"];

function containCommonItem(arr1, arr2) {
  for (let first = 0; first < arr1.length; first++) {
    for (let second = 0; second < arr2.length; second++) {
      if (arr2[second] === arr1[first]) return true;
    }
  }

  return false;
}

console.log(containCommonItem(array1, array2));
console.log(containCommonItem(array1, array3));
