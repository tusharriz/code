`// Even Sum Again 

You are given a number stored in a variable with the name N

You have to print N lines such that on each line you find the sum of all even numbers in the range of [1,i] , where i represents all the numbers in the range of [1,N]

For example, consider the value stored in N = 3

Then, first we find the sum of all even numbers, in the range of [1,1], which comes out to be zero, as there are no even numbers in the range

Then, we find the sum of all even numbers, in the range of [1,2],which comes out to be 2, as there is only 1 even number (2). Hence, the sum becomes 2
Finally, we find the sum of all even numbers in the range of [1,3],which comes out to be 2, as there is only 1 even number (2). Hence, the sum becomes 2

Therefore, the final output becomes
0
2
2

Sample Input 1 
4
Sample Output 1
0
2
2
6
`

// 1    => 
// 12
// 123
// 1234 

let N = 4;

let sum = 0;
for(let i=1; i<=N; i++){
    for(let j=1; j<=i; j++){
        if(i%2==0){
            sum = sum + i; 
        }
    }
    console.log(sum);
}

`
0
2
2
6
`

//OR

{
    let sum = 0;
    for(let i=1; i<=N; i++){
        if(i%2===0){
            sum=sum+i;
        }
        console.log(sum);
    }
}

`
0
2
2
6
`








