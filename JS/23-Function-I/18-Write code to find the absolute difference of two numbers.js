// Write code to find the absolute difference of two numbers;

// Sample Input-1 12,4
// Sample Output- 8
// Sample Input-2 4,18
// Sample Output- 14
// NOTE: It must consist of two functions 1. To find the difference
// 2. To find the absolute value https://en.wikipedia.org/wiki/Absolute_value

function difference(num1,num2){
    
    let result = num1 - num2;
    if(result < 0){
        return result * -1;
    }else{
        return result;
    }
}
console.log(difference(12,4)); // 8
console.log(difference(4,18)); // 14
