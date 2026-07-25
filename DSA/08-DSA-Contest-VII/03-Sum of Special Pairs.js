function sumOfSpecialPairs(A) {
  //write code here

  function checkPrime(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        count++;
      }
    }
    if (count == 2) {
      return true;
    } else {
      return false;
    }
  }

  let sum = 0;
  for (let i = 0; i <= A.length - 1; i++) {
    for (let j = i + 1; j <= A.length - 1; j++) {
      let ans = checkPrime(j - i);
      if (ans === true) {
        sum = sum + Math.abs(A[i] - A[j]);
      }
    }
  }
  console.log(sum);
}
sumOfSpecialPairs([1, 2, 3, 5, 7, 12]); // 45