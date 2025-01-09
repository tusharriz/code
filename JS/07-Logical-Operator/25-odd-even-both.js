`You are given two numbers, stored in the variable with the following names
one, two
If both the values are even, print Even
Else if both the values are odd, print Odd
else print Even-Odd

Sample Input 1 
3 6
Sample Output 1
Even-Odd
`
let one = 3, two = 6;

if(one%2==0 && two%2==0){
    console.log("Even");
}else if(one%2!=0 && two%2!=0){
    console.log("Odd"); // Odd
}else{
    console.log("Even-Odd");
}