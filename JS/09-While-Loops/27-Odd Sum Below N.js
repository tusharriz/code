// Odd Sum Below N

`You are given a number, stored in a variable with the name num
Find the sum of all odd numbers, greater than 0, and less than or equal to the value stored in num
Finally, print the sum
For example, if the value stored in num = 5
Then, all the odd numbers smaller than 5, will be
1
3
5
Therefore, the sum becomes, sum = 1 + 3 + 5 = 9 , which is the required output

Sample Input 1 
7
Sample Output 1
16`

let num = 7;
let sum = 0;

let i = 1;
while(i<=num){
    if(i%2!=0){
        sum = sum + i;
    }
    i++;
}
console.log(sum); // 16