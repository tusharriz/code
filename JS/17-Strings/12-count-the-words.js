// Given a string count the number of words in that string

let str = "Twinkle Twinkle Little Star";

//character count
// console.log(str.length);

//word count
let count = 0;
if (str.length > 0) {
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] == " ") {
        count++;
    }
  }
}else{
    console.log(0);
}

console.log(count+1); // 4