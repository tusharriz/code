// N traversal

let arr = [[1,2,3],[4,5,6],[7,8,9]];
let bag = "";
for(let i=0; i<=arr.length-1; i++){
    for(let j=arr.length-1; j>=0; j--){
        if(i==1 && j==2 || i==1 && j==0){
            continue;
        }else{
            if(i===2 && j===0){
                bag += arr[j][i];
            }else{
                bag += arr[j][i] + "-";
            }
        }
    }
}
// console.log(bag);

function nTraversal(N, matrix) {
  let bag = "";
//   for (i = matrix.length - 1; i >= 0; i--) {
//     bag += matrix[i][0] + " ";
//   }
//   for (i = 1; i <= matrix.length - 1; i++) {
//     bag += matrix[i][i] + " ";
//   }
  for (i = matrix.length - 2; i >= 0; i--) {
    bag += matrix[i][matrix.length - 1] + " ";
  }
  console.log(bag);
}
nTraversal(3, [[1,2,3],[4,5,6],[7,8,9]]);