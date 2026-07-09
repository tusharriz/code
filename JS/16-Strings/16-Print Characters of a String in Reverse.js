// Print Characters of a String in Reverse

`You are given a string, whose size is stored in a variable with the
name N
You have to print all the characters in the string in reverse order,
on a new line
For example, consider the string stored in str = "nrupul" , and t
he value stored in N = 6 , then the required output will be
l
u
p
u
r
n

Sample Input 1 
6
ankush
Sample Output 1
h
s
u
k
n
a`

let str = "ankush";

for(let i=str.length-1; i>=0; i--){
    console.log(str[i]);
}

// h
// s
// u
// k
// n
// a