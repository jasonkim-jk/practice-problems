// https://regexone.com/problem/matching_phone_numbers?

// Below are a few phone numbers that you might encounter when using real data, write a single regular expressions that matches the number and captures the proper area code.

const tasks = ["415-555-1234", "650-555-2345", "(416)555-3456", "202 555 4567", "4035555678", "1 416 555 9292"];
const regex = /(\d{3})/;

tasks.forEach((element) => {
  regex.test(element) ? console.log("Capture") : console.log("Skip");
});
