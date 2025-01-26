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