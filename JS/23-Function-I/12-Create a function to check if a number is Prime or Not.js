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