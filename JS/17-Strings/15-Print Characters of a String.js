// Print Characters of a String

`You are given a string, whose size is stored in a variable with the
name N
The string itself is stored in a variable with the name, str
Print all the characters, stored in str , on a new line
For example, if the value stored in N = 6 , and the string is str =
"nrupul" , then the required output will be
n
r
u
p
u
l

Sample Input 1
6
ankush
Sample Output 1
a
n
k
u
s
h`

let str = "ankush";

for(let i=0; i<=str.length-1; i++){
    console.log(str[i]);
}

// a
// n
// k
// u
// s
// h