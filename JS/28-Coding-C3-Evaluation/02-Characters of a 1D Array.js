// Characters of a 1D Array

function characters1DArray(N, str) {
  //Enter Code Here

  let bag = "";

  for (let i = 0; i <= N - 1; i++) {
    if (str[i] === "*") {
      bag += 0;
    } else if (str[i] === "-") {
      bag += 1;
    } else if (str[i] === "/") {
      bag += 2;
    }
  }
  console.log(bag);
}
// characters1DArray(5, "*/-*/"); // 02102


let str = "*/-*/";
let n = 5;
let strArr = ["*","-","/"];
let valueArr = [0,1,2];
let nstr = "";

for(let i=0; i<=str.length-1; i++){
  for(let j=0; j<=strArr.length-1; j++){
    if(str[i] == strArr[j]){
      nstr = nstr + valueArr[j];
    }
  }
}
console.log(nstr); // 02102

// OR
let obj = {
  "*" : 0,
  "-" : 1,
  "/" : 2
}
let nstring = "";
for(let k=0; k<=str.length-1; k++){
  for(let key in obj){
    if(str[k] == key){
      nstring = nstring + obj[key];
    }
  }
} 
console.log(nstring); // 02102