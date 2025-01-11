`
OUTPUT
1
*
1 2
* *
1 2 3
* * *
1 2 3 4 
* * * *
`

for(let i=1; i<=4; i++){
    let bag = "";
    let bag1 = "";
    for(let j=1; j<=i; j++){
        bag = bag + j + " ";
        bag1 = bag1 + "*" + " ";
    }
    console.log(bag);
    console.log(bag1);
}

`
1
*
1 2
* *
1 2 3
* * *
1 2 3 4
* * * *
`