let products=["macbook", "iphone 13", "ipad", "airpods"];
let price=[150000,71000,55000,20000];
/*
[

{name:"macbook",price:15000},
{name:"iphone 13",price:71000},
{name:"ipad",price:55000},
{name:"airpods",price:20000},

]
*/

let arr = [];

for(let i=0; i<=products.length-1;i++){
    // console.log(products[i]);
    let obj = {};
    let pro = products[i];
    let pri = price[i]
    // console.log(pro);
    // console.log(pri);
    obj["name"]=pro;
    obj["price"]=pri
    
    arr.push(obj);
}
console.log(arr);