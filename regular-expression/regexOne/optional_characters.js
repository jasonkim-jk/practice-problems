// https://regexone.com/lesson/optional_characters

// In the strings below, notice how the the plurality of the word "file" depends on the number of files found. Try writing a pattern that uses the optionality metacharacter to match only the lines where one or more files were found.

const tasks = ["1 file found?", "2 files found?", "24 files found?", "No files found."];
const regex = /\d+ files? found\?/;

tasks.forEach((element) => {
  regex.test(element) ? console.log("Match") : console.log("Skip");
});
