// Characters of a 1D Array

function characters1DArray(N, str) {
  //Enter Code Here

  let bag = "";

  for (let i = 0; i <= N - 1; i++) {
    if (str[i] === "*") {
      bag += 0;
    } else if (str[i] === "-") {
      bag += 1;
    } else if (str[i] === "/") {
      bag += 2;
    }
  }
  console.log(bag);
}
characters1DArray(5, "*/-*/"); // 02102
