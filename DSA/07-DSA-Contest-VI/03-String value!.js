// String value!

function stringValue(S) {
  //write code here

  let count = 0;
  let lower = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < S.length; i++) {
    for (let j = 0; j < lower.length; j++) {
      if (S[i] === lower[j]) {
        count = count + j + 1;
      }
    }
  }
  console.log(count);
}
stringValue("aba"); // 4

let obj = {};
let lower = "abcdefghijklmnopqrstuvwxyz";

for(let i=0; i<=lower.length-1; i++){
  obj[lower[i]] = i+1;
}
// console.log(obj);

let str = "aba";
let sum = 0;
for(let i=0; i<=str.length-1; i++){
  // console.log(obj[str[i]])
  sum += obj[str[i]]
}
console.log(sum); // 4

// OR

let sum2 = 0;
for(let i=0; i<=lower.length-1; i++){
  for(let j=0; j<=str.length-1; j++){
    if(str[j] == lower[i]){
      // console.log(str[j],lower[i]);
      sum2 = sum2 + i+1;
    }
  }
}
console.log(sum2); //4
