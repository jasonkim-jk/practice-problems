// https://regexone.com/lesson/line_beginning_end

// Try to match each of the strings below using these new special characters.

const tasks = [
  "Mission: successful",
  "Last Mission: unsuccessfu",
  "Next Mission: successful upon capture of target"
];
const regex = /^Mission: successful$/;

tasks.forEach((element) => {
  regex.test(element) ? console.log("Match") : console.log("Skip");
});
