// Products Cart Object

// - Given an input of products in the below format (Name Quantity Price)
// - Input

// ["Rice", "Dal", "Salt"]
// [2, 3, 1]
// [60, 50, 20]

// - Create an object with the key `data` which is an array of objects with the format:
// {name: "Rice", quantity: 2, price: 60}

// - The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)

// - Sample output for the above case `290`

let namesArr = ["Rice", "Dal", "Salt"];
let quantityArr = [2, 3, 1];
let priceArr = [60, 50, 20];
let total = 0;

for(let i=0; i<=namesArr.length-1; i++){
    let obj = {};
    if(obj[namesArr[i]] === undefined){
        obj["name"] = namesArr[i];
        obj["quantity"] = quantityArr[i];
        obj["price"] = priceArr[i];
    }
    console.log(obj);

    total += priceArr[i] * quantityArr[i]; // 290
}

// { name: 'Rice', quantity: 2, price: 60 }
// { name: 'Dal', quantity: 3, price: 50 }
// { name: 'Salt', quantity: 1, price: 20 }

console.log(total); // 290