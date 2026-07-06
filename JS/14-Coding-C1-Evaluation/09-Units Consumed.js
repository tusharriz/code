// Units Consumed

`Sample Input 1
930
Sample Output 1
170`

let bill = 930; 
let fixedCharge = 80;

bill = bill - fixedCharge;
// console.log(bill);  // 850

if(bill <= 150){
    uc = bill/3;
}else if( bill <= 650){
    uc = 50+(bill-150)/5;
}else if(bill>=650){
    uc = 150+(bill-650)/10;
}

console.log(uc); // 170

