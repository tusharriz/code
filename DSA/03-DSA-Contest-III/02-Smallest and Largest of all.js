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