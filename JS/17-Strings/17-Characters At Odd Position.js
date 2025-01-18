// Characters At Odd Position 

`You are given a string whose size is stored in a variable with the
name N , stored in a variable with the name str
You have to print all the characters in the string, which are prese
nt at odd indexes
For example, consider the string stored in str = "nrupul" , and the value stored in N = 6 , then the output will be
r
p
l
The characters stored at odd positions are r - index 1 , p - ind
ex 3 , l - index 5 , hence they are printed, each character on a
new line
Note : The indexing in the string starts from 0

Sample Input 1 
6
ankush
Sample Output 1
n
u
h`

let str = "ankush";

for(let i=0; i<=str.length-1; i++){
    if(i%2!=0){
        console.log(str[i]);
    }
}

// n
// u
// h