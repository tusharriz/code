// Sum of 1 to N

`You are given a number, stored in a variable with the name N
Find the sum of al the numbers 1 to N
For example, if the value stored in N = 5 , then the sum of 1 to 5 is
1
2
3
4
5
Therefore, the sum becomes, sum = 1 + 2 + 3 + 4 + 5 = 15 , which is the required output
Sample Input 1
5
Sample Output 1
15
`

let n = 5;
let sum = 0;
let i = 1;
while(i<=n){
    sum = sum + i;
    i++;
}
console.log(sum); // 15