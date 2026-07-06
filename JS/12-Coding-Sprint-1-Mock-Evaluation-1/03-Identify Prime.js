// Identify Prime Ended

`You are given a number stored in a variable with the name num
Check if the number is a prime number or not
If the value stored in num , is a prime number print Yes , else print No
Note : A prime number is a number, that is divisible by only 1 and the number itself
z
Sample Input 1 
13
Sample Output 1
Yes
`

let num = 13;
let count = 0;

for(let i=1; i<=num; i++){
    if(num%i==0){
        count++;
    }
}

if(count == 2){
    console.log("Yes",num,"is a Prime Number");
}else{
    console.log("No",num,"is not a Prime Number");
}

// Yes 13 is a Prime Number