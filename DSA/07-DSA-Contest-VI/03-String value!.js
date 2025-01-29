// String value!

function stringValue(S) {
  //write code here

  let count = 0;
  let lower = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < S.length; i++) {
    for (let j = 0; j < lower.length; j++) {
      if (S[i] === lower[j]) {
        count = count + j + 1;
      }
    }
  }
  console.log(count);
}
stringValue("aba"); // 4
