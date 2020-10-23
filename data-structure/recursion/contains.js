function contains(obj, value) {
  for (const prop in obj) {
    if (typeof obj[prop] === "object") {
      return contains(obj[prop], value);
    }

    if (obj[prop] === value) {
      return true;
    }
  }

  return false;
}

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  }
};

const hasIt = contains(nestedObject, 44); // true
const doesntHaveIt = contains(nestedObject, "foo"); // false

console.log(hasIt);
console.log(doesntHaveIt);
