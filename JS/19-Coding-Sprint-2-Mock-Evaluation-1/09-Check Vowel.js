// Check Vowel

function checkVowel(str) {
  //write code here
  let vowel = "aeiou";
  let flag = false;

  for (let i = 0; i <= str.length - 1; i++) {
    for (let j = 0; j <= vowel.length - 1; j++) {
      if (str[i] == vowel[j]) {
        flag = true;
        break;
      }
    }
  }

  if (flag == true) {
    console.log(true);
  } else {
    console.log(false);
  }
}
checkVowel(stvr) // false