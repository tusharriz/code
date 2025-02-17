// Map Symbols

function mapSymbols(N) {
    // Write code here
    
    let symbol = "!@#$%^&*";
    let obj = {};
    
    for(let i=0; i<=symbol.length-1; i++){
        obj[symbol[i]] = N;
        N = N + 2;
    }
    // console.log(obj);
    
    for(let i in obj){
        console.log(i+"-"+obj[i]);
    }
}
mapSymbols(20);

// !-20
// @-22
// #-24
// $-26
// %-28
// ^-30
// &-32
// *-34