// Create a function to check if a number is Prime or Not

function checkPrime(num){
    let count = 0;

    for(let i=0; i<=num; i++){
        if(num%i==0){
            count++;
        }
    }

    if(count == 2){
        return num + " " + "is a Prime Number";
    }else{
        return num + " " + "is Not a Prime Number";
    }
}

// console.log(checkPrime(13)); // 13 is a Prime Number


let number = checkPrime(6);
console.log(number); // 6 is Not a Prime Number


function checkPrimeNum(num){
    let factor = 0;
    for(let i=1; i<=num; i++){
        if(num%i==0){
            factor++;
        }
    }

    if(factor == 2){
        return true;
    }else{
        return false;
    }
}

let answer = checkPrimeNum(12);

if(answer == true){
    console.log("num is Prime");
}else{
    console.log("num is not Prime");
}