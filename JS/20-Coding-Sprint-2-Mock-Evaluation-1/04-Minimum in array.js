// Minimum in array

function minimumInArray(arr){
    //write code here
    let min = Infinity;
    for(let i=0; i<=arr.length-1; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    console.log(min); // 1
}
minimumInArray([1,2,3,4,5]);