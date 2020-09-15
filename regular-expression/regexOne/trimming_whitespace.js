// https://regexone.com/problem/trimming_whitespace

// Write a simple regular expression to capture the content of each line, without the extra whitespace.

const tasks = ["			The quick brown fox...	", "   jumps over the lazy dog."];
const regex = /^\s*(.*)\s*$/;

tasks.forEach((element) => {
  regex.test(element) ? console.log("Capture") : console.log("Skip");
});
