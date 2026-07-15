// Use the above function to print the Prime Numbers from 2 to a given limit

function checkPrime(num) {
    let count = 0;

    for (let i = 0; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    }

    if (count == 2) {
        return true;
    }
}

let limit = 10;
for (let i = 2; i <= limit; i++) {
    if (checkPrime(i) === true) {
        console.log(i, "is a Prime Number");
    };
}

// 2 is a Prime Number
// 3 is a Prime Number
// 5 is a Prime Number
// 7 is a Prime Number



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
    // else{
    //     return false;
    // }
}

for(let i=1; i<=20; i++){
    let answer = prime(i);
    if(answer == true){
        console.log(i, "is Prime Number");
    }
    // else{
    //     console.log(i, "is not a Prime Number");
    // }
}

// 2 is Prime Number
// 3 is Prime Number
// 5 is Prime Number
// 7 is Prime Number
// 11 is Prime Number
// 13 is Prime Number
// 17 is Prime Number
// 19 is Prime Number