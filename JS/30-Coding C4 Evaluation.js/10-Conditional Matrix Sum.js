// Conditional Matrix Sum

function conditionalMatrixSum(n, m, arr) {
  //write code here

  let sum = 0;
  for (let i = 0; i <= n - 1; i++) {
    for (let j = 0; j <= m - 1; j++) {
      if (arr[i][j] % 3 === 0) {
        sum += arr[i][j];
      }
    }
  }
  console.log(sum);
}

// conditionalMatrixSum(2, 3, [[3, 1, 8], [2, 6, 0]]); // 9


let arr = [[3,1,8],[2,6,0]];
let sum = 0;
let row = 2;
let col = 3
for(let i=0; i<=row-1; i++){
  for(let j=0; j<=col-1; j++){
    if(arr[i][j]%3==0){
      sum = sum + arr[i][j];
    }
  }
}
console.log(sum); // 9