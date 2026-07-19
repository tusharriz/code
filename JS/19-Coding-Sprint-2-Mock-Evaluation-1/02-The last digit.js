// The last digit

function theLastDigit(number) {
    // Write code here
    let num = number%10;
    if(num%3===0){
        console.log("Divisible");
    }else{
        console.log("Not Divisible");
    }
}
theLastDigit(126); // Divisible