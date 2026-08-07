// Given an array calculate the sum of elements in even indexes.

// Assume this array starts at index 1.

let arr = [5,6,4,1,7,8];

let sum = 0;

for(let i=0; i<=arr.length-1; i++){
    if((i+1)%2===0){
        sum += arr[i];
    }
}
console.log(sum); // 

// OR 

let res = 0;

for(let i=0; i<=arr.length-1; i++){
    if(i%2!==0){
        res += arr[i];
    }
}
console.log(res); // 