// https://regexone.com/problem/matching_emails

// Below are a few common emails, in this example, try to capture the name of the email, excluding the filter (+ character and afterwards) and domain (@ character and afterwards).

const tasks = [
  "tom@hogwarts.com",
  "tom.riddle@hogwarts.com",
  "tom.riddle+regexone@hogwarts.com",
  "tom@hogwarts.eu.com",
  "potter@hogwarts.com",
  "harry@hogwarts.com",
  "hermione+regexone@hogwarts.com"
];
const regex = /(^\w+\.?\w+)/;

tasks.forEach((element) => {
  regex.test(element) ? console.log("Match") : console.log("Skip");
});
