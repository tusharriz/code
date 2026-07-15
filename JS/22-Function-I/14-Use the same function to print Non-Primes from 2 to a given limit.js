// Use the same function to print Non-Primes from 2 to a given limit

function checkPrime(num){
    let count = 0;

    for(let i=0; i<=num; i++){
        if(num%i==0){
            count++;
        }
    }

    if(count == 2){
        return true;
    }
}

let limit = 10;
for(let i=2; i<=limit; i++){
   if(checkPrime(i) !== true){
    console.log(i, "Not a Prime Number");
   };
}

// 4 Not a Prime Number
// 6 Not a Prime Number
// 8 Not a Prime Number
// 9 Not a Prime Number
// 10 Not a Prime Number


function prime(num){
    let factor = 0;
    for(let i=1; i<=num; i++){
        if(num%i==0){
            factor++;
        }
    }
    if(factor == 2){
        return true;
    }
    else{
        return false;
    }
}

for(let i=1; i<=20; i++){
    if(prime(i) == false){
        console.log(i, "is not a Prime Number");
    }
}

// 1 is not a Prime Number
// 4 is not a Prime Number
// 6 is not a Prime Number
// 8 is not a Prime Number
// 9 is not a Prime Number
// 10 is not a Prime Number
// 12 is not a Prime Number
// 14 is not a Prime Number
// 15 is not a Prime Number
// 16 is not a Prime Number
// 18 is not a Prime Number
// 20 is not a Prime Number