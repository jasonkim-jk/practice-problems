// https://regexone.com/problem/extracting_url_data

// In the exercise below, try to extract the protocol, host and port of the all the resources listed.

const tasks = [
  "ftp://file_server.com:21/top_secret/life_changing_plans.pdf",
  "https://regexone.com/lesson/introduction#section",
  "file://localhost:4040/zip_file",
  "https://s3cur3-server.com:9999/",
  "market://search/angry%20birds"
];
const regex = /^(\w+):\/\/([\w-.]+)[:]?(\d+)?/;

tasks.forEach((element) => {
  regex.test(element) ? console.log("Capture") : console.log("Skip");
});
