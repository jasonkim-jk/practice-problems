// https://regexone.com/problem/matching_filenames

// In this simple example, extract the filenames and extension types of only image files (not including temporary files for images currently being edited). Image files are defined as .jpg,.png, and .gif.

const tasks = [
  ".bash_profile",
  "workspace.doc",
  "img0912.jpg",
  "updated_img0912.png",
  "documentation.html",
  "favicon.gif",
  "img0912.jpg.tmp",
  "access.lock",
];
const regex = /^(\w+)\.(jpg|png|gif)$/;

tasks.forEach((element) => {
  regex.test(element) ? console.log("Capture") : console.log("Skip");
});
