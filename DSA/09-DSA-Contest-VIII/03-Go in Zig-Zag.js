// Go in Zig-Zag

function goInZigZag(N, M, matrix) {
  //write code here

  let bag = "";
  for (let i = 0; i <= N - 1; i++) {
    if (i % 2 === 0) {
      for (let j = M - 1; j >= 0; j--) {
        bag += matrix[i][j] + " ";
      }
    } else {
      for (let j = 0; j <= M - 1; j++) {
        bag += matrix[i][j] + " ";
      }
    }
  }
  // console.log(bag);
}
goInZigZag(5, 5, [
  [4, 7, 1, 1, 7],
  [8, 9, 9, 6, 1],
  [6, 4, 9, 5, 1],
  [7, 7, 4, 7, 7],
  [8, 6, 2, 5, 5],
]);

// 7 1 1 7 4 8 9 9 6 1 1 5 9 4 6 7 7 4 7 7 5 5 2 6 8

let arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 1],
  [3, 2, 5, 4, 6],
  [7, 8, 9, 1, 2],
];

let row = 4;
let col = 5;

let bag = "";
for(let i=0; i<=row-1; i++){
  if(i%2==0){
    for(let j=col-1; j>=0; j--){
      // console.log(arr[i][j]);
      bag += arr[i][j] + " ";
    }
  }
  else{
    for(let j=0; j<=col-1; j++){
      // console.log(arr[i][j])
      bag += arr[i][j] + " ";
    }
  }
}
console.log(bag); // 5 4 3 2 1 6 7 8 9 1 6 4 5 2 3 7 8 9 1 2