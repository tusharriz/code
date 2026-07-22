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

let n = 5;

for(let i=1; i<=n; i++){
    let bag = "";
    for(let j=1; j<=n; j++){
        if(i==n){
            bag = bag + "*" + " ";   
        }else{
            if(j==1){
                bag = bag + "*"
            }
        }
        
    }
    console.log(bag)
}
// *
// *
// *
// *
// * * * * *