function applyBasicMaths(N,A){
    //write code here
    
    let min = Infinity;
    let minIndex = -1;
    
    for(let i=0; i<=N-1; i++){
        let sum = 0;
        for(let j=0; j<=N-1; j++){
            if(i==j){
                continue;
            }else{
                sum = sum + A[j]; 
            }
        }
        // console.log(i,sum);
        if (sum % 7 === 0) {
            if (A[i] < min) {
                min = A[i];
                minIndex = i;
            }
        }
        
    }
    console.log(minIndex);
}

applyBasicMaths(5,[14, 7, 8, 2, 4]); // 1