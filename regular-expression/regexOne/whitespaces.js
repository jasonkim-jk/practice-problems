// https://regexone.com/lesson/whitespaces

// In the strings below, you'll find that the content of each line is indented by some whitespace from the index of the line (the number is a part of the text to match). Try writing a pattern that can match each line containing whitespace characters between the number and the content. Notice that the whitespace characters are just like any other character and the special metacharacters like the star and the plus can be used as well.

const tasks = ["1.   abc", "2.	abc", "3.           abc", "4.abc"];
const regex = /\d.\s+(abc)/;

tasks.forEach((element) => {
  regex.test(element) ? console.log("Match") : console.log("Skip");
});
