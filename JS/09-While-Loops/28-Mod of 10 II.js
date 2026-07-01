// Mod of 10 II

`You are given a number stored in a variable with the name num
Find out the value obtained from the expression i % 10 , where i consists of all the values from 1 to the value stored in num , including num

Sample Input 1 
7
Sample Output 1
1
2
3
4
5
6
7
`

let num = 7;
let i = 1;
while(i<=num){
    console.log(i%10);
    i++;
}

// 1
// 2
// 3
// 4
// 5
// 6
// 7