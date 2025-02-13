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
  console.log(vStr+cStr);
}
vowelsPriority("masaischool"); // aaioomsschl
vowelsPriority("eio"); // eio
vowelsPriority("ubcdefghioel"); // ueioebcdfghl
vowelsPriority("rhythm"); // rhythm
