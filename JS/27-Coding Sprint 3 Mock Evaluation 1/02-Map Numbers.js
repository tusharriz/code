// Map Numbers

function mapNumbers(N, K) {
  //write code here
  let obj = {};

  for (let i = 1; i <= N; i++) {
    if (obj[i] === undefined) {
      obj[i] = K;
      K++;
    }
  }
  // console.log(obj);

  for (let key in obj) {
    console.log(key + "-" + obj[key]);
  }
}
mapNumbers(5, 10);

// 1-10
// 2-11
// 3-12
// 4-13
// 5-14