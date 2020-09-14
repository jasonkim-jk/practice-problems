// https://regexone.com/lesson/nested_groups

// For the following strings, write an expression that matches and captures both the full date, as well as the year of the date.

const tasks = ["Jan 1987", "May 1969", "Aug 2011"];
const regex = /^([A-Z][a-z]+ (\d+))/;

tasks.forEach((element) => {
  regex.test(element) ? console.log("Match") : console.log("Skip");
});
