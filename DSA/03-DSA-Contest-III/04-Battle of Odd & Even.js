// Battle of Odd & Even

function battleOfOddAndEven(arr){
    //write code here
    let eSum = 0;
    let oSum = 0;
    
    for(let i=0; i<=arr.length-1; i++){
        if(arr[i]%2===0){
            eSum = eSum + arr[i];
        }else{
            oSum = oSum + arr[i];
        }
    }
    
    if(oSum > eSum){
        console.log("Odd");
    }else{
        console.log("Even");
    }
}
battleOfOddAndEven([1,2,3,4]); // Even