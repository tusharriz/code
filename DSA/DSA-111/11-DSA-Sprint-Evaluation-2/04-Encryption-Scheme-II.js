// Encryption Scheme II

function encryptionSchemeII(N, array) {
  //write code here

  let sum = 0;

  for (let i = 0; i <= N - 1; i++) {
    // console.log(i+1, array[i]);

    if (array[i] === 0) {
      sum += i + 1;
    }
  }
  console.log(sum); // 5
}

encryptionSchemeII(5,[1, 0, 0, 1, 1]); // 5
encryptionSchemeII(5,[1, 0, 0, 1, 0]); // 10 

{
  let arr = [1, 0, 0, 1, 1];
  // let arr = [1, 0, 0, 1, 0];
  let sum = 0;
  for(let i=0; i<=arr.length-1; i++){
    if(arr[i] == 0){
      sum += i+1;
    }
  }
  console.log(sum); // 5
}