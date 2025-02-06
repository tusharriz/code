// Odd Sum in Columns

function oddSumColumns(N,M,arr){
    //write code here
    
    for(let i=0; i<=M-1; i++){
        let sum = 0;
        for(let j=0; j<=N-1; j++){
            if(arr[j][i]%2!==0){
                sum = sum + arr[j][i];
            }
        }
        console.log(sum);
    }
}
oddSumColumns(3,3,[[1,2,3],[4,5,6],[7,8,9]]);

// 8
// 5
// 12