// Masai Palindromic Substring

let s = "thisracecarisgood";
let arr = [];
for (let i = 0; i <= s.length - 1; i++) {
  //adding substring into bag
  let bag = "";
  for (let j = i; j <= s.length - 1; j++) {
    bag = bag + s[j];
    // console.log(bag);

    //reverse the bag substring and aading into nstr
    let nstr = "";
    for (let k = bag.length - 1; k >= 0; k--) {
      nstr = nstr + bag[k];
    }
    // console.log(nstr);

    //comparing bag string with nstr string and if true then push into arr
    if (bag == nstr) {
      arr.push(nstr);
    }
  }
}
console.log(arr);

let max = -Infinity;
//print the max arr.length
for (let i = 0; i <= arr.length - 1; i++) {
  if (arr[i].length > max) {
    max = arr[i].length;
  }
  // console.log(arr[i].length);
}
console.log(max); // 7
//max palindromic substring => racecar


//another way with array
{ 
  function masaiPalSubString(S) {
    //write code here

    let arr = [];
    for (let i = 0; i <= S.length - 1; i++) {
      let bag = "";
      for (let j = i; j <= S.length - 1; j++) {
        bag = bag + S[j];
        //   console.log(bag);
        arr.push(bag);
      }
    }
    // console.log(arr);

    let newArr = [];

    for (let m = 0; m <= arr.length - 1; m++) {
      let word = arr[m];
      let bag = "";

      for (let n = word.length - 1; n >= 0; n--) {
        bag = bag + word[n];
      }
      if (bag == word) {
        newArr.push(bag);
      }
    }

    let max = 0;

    for (let i = 0; i <= newArr.length - 1; i++) {
      if (newArr[i].length > max) {
        max = newArr[i].length;
      }
    }
    console.log(max);
  }
}
masaiPalSubString("thisracecarisgood"); // 7