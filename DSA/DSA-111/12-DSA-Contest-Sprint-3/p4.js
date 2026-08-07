// Given an array calculate the sum of its elements which are even.

let arr = [2,5,1,2,9,6];

let sum = 0;

// for(let i=0; i<=arr.length-1; i++){
//     if(arr[i]%2===0){
//         sum += arr[i];
//     }
// }

// console.log(sum); // 2


// OR


function checkEvenOdd(num){
    return num%2===0;
}

for(let i=0; i<=arr.length-1; i++){
    if(checkEvenOdd(arr[i])){
        sum += arr[i];
    }
}

console.log(sum);