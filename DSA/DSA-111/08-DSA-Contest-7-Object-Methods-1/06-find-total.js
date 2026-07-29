// find total

let cart = {
    price : [20,45,85,96,12],
    qty : [1,5,7,1,3],

    totalValue : function(){

        let arr = this.price;
        let total = 0;

        for(let i=0; i<=arr.length-1; i++){
            total += arr[i] * this.qty[i];
        }

        console.log(total);

    }
}

cart["totalValue"](); // 972