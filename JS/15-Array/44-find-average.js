// Given an array of numbers find the average of all the even numbers.

let arr = [1, 2, 3, 4, 5, 6];

let sum = 0;
let count = 0;

for(let i=0; i<=arr.length-1; i++){
    sum = sum + arr[i];
    count++;
}

let average = sum/count; // or sum/arr.length => agar even ya odd ka average hota tab count use karte but iss case mei arr.length bhi likh sakte hai
console.log(average); // 3.5