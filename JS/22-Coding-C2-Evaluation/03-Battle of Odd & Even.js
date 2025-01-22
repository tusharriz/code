// Battle of Odd & Even

function battleOfOddAndEven(arr){
    //write code here
    let even = 0;
    let odd = 0;
    for(let i=0; i<=arr.length-1; i++){
        if(arr[i]%2===0){
            even = even + arr[i];
        }else{
            odd = odd + arr[i];
        }
    }
    
    if(odd>even){
        console.log("Odd");
    }else{
        console.log("Even");
    }
}


battleOfOddAndEven([1,2,3,4]); // Even