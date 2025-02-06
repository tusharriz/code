// Traverse a 2D Array

function traverse2dArray(N, M, matrix) {
  //write code here

  let bag = "";
  for (let i = 0; i <= M - 1; i++) {
    for (let j = N - 1; j >= 0; j--) {
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

// 4 3 2 1 5 6 7 8 12 11 10 9
