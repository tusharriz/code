// Odd Array 

`You are given an array, stored in a variable with the size arr
The size of the array is stored in a variable with the name n
You have to traverse the array, and print only the odd elements in
the array.
Print each number on a new line
For example, consider the array as arr = [1 2 3 4 5] , and the
value stored in n = 5
Then, the required output will be
1
3
5
The above are the odd numbers in the given array

Sample Input 1
5
1 2 3 4 5
Sample Output 1
1
3
5
`

let arr = [1, 2, 3, 4, 5];

for(let i=0; i<=arr.length-1; i++){
    if(arr[i]%2!=0){
        console.log(arr[i]);
    }
}

// 1
// 3
// 5