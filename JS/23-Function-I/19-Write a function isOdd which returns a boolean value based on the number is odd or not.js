// Write a function isOdd which returns a boolean value based on the number is odd or not

function isOdd(num){
    if(num%2!==0){
        return true;
    }else{
        return false;
    }
}

console.log(isOdd(3)); // true

// Use this function to print the odd numbers from 0 to a given limit(included)

let limit = 20;

for(let i=0; i<=limit; i++){

    if(isOdd(i) == true){
        console.log(i,"is odd number.")
    }
}

// 1 is odd number.
// 3 is odd number.
// 5 is odd number.
// 7 is odd number.
// 9 is odd number.
// 11 is odd number.
// 13 is odd number.
// 15 is odd number.
// 17 is odd number.
// 19 is odd number.