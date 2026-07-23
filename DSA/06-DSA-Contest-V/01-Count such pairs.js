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


let arr = [3,0,6,2,7];
let count = 0;
let K = 9;
for(let i=0; i<=arr.length-1; i++){
    for(let j=i+1; j<=arr.length-1; j++){
        if(arr[i] + arr[j] == K){
            count++;
        }
    }
}
console.log(count); // 2