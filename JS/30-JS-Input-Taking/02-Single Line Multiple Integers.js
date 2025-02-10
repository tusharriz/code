// Single Line Multiple Integers

function addOne(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i] + 1);
  }
}
addOne([1,2,3,4]);
// 2
// 3
// 4
// 5

// function runProgram(input) {
//   input = input.split(" ").map(Number);
//   addOne(input);
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
