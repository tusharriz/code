// Vowel & Consonant Count

function vowelAndConsonantCount(str) {
  //write code here
  //ankush
  let vowel = "aeiou";
  let vcount = 0;
  let ccount = 0;

  for (let i = 0; i <= str.length - 1; i++) {
    for (let j = 0; j <= vowel.length - 1; j++) {
      if (str[i] == vowel[j]) {
        vcount++;
      }
    }
  }
  ccount = str.length - vcount;
  console.log(vcount, ccount);
}
vowelAndConsonantCount("ankush"); // 2 4