`You are given an array, whose size is stored in a variable of size n.
The array is stored in a variable with the name, arr
You have to traverse the array, and print each element on a new line
For example, the value stored in N = 5 , and the array is arr = [1 2 3 4 5]
Therefore, the required output will be
1
2
3
4
5

Sample Input 1
5
1 2 3 4 5
Sample Output 1
1
2
3
4
5`

let n = 5;
let arr = [1, 2, 3, 4, 5];

for(let i=0; i<=arr.length-1; i++){
    console.log(arr[i]);
}

// 1
// 2
// 3
// 4
// 5