// https://regexone.com/problem/matching_decimal_numbers

// Below are a few different formats of numbers that you might encounter. Notice how you will have to match the decimal point itself and not an arbitrary character using the dot metacharacter. If you are having trouble skipping the last number, notice how that number ends the line compared to the rest.

const tasks = ["3.14529", "-255.34", "128", "1.9e10", "123,340.00", "720p"];
const regex = /^-?\d+(,\d+)*(\.\d+(e\d+)?)?$/;

tasks.forEach((element) => {
  regex.test(element) ? console.log("Match") : console.log("Skip");
});
