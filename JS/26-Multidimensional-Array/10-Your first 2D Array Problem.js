// Your first 2D Array Problem

function array2D(N,M,arr){
    //write code here
    for(let i=0; i<=N-1; i++){
        let bag = "";
        for(let j=0; j<=M-1; j++){
            bag += arr[i][j] + " ";
        }
        console.log(bag);
    }
}
array2D(3,2,[[1,2],[3,4],[5,6]]);

// 1 2
// 3 4
// 5 6