// print the second maximum element in the array;

let arr=[1, 4, 6, 5, 3, 7, 2];

let firstMax = -Infinity;
let secondMax = -Infinity;

for(let i=0; i<=arr.length-1; i++){
    if(arr[i]>=firstMax){
        secondMax = firstMax;
        firstMax = arr[i];
    }   
}
console.log(firstMax); // 7
console.log(secondMax); // 6





