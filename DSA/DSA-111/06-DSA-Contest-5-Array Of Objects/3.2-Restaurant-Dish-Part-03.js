// Part 3:
// From the above data, Write a function i.e getDishInRange(data, price1, price2) that will take the above data as input with the price1 and price2 value and print objects of a dish having price range in between price1 and price2 (including price1 and price2).
// Sample Input
// data = [
// 			{name: "Paratha", price: 40, category: "North Indian"},
// 			{name: "Masala Dosa" , price: 80, category: "South Indian"},
// 			{name: "Noodles" , price: 50, category: "Chinese"},
// 			{name: "Spring Rolls" , price: 60, category: "Chinese"},
// 			{name: "Samosa" , price: 25, category: "North Indian"},
// 		   ]

// price1 = 40
// price2 = 80
// ​
// Sample Output
// {name: "Paratha", price: 40, category: "North Indian"},
// {name: "Masala Dosa" , price: 80, category: "South Indian"},
// {name: "Noodles" , price: 50, category: "Chinese"},
// {name: "Spring Rolls" , price: 60, category: "Chinese"}

function getDishInRange(arr, price1, price2) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i]["price"] >= price1 || arr[i]["prices"] <= price2) {
      // console.log(arr[i]);
    }
  }
}

getDishInRange(
  [
    { name: "Paratha", price: 40, category: "North Indian" },
    { name: "Masala Dosa", price: 80, category: "South Indian" },
    { name: "Noodles", price: 50, category: "Chinese" },
    { name: "Spring Rolls", price: 60, category: "Chinese" },
    { name: "Samosa", price: 25, category: "North Indian" },
  ],
  40,
  80
);

// { name: 'Paratha', price: 40, category: 'North Indian' }
// { name: 'Masala Dosa', price: 80, category: 'South Indian' }
// { name: 'Noodles', price: 50, category: 'Chinese' }
// { name: 'Spring Rolls', price: 60, category: 'Chinese' }


{

function getDishInRange(data,price1,price2){
  for(let i=0; i<=data.length-1; i++){
    if(data[i]["price"] >= price1 && data[i]["price"] <= price2){
      console.log(data[i]);
    }
  }
}
getDishInRange([
  { dish: 'Paratha', category: 'North Indian', price: 40 },
  { dish: 'Masala Dosa', category: 'South Indian', price: 80 },
  { dish: 'Noodles', category: 'Chinese', price: 50 },
  { dish: 'Spring Rolls', category: 'Chinese', price: 60 },
  { dish: 'Samosa', category: 'North Indian', price: 25 }
],40,80);

// output:-
// { dish: 'Paratha', category: 'North Indian', price: 40 }
// { dish: 'Masala Dosa', category: 'South Indian', price: 80 }
// { dish: 'Noodles', category: 'Chinese', price: 50 }
// { dish: 'Spring Rolls', category: 'Chinese', price: 60 }
}