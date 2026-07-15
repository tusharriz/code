// convert-string-to-number-using-inbuilt-method

function addNum(num1,num2){
    return num1 + num2;
}

console.log(addNum(1,2)); // 3
console.log(addNum("1","2")); // 12
console.log(addNum("one","2")); // one2
console.log(addNum(Number("1"),Number("2"))); // 3

//"Number" is a inbuilt function that convert string to number.
