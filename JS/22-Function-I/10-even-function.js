// write a function for even

function even(num){
    if(num%2===0){
        return "Even";
    }else{
        return "Not Even";
    }
}

console.log(even(5)); // Not Even
console.log(even(2)); // Even

// OR

function checkEven(a){
    if(a%2==0){
        return true;
    }
}
let result = checkEven(100);

if(result == true){
    console.log("Num is Even");
}else{
    console.log("Num is not Even");
}