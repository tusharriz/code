// Another Nested Loop 

`You are given a number stored in a variable with the name num
Print num lines such that there are numbers from 1 to i , such that on
each line you print only one number. Also, i represents all the number
s from 1 to num
For example, consider the value stored in num = 5
Therefore, the required output will be
1
1
2
1
2
3
1
2
3
4
1
2
3
4
5

Sample Input 1 
4
Sample Output 1
1
1
2
1
2
3
1
2
3
4`

let num = 4;

for(let i=1; i<=num; i++){
    for(let j=1; j<=i; j++){
        console.log(j);
    }
}

`
1
1
2
1
2
3
1
2
3
4
`