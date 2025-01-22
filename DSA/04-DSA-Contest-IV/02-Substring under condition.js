// Substring under condition

let str = "abcab";
// console.log(str[0]);
// console.log(str[str.length-1]);
// console.log(str[0] == str[str.length-1]);

function subStrUnderCond(s) {
  //write code here
  let count = 0;
  for (let i = 0; i <= s.length - 1; i++) {
    let bag = "";
    for (let j = i; j <= s.length - 1; j++) {
      bag = bag + s[j];
    //   console.log(bag);
      if (bag[0] === bag[bag.length - 1]) {
        console.log(bag);
        count++;
      }
    }
  }
  console.log(count);
}
subStrUnderCond("abcab"); // 7

// a
// abca
// b
// bcab
// c
// a
// b
