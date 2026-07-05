// Your First Pattern

`You are given a number stored in a variable with the name n
You have to print n lines, and on each line you have to print n stars
For example, consider the value stored in n = 4 . Then, the required o
utput will be
* * * *
* * * *
* * * *
* * * *

Sample Input 1 
5
Sample Output 1
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *`

let n = 5;

for(let i=1; i<=n; i++){
    let bag = "";
    for(let j=1; j<=n; j++){
        bag = bag + "*" + " ";
    }
    console.log(bag);
}

`
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
`