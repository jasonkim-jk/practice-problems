// https://regexone.com/lesson/conditionals

// Go ahead and try writing a conditional pattern that matches only the lines with small fuzzy creatures below.

const tasks = ["I love cats", "I love dogs", "I love logs", "I love cogs"];
const regex = /I love (cats|dogs)/;

tasks.forEach((element) => {
  regex.test(element) ? console.log("Match") : console.log("Skip");
});
