// Two Arrays One Product

function twoArraysOneProduct(A, B) {
  //write code here
  let a = 1;
  let b = 1;

  for (let i = 0; i <= A.length - 1; i++) {
    a = a * A[i];
  }

  for (let j = 0; j <= B.length - 1; j++) {
    b = b * B[j];
  }
  console.log(a * b);
}
twoArraysOneProduct([1,2,3], [3,2,1]); //36

let arr1 = [1,2,3];
let arr2 = [3,2,1];

console.log(arr1[0]*arr1[1]*arr1[2]*arr2[0]*arr2[1]*arr2[2]); // 36

let product = 1;

for(let i=0; i<=arr1.length-1; i++){
  product = product * arr1[i];
  product = product * arr2[i];
}
console.log(product); // 36

