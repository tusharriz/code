function missingVowel(str) {
  //write code here
  let v = "aeiou";
  let bag = "";
  let vowel = "";

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
