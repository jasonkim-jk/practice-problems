function reverse(str) {
  if(!str || typeof str !== 'string') return undefined;
  return str.split("").reverse().join("");
}

function reverse1(str) {
  if (!str || typeof str !== "string") return undefined;
  return [...str].reverse().join("");
}

function reverse2(str) {
  if(!str || typeof str !== 'string') return undefined;
  let reversed = "";

  for(let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }

  return reversed;
}

function reverse3(str) {
  if(!str || typeof str !== 'string') return undefined;
  let strArray = str.split("");
  const reversed = [];

  while(strArray.length) {
    reversed.push(strArray.pop());
  }

  return reversed.join("");
}

console.log(reverse(null));
console.log(reverse(undefined));
console.log(reverse(123));
console.log(reverse(true));
console.log(reverse("Hi, there"));
console.log(reverse("AbcDEfgHijk"));
console.log(reverse("1234567890"));

console.log(reverse1(null));
console.log(reverse1(undefined));
console.log(reverse1(123));
console.log(reverse1(true));
console.log(reverse1("Hi, there"));
console.log(reverse1("AbcDEfgHijk"));
console.log(reverse1("1234567890"));

console.log(reverse2(null));
console.log(reverse2(undefined));
console.log(reverse2(123));
console.log(reverse2(true));
console.log(reverse2("Hi, there"));
console.log(reverse2("AbcDEfgHijk"));
console.log(reverse2("1234567890"));

console.log(reverse3(null));
console.log(reverse3(undefined));
console.log(reverse3(123));
console.log(reverse3(true));
console.log(reverse3("Hi, there"));
console.log(reverse3("AbcDEfgHijk"));
console.log(reverse3("1234567890"));
