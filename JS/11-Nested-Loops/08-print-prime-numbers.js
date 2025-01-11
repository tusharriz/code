// Problem 2: Print Prime Numbers from 1 to given num

let num = 13;

for(let i=1; i<=num; i++){
    let count = 0;
    for(let j=1; j<=i; j++){
        if(i%j==0){
            count++;
        }
    }

    if(count == 2){
        console.log(i,"is a prime number");
    }else{
        console.log(i,"is not a prime number");
    }
}

// 1 is not a prime number
// 2 is a prime number
// 3 is a prime number
// 4 is not a prime number
// 5 is a prime number
// 6 is not a prime number
// 7 is a prime number
// 8 is not a prime number
// 9 is not a prime number
// 10 is not a prime number
// 11 is a prime number
// 12 is not a prime number
// 13 is a prime number

