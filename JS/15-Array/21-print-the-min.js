// print the minimum element in the array;

let arr=[1, 4, 6, 5, 3, 7, 2];

let min = Infinity;

for(let i=0; i<=arr.length-1; i++){
    if(arr[i]<=min){
        min = arr[i];
    }
}

console.log(min); // 1