// Second Maximum

`You are given three numbers stored in the variables with the following names, a,b,c
You have to find the second largest number out of a,b,c
For example, consider the value stored in a = 3, b = 7, c = 5 , then the required output will be c = 5

Sample Input 1 
31 27 65
Sample Output 1
5`

let a = 3;
let b = 7;
let c = 5;

if(a > b && a < c){
    console.log(a);
}else if(b > a && b < c){
    console.log(b);
}else if(c > a && c < b){
    console.log(c);
}