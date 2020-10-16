// check the input is valid
// declare a new Map variable
// loop though the given array
//   if the map already has an element, return the element
//   if not, set each element to be true
// return undefined

function findFirstRecurring(array) {
  if (!array || array.length < 2 || typeof array !== "object") return undefined;

  const map = new Map();
  for (let element of array) {
    if (map.has(element)) {
      return element;
    } else {
      map.set(element, true);
    }
  }

  return undefined;
}

function findFirstRecurring2(array) {
  if (!array || array.length < 2 || typeof array !== "object") return undefined;

  const mySet = new Set();
  for (let element of array) {
    if (mySet.has(element)) {
      return element;
    } else {
      mySet.add(element);
    }
  }

  return undefined;
}

function findFirstRecurring3(array) {
  if (!array || array.length < 2 || typeof array !== "object") return undefined;

  const map = {};
  for (let element of array) {
    if (map[element]) {
      return element;
    } else {
      map[element] = true;
    }
  }

  return undefined;
}

function findFirstRecurring4(array) {
  if (!array || array.length < 2 || typeof array !== "object") return undefined;

  let minValue = Infinity;
  let number;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        if (j - i < minValue && j < minValue) {
          minValue = j - i;
          number = array[i];
        }
      }
    }
  }

  return number;
}

console.log(findFirstRecurring(null));
console.log(findFirstRecurring(undefined));
console.log(findFirstRecurring());
console.log(findFirstRecurring(123));
console.log(findFirstRecurring(true));
console.log(findFirstRecurring("test"));
console.log(findFirstRecurring([2, 5, 1, 3, 4, 2, 4, 2, 4, 10]));
console.log(findFirstRecurring([2, 1, 3, 1, 2, 3, 5, 1, 2, 5]));
console.log(findFirstRecurring([2, 5, 5, 2, 3, 5, 1, 2, 4]));

console.log(findFirstRecurring2(null));
console.log(findFirstRecurring2(undefined));
console.log(findFirstRecurring2());
console.log(findFirstRecurring2(123));
console.log(findFirstRecurring2(true));
console.log(findFirstRecurring2("test"));
console.log(findFirstRecurring2([2, 5, 1, 3, 4, 2, 4, 2, 4, 10]));
console.log(findFirstRecurring2([2, 1, 3, 1, 2, 3, 5, 1, 2, 5]));
console.log(findFirstRecurring2([2, 5, 5, 2, 3, 5, 1, 2, 4]));

console.log(findFirstRecurring3(null));
console.log(findFirstRecurring3(undefined));
console.log(findFirstRecurring3());
console.log(findFirstRecurring3(123));
console.log(findFirstRecurring3(true));
console.log(findFirstRecurring3("test"));
console.log(findFirstRecurring3([2, 5, 1, 3, 4, 2, 4, 2, 4, 10]));
console.log(findFirstRecurring3([2, 1, 3, 1, 2, 3, 5, 1, 2, 5]));
console.log(findFirstRecurring3([2, 5, 5, 2, 3, 5, 1, 2, 4]));

console.log(findFirstRecurring4(null));
console.log(findFirstRecurring4(undefined));
console.log(findFirstRecurring4());
console.log(findFirstRecurring4(123));
console.log(findFirstRecurring4(true));
console.log(findFirstRecurring4("test"));
console.log(findFirstRecurring4([2, 5, 1, 3, 4, 2, 4, 2, 4, 10]));
console.log(findFirstRecurring4([2, 1, 3, 1, 2, 3, 5, 1, 2, 5]));
console.log(findFirstRecurring4([2, 5, 5, 2, 3, 5, 1, 2, 4]));
