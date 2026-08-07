// Given an array of intergers find the count of elements where the element is greater than both its neighbors

let arr = [2,5,3,8,7,1];
let count = 0;

for(let i=1; i<=arr.length-2; i++){
    // console.log(arr[i]);
    let left = arr[i-1];
    let right = arr[i+1];
    
   if(arr[i] > left && arr[i] > right){
    count++;
   }

}

console.log(count); // 2
