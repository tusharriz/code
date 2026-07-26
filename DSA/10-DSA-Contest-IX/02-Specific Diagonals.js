// Specific Diagonals

function specificDiagonals(R, C, matrix, K) {
  //write code here

  let diffElement = "";
  let d1 = "";
  let d2 = "";

  for (i = 0; i <= R - 1; i++) {
    for (let j = 0; j <= C - 1; j++) {
      if (matrix[i][j] === K) {
        diffElement = matrix[i][j];
        d1 = i - j;
        d2 = i + j;
        break;
      }
    }
  }
  // console.log(diff);  // 6
  // console.log(d1); // -1
  // console.log(d2); // 3

  //loop for Daigonal 1 - left to right

  let daigonal1 = "";
  for (let i = 0; i <= R - 1; i++) {
    for (let j = 0; j <= C - 1; j++) {
      if (i - j === d1) {
        daigonal1 += matrix[i][j] + " ";
      }
    }
  }
  console.log(daigonal1); // 2 6

  //loop for Daigonal 2 - right to left
  let daigonal2 = "";
  for (let i = 0; i <= R - 1; i++) {
    for (let j = 0; j <= C - 1; j++) {
      if (i + j === d2) {
        daigonal2 += matrix[i][j] + " ";
      }
    }
  }
  console.log(daigonal2); // 6 8
}

let row = 3;
let col = 3;
let k = 6
let arr = [[1,2,3],
           [4,5,6],
           [7,8,9]];

let diff;
let sum;
for(let i=0; i<=row-1; i++){
  for(let j=0; j<=col-1; j++){
    if(arr[i][j] == k){
      diff = i-j;
      sum = i+j;
    }
  }
}
// console.log(diff); // -1
// console.log(diff); // 3
let bag = "";
let bag2 = "";
for(let i=0; i<=row-1; i++){
  for(let j=0; j<=col-1; j++){
    if(diff == i-j){
      // console.log(arr[i][j]);
      bag += arr[i][j] + " ";
    }if(sum == i+j){
      bag2 += arr[i][j] + " ";
    }
  }
}
console.log(bag); //  2 6
console.log(bag2); // 6 8
