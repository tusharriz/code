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