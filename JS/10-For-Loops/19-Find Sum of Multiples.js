// Find Sum of Multiples

`You are given three integers: X, K, Y.
You have to print the sum of first K multiples of N, on a condition that it should be divisible by Y. 
Sample Input 1 
3 10 5
Sample Output 1
45`

let x = 3, k = 10, y = 5;
let sum = 0;

for(let i=1; i<=10; i++){
    let bag = i*x;
    if(bag%y==0){
        sum = sum + bag;
    }
}

console.log(sum); // 45