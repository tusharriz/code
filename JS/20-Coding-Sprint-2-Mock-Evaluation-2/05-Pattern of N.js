// Pattern of N

function patternOfN(N) {
    // Write code here
    
    let bag = "";
    for(let i=1; i<=N*N; i++){
        bag = bag + i + " ";
        if(i%N==0){
            bag = bag + "\n";
        }
    }
    console.log(bag);
}
patternOfN(4);

// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16