let arr = [
    { name: "IPad", price: 40000, rating: 4, category: "Computer" },
    { name: "HP Laptop", price: 60000, rating: 3, category: "Computer" },
    { name: "JBL Speaker", price: 5000, rating: 4, category: "Computer" },
    { name: "Boat Headphone", price: 2000, rating: 4, category: "Computer" },
    { name: "Ear Phone", price: 500, rating: 3, category: "Computer" },
    { name: "Tomato", price: 40, rating: 4, category: "vegetable" },
    { name: "Onion", price: 60, rating: 3, category: "vegetable" },
    { name: "Wheat", price: 500, rating: 2, category: "Grocery" },
    { name: "Rice", price: 200, rating: 3, category: "Grocery" },
    { name: "Dal", price: 400, rating: 3, category: "Grocery" },
    { name: "Potato", price: 20, rating: 2, category: "vegetable" },
    { name: "Cabbage", price: 40, rating: 4, category: "vegetable" },
    { name: "Cabbage", price: 40, rating: 4, category: "vegetable" },
];

let amazon = {
    data: [],
    cart: [],
    addProduct: function (name, price, rating, category) {
        // console.log(arr[0]["name"]);
        // for(let i=0;i<=arr.length-1; i++){
        //     // console.log(arr[i]["name"]);
        //     let obj = {};
        //     obj["name"] = arr[i]["name"];
        //     obj["price"] = arr[i]["price"];
        //     obj["rating"] = arr[i]["rating"];
        //     obj["category"] = arr[i]["category"];
        //     this.data.push(obj);
        // }
        // OR
        let obj = { name, price, rating, category };
        this.data.push(obj);
    },

    getProducts: function () {
        let proucts = this.data;
        for (let i of proucts) {
            console.log(i["name"]);
        }
    },

    getMaxPriceCategory: function (category) {
        let products = this.data;
        let max = -Infinity;
        for (let i of products) {
            if (i["category"] == category) {
                if (i["price"] > max) {
                    max = i["price"];
                }
            }
        }
        console.log(max);
    },

    getProductsinRange: function (range1, range2) {
        let products = this.data;
        for (let i of products) {
            if (i["price"] >= range1 && i["price"] <= range2) {
                console.log(i["name"]);
            }
        }
    },

    getProductsByCategory: function (category) {
        let products = this.data;
        let obj = {}
        for (let i of products) {
            if (category == i["category"]) {
                if (obj[i["name"]] == undefined) {
                    obj[i["name"]] = 1;
                } else {
                    obj[i["name"]]++;
                }
            }
        }
        console.log(obj)
    },
}

// console.log(arr[0]["name"],arr[0]["price"],arr[0]["rating"],arr[0]["category"]);
for (let i = 0; i <= arr.length - 1; i++) {
    amazon["addProduct"](arr[i]["name"], arr[i]["price"], arr[i]["rating"], arr[i]["category"]);
}

amazon["getProductsByCategory"]("vegetable"); // { Tomato: 1, Onion: 1, Potato: 1, Cabbage: 2 }
amazon["getProductsByCategory"]("Computer"); // {IPad: 1, HP Laptop: 1, JBL Speaker: 1, Boat Headphone: 1, Ear Phone: 1}
amazon["getProductsByCategory"]("Grocery"); // { Wheat: 1, Rice: 1, Dal: 1 }


