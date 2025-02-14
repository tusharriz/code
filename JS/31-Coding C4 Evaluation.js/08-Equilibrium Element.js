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
equilibriumElement(5, [3,3,5,5,1]); // 3