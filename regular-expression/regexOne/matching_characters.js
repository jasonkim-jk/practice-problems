// https://regexone.com/lesson/matching_characters

// Below are a couple lines, where we only want to match the first three strings, but not the last three strings. Notice how we can't avoid matching the last three strings if we use the dot, but have to specifically define what letters to match using the notation above.

const tasks = ['can', 'man', 'fan', 'dan', 'ran', 'pan'];
const regex = /[cmf]an/;

tasks.forEach((element) => {
  regex.test(element) ? console.log("Match") : console.log("Skip")
});
