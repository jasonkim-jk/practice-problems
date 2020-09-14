// https://regexone.com/lesson/misc_meta_characters

// Below are a number of different strings, try out the different types of metacharacters or anything we've learned in the previous lessons and continue on when you are ready.

const tasks = [
  "The quick brown fox jumps over the lazy dog.",
  "There were 614 instances of students getting 90.0% or above.",
  "The FCC had to censor the network for saying &$#*@!."
];
const regex = /^.*\.$/;

tasks.forEach((element) => {
  regex.test(element) ? console.log("Match") : console.log("Skip");
});
