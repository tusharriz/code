// Part 4:

// From the above data, Write a function i.e getMaxPriceDish(data) that will take the above data as input and return an object of a dish having maximum price.

// Sample Output
// {name: "Masala Dosa" , price: 80, category: "South Indian"}


function getMaxPriceDish(arr){

    let max = -Infinity;
    let obj;

    for(let i=0; i<=arr.length-1; i++){
        if(arr[i]["price"] > max){
            max = arr[i]["price"];
            obj = arr[i];
        }

    }
    console.log(obj); // { name: 'Masala Dosa', price: 80, category: 'South Indian' }
}

getMaxPriceDish([
    {name: "Paratha", price: 40, category: "North Indian"},
    {name: "Masala Dosa" , price: 80, category: "South Indian"},
    {name: "Noodles" , price: 50, category: "Chinese"},
    {name: "Spring Rolls" , price: 60, category: "Chinese"},
    {name: "Samosa" , price: 25, category: "North Indian"},
]);

{
function getDishInRange(data){
    let max = -Infinity;
    let ob;
    for(let i=0; i<=data.length-1; i++){
        if(data[i]["price"] > max){
            max = data[i]["price"];
            ob = data[i];
        }
    }
    console.log(ob); // { dish: 'Masala Dosa', category: 'South Indian', price: 80 }
}

getDishInRange([
  { dish: 'Paratha', category: 'North Indian', price: 40 },
  { dish: 'Masala Dosa', category: 'South Indian', price: 80 },
  { dish: 'Noodles', category: 'Chinese', price: 50 },
  { dish: 'Spring Rolls', category: 'Chinese', price: 60 },
  { dish: 'Samosa', category: 'North Indian', price: 25 }
]);
}