// Odd Array Sum

function oddArraySum(arr){
    //write code here
    let sum = 0;
    for(let i=0; i<=arr.length-1; i++){
        if(arr[i]%2!==0){
            sum = sum + arr[i];
        }
    }
    console.log(sum);
}
oddArraySum([1,2,3,4,5]) // 9