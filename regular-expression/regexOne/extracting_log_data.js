// https://regexone.com/problem/extracting_log_data

// In this example, we are going to use actual output from an Android adb debugging session. Your goal is to use any regular expression techniques that we've learned so far to extract the filename, method name and line number of line of the stack trace (they follow the form "at package.class.methodname(filename:linenumber)").

const tasks = [
  "W/dalvikvm( 1553): threadid=1: uncaught exception",
  "E/( 1553): FATAL EXCEPTION: main",
  "E/( 1553): java.lang.StringIndexOutOfBoundsException",
  "E/( 1553):   at widget.List.makeView(ListView.java:1727)",
  "E/( 1553):   at widget.List.fillDown(ListView.java:652)",
  "E/( 1553):   at widget.List.fillFrom(ListView.java:709)"
];
const regex = /\.([a-z]\w+)[(](\w+.\w+):(\d+)\)/;

tasks.forEach((element) => {
  regex.test(element) ? console.log("Match") : console.log("Skip");
});
