function missingVowel(str) {
  //write code here
  let v = "aeiou";
  // str = "nature";
  let bag = ""; // io
  let vowel = ""; // aeu

  for (let i = 0; i <= v.length - 1; i++) {
    let flag = false;

    for (let j = 0; j <= str.length - 1; j++) {
      if (v[i] != str[j]) {
        flag = false;
      } else {
        vowel = vowel + str[j];
        flag = true;
        break;
      }
    }

    if (flag === false) {
      bag = bag + v[i];
    }
  }
  if (vowel == "aeiou") {
    console.log("-1");
  } else {
    console.log(bag);
  }
  // console.log(bag);
  // console.log(vowel);
}
missingVowel("nature");

let s = "nature";
let ns = "aue";
let vo = "aeiou";
let mvo = "";

let obj = {a:1,e:1,i:1,o:1,u:1};
for(let i=0; i<=s.length-1; i++){
  for(let j=0; j<=vo.length-1; j++){
    if(s[i] == vo[j]){
      obj[s[i]]++;
      break;
    }
  }
}
// console.log(obj); // { a: 2, e: 2, i: 1, o: 1, u: 2 }

let bag1 = ""
for(let key in obj){
  if(obj[key] == 1){
    bag1=bag1+key;
  }
}
// console.log(bag1); //io

{
let vo = "aeiou";
let ns = "aue";
let mvo = "";

for(let i=0; i<=vo.length-1; i++){
  let flag = false;
  for(let j=0; j<=ns.length-1; j++){
    if(vo[i]==ns[j]){
      flag=true;
      break;
    }
  }
  if(flag == false){
    mvo = mvo + vo[i];
  }
}
console.log(mvo); // io









}