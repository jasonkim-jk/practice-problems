// https://regexone.com/lesson/repeating_characters

// In the lines below, the last string with only one z isn't what we would consider a proper spelling of the slang "wazzup?". Try writing a pattern that matches only the first two spellings by using the curly brace notation above.

const tasks = ["wazzzzzup", "wazzzup", "wazup"];
const regex = /waz{3,5}up/;

tasks.forEach((element) => {
  regex.test(element) ? console.log("Match") : console.log("Skip");
});
