function halfPalindrome(N, str) {
  //write code here

  let end = N / 2;

  let firstStr = "";
  for (let i = 0; i <= end - 1; i++) {
    firstStr += str[i];
  }
  //   console.log(firstStr); // aba

  let secondStr = "";
  for (let i = end; i <= N - 1; i++) {
    secondStr += str[i];
  }
  //   console.log(secondStr); // bcb

  function checkPalindrome(str) {
    let nstr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      nstr += str[i];
    }

    if (str === nstr) {
      return true;
    } else {
      return false;
    }
  }

  if (
    checkPalindrome(firstStr) === true &&
    checkPalindrome(secondStr) === true
  ) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
halfPalindrome(6,"ababcb"); // yes
halfPalindrome(4,"abc"); // no
halfPalindrome(6,"ababba"); // no