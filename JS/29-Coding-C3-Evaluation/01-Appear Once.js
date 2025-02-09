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
  //   console.log(obj); // { '3': 3, '5': 2, '6': 1, '8': 1 }

  let total = 0;
  for (let key in obj) {
    if (obj[key] === 1) {
      total = total + Number(key);
    }
  }
  console.log(total); // 14
}
appearOnce(7, [3,5,3,3,8,5,6]); // 14