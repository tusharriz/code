`You are given a number stored in a variable with the name N
You have to print all the numbers in the range from 1 to N*N , such that there are exactly N numbers on each line
For example, if the value stored in N = 3 , then all the numbers in the range, from [1,9] need to be printed, such that there are 3 numbers on each line. Therefore, the required
output is
1 2 3
4 5 6
7 8 9

Sample Input 1 
4
Sample Output 1
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16

Hint
In the sample test case, the value stored at N = 4 . Therefore, all the values in the range from [1,16] need to be printed.
Also, there should be 4 elements on each line. Therefore, the output becomes
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16

hint : 
if(i%n==0){
    bag = bag + "\n";
}`

let bag = "";
let n = 4;

for(let i=1; i<=n*n; i++){
    bag = bag + i;
    if(i%n==0){
        bag = bag + "\n";
    }
}
console.log(bag);

`
1234
5678
9101112
13141516
`