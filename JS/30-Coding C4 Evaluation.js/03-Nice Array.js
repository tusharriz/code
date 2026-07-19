// Nice Array

function niceArray(N, array, K) {
  //write code here
  let evenCount = 0;

  for (let i = 0; i <= N - 1; i++) {
    if (array[i] % 2 === 0) {
      evenCount++;
    }
  }
  //   console.log(evenCount); // 2

  if (evenCount > K) {
    console.log("Nice Array");
  } else {
    console.log("Bad Array");
  }
}

niceArray(5,[1,2,3,4,5], 2); // Bad Array
niceArray(5,[1,2,3,4,5], 1); // Nice Array

let n = 5;
let arr = [1,2,3,4,5];
let k = 2;
let count = 0;
for(let i=0; i<=arr.length-1; i++){
  if(arr[i]%2==0){
    count++;
  }
}
if(count > k){
  console.log("Nice Array");
}else{
  console.log("Bad Array");
}