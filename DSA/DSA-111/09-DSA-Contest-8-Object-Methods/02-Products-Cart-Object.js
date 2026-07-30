// Products Cart Object
//Part - 1

// - Given an input of products in the below format
// (Name, Quantity, Price and Rating)

// Input
// ["Shirt", "Jeans", "Shoes","Slippers"]
// [2, 3, 1, 4]
// [600, 1500, 2000, 500]
// [3.5, 4, 2, 4]


//Part - 2
// Add an object method name addItem which will take 4 parameter values 
// names, quantity, price, rating (use values from the given arrays) and add into the below data array format.

// data = [
// 	{name: "Shirt", quantity: 2, price: 60, rating: 3.5}
// ]


let names = ["Shirt", "Jeans", "Shoes", "Slippers"];
let quantity = [2, 3, 1, 4];
let price = [600, 1500, 2000, 500];
let rating = [3.5, 4, 2, 4];


let obj = {

    data: [],
    // [
    //     { names: 'Shirt', quantity: 2, price: 600, rating: 3.5 },
    //     { names: 'Jeans', quantity: 3, price: 1500, rating: 4 },
    //     { names: 'Shoes', quantity: 1, price: 2000, rating: 2 },
    //     { names: 'Slippers', quantity: 4, price: 500, rating: 4 }
    // ]

    addItems: function (names, quantity, price, rating) {


        let obj = { names, quantity, price, rating };
        this.data.push(obj);


    }
}

for (let i = 0; i <= names.length - 1; i++) {
    obj["addItems"](names[i], quantity[i], price[i], rating[i]);
}

// console.log(obj["data"]);

// [
//     { names: 'Shirt', quantity: 2, price: 600, rating: 3.5 },
//     { names: 'Jeans', quantity: 3, price: 1500, rating: 4 },
//     { names: 'Shoes', quantity: 1, price: 2000, rating: 2 },
//     { names: 'Slippers', quantity: 4, price: 500, rating: 4 }
// ]


{
    // let obj = {
    // data: [],
    // addItems: function (name, quantity, price, rating) {
    //     let obj = { name, quantity, price, rating };
    //     this.data.push(obj);
    // }
    // }

    // obj["addItems"]("Shirt", 2, 600, 3.5);
    // obj["addItems"]("Jeans", 3, 1500, 4);
    // obj["addItems"]("Shoes", 1, 2000, 2);
    // obj["addItems"]("Slippers", 4, 500, 4);

    // console.log(obj["data"]);
    // [
    //     { name: 'Shirt', quantity: 2, price: 600, rating: 3.5 },
    //     { name: 'Jeans', quantity: 3, price: 1500, rating: 4 },
    //     { name: 'Shoes', quantity: 1, price: 2000, rating: 2 },
    //     { name: 'Slippers', quantity: 4, price: 500, rating: 4 }
    // ]

    let nameArr = ["Shirt", "Jeans", "Shoes", "Slippers"];
    let quantityArr = [2, 3, 1, 4];
    let priceArr = [600, 1500, 2000, 500];
    let slippersArr = [3.5, 4, 2, 4];

    let obj = {
        key : [],
        addItems: function (name, quantity, price, rating){
            let obj = {name, quantity, price, rating};
            this.key.push(obj);
        }
    }

    // obj["addItems"](nameArr[0],quantityArr[0],priceArr[0],slippersArr[0]);

    for(let i=0; i<=nameArr.length-1; i++){
        obj["addItems"](nameArr[i], quantityArr[i], priceArr[i], slippersArr[i]);
    }
    console.log(obj["key"]);
    // [
    //     { name: 'Shirt', quantity: 2, price: 600, rating: 3.5 },
    //     { name: 'Jeans', quantity: 3, price: 1500, rating: 4 },
    //     { name: 'Shoes', quantity: 1, price: 2000, rating: 2 },
    //     { name: 'Slippers', quantity: 4, price: 500, rating: 4 }
    // ]
}