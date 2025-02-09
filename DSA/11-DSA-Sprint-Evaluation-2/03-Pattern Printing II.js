// Pattern Printing II

function patternPrintingII(N) {
  // Write code here

  for (let i = 1; i <= N; i++) {
    let bag = "";
    for (let j = 1; j <= N; j++) {
      if (i == N && j == N) {
        bag = bag + "*";
      } else if (i == N) {
        bag = bag + "*" + " ";
      } else {
        if (j == 1) {
          bag = bag + "*" + " ";
        } else if (j == N) {
          bag = bag + "*";
        } else {
          bag = bag + " " + " ";
        }
      }
    }
    console.log(bag);
  }
}
patternPrintingII(5);

// *       *
// *       *
// *       *
// *       *
// * * * * *
