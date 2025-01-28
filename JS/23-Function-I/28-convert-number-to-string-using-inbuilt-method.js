// convert-number-to-string-using-inbuilt-method

function numtoStr(num1,num2){
    return num1 + "" +num2;
}

console.log(numtoStr(2,5)); // 25

let x = 15;
let y = 25;

let result = x.toString() + y.toString();
console.log(result); // 1525

console.log(typeof(result)); // string