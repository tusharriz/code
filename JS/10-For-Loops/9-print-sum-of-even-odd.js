// Calculate the sum of even numbers and odd numbers in between 1 and 50, including both the numbers.


let evenSum = 0;
let oddSum = 0;

for(let i=1; i<=50; i++){
    if(i%2===0){
        evenSum = evenSum + i;
    }else{
        oddSum = oddSum + i;
    }
}

console.log("Even sum is",evenSum); // Even sum is 650
console.log("Odd sum is",oddSum); // Odd sum is 625