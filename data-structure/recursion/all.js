function all(array, callback) {
  const newArray = [...array];

  if (newArray.length === 0) return true;

  if (callback(newArray[0])) {
    newArray.shift();
    return all(newArray, callback);
  } else {
    return false;
  }
}

const allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7;
});

console.log(allAreLessThanSeven); // false

const allAreLessThanSeven2 = all([1, 2, 9], function (num) {
  return num < 10;
});

console.log(allAreLessThanSeven2); // false
