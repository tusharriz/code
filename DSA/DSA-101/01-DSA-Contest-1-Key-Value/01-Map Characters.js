// Map Characters

function mapChar(N) {
    // Write code here
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let obj = {};
    
    for(let i=0; i<=alphabet.length-1; i++){
        if(obj[alphabet[i]] === undefined){
            obj[alphabet[i]] = i+1;
            if(i===N-1){
                break;
            }
        }
    }
    // console.log(obj); // { a: 1, b: 2, c: 3, d: 4, e: 5 }
    
    for(let i in obj){
        console.log(i+"-"+obj[i]);
    }
} 
mapChar(5);

// a-1
// b-2
// c-3
// d-4
// e-5

//OR

function mapChar(N) {
    // Write code here
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let obj = {};
    
    for(let i=0; i<N; i++){
        obj[alphabet[i]] = i+1;
    }
    // console.log(obj); // { a: 1, b: 2, c: 3, d: 4, e: 5 }
    
    for(let i in obj){
        console.log(i+"-"+obj[i]);
    }
} 
mapChar(5);

// a-1
// b-2
// c-3
// d-4
// e-5