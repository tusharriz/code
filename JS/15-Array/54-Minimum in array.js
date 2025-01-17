// Minimum in array

`You are given an array, stored in a variable with the size arr
The size of the array is stored in a variable with the name n
You have to find the minimum number in the array
For example, consider the array as arr = [1 2 3 4 5], and the
value stored in n = 5
Then, the required output will be 1 , as it is the smallest number i
n the array

Sample Input 1
5
1 2 3 4 5
Sample Output 1
1`

let arr = [1,2,3,4,5];

let min = Infinity;

for(let i=0; i<=arr.length-1; i++){
    if(arr[i] < min){
        min = arr[i];
    }
}

console.log(min); // 1