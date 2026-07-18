// Strings - I

function printStr(size, str) {
  console.log(str);
}
printStr(4, "aman"); // aman

// function runProgram(input) {
//   input = input.split("\n");

//   let size = Number(input[0]);
//   let str = input[1];

//   printStr(size, str);
// }

// if (process.env.USERNAME === "") {
//   runProgram(``);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }
