// Two Primes 

`You are given two numbers, stored in variables with the following names a, b
If both the numbers are prime, print True , else print False

Sample Input 1 
11 17
Sample Output 1
True`


let a = 11;
let b = 17;
let count1 = 0;
let count2 = 0;

for(let i=1; i<=a; i++){
    if(a%i==0){
        count1++;
    }
}

for(let j=1; j<=b; j++){
    if(b%j==0){
        count2++;
    }
}

if(count1 == 2 && count2 == 2){
    console.log(true);
}else{
    console.log(false);
}

// ture