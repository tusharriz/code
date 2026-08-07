// write a function to check if even number id odd or even. function return "ture" for even and "false" for odd

function checkEvenOdd(num){
    if(num%2===0){
        return true;
    }else{
        return false;
    }
}

console.log(checkEvenOdd(5)); //  false
console.log(checkEvenOdd(1)); //  false
console.log(checkEvenOdd(4)); //  true


// doing in one line

function checkEvenOdd(num){
    return num%2===0;
}

console.log(checkEvenOdd(3)); // false
console.log(checkEvenOdd(6)); // true 