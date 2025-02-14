// Dots and Dashes

function printPattern(N) {
  for (let i = 1; i <= N; i++) {
    let bag = "";
    if (i % 2 !== 0) {
      bag += "_";
    } else {
      for (let i = 1; i <= N; i++) {
        bag += "*";
      }
    }
    console.log(bag);
  }
}
printPattern(6); 

// _
// ******
// _
// ******
// _
// ******

// function runProgram(input) {
//   printPattern(input);
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
