// Strongly Typed Password

let str = "neat";
let symbol = "@$#*";
let bag = "";
let flag = false;

// {
//   // solved for only 1 string with OR (||) logical operator
//   for(let i=0; i<=str.length-1; i++){
//     // console.log(str[i]);
//     if(str[i] == "@" || str[i] == "$" || str[i] == "#" || str[i] == "*"){
//       bag = bag + "strong";
//       flag = true;
//       break;
//     }
//   }
//   // console.log(bag);
//   if(flag == false){
//     console.log("weak");
//   }
// }

// {
//   // solved for only 1 string with nested loop
//   for (let i = 0; i <= str.length - 1; i++) {
//     // console.log(str[i]);
//     for (let j = 0; j <= symbol.length - 1; j++) {
//       if (str[i] == symbol[j]) {
//         bag = bag + "strong";
//         flag = true;
//         break;
//       }
//     }
//   }
//   // console.log(bag);

//   if (flag == false) {
//     console.log("weak");
//   }
// }

// {
//   let arr = ["ab","t@1"];
//   let symbol = "#@";
//   let bag = "";

//   for(let i=0; i<=arr.length-1; i++){
//     let str = arr[i];

//     for(let j=0; j<=str.length-1; j++){
//       if(str[j] == "#" || str[j] == "@"){
//         bag = bag + "strong" + " ";
//         flag = true;
//         break;
//       }
//     }
//     if(flag == false){
//       bag = bag + "weak" + " ";
//     }
//   }
//   console.log(bag);
// }

function strongPassword(arr) {
  //write code here

  let symbol = "@$#*";
  let bag = "";

  for (let i = 0; i <= arr.length - 1; i++) {
    let flag = false;
    let str = arr[i];
  
    for (let j = 0; j <= str.length - 1; j++) {
      if (str[j] == "@" || str[j] == "$" || str[j] == "#" || str[j] == "*") {
        bag = bag + "strong" + " ";
        flag = true;
        break;
      }
    }
    if (flag === false) {
      bag = bag + "weak" + " ";
    }
  }
  console.log(bag);
}
strongPassword(["test123", "new@t", "mon*y", "nrupul"]);

// weak strong strong weak

function patternPrinting(N) {
  for (let i = 0; i < N; i++) {
      let row = "";

      // Print decreasing stars with '_'
      for (let j = 0; j < N - i; j++) {
          row = row + "*" + " ";
      }

      // Add increasing spaces
      for (let k = 0; k < i; k++) {
          row += " ";
      }

      // Remove last underscore and print row
      console.log(row);
  }
}
patternPrinting(5);