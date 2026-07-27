// Missing Vowels

function missingVowel(N, str) {
  //write code here
  let obj = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };

  for (let i = 0; i <= N - 1; i++) {
    if (obj[str[i]] === 0) {
      obj[str[i]] = 1;
    }
  }
  //   console.log(obj); // { a: 1, e: 1, i: 0, o: 0, u: 1 }

  let bag = "";
  for (let i in obj) {
    if (obj[i] === 0) {
      bag += i;
    }
  }

  if (bag.length === 0) {
    console.log(-1);
  } else {
    console.log(bag);
  }
}
// missingVowel(6, "nature"); // io

let vowel = "aeiou";
let str = "nature";

let bag = "";
for(let i=0; i<=vowel.length-1; i++){
  let flag = false;
  for(let j=0; j<=str.length-1; j++){
    if(vowel[i]==str[j]){
      flag = true;
      break;
    }
  }
  if(flag == false){
    bag += vowel[i];
  }
}
// console.log(bag); // io

// OR

let obj = {
  a : 1,
  e : 1,
  i : 1,
  o : 1,
  u : 1
}

let s = "nature";
// let s = "natureoi";

for(let i=0; i<=s.length-1; i++){
  if(obj[s[i]] == undefined){
    continue;
  }else{
    obj[s[i]]++
  }
}
// console.log(obj); // { a: 2, e: 2, i: 1, o: 1, u: 2 }

// using for of loop
for(let ele of s){
  if(obj[ele] == undefined){
    continue;
  }else{
    obj[ele]++;
  }
}
// console.log(obj); // { a: 2, e: 2, i: 1, o: 1, u: 2 }

// OR
// another simple way to doing this is 

for(let ele of s){
  delete obj[ele]; //if ele is not present in obj it's simply continue without giving any error but if element is present in obj then it will delete the key
}
// console.log(obj); // { i: 1, o: 1 }


let bag1 = "";
for(let key in obj){
  if(obj[key] == 1){
    bag1 += key;
  }
}
// console.log(bag1); // io
if(bag1 == ""){
  console.log(-1)
}else{
  console.log(bag1);
}