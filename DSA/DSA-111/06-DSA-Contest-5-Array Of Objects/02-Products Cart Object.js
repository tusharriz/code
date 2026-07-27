// Products Cart Object

// - Given an input of products in the below format (Name Quantity Price)
// - Input

// ```
// ["Rice", "Dal", "Salt"]
// [2, 3, 1]
// [60, 50, 20]

// ```

// - Create an object with the key `data` which is an array of objects with the format `{name: "Rice", quantity: 2, price: 60}`
// - The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)
// - Sample output for the above case `290`

let names = ["Rice", "Dal", "Salt"];
let quantity = [2, 3, 1];
let price = [60, 50, 20];


let total = 0;
for(let i=0; i<=names.length-1; i++){
    let data = {};
    data["name"] = names[i];
    data["quantity"] = quantity[i];
    data["price"] = price[i];

    total += quantity[i] * price[i];

    // console.log(data);
}
// console.log(total); //290

// { name: 'Rice', quantity: 2, price: 60 }
// { name: 'Dal', quantity: 3, price: 50 }
// { name: 'Salt', quantity: 1, price: 20 }


{
let obj = {
    data : [
            {name : "Rice", quantity : 2, price : 60},
            {name : "Dal", quantity : 3, price : 50},
            {name : "Salt", quantity : 1, price : 20}
           ],

    total : function(){

        let arr = this.data;
        let sum = 0;
        for(let i=0; i<=arr.length-1; i++){
            sum = sum + arr[i]["quantity"] * arr[i]["price"];
        }
        return sum;

    }
}
console.log(obj["total"]()); // 290
}