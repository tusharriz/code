// Part - 4
//Add an object method with a name totalPrice which will take 1 parameter
//value names (Which is an array) . It will find all those product names 
//in the given data array and calculates the total price of items (multiplying quantity of 
//each with its price). 

// Sample Input
// names = ["Jeans","Shoes"]

// Sample Output
// Calculate total price of jeans and shoes
// total_price = 3*1500 + 1*2000 = 4500+2000 = 6500


let obj = {

    data : [
        { names: 'Shirt', quantity: 2, price: 600, rating: 3.5 },
        { names: 'Jeans', quantity: 3, price: 1500, rating: 4 },
        { names: 'Shoes', quantity: 1, price: 2000, rating: 2 },
        { names: 'Slippers', quantity: 4, price: 500, rating: 4 }
    ],
    
    totalPrice : function(givenName){

            let arr = this.data;
            let totalValue = 0;

            for(let j=0; j<=givenName.length-1; j++){
                for(let i=0; i<=arr.length-1; i++){
                    if(givenName[j] === arr[i]["names"]){
                        totalValue += arr[i]["quantity"] * arr[i]["price"];
                        break;
                    }
                }
            }
            
            console.log(totalValue);
    }

}

// obj["totalPrice"](["Jeans","Shoes"]); // 6500

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

        totalPrice : function(names){
            // console.log(names); // [ 'Jeans', 'Shoes' ]
            let nArr = names;
            // console.log(nArr); // [ 'Jeans', 'Shoes' ]
            let arr = this.key;
            let total = 0;
            for(let i of nArr){
                for(let j of arr){
                    // console.log(i,j)
                    if(i == j["name"]){
                        total += j["quantity"] * j["price"];
                    }
                }
            }
            console.log(total); // 6500

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
    obj["totalPrice"](["Jeans","Shoes"]);
}