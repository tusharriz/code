// User Age Filter

// - Given a list of user data with name and age, create a list of key-value pairs from the input
// - From the generated data, print the users whose age is more than 30
// - Sample Input

// ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
// [32, 30, 26, 28, 44]

// - Sample Data Stored []- List {} - Key-Value Pairs

// [
// 	{name: "Nrupul", age: 32},
// 	{name: "Prateek" , age: 30},
// 	{name: "Aman" , age: 26},
// 	{name: "Albert" , age: 28},
// 	{name: "Yogesh" , age: 44},
// ]

// - Sample Output
// Nrupul Yogesh

let nameArr = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let ageArr = [32, 30, 26, 28, 44];

let array = [];
let names = "";

for (let i = 0; i <= nameArr.length - 1; i++) {
  let obj = {};
  if (obj[nameArr[i]] === undefined) {
    obj["name"] = nameArr[i];
    obj["age"] = ageArr[i];
  }
  // console.log(obj);

  array.push(obj);

  if(ageArr[i] > 30){
    names += nameArr[i] + " ";
  }
}
console.log(array);
console.log(names);

// [
//   { name: "Nrupul", age: 32 },
//   { name: "Prateek", age: 30 },
//   { name: "Aman", age: 26 },
//   { name: "Albert", age: 28 },
//   { name: "Yogesh", age: 44 },
// ];

// Nrupul Yogesh
