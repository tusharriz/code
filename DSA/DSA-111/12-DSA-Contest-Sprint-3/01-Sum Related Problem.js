// Sum Related Problem

function sumRelatedProblem(N) {
  // Write code here

  let sum = 0;

  for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}

sumRelatedProblem(4); // 6 
sumRelatedProblem(2); // 2 


{
let n=4;
let sum = 0;

for(let i=1; i<=n; i++){
  if(i%2==0){
    sum += i;
  }
}
console.log(sum); // 6
}


