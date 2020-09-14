// https://regexone.com/lesson/character_ranges

// In the exercise below, notice how all the match and skip lines have a pattern, and use the bracket notation to match or skip each character from each line. Be aware that patterns are case sensitive and a-z differs from A-Z in terms of the characters it matches (lower vs upper case).

const tasks = ['Ana', 'Bob', 'Cpc', 'aax', 'bby', 'ccz'];
const regex = /[A-C][n-p][a-c]/;

tasks.forEach((element) => {
  regex.test(element) ? console.log("Match") : console.log("Skip");
});
