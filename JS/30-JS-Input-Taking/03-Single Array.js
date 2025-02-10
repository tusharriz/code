// Single Array

function addOne(size, arr) {
  let bag = "";
  for (let i = 0; i <= size - 1; i++) {
    bag += arr[i] + 1 + " ";
  }
  console.log(bag);
}
addOne(5, [1,2,3,4,5]); // 2 3 4 5 6


// function runProgram(input) {
//   input = input.split("\n");

//   let size = Number(input[0]);
//   let arr = input[1].split(" ").map(Number);

//   addOne(size, arr);
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
