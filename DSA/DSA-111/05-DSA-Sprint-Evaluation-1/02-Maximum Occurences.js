// Maximum Occurences

function maxOccurence(N, str) {
  //write code here

  let obj = {};

  for (let char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }
  //   console.log(obj);
  //   { a: 2, e: 1, i: 1, o: 1, u: 1 }

  let max = -Infinity;
  let letter = "";
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      letter = key;
    }
  }
  console.log(letter);
}
maxOccurence(6, "aaeiou"); // "a"
maxOccurence(4, "abbc"); // "b"

let str = "aaeiou"; // a
// let str = "abbc"; // b
let obj = {};

for(let key of str){
  if(obj[key] == undefined){
    obj[key] = 1;
  }else{
    obj[key]++;
  }
}
// console.log(obj); // { a: 2, e: 1, i: 1, o: 1, u: 1 }

let max = -Infinity;
let char;
for(let key in obj){
  if(obj[key] > max){
    max = obj[key];
    char = key;
  }
}
console.log(char); // a