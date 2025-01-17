// Odd Array Sum
`
You are given an array, stored in a variable with the size arr
The size of the array is stored in a variable with the name n
You have to traverse the array, and print the sum of odd element
s in the array.
For example, consider the array as arr = [1 2 3 4 5] , and the
value stored in n = 5
Then, the sum of odd elements are : 1 + 3 + 5 = 9
9

Sample Input 1 
5
1 2 3 4 5
Sample Output 1
9`


let arr = [1,2,3,4,5];
let sum = 0;

for(let i=0; i<=arr.length-1; i++){
    if(arr[i]%2!=0){
        sum = sum + arr[i];
    }
}

console.log(sum); // 9