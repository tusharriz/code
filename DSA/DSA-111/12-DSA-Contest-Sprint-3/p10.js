// Given an array of integers find out the sum in an alternate manner.

let arr = [5,4,6,3,8,2];

let sum = 0;

for(let i=0; i<=arr.length-1; i++){
    if(i%2===0){
        sum = sum + arr[i];
    }else{
        sum = sum - arr[i];
    }
}
console.log(sum); // 10