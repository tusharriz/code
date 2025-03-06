// Max and min frequency equation in array

function minMAx(N, arr) {
  //Write code here
  let obj = {};

  for (let i = 0; i <= N - 1; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  // console.log(obj); // { '1': 1, '2': 2, '3': 3, '5': 1 }

  let min = Infinity;
  let max = -Infinity;

  for (let i in obj) {
    //find min
    if (obj[i] < min) {
      min = obj[i];
    }

    //find max
    if (obj[i] > max) {
      max = obj[i];
    }
  }

  // console.log(min); // 1
  // console.log(max); // 3

  let equation = 15 * min + 2 * max;
  console.log(equation);
}
minMAx(7, [1, 2, 2, 3, 3, 3, 5]); // 21