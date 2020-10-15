// Naive
function hasPairWithSum(arr, sum) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }

  return false;
}

// better
function hasPairWithSum2(arr, sum) {
  if (!arr) return false;

  const mySet = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) return true;
    mySet.add(sum - arr[i]);
  }

  return false;
}

console.log(hasPairWithSum([1, 2, 3, 4, 5, 6, 7, 8, 100], 108));
console.log(hasPairWithSum([1, 2, 3, 4, 5, 6, 7, 8, 100], 109));
console.log(hasPairWithSum2([1, 2, 3, 4, 5, 6, 7, 8, 100], 108));
console.log(hasPairWithSum2([1, 2, 3, 4, 5, 6, 7, 8, 100], 109));
