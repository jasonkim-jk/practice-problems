function capitalize(str) {
  const capitalized = [];

  for (const word of str.split(" ")) {
    capitalized.push(word[0].toUpperCase() + word.slice(1));
  }

  return capitalized.join(" ");
}
