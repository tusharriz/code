// Sum of Indexes

function sumOfIndexes(N,M,arr){
    //write code here
    for(let i=0; i<=N-1; i++){
        let bag = "";
        for(let j=0; j<=M-1; j++){
            let sum = 0;
            sum += i+j;
            bag += sum + " ";
            
        }
        console.log(bag);
    }
}
sumOfIndexes(3,2,[[1,2],[3,4],[5,6]]);

// 0 1
// 1 2
// 2 3