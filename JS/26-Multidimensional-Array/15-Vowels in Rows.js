// Vowels in Rows

function vowelsInRows(N, M, arr) {
  //write code here
  let vowel = "aeiou";

  for (let i = 0; i <= N - 1; i++) {
    let flag = false;
    for (let j = 0; j <= M - 1; j++) {
      for (let k = 0; k <= vowel.length - 1; k++) {
        if (arr[i][j] == vowel[k]) {
          flag = true;
          break;
        }
      }
    }
    if (flag === true) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}
vowelsInRows(3, 2,[["a","b"],["c","d"],["e","f"]]);

// Yes
// No
// Yes