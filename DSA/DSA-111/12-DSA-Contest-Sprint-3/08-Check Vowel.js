// Check Vowel

function checkVowel(N, str) {
  //write code here

  let ans = false;

  let vow = "aeiou";

  for (let i = 0; i <= N - 1; i++) {
    let char = str[i];

    for (let j = 0; j <= vow.length - 1; j++) {
      if (char === vow[j]) {
        ans = true;
        break;
      }
    }

    if (ans === true) {
      break;
    }
  }
  console.log(ans);
}
checkVowel(5, "stvar");




