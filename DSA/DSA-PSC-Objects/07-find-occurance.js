// find out the number of occurance for each character.

let str = "abacaba";

let obj = {};

for(let i=0; i<=str.length-1; i++){
    if(obj[str[i]] == undefined){
        obj[str[i]] = 1;
    }else{
        obj[str[i]]++;
    }
}

// console.log(obj); // { a: 4, b: 2, c: 1 }

for(let key in obj){
    console.log(key+"-"+obj[key]);
}
// a-4
// b-2
// c-1

