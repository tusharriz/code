// Appear Once

function appearOnce(N, arr) {
  //write code here
  let obj = {};

  for (let i = 0; i <= N - 1; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  //   console.log(obj); //{ '3': 3, '5': 2, '6': 1, '8': 1 }

  let sum = 0;
  for (let i in obj) {
    if (obj[i] === 1) {
      sum += +i;
    }
  }
  console.log(sum);
}
appearOnce(7, [3, 5, 3, 3, 8, 5, 6]); // 14