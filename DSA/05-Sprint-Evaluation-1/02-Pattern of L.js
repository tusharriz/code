// Pattern of L

function patternOfL(N) {
    // Write code here
    
    for(let i=1; i<=N; i++){
        let bag = "";
        if(i==N){
            for(let j=1; j<=N; j++){
                bag = bag + "*" + " ";
            }
        }else{
            bag = bag + "*";
        }
        console.log(bag);
    }
}
patternOfL(4);

// *
// *
// *
// * * * *