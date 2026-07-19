// Equilibrium Element

function equilibriumElement(N, arr) {
  //write code here
  let firstHalf = N / 2;
  let secondHalf = (N - 1) / 2;
  let first = 0;
  let second = 0;
  for (let i = 0; i <= firstHalf - 1; i++) {
    first += arr[i];
  }
  for (let j = secondHalf + 1; j <= N - 1; j++) {
    second += arr[j];
  }
  // console.log(first,second);

  if (first === second) {
    let n = arr.length;
    if (n % 2 === 1) {
      console.log(Math.floor(n / 2) + 1);
    }
  } else {
    console.log(-1);
  }
}
// equilibriumElement(5, [3,3,5,5,1]); // 3

let arr = [3,3,5,5,1];
let center = Math.floor(arr.length/2);
// console.log(center); //2
let lsum = 0;
let rsum = 0;
for(let i=0; i<center; i++){
  lsum += arr[i];
}
for(let j=center+1; j<=arr.length-1; j++){
  rsum += arr[j];
}
if(lsum == rsum){
  console.log(center + 1);
}else{
  console.log(-1);
}