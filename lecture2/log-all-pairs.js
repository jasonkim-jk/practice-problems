const boxes = ["a", "b", "c", "d", "e"];

// loop from index i = 0 to the end - 1 of the array
//   loop from index j = i + 1 to the end of the array
//   print both element
function logAllPairs(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      console.log(`${array[i]} ${array[j]}`);
    }
  }
}

// loop from index i = 0 to the end of the array
//   loop from index j = 0 to the end of the array
//   print both element
function logAllPairs2(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(`${array[i]} ${array[j]}`);
    }
  }
}


logAllPairs(boxes);
console.log("=======");
logAllPairs2(boxes);
