// Use the above function to print the Prime Numbers from 2 to a given limit

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
   if(checkPrime(i) === true){
    console.log(i, "is a Prime Number");
   };
}

// 2 is a Prime Number
// 3 is a Prime Number
// 5 is a Prime Number
// 7 is a Prime Number