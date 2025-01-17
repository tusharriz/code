// Sum of Array

`You are given an array, whose size is stored in a variable of size n
The array is stored in a variable with the name, arr
You have to print the sum of all elements of an array
For example, the value stored in N = 5 , and the array is arr = [1 2 3 4 5]
Therefore, the required output will be 15

Sample Input 1 
5
1 2 3 4 5
Sample Output 1
15`

let arr = [1,2,3,4,5];
let sum = 0;

for(let i=0; i<=arr.length-1; i++){
    sum = sum + arr[i];
}
console.log(sum); // 15
