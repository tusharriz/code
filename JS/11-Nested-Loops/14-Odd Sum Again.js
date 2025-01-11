// Odd Sum Again

`You are given a number stored in a variable with the name N

You have to print N lines such that on each line you find the sum of all odd numbers in the range of [1,i] , where i represents all the numbers in the range of [1,N]

For example, consider the value stored in N = 3

Then, first we find the sum of all even numbers, in the range of [1,1], which comes out to be 1, as there is one odd number (1) in the range

Then, we find the sum of all even numbers, in the range of [1,2],which comes out to be 1, as there is only 1 odd number (1). Hence, the sum becomes 1

Finally, we find the sum of all even numbers in the range of [1,3],which comes out to be 4, as there are two odd numbers (1,3) in the given range. Hence, the sum becomes 4

Therefore, the final output becomes
1
1
4

Sample Input 1 
4
Sample Output 1
1
1
4
4
`
let n = 4;

let sum = 0;
for(let i=1; i<=n; i++){
    if(i%2!==0){
        sum = sum + i;
    }
    console.log(sum);
}

`
1
1
4
4
`