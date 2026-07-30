// Part - 3
// Add an object method with a name filterProduct which will take 2 parameter value rating and price.
// It will find all products name whose price and rating is greater than and equal to given price and rating (passed in parameter).
// if the product is not found it print "Not Available"

// Sample Input
// rating = 4
// price = 1500

// Sample Output
// Jeans


let obj = {

    data : [
    { names: 'Shirt', quantity: 2, price: 600, rating: 3.5 },
    { names: 'Jeans', quantity: 3, price: 1500, rating: 4 },
    { names: 'Shoes', quantity: 1, price: 2000, rating: 2 },
    { names: 'Slippers', quantity: 4, price: 500, rating: 4 }
],


    filterProduct : function(givenPrice,givenrating){

        let arr = this.data;
        let result = "";
        
        for(let i=0; i<=arr.length-1; i++){
            if(arr[i]["price"] >= givenPrice && arr[i]["rating"] >= givenrating){
                result += arr[i]["names"];
            }
        }
        // console.log(result);
    
    }
}


// 3rd Output:-
// obj["filterProduct"](1500,4); //Jeans

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

        filterProduct : function (price,rating){
            let arr = this.key;
            // console.log(arr[0]["price"],arr[0]["rating"]); // 600 3.5
            let flag = false;
            for(let i=0; i<=arr.length-1; i++){
                if (arr[i]["price"] >= price && arr[i]["rating"] >= rating){
                    flag = true;
                    console.log(arr[i]["name"]);
                }
            }
            if(flag == false){
                console.log("Not Available");
            }
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
    obj["filterProduct"](1500,4); // Jeans
}