//problem3:find the average of even numbers only

let arr=[1,2,3,4,5];


let count = 0;
let sum = 0;

for(let i=0; i<=arr.length-1; i++){
    sum=sum+arr[i];
    count++;
}

let average = sum/count;
console.log(average);