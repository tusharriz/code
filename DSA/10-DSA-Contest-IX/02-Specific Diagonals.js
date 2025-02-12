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
