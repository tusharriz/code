// Given an array of integers find out the sum in this pattern.

let arr = [2,4,6,7,3,8,7,9];

let sum = arr[0] ;

for(let i=1; i<=arr.length-1; i++){
    if(i%2===0){
        sum = sum - arr[i];
    }else{
        sum = sum + arr[i];
    }
}

console.log(sum); // 14