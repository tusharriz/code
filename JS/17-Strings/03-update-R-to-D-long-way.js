// update Ronald to Donald;

// long method
let str = "Ronald";
let arr = [];

//convert the string into array
for (let i = 0; i <= str.length - 1; i++) {
  arr.push(str[i]);
}
// console.log(arr); // [ 'R', 'o', 'n', 'a', 'l', 'd' ]
// console.log(arr[0]); // R

//update "R" to "D"
arr[0] = "D";
console.log(arr); // [ 'D', 'o', 'n', 'a', 'l', 'd' ]

//convert the array into string
let bag = "";
for (let j = 0; j <= arr.length - 1; j++) {
  bag = bag + arr[j];
}

console.log(bag); //Donald
