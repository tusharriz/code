// Traverse a 2d array - 3

function traverse2dArray(N, M, matrix) {
  //write code here
  let bag = "";
  for (let i = M - 1; i >= 0; i--) {
    for (let j = 0; j <= N - 1; j++) {
      bag += matrix[j][i] + " ";
    }
  }
  console.log(bag);
}
traverse2dArray(4, 3, [
  [1, 8, 9],
  [2, 7, 10],
  [3, 6, 11],
  [4, 5, 12],
]);

// 9 10 11 12 8 7 6 5 1 2 3 4
