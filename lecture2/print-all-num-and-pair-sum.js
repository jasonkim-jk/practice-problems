function printAllNumbersThenAllPairSums(numbers) {
  numbers.forEach((number) => {
    console.log(number);
  });

  console.log("===");

  numbers.forEach((firstNumber) => {
    numbers.forEach((secondNumber) => {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);
