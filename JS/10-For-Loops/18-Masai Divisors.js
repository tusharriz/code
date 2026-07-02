// Masai Divisors

`You are provided 3 integers: left, right and k.
Your task is to write a program that finds out the count of all such numbers between lefts and right (both inclusive) which are divided by k.
Sample Input 1 
1 10 3
Sample Output 1
3`

let left = 1, right = 10, k = 3;
let count = 0;

for(let i=left; i<=right; i++){
    if(i%k==0){
        count++;
    }
}
console.log(count) // 3