// Given an array calculate the sum of its elements.

let arr = [2,5,1,7,9,5];

let sum = 0;

for(let i=0; i<=arr.length-1; i++){
    sum += arr[i];
}
console.log(sum); // 29


// OR solve it with the help of for of loop

let res = 0;

for (let num of arr){
    res += num;
}
console.log(res); // 29