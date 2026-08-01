function mapSymbols(N) {
    // Write code here
    
    let symbol = "!@#$%^&*";
    
    let obj = {};
    
    for(let i=0; i<=symbol.length-1; i++){
        
        obj[symbol[i]] = N;
        N = N + 2;
    }
    
    // console.log(obj);
    
    for(let key in obj){
        console.log(key+"-"+obj[key]);
    }
    
}
// mapSymbols(20);

// !-20
// @-22
// #-24
// $-26
// %-28
// ^-30
// &-32
// *-34

{
    let string = "!@#$%^&*";
    let obj = {};
    let n = 20;

    for(let i of string){
        if(obj[i] = n){
            n = n + 2;
        }
    }
    // console.log(obj);

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