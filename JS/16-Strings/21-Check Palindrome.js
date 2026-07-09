// Check Palindrome

`You are given a string, whose size is stored in a variable with the name N
The string is stored in a variable with the name str
Print Yes , if the string is a palindrome, else print No
For example, consider the value stored in str = "naman" , if we reverse the string, the reversed string will be the same as the original string, hence the string is considered aspalindrome, therefore, the output is Yes
Note : A palindrome is a string which is the same read forwards or backwards

Sample Input 1 
6
nrupul
Sample Output 1
No`

let str = "nrupul";
let rstr = "";

for(let i=str.length-1; i>=0; i--){
    rstr = rstr + str[i];
}

if(rstr == str){
    console.log("Yes");
}else{
    console.log("No");
}