// https://regexone.com/lesson/capturing_groups

// Go ahead and try to use this to write a regular expression that matches only the filenames (not including extension) of the PDF files below.

const tasks = ["file_record_transcript.pdf", "file_07241999.pdf", "testfile_fake.pdf.tmp"];
const regex = /^(file_\w*)\.pdf$/;

tasks.forEach((element) => {
  regex.test(element) ? console.log("Capture") : console.log("Skip");
});
