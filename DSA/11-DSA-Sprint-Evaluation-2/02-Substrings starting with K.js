// Substrings starting with K

function substringsStartingWithK(N,A,K){
    //code here
    let count = 0;
    for(let i=0; i<=N-1; i++){
        let bag = "";
        for(let j=i; j<=N-1; j++){
            bag = bag + A[j];
            // console.log(bag);
            if(bag[0] === K){
                count++;
            }
        }
    }
    console.log(count);
   
}
substringsStartingWithK(4,"aman","a"); // 6


let n = 5;
let arr=[];
for(let i=1; i<=n; i++){
    arr.push(n-1);
}
console.log(arr);