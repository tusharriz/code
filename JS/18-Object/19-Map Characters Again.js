// Map Characters Again

function mapCharAgain(N) {
    // Write code here
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let obj = {};
    
    for(let i=0; i<=lower.length-1;i++){
        obj[lower[i]] = i+N
    }
    console.log(obj);

    for(let key in obj){
        console.log(key + "-" + obj[key]);
    }
    
}
mapCharAgain(30);

// a-30
// b-31
// c-32
// d-33
// e-34
// f-35
// g-36
// h-37
// i-38
// j-39
// k-40
// l-41
// m-42
// n-43
// o-44
// p-45
// q-46
// r-47
// s-48
// t-49
// u-50
// v-51
// w-52
// x-53
// y-54
// z-55