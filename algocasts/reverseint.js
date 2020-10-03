function reverseInt(n) {
  const revStr = n.toString.split("").reverse.join("");

  return n < 0 ? parseInt(revStr) * -1 : parseInt(revStr);
}
