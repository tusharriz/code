// Given two array of unequal length find the sum of the product of the elements in the same position.


let arr1 = [1,4,5,7,3,6];
let arr2 = [7,8,1,5];

let sum = 0;
let count = 0;

for(let i=0; i<=arr2.length-1; i++){
    sum += arr1[i] * arr2[i];
    count++;
}

// console.log(count); // 4

let rest = count - arr1.length;
// console.log(rest); // -2

for(let i=arr1.length-2; i<=arr1.length-1; i++){
    sum += arr1[i];
}
console.log(sum); // 88

