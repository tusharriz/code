// Product of Even Indexes

function productOfEvenIndexes(N, arr) {
  //write code here
  let product = 1;
  for (let i = 0; i <= N - 1; i++) {
    if (i % 2 === 0) {
      product = product * arr[i];
    }
  }
  console.log(product);
}

productOfEvenIndexes(4, [1,2,3,4]); // 3


let n=4;
let arr = [1,2,3,4];
let pro = 1;
for(let i=0; i<=arr.length-1; i++){
  if(i%2==0){
    pro = pro * arr[i];
  }
}
console.log(pro); // 3