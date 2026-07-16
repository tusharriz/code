// check even or odd btw 2 to 20;
function checkEvenOdd(num){
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}

for(let i=2; i<=20; i++){
    if(checkEvenOdd(i) == true){
        console.log(i, "is Even Number");
    }else{
        console.log(i, "is Odd Number");
    }
}