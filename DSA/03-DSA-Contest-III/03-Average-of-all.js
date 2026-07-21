// Average-of-all

function averageOfAll(arr){
    //write code here
    
    let sum = 0;
    
    for(let i=0; i<=arr.length-1; i++){
        sum = sum + arr[i];
    }
    
    let average = Math.ceil(sum/arr.length);
    console.log(average);
}
averageOfAll([2,5,0,9]); // 4