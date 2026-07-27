// Part 2:

// From the above data, Write a function i.e getDishesNames(data) that will take the above data as input 
// and print all the dish's names available in the restaurant.

// For Example :

// Sample Output

// Paratha
// Masala Dosa
// Noodles
// Spring Rolls
// Samosa

let arr = [
  { name: "Paratha", price: 40, category: "North Indian" },
  { name: "Masala Dosa", price: 80, category: "South Indian" },
  { name: "Noodles", price: 50, category: "Chinese" },
  { name: "Spring Rolls", price: 60, category: "Chinese" },
  { name: "Samosa", price: 25, category: "North Indian" },
];

function getDishesNames(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    // console.log(arr[i]["name"]);
  }
}

getDishesNames([
  { name: "Paratha", price: 40, category: "North Indian" },
  { name: "Masala Dosa", price: 80, category: "South Indian" },
  { name: "Noodles", price: 50, category: "Chinese" },
  { name: "Spring Rolls", price: 60, category: "Chinese" },
  { name: "Samosa", price: 25, category: "North Indian" },
]);

// Paratha
// Masala Dosa
// Noodles
// Spring Rolls
// Samosa

{

  function getDishesNames(data){
  for(let i=0; i<=data.length-1; i++){
    console.log(data[i]["dish"]);
  }
  // Paratha
  // Masala Dosa
  // Noodles
  // Spring Rolls
  // Samosa
}

getDishesNames([
  { dish: 'Paratha', category: 'North Indian', price: 40 },
  { dish: 'Masala Dosa', category: 'South Indian', price: 80 },
  { dish: 'Noodles', category: 'Chinese', price: 50 },
  { dish: 'Spring Rolls', category: 'Chinese', price: 60 },
  { dish: 'Samosa', category: 'North Indian', price: 25 }
])



}