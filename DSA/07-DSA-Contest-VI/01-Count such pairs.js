function countSuchPairs(A,K){
    //write code here
    let count = 0;
    
    for(let i=0; i<A.length; i++){
        for(let j=i+1; j<A.length; j++){
            if(A[i] + A[j] === K){
                count++;
            }
        }
    }
    console.log(count);
}
countSuchPairs([3,0,6,2,7],9); // 2


let arr = [3,0,6,2,7];
let k = 9;
let count = 0;
for(let i=0; i<=arr.length-1; i++){
    for(let j=i+1; j<=arr.length-1; j++){
        // console.log(arr[i],arr[j])
        if(arr[i] + arr[j] == k){
            count++;
        }
    }
}
console.log(count); // 2