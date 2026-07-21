function smallestAndLargestOfAll(arr){
    //write code here
    let min = Infinity;
    let max = -Infinity;
    
    for(let i=0; i<=arr.length-1; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(min);
    console.log(max);
}
smallestAndLargestOfAll([-2, 0, 8, 4]);

//-2
//8

let arr = [-2, 0, 8, 4, -3, 10];
let smallest = Infinity;
let largest = -Infinity;

for(let i=0; i<=arr.length-1; i++){
    if(arr[i]<smallest){
        smallest = arr[i];
    }
    if(arr[i]>largest){
        largest = arr[i];
    }
}
console.log(smallest+"\n"+largest);