// Map Symbols

function mapSymbols(N) {
    // Write code here
    let symbols = "!@#$%^&*";
    let obj = {};
    
    for(let i=0; i<=symbols.length-1; i++){
        obj[symbols[i]] = N;
        N = N + 2;
    }
    // console.log(obj);
    
    for(let key in obj){
        console.log(key+"-"+obj[key]);
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


{
    let n = 20;
    let symbols = "!@#$%^&*";
    let obj = {};

    for(let i=0; i<=symbols.length-1; i++){
        let key = symbols[i];
        obj[key] = n;
        n = n + 2;    
    }

    // console.log(obj); 
    //  {
    //   '!': 20,
    //   '@': 22,
    //   '#': 24,
    //   '$': 26,
    //   '%': 28,
    //   '^': 30,
    //   '&': 32,
    //   '*': 34
    //  }

    for(let key in obj){
        console.log(key+"-"+obj[key]);
    }
    // !-20
    // @-22
    // #-24
    // $-26
    // %-28
    // ^-30
    // &-32
    // *-34
}