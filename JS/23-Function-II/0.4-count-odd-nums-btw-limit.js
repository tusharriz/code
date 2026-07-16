// count odd numbers btw 1 to 100 using function

function checkEvenOdd(num){
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}
let count = 0;

for(let i=1; i<=100; i++){
    if(checkEvenOdd(i) == false){
        count++;
    }
}
console.log(count); // 50