// Part 5
// Add an object method name deleteItem which will take 1 parameter values name and
// delete the required item from the data

// Sample Input
// Suppose data is containing following elements

// data = [
// 	{name: "Shirt", quantity: 2, price: 600, rating: 3.5},
// 	{name: "Jeans", quantity: 3, price: 1500, rating: 4},
// 	{name: "Shoes", quantity: 1, price: 2000, rating: 2}
// 	{name: "Slippers", quantity: 4, price: 500, rating: 4}
// ]

// name = "Shoes"

// Sample Output
// Item Shoes is deleted

// data = [
// 	{name: "Shirt", quantity: 2, price: 600, rating: 3.5},
// 	{name: "Jeans", quantity: 3, price: 1500, rating: 4},
// 	{name: "Slippers", quantity: 4, price: 500, rating: 4}
// ]


let obj = {

    data: [
        { names: 'Shirt', quantity: 2, price: 600, rating: 3.5 },
        { names: 'Jeans', quantity: 3, price: 1500, rating: 4 },
        { names: 'Shoes', quantity: 1, price: 2000, rating: 2 },
        { names: 'Slippers', quantity: 4, price: 500, rating: 4 }
    ],

    deleteItem: function (givenName) {

        let arr = this.data;
        let newarr = [];

        for (let i = 0; i <= arr.length - 1; i++) {
            if (arr[i]["names"] != givenName) {
                newarr.push(arr[i]);;
            }
        }

        console.log(newarr);
    }

}

// obj["deleteItem"]("Shoes");

// [
//   { names: 'Shirt', quantity: 2, price: 600, rating: 3.5 },
//   { names: 'Jeans', quantity: 3, price: 1500, rating: 4 },
//   { names: 'Slippers', quantity: 4, price: 500, rating: 4 }
// ]

{
    let nameArr = ["Shirt", "Jeans", "Shoes", "Slippers"];
    let quantityArr = [2, 3, 1, 4];
    let priceArr = [600, 1500, 2000, 500];
    let ratingArr = [3.5, 4, 2, 4];

    let obj = {
        key: [],

        addItems: function (name, quantity, price, rating) {
            let obj = { name, quantity, price, rating };
            this.key.push(obj);
        },

        filterProduct: function (price, rating) {
            let arr = this.key;
            // console.log(arr[0]["price"],arr[0]["rating"]); // 600 3.5
            let flag = false;
            for (let i = 0; i <= arr.length - 1; i++) {
                if (arr[i]["price"] >= price && arr[i]["rating"] >= rating) {
                    flag = true;
                    console.log(arr[i]["name"]);
                }
            }
            if (flag == false) {
                console.log("Not Available");
            }
        },

        totalPrice: function (names) {
            // console.log(names); // [ 'Jeans', 'Shoes' ]
            let nArr = names;
            // console.log(nArr); // [ 'Jeans', 'Shoes' ]
            let arr = this.key;
            let total = 0;
            for (let i of nArr) {
                for (let j of arr) {
                    // console.log(i,j)
                    if (i == j["name"]) {
                        total += j["quantity"] * j["price"];
                    }
                }
            }
            console.log(total); // 6500

        },

        deleteItem: function (name) {
            let arr = this.key;
            let narr = [];
            for (let i of arr) {
                // console.log(i);
                // console.log(i["name"]);
                if (i["name"] != name) {
                    narr.push(i)
                }
            }
            console.log(narr);
        }
    }

    // obj["addItems"](nameArr[0],quantityArr[0],priceArr[0],slippersArr[0]);

    for (let i = 0; i <= nameArr.length - 1; i++) {
        obj["addItems"](nameArr[i], quantityArr[i], priceArr[i], ratingArr[i]);
    }
    // console.log(obj["key"]);
    // [
    //     { name: 'Shirt', quantity: 2, price: 600, rating: 3.5 },
    //     { name: 'Jeans', quantity: 3, price: 1500, rating: 4 },
    //     { name: 'Shoes', quantity: 1, price: 2000, rating: 2 },
    //     { name: 'Slippers', quantity: 4, price: 500, rating: 4 }
    // ]
    // obj["filterProduct"](1500, 4); // Jeans
    // obj["totalPrice"](["Jeans", "Shoes"]); // 6500
    obj["deleteItem"]("Shoes");
    // [
    //     { name: 'Shirt', quantity: 2, price: 600, rating: 3.5 },
    //     { name: 'Jeans', quantity: 3, price: 1500, rating: 4 },
    //     { name: 'Slippers', quantity: 4, price: 500, rating: 4 }
    // ]
}
