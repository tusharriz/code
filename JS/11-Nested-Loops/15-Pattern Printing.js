// Pattern Printing

`You are given a number, stored in a variable with the name N
Print the pattern as shown below.
If the value stored in N = 4 , then the pattern required will be
*
**
***
****

Sample Input 1 
2
Sample Output 1
*
**
Sample Input 2 
1
Sample Output 2
*
`
let n = 4;

for(let i=1; i<=n; i++){
    let bag = "";
    for(let j=1; j<=i; j++){
        bag = bag + "*";
    }
    console.log(bag);
}

`
*
**
***
****
`