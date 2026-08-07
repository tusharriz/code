// Given an array calculate the sum of elements in even indexes.

let arr = [24,64,12,6,8,43];

let sum = 0;

// for(let i=0; i<=arr.length-1; i++){
//     if(i%2===0){
//         sum += arr[i];
//     }
// }

// console.log(sum); // 44

// OR


function checkEvenOdd(num){
    return num%2===0;
}

for(let i=0; i<=arr.length-1; i++){
    if(checkEvenOdd(i)){
        sum += arr[i];
    }
}

console.log(sum);