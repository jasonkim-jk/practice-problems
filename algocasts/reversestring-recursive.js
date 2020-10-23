function reverse(str) {
  const arr = str.split("");
  let reversed = "";

  function getLastChar(array) {
    if (array.length) {
      reversed += array.pop();
      getLastChar(array);
    }
  }

  getLastChar(arr);
  return reversed;
}
