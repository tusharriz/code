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

// applyBasicMaths(5,[14, 7, 8, 2, 4]); // 1

let arr = [14,7,8,2,4];
let k = 7;
let minIndex = -1;
let minEle = Infinity;
for(let i=0; i<=arr.length-1; i++){
    let sum = 0;
    for(let j=0; j<=arr.length-1; j++){
        if(j!=i){
            sum = sum + arr[j];
        }
    }
    // console.log(sum);
    if(sum%k==0){
        if(arr[i] < minEle){
            minEle = arr[i];
            minIndex = i;
        }
    }
}
console.log(minEle); // 7
console.log(minIndex); // 1