// Even Collection

`You are given two numbers, stored in variables with the following names
max, min
You have to find the sum of all even numbers that fall between two numbersfrom min to max(including both min and max).
For example, if the value stored in max = 19 , and the value stored in min = 14 , then the output will be computed as follows
sum of even = 14 + 16 + 18 = 48
Note : The value stored in max will always be greater than or equal to min

Sample Input 1 
19 13
Sample Output 1
48`

let min = 13;
let max = 19;
let sum = 0;

for(let i=min; i<=max; i++){
    if(i%2==0){
        sum = sum + i;
    }
}
console.log(sum);

//48