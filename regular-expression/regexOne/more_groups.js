// https://regexone.com/lesson/more_groups

// Below are a couple different common display resolutions, try to capture the width and height of each display.

const tasks = ["1280x720", "1920x1600", "1024x768"];
const regex = /(\d+)x(\d+)/;

tasks.forEach((element) => {
  regex.test(element) ? console.log("Match") : console.log("Skip");
});
