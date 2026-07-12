// Map Characters

function mapChar(N) {
    // Write code here
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let obj = {};

    for(let i=0; i<N; i++){
        obj[alpha[i]] = i+1;
    }
    console.log(obj); // { a: 1, b: 2, c: 3, d: 4, e: 5 } 

    for(let key in obj){
        console.log(key + "-" + obj[key]);
    }
}


mapChar(5);

// a-1
// b-2
// c-3
// d-4
// e-5


let n = 5;
let obj = {};

let char = "abcdefghijklmnopqrstuvwxyz";
for(let i=1; i<=n; i++){
    let key = char[i-1];
    obj[key] = i;  
}
console.log(obj); // { a: 1, b: 2, c: 3, d: 4, e: 5 }

for(let key in obj){
    console.log(key +"-"+obj[key]);
}

// a-1
// b-2
// c-3
// d-4
// e-5