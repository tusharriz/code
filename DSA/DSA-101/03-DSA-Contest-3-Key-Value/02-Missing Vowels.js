// Missing Vowels

function missingVowel(N, str) {
  //write code here
  let obj = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };

  for (let i = 0; i <= N - 1; i++) {
    if (obj[str[i]] === 0) {
      obj[str[i]] = 1;
    }
  }
  //   console.log(obj); // { a: 1, e: 1, i: 0, o: 0, u: 1 }

  let bag = "";
  for (let i in obj) {
    if (obj[i] === 0) {
      bag += i;
    }
  }

  if (bag.length === 0) {
    console.log(-1);
  } else {
    console.log(bag);
  }
}
missingVowel(6, "nature"); // io