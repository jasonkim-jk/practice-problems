// https://regexone.com/problem/matching_html

// Go ahead and write regular expressions for the following examples.

const tasks = [
  "<a>This is a link</a>",
  "<a href='https://regexone.com'>Link</a>",
  "	<div class='test_style'>Test</div>",
  "<div>Hello <span>world</span></div>"
];
const regex = /([^<]\w*)/;

tasks.forEach((element) => {
  regex.test(element) ? console.log("Match") : console.log("Skip");
});
