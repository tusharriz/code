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
