// ## **Problem-1 User Age Filter**
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

let mname = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let age =  [32, 30, 26, 28, 44];
let arr = [];
let aged = [];

for(let i=0; i<=mname.length-1; i++){
    let obj = {};

    let naam = mname[i];
    let umar = age[i];
    obj["name"]=naam;
    obj["age"]=umar;
    arr.push(obj);
}
// console.log(arr);
let bag = "";
for(let i=0; i<=arr.length-1; i++){
    let obj = arr[i];
    if(obj["age"]>30){
        bag=bag+obj["name"]+" "
    }
}
// console.log(bag);


