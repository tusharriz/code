function identifyPrime(num) {
    // Write code here
    let count = 0;
    
    for(let i=1; i<=num; i++){
        if(num%i===0){
            count++;
        }
    }
    
    if(count === 2){
        console.log("Yes");
    }else{
        console.log("No");
    }
}
identifyPrime(13); // Yes

let num = 13;
let factor = 0;
for(let i=1; i<=num/2; i++){
    if(num%i==0){
        factor++;
    }
}
if(factor == 1){
    console.log("Yes");
}else{
    console.log("No");
}