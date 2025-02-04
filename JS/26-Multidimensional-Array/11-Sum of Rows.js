// Sum of Rows

function sumOfRows(N,M,arr){
    //write code here
    
    for(let i=0; i<=N-1; i++){
        let sum = 0;
        for(let j=0; j<=M-1; j++){
            sum += arr[i][j];
        }
        console.log(sum);
    }
}

sumOfRows(3,2,[[1,2],[3,4],[5,6]]);

// 3
// 7
// 11

