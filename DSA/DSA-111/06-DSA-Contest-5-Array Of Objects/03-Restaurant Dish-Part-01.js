// Restaurant Dish

// Part 1:

// Given a list of dish data with category and price, create a list of key-value pairs from the input

// For Example :
// Sample Input

// dish = ["Paratha", "Masala Dosa", "Noodles", "Spring Rolls", "Samosa"]
// category = ["North Indian", "South Indian", "Chinese", "Chinese", "North Indian"]
// price  = [40, 80, 50, 60, 25]
// ​
// Sample Data Stored
// data = [
// 			{name: "Paratha", price: 40, category: "North Indian"},
// 			{name: "Masala Dosa" , price: 80, category: "South Indian"},
// 			{name: "Noodles" , price: 50, category: "Chinese"},
// 			{name: "Spring Rolls" , price: 60, category: "Chinese"},
// 			{name: "Samosa" , price: 25, category: "North Indian"},
// 	    ]

let dish = ["Paratha", "Masala Dosa", "Noodles", "Spring Rolls", "Samosa"];
let category = [
  "North Indian",
  "South Indian",
  "Chinese",
  "Chinese",
  "North Indian",
];
let price = [40, 80, 50, 60, 25];

let arr = [];

for (let i = 0; i <= dish.length - 1; i++) {
  let data = {};
  data["name"] = dish[i];
  data["price"] = price[i];
  data["category"] = category[i];
  // console.log(data);

  arr.push(data);
}
// console.log(arr);

// [
//     { name: 'Paratha', price: 40, category: 'North Indian' },
//     { name: 'Masala Dosa', price: 80, category: 'South Indian' },
//     { name: 'Noodles', price: 50, category: 'Chinese' },
//     { name: 'Spring Rolls', price: 60, category: 'Chinese' },
//     { name: 'Samosa', price: 25, category: 'North Indian' }
// ]


{
let dish = ["Paratha", "Masala Dosa", "Noodles", "Spring Rolls", "Samosa"];
let category = ["North Indian", "South Indian", "Chinese", "Chinese", "North Indian"];
let price = [40, 80, 50, 60, 25]; 

let data = [];

for(let i=0; i<=dish.length-1; i++){
  let obj={};
  obj["dish"] = dish[i];
  obj["category"] = category[i];
  obj["price"] = price[i];
  // console.log(obj);
  data.push(obj);
}

console.log(data);
// [
//   { dish: 'Paratha', category: 'North Indian', price: 40 },
//   { dish: 'Masala Dosa', category: 'South Indian', price: 80 },
//   { dish: 'Noodles', category: 'Chinese', price: 50 },
//   { dish: 'Spring Rolls', category: 'Chinese', price: 60 },
//   { dish: 'Samosa', category: 'North Indian', price: 25 }
// ]
}