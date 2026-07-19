// Maximum in array

function maximumInArray(arr){
    //write code here
    let max = -Infinity;
    for(let i=0; i<=arr.length-1; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(max);
}

maximumInArray([1,2,3,4,5]); // 5