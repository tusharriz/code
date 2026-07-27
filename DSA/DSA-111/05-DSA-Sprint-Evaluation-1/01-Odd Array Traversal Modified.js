// Odd Array Traversal Modified

function oddArrayTraversalModified(N,arr){
    //write code here
    for(let i=0; i<=N-1; i++){
        let bag = "";
        if(i%2!==0 && arr[i]%2!==0){
            bag = bag + i+" "+arr[i];
        }

        if(bag !== ""){
            console.log(bag);
        }
    }
}
// oddArrayTraversalModified(5,[2, 1, 4, 3, 5]);
// 1 1
// 3 3 

// oddArrayTraversalModified(5,[17, 19, 21, 24, 25]);
// 1 19


let arr = [2, 1, 4, 3, 5];
// let arr = [17, 19, 21, 24, 25];

for(let i=0; i<=arr.length-1; i++){
    if(i%2!==0 && arr[i]%2!==0){
        console.log(i + " " + arr[i]); // 
    }
}
// 1 1
// 3 3