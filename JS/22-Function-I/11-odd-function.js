// write a function for odd

function even(num){
    if(num%2!==0){
        return "Odd";
    }else{
        return "Not Odd";
    }
}

console.log(even(5)); // Odd
console.log(even(2)); // Not Odd

function checkOdd(num){
    if(num%2!==0){
        return true; 
    }
}

let answer = checkOdd(2);

if(answer == true){
    console.log("num is Odd");
}else{
    console.log("num is not Odd");
}