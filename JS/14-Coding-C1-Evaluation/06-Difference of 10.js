// Difference of 10

`You are given a number stored in a variable with the name N
You have to print the series starting from 10 to N having a difference of 10,
For example, if the value is stored in N = 100 , then all the numbers in the range, from [10,100] need to be printed, such that there are 3 numbers on each line. Therefore, the r
equired output is
10
20
30
40
50
60
70
80
90
100
Note : The value of N will always be multiple of 10.

Sample Input 1 
100
Sample Output 1
10
20
30
40
50
60
70
80
90
100`

let n = 100;

for(let i=10; i<=n; i = i + 10){
    console.log(i);
}

`
10
20
30
40
50
60
70
80
90
100`