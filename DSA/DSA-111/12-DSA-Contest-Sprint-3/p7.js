// Given two array find the sum of the product of the elements in the same position.

let arr1 = [6,1,7,3,4];
let arr2 = [3,1,1,4,7];

let sum = 0;

for(let i=0; i<=arr1.length-1; i++){
    sum += arr1[i] * arr2[i];
}
console.log(sum); // 66

let sum1 = 0;

for(let i=0; i<=arr1.length-1; i++){
    sum1 += arr1[i];
}
console.log(sum1); // 66


let sum2 = 0;

for(let i=0; i<=arr2.length-1; i++){
    sum2 += arr2[i];
}
console.log(sum2); // 66