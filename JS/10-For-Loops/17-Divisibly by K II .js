// Divisibly by K II 

`You are given two numbers stored in the variable with the following names,
num, K
You have to print the sum of all the numbers in the range [1,num] , such that for each number, the operation i % K == 0 , where
i refers to the numbers present in that range

Sample Input 1 
7 2
Sample Output 1
12`


let sum = 0;
let num = 7, k = 2;

for(let i=1; i<=num; i++){
    if(i%k==0){
        sum = sum + i;
    }
}
console.log(sum); // 12