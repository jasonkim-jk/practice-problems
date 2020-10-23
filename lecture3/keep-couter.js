function myFunc() {
  let calledCount = 0;

  return function () {
    return ++calledCount;
  };
}

const funcInstance = myFunc();

console.log(funcInstance());
console.log(funcInstance());
console.log(funcInstance());
console.log(funcInstance());
console.log(funcInstance());
