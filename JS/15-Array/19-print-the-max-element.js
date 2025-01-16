// print the maximum element in the array

let arr=[1, 4, 6, 5, 3, 7, 2];

let max = -Infinity;

for(let i=0; i<=arr.length-1; i++){
    if(arr[i]>=max){
        max = arr[i];
    }
}

console.log(max); // 7

