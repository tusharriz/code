// Move 2 Ahead II 

`You are given a number stored in a variable with the following name, num
You have to print all the even numbers greater than zero, and less than or equal to the value stored in num
For example, if the value stored in num = 13 , then the output will be

Sample Input 1 
12
Sample Output 1
2
4
6
8
10
12
`

let num = 12;

for(let i=1; i<=num; i++){
    if(i%2==0){
        console.log(i);
    }
}

// 2
// 4
// 6
// 8
// 10
// 12