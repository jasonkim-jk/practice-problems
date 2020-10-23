function capitalize(str) {
  let capitalized = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      capitalized += str[i].toUpperCase();
    } else {
      capitalized += str[i];
    }
  }

  return capitalized;
}
