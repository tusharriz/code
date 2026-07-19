// Vowel Half

function vowelHalf(str) {
  //write code here
  let vowel = "aeiou";
  let count = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    for (let j = 0; j <= vowel.length - 1; j++) {
      if (str[i] == vowel[j]) {
        count++;
      }
    }
  }
  if (count > str.length / 2) {
    console.log("True");
  } else {
    console.log("False");
  }
}
vowelHalf("aabefe"); // True