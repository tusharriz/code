// Sub array quest II

function subArrQueII(N, A) {
  //write code here

  let count = 0;

  for (let i = 0; i <= N - 1; i++) {
    if (A[i] % 2 === 0) {
      for (let j = i; j <= N - 1; j++) {
        if (A[j] % 2 === 0) {
          count++;
        }
      }
    }
  }
  console.log(count);
}

// subArrQueII(5, [1,2,3,4,5]); // 3

// OR
let arr = [1,2,3,4,5];
let count = 0;
for(let i=0; i<=arr.length-1; i++){
  let bag = "";
  for(let j=i; j<=arr.length-1; j++){
    bag += arr[j];
    // console.log(bag);

    let check = bag;
    if(check[0]%2==0 && check[check.length-1]%2==0){
      count++;
    }
  }
}
console.log(count);
