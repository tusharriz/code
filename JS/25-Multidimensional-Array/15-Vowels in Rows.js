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

let arr = [["a","b"],["c","d"],["e","f"]];
let n=3;
let m=2;
let vowel = "aeiou";

for(let i=0; i<=n-1; i++){
  let flag = false;
  for(let j=0; j<=m-1; j++){
    
      for(let k=0; k<=vowel.length-1; k++){
        if(arr[i][j] == vowel[k]){
          console.log("Yes");
          flag = true;
          break;
        }
      }
    if(flag == true){
      break;
    }else{
      if(j==m-1){
        console.log("No");
        break;
      }
    }
  }
}

// Yes
// No
// Yes