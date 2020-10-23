function anagrams(stringA, stringB) {
  stringA = stringA.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
  stringB = stringB.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");

  return stringA === stringB;
}
