// Check if the number is even or odd, if even return true otherwise return false.

function checkEvenOdd(num){
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(checkEvenOdd(3)); // false
console.log(checkEvenOdd(2)); // true

// only check even and return true if the num is even else return false.

function checkEven(num){
    if(num%2==0){
        return true;
    }else {
        return false;
    }
}
console.log(checkEven(1564)); // true
console.log(checkEven(1561)); // false

// now, check for odd only and return true if the num is old else return false.

function checkOdd(num){
    if(num%2!=0){
        return true;
    }else{
        return false;
    }
}

console.log(checkOdd(461)); // true
console.log(checkOdd(462)); // false