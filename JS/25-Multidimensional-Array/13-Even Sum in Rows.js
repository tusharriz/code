// Even Sum in Rows

function evenSumRows(N,M,arr){
    //write code here
    
    for(let i=0; i<=N-1; i++){
        let sum = 0;
        for(let j=0; j<=M-1; j++){
            if(arr[i][j]%2===0){
                sum += arr[i][j];
            }
        }
        console.log(sum);
    }
}
evenSumRows(3,3,[[1,2,3],[4,5,6],[7,8,9]]);
// 2
// 10
// 8

let arr = [[1,2,3],[4,5,6],[7,8,9]];

for(let i=0; i<=arr.length-1; i++){
    let sum = 0;
    for(let j=0; j<=arr.length-1; j++){
        // console.log(arr[i][j]);
        if(arr[i][j]%2==0){
            sum = sum + arr[i][j];
        }
        
    }
    console.log(sum);
}
// 2
// 10
// 8