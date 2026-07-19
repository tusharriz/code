// Vowels Priority

function vowelsPriority(str) {
  //write code here
  let vowel = "aeiou";
  let vStr = "";
  let cStr = "";

  for (let i = 0; i <= str.length - 1; i++) {
    if(str[i] === "a" || str[i] === "e"|| str[i] === "i"|| str[i] === "o"|| str[i] === "u"){
        vStr += str[i];
        // break;
    }else{
        cStr += str[i]; 
    }
  }
  // console.log(vStr+cStr);
}
// vowelsPriority("masaischool"); // aaioomsschl
// vowelsPriority("eio"); // eio
// vowelsPriority("ubcdefghioel"); // ueioebcdfghl
// vowelsPriority("rhythm"); // rhythm

let str = "masaischool";
// let str = "eio";
let vowel = "aeiou";
let fstr = "";
let lstr = "";

for(i=0; i<=str.length-1; i++){
  let flag = false;
  for(let j=0; j<=vowel.length-1; j++){
    if(str[i] == vowel[j]){
      fstr += str[i];
      flag = true;
      break;
    }
  }
  if(flag == false){
    lstr += str[i]; 
  }
}
console.log(fstr+lstr); // aaioomsschl