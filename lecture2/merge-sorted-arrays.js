// check if the given inputs are correct data
// declare a new array to store elements of two arrays
// loop through while the length of each array is greate than 0
//   check which of the first element of each array is smaller
//   push the smaller one to the new array
//   delete the pushed element from the original array
// if there are left elements of two arrays, push it into the new array
// return the new array

function mergeSortedArrays1(arr1 = [], arr2 = []) {
  if (!arr1 || !arr2 || typeof arr1 !== "object" || typeof arr2 !== "object") return undefined;

  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const sortedArray = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] > arr2[0]) {
      sortedArray.push(arr2.shift());
    } else if (arr1[0] <= arr2[0]) {
      sortedArray.push(arr1.shift());
    }
  }

  sortedArray.push(...arr1);
  sortedArray.push(...arr2);

  return sortedArray;
}

function mergeSortedArrays(arr1 = [], arr2 = []) {
  if (!arr1 || !arr2 || typeof arr1 !== "object" || typeof arr2 !== "object") return undefined;

  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const sortedArray = [];
  let indexOfArray1 = 0;
  let indexOfArray2 = 0;

  while (indexOfArray1 < arr1.length || indexOfArray2 < arr2.length) {
    if (arr1[indexOfArray1] > arr2[indexOfArray2] || arr1[indexOfArray1] === undefined) {
      sortedArray.push(arr2[indexOfArray2]);
      indexOfArray2++;
    } else {
      sortedArray.push(arr1[indexOfArray1]);
      indexOfArray1++;
    }
  }

  return sortedArray;
}

console.log(mergeSortedArrays1(null, undefined));
console.log(mergeSortedArrays1(123, 4547));
console.log(mergeSortedArrays1([0, 3, 4, 31], "string"));
console.log(mergeSortedArrays1());
console.log(mergeSortedArrays1([0, 3, 4, 31]));
console.log(mergeSortedArrays1([0, 3, 4, 31], [4, 6, 30]));
console.log(mergeSortedArrays(null, undefined));
console.log(mergeSortedArrays(123, 4547));
console.log(mergeSortedArrays([0, 3, 4, 31], "string"));
console.log(mergeSortedArrays());
console.log(mergeSortedArrays([0, 3, 4, 31]));
console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
