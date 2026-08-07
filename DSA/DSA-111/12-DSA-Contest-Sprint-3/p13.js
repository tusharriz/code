// Given an array of intergers find the count of elements where the element is greater than any one its neighbors

let arr = [7,1,5,3,8,7,9,5,1,0];
let count = 0;

for(let i=1; i<=arr.length-2; i++){
    // console.log(arr[i]);
    let left = arr[i-1];
    let right = arr[i+1];
    
   if(arr[i] > left || arr[i] > right){
    count++;
    console.log(arr[i]);
    
   }

}

if(arr[0] > arr[1]){
    count++;
    console.log(arr[0]);
    
}

if(arr[arr.length-1] > arr[arr.length-2]){
    count++;
    console.log(arr[arr.length-1]);
    
}

console.log("count:", count ); // 2
