// https://regexone.com/lesson/kleene_operators

// Below are a few simple strings that you can match using both the star and plus metacharacters.

const tasks = ["aaaabcc", "aabbbbc", "aacc", "a"];
const regex = /aa+b*c+/;

tasks.forEach((element) => {
  regex.test(element) ? console.log("Match") : console.log("Skip");
});
