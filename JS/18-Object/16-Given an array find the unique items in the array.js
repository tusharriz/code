// Given an array find the unique items in the array

let arr=["Aman", "Ajay", "Aman", "Varun", "Pulkit","Aman", "Pulkit"];

// let list={
//   Aman: 1,
//   Ajay: 1,
//   Varun: 1,
//   Pulkit: 1
// }

let obj={};

for(let i=0; i<=arr.length-1; i++){
   let key = arr[i];
   obj[key] = 1;
}

console.log(obj); // { Aman: 1, Ajay: 1, Varun: 1, Pulkit: 1 }