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
// halfPalindrome(6,"ababcb"); // yes
// halfPalindrome(4,"abc"); // no
// halfPalindrome(6,"ababba"); // no

// let str = "ababcb";
// let n = 6;
// let str = "abdc";
// let n = 4;
// let str = "ababba";
// let n = 6;
let str = "rirrir"
let n = 6;

let firstStr = "";
let secondStr = "";

for(let i=0; i<=str.length-1; i++){
  if(i<str.length/2){
    firstStr = firstStr + str[i];
  }else{
    secondStr = secondStr + str[i];
  }
}

// for(let j=(str.length)/2; j<=str.length-1; j++){
//   secondStr = secondStr + str[j];
// }

// console.log(firstStr); //aba
// console.log(secondStr); //bcb
let rfirstStr = "";
let rsecondStr = "";
for(let i=firstStr.length-1; i>=0; i--){
  rfirstStr += firstStr[i];
}
for(let j=secondStr.length-1; j>=0; j--){
  rsecondStr += secondStr[j];
}

if(firstStr == rfirstStr && secondStr == rsecondStr){
  console.log("Yes");
}else{
  console.log("No");
}