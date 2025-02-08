// Products Cart Object

// - Given an input of products in the below format (Name Quantity Price)
// - Input
// ["Rice", "Dal", "Salt"]
// [2, 3, 1]
// [60, 50, 20]

// - Create an object with the key `data` which is an array of objects with the format 
// `{name: "Rice", quantity: 2, price: 60}`

// - The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)

// - Sample output for the above case `290`

let productName = ["Rice", "Dal", "Salt"];
let productQuantity = [2, 3, 1];
let productPrice = [60, 50, 20];

let total = 0;
for(let i=0; i<=productName.length-1; i++){
    let obj = {};
    if(obj[productName[i]] === undefined){
        obj["name"] = productName[i];
        obj["quantity"] = productQuantity[i];
        obj["price"] = productPrice[i];
    }
    // console.log(obj);
    total = total + productPrice[i] * productQuantity[i];
}

console.log(total); // 290