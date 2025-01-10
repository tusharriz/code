// Calculate the sum of odd numbers in between 1 and 50, including both the numbers

let oddSum = 0;

for(let i=1; i<=50; i++){
    if(i%2!==0){
        oddSum = oddSum + i;
    }
}

console.log(oddSum); // 625