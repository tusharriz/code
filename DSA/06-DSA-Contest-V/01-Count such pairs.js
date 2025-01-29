// Count such pairs

function countSuchPairs(A,K){
    //write code here
    let count = 0;
    
    for(let i=0; i<=A.length-1; i++){
        
        for(let j=i+1; j<=A.length-1; j++){
            if(A[i] + A[j] == K){
                count++;
            }
        }
    }
    console.log(count);
}
countSuchPairs([3, 0, 6, 2, 7],9) //2