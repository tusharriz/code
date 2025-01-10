// divisible by K

`You are given two numbers stored in the variable with the followi
ng names,
num, K
You have to print all the numbers in the range [1,num] , such that
for each number, the operation i % K == 0 , where i refers to th
e numbers present in that range
Print each number on a new line

Sample Input 1 
7 2
Sample Output 1
2
4
6`

let num = 7, k = 2;

for(let i=1; i<=num; i++){
    if(i%k==0){
        console.log(i);
    }
}

// 2
// 4
// 6