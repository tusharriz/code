// Even Array Sum

`You are given an array, stored in a variable with the size arr
The size of the array is stored in a variable with the name n
You have to traverse the array, and print sum of even elements
Print each number on a new line
For example, consider the array as arr = [1 2 3 4 5] , and the
value stored in n = 5
The sum of even elements are : 2 + 4 = 6
Then, the required output will be 6

Sample Input 1 
5
1 2 3 4 5
Sample Output 1
6`

let arr = [1,2,3,4,5];
let sum = 0;

for(let i=0; i<=arr.length-1; i++){
    if(arr[i]%2==0){
        sum = sum + arr[i];
    }
}

console.log(sum); // 6