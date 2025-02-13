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