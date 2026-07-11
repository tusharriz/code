// Reverse Array Traversal

`You are given an array, stored in a variable with the name arr
The size of the array is stored in a variable with the name size
You have to print the reverse traversal of the array
For example, consider the value stored in size = 4 , and the arra
y is arr = [1 2 3 4] . Then, the required output will be
4 3 2 1

Sample Input 1
5
1 3 2 4 5
Sample Output 1
5 4 2 3 1`

let arr = [1, 2, 3, 4, 5];
let bag = "";

for(let i=arr.length-1; i>=0; i--){
    bag = bag + arr[i] + " ";
}

console.log(bag);

// 5 4 3 2 1

