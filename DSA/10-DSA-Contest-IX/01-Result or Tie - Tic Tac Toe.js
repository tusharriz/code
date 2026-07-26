
function ticTacToe(arr) {
  //case for "x"
  // "x" case: 1 (horizontal)

  for (let i = 0; i <= arr.length - 1; i++) {
    let count = 0;
    for (let j = 0; j <= arr.length - 1; j++) {
      if (arr[i][j] === "x") {
        count++;
      }
    }
    // console.log(count);
    if (count === 3) {
      //   return i + " " + "row x wins";
      return "x";
    }
  }

  // "x" case: 2 (vertical)

  for (let i = 0; i <= arr.length - 1; i++) {
    let count = 0;
    for (let j = 0; j <= arr.length - 1; j++) {
      if (arr[j][i] === "x") {
        count++;
      }
    }
    if (count === 3) {
      //   return i + " " + "col x wins";
      return "x";
    }
  }

  // case: 3 (daigonaly)

  // "x" left to rigth

  let count = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = i; j <= i; j++) {
      if (arr[i][j] === "x") {
        count++;
      }
    }
    if (count === 3) {
      //   return "left to right diagonal x wins";
      return "x";
    }
  }

  // "x" right to left

  let count1 = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 0; j <= arr.length - 1; j++) {
      if (i + j === 2) {
        if (arr[i][j] === "x") {
          count1++;
        }
      }
    }
    if (count1 === 3) {
      //   return "right to left diagonal x wins";
      return "x";
    }
  }

  //case for "o"
  // "o" case: 1 (horizontal)

  for (let i = 0; i <= arr.length - 1; i++) {
    let count = 0;
    for (let j = 0; j <= arr.length - 1; j++) {
      if (arr[i][j] === "o") {
        count++;
      }
    }
    // console.log(count);
    if (count === 3) {
      //   return i + " " + "row o wins";
      return "o";
    }
  }

  // "o" case: 2 (vertical)

  for (let i = 0; i <= arr.length - 1; i++) {
    let count = 0;
    for (let j = 0; j <= arr.length - 1; j++) {
      if (arr[j][i] === "o") {
        count++;
      }
    }
    if (count === 3) {
      //   return i + " " + "col o wins";
      return "o";
    }
  }

  // case: 3 (daigonaly)

  // "o" left to rigth

  let count3 = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = i; j <= i; j++) {
      if (arr[i][j] === "o") {
        count3++;
      }
    }
    if (count3 === 3) {
      //   return "left to right diagonal o wins";
      return "o";
    }
  }

  // "o" right to left

  let count4 = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 0; j <= arr.length - 1; j++) {
      if (i + j === 2) {
        if (arr[i][j] === "o") {
          count4++;
        }
      }
    }
    if (count4 === 3) {
      //   return "right to left diagonal o wins";
      return "o";
    }
  }
  return "Tie";
}

console.log(ticTacToe([["x", "o", "x"],
                       ["o", "x", "x"],
                       ["o", "o", "o"],]));

// OR

function ticTacToe(matrix) {
  //write code here

  //case for "x"
  //   "x" case: 1 (horizontal)

  for (let i = 0; i <= matrix.length - 1; i++) {
    let count = 0;
    for (let j = 0; j <= matrix.length - 1; j++) {
      if (matrix[i][j] === "x") {
        count++;
      }
    }
    // console.log(count);
    if (count === 3) {
      //   return i + " " + "row x wins";
      console.log("x");
      return;
    }
  }

  // "x" case: 2 (vertical)

  for (let i = 0; i <= matrix.length - 1; i++) {
    let count = 0;
    for (let j = 0; j <= matrix.length - 1; j++) {
      if (matrix[j][i] === "x") {
        count++;
      }
    }
    if (count === 3) {
      //   return i + " " + "col x wins";
      console.log("x");
      return;
    }
  }

  // case: 3 (daigonaly)

  // "x" left to rigth

  let count = 0;
  for (let i = 0; i <= matrix.length - 1; i++) {
    for (let j = i; j <= i; j++) {
      if (matrix[i][j] === "x") {
        count++;
      }
    }
    if (count === 3) {
      //   return "left to right diagonal x wins";
      console.log("x");
      return;
    }
  }

  // "x" right to left

  let count1 = 0;
  for (let i = 0; i <= matrix.length - 1; i++) {
    for (let j = 0; j <= matrix.length - 1; j++) {
      if (i + j === 2) {
        if (matrix[i][j] === "x") {
          count1++;
        }
      }
    }
    if (count1 === 3) {
      //   return "right to left diagonal x wins";
      console.log("x");
      return;
    }
  }

  //case for "o"
  // "o" case: 1 (horizontal)

  for (let i = 0; i <= matrix.length - 1; i++) {
    let count = 0;
    for (let j = 0; j <= matrix.length - 1; j++) {
      if (matrix[i][j] === "o") {
        count++;
      }
    }
    // console.log(count);
    if (count === 3) {
      //   return i + " " + "row o wins";
      console.log("o");
      return;
    }
  }

  // "o" case: 2 (vertical)

  for (let i = 0; i <= matrix.length - 1; i++) {
    let count = 0;
    for (let j = 0; j <= matrix.length - 1; j++) {
      if (matrix[j][i] === "o") {
        count++;
      }
    }
    if (count === 3) {
      //   return i + " " + "col o wins";
      console.log("o");
      return;
    }
  }

  // case: 3 (daigonaly)

  // "o" left to rigth

  let count3 = 0;
  for (let i = 0; i <= matrix.length - 1; i++) {
    for (let j = i; j <= i; j++) {
      if (matrix[i][j] === "o") {
        count3++;
      }
    }
    if (count3 === 3) {
      //   return "left to right diagonal o wins";
      console.log("o");
      return;
    }
  }

  // "o" right to left

  let count4 = 0;
  for (let i = 0; i <= matrix.length - 1; i++) {
    for (let j = 0; j <= matrix.length - 1; j++) {
      if (i + j === 2) {
        if (matrix[i][j] === "o") {
          count4++;
        }
      }
    }
    if (count4 === 3) {
      //   return "right to left diagonal o wins";
      console.log("o");
      return;
    }
  }
  return "Tie";
}

ticTacToe([["x", "o", "x"],["o", "x", "x"],["o", "o", "x"],]);


// 

// let arr = [[1,2,3],
//            [4,5,6],
//            [7,8,9]];
let row = 3;
let col = 3;

// for horizontal 
let firstLTR = "";
let secondLTR = "";
let thirdLTR = "";

let firstTTB = "";
let secondTTB = "";
let thirdTTB = "";

let d1 = "";
let d2 = "";

// for(let i=0; i<=row-1; i++){
//   for(let j=0; j<=col-1; j++){
//     if(i+j==j){
//       if(arr[i][j]=="o"){
//         firstLTR +="o";
//       }else if(arr[i][j]=="x"){
//         firstLTR +="x";
//       }
//     }
//   }
// }

// if (firstLTR == "ooo" || secondLTR == "ooo" || thirdLTR == "ooo") {
//   console.log("o");
// } else if (firstTTB == "ooo" || secondTTB == "ooo" || thirdTTB == "ooo") {
//   console.log("o");
// } else if (d1 == "ooo" || d2 == "ooo") {
//   console.log("o")
// } else if (firstLTR == "xxx" || secondLTR == "xxx" || thirdLTR == "xxx") {
//   console.log("x");
// } else if (firstTTB == "xxx" || secondTTB == "xxx" || thirdTTB == "xxx") {
//   console.log("o");
// } else if (d1 == "xxx" || d2 == "xxx") {
//   console.log("x")
// };

// // for vertical
// for (let i = 0; i <= row - 1; i++) {
//   for (let j = 0; j <= col - 1; j++) {
//     // console.log(arr[j][i]);
//   }
// }

// // for di
// for (let i = 0; i <= row - 1; i++) {
//   for (let j = 0; j <= col - 1; j++) {
//     if (i == j) {
//       // console.log(arr[i][j]);
//     }
//   }
// }

// // for d2
// for (let i = 0; i <= row - 1; i++) {
//   for (let j = 0; j <= col - 1; j++) {
//     if (i + j == 2) {
//       // console.log(arr[j][i]);
//     }
//   }
// }




// let arr = [["x", "o", "x"],
//            ["o", "x", "x"],
//            ["o", "o", "o"]];

// // for LTR
// for(let i=0; i<=row-1; i++){
//   let bag = "";
//   let count = 0;
//   for(let j=0; j<=col-1; j++){
//     if(count==3){
//       bag += "\n";
//       // console.log(bag);
//     }
//     bag += arr[i][j];
//     count++;
//   }
//   // console.log(bag)
//   if(bag == "ooo"){
//     console.log("o")
//   }else{
//     if(bag == "xxx"){
//       console.log("x");
//     }
//   }
// }

// // For TTB
// for (let i = 0; i <= row - 1; i++) {
//   let bag = "";
//   let count = 0;
//   for (let j = 0; j <= col - 1; j++) {
//     if (count == 3) {
//       bag += "\n";
//       // console.log(bag);
//     }
//     bag += arr[j][i];
//     count++;
//   }
//   // console.log(bag)
//   if (bag == "ooo") {
//     console.log("o")
//   } else {
//     if (bag == "xxx") {
//       console.log("x");
//     }
//   }
// }

// // for D1
// let bag = "";
// for (let i = 0; i <= row - 1; i++) {
//   let count = 0;
//   for (let j = 0; j <= col - 1; j++) {
//     if (i == j) {
//       bag += arr[i][j];
//       count++;
//     }
//   }
// }
// // console.log(bag)
// if (bag == "ooo") {
//   console.log("o")
// } else {
//   if (bag == "xxx") {
//     console.log("x");
//   }
// }

// // For D2
// let bag2 = "";
// for (let i = 0; i <= row - 1; i++) {
//   let count = 0;
//   for (let j = 0; j <= col - 1; j++) {
//     if (i + j == 2) {
//       bag2 += arr[i][j];
//       count++;
//     }
//   }
// }
// // console.log(bag)
// if (bag2 == "ooo") {
//   console.log("o")
// } else {
//   if (bag2 == "xxx") {
//     console.log("x");
//   }
// }