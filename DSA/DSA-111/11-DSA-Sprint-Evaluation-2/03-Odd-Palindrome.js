// Odd Palindrome

function oddPalindrome(N, str) {
  //write code here

  let ostr = "";
  let rstr = "";

  for (let i = 0; i <= N - 1; i++) {
    if (i % 2 !== 0) {
      ostr += str[i];
    }
  }
  // console.log(ostr); // bdb

  for (let j = ostr.length - 1; j >= 0; j--) {
    rstr += ostr[j];
  }
  // console.log(rstr); // bdb

  if (ostr === rstr) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
// oddPalindrome(6,"abcdeb"); // yes


{
  let str = "racecar";
  let nstr = "";

  for(let i=0; i<=str.length-1; i++){
    if(i%2!==0){
      nstr += str[i];
    }
  }
  console.log(nstr); // bdb;

  let bag = "";
  for(let j=nstr.length-1; j>=0; j--){
    bag += nstr[j];
  }
  console.log(bag); 

  if(bag == nstr){
    console.log("Yes");
  }else{
    console.log("No");
  }

}