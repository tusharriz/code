// User Age Filter

// - Given a list of user data with name and age, create a list of key-value pairs from the input
// - From the generated data, print the users whose age is more than 30

// - Sample Input
// ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
// [32, 30, 26, 28, 44]

// - Sample Data Stored `[]` - List `{}` - Key-Value Pairs

// [
// 	{name: "Nrupul", age: 32},
// 	{name: "Prateek" , age: 30},
// 	{name: "Aman" , age: 26},
// 	{name: "Albert" , age: 28},
// 	{name: "Yogesh" , age: 44},
// ]

// - Sample Output
// `Nrupul Yogesh`

let names = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let age = [32, 30, 26, 28, 44];

let arr = [];

for(let i=0; i<=names.length-1; i++){
    let obj = {};
    obj["name"] = names[i];
    obj["age"] = age[i];
    // console.log(obj);
    arr.push(obj);
}
// console.log(arr);

// [
//     { name: 'Nrupul', age: 32 },
//     { name: 'Prateek', age: 30 },
//     { name: 'Aman', age: 26 },
//     { name: 'Albert', age: 28 },
//     { name: 'Yogesh', age: 44 }
// ]

// - From the generated data, print the users whose age is more than 30

let bag = "";

for(let i=0; i<=arr.length-1; i++){
    if(arr[i]["age"] > 30){
        bag += arr[i]["name"] + " ";
    }
}

// console.log(bag); // Nrupul Yogesh

// OR

{
let names = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let age = [32, 30, 26, 28, 44];

let arr = [];

for(let i=0; i<=names.length-1; i++){
    let obj = {};
    obj["name"] = names[i];
    obj["age"] = age[i];
    // console.log(obj);
    arr.push(obj);

}
// console.log(arr);
// [
//   { name: 'Nrupul', age: 32 },
//   { name: 'Prateek', age: 30 },
//   { name: 'Aman', age: 26 },
//   { name: 'Albert', age: 28 },
//   { name: 'Yogesh', age: 44 }
// ]
let bag = "";
for(let i=0; i<=arr.length-1; i++){
    let obj = arr[i];
    if(obj["age"] > 30){
        bag += obj["name"] + " ";
    }
}
console.log(bag); // Nrupul Yogesh
}

// OR

{

let namesArr =  ["Ram", "Shayam", "Hari", "Om", "Jai"]
let ageArr = [32, 30, 26, 28, 44];

let arr = [];

for(let i=0; i<=namesArr.length-1; i++){
    let name = namesArr[i];
    let age = ageArr[i];

    let obj = {name,age};
    arr.push(obj);
}
console.log(arr);

// [
//   { name: 'Ram', age: 32 },
//   { name: 'Shayam', age: 30 },
//   { name: 'Hari', age: 26 },
//   { name: 'Om', age: 28 },
//   { name: 'Jai', age: 44 }
// ]






}