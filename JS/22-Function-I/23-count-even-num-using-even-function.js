// write a function checkEven and it return boolean value based on the outcome.

function checkEven(num){
    if(num%2===0){
        return true;
    }else{
        return false;
    }
}

console.log(checkEven(2)); // true
console.log(checkEven(3)); // false

// count even numbers only using above function;

let count = 0;
for(let i=1; i<=50; i++){
    if(checkEven(i)===true){
        count++;
    }
}
console.log(count); //25

// sum even numbers only using above function;

let sum = 0;
for(let i=1; i<=50; i++){
    if(checkEven(i)===true){
        sum += i;
    }
}
console.log(sum); // 650