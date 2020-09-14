// https://regexone.com/lesson/wildcards_dot

// Below are a couple strings with varying characters but the same length. Try to write a single pattern that can match the first three strings, but not the last (to be skipped). You may find that you will have to escape the dot metacharacter to match the period in some of the lines.

const tasks = ["cat.", "896.", "?=+.", 'abc1'];
const regex = /.{3}\./;

tasks.forEach(element => {
  regex.test(element) ? console.log("Match") : console.log("Skip");
})
