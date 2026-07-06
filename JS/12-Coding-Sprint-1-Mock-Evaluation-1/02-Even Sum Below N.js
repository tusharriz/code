// Even Sum Below N

`You are given a number, stored in a variable with the name num
Find the sum of all even numbers greater than zero, and less than or equal to the value stored in num
For example, if the value stored in num = 5 , then all the even numbers smaller than or equal to 5, and greater than zero are
2
4
Therefore, the sum becomes, sum = 2 + 4 = 6 , which is the required output

Sample Input 1 
6
Sample Output 1
12
`

let num = 6;
let sum = 0;

for(let i=1; i<=num; i++){
    if(i%2==0){
        sum = sum + i;
    }
}
console.log(sum); // 12