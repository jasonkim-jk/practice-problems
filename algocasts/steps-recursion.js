function steps(n) {
  function printSteps(step) {
    let result = "";
    for (let j = 1; j <= n; j++) {
      if (j <= step) {
        result += "#";
      } else {
        result += " ";
      }
    }
    console.log(result);

    if (step === n) return;
    printSteps(++step);
  }
  printSteps(1, 4);
}
