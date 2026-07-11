// Maximum in array 

`You are given an array, stored in a variable with the size arr
The size of the array is stored in a variable with the name n
You have to find the maximum number in the array
For example, consider the array as arr = [1 2 3 4 5], and the
value stored in n = 5
Then, the required output will be 5 , as it is the largest number in
the array

Sample Input 1 
5
1 2 3 4 5
Sample Output 1
5`

let arr = [1,2,3,4,5];
let max = -Infinity;

for(let i=0; i<=arr.length-1; i++){
    if(arr[i]>=max){
        max = arr[i];
    }
}

console.log(max); // 5